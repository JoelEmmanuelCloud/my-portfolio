import { sendContactEmails, checkRateLimit, validateEmailConfig } from '@/lib/sendgrid'

export async function POST(request) {
  try {
    // Validate email configuration first
    const emailConfig = validateEmailConfig()
    if (!emailConfig.isValid) {
      console.error('Email configuration issues:', emailConfig.issues)
      return Response.json(
        { error: 'Email service not properly configured' },
        { status: 500 }
      )
    }

    const { name, email, company, message } = await request.json()

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Enhanced validation
    if (name.trim().length < 2) {
      return Response.json(
        { error: 'Name must be at least 2 characters long' },
        { status: 400 }
      )
    }

    if (message.trim().length < 10) {
      return Response.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    request.headers.get('cf-connecting-ip') ||
                    'unknown'
    
    const rateLimit = checkRateLimit(clientIP, 3, 300000) // 3 requests per 5 minutes
    
    if (!rateLimit.allowed) {
      const resetTime = new Date(rateLimit.resetTime).toLocaleTimeString()
      return Response.json(
        { 
          error: `Too many requests. Please try again after ${resetTime}`,
          resetTime: rateLimit.resetTime
        },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
            'X-RateLimit-Limit': '3',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimit.resetTime.toString()
          }
        }
      )
    }

    // Sanitize inputs
    const formData = {
      name: name.trim().substring(0, 100),
      email: email.trim().toLowerCase().substring(0, 255),
      company: company ? company.trim().substring(0, 100) : '',
      message: message.trim().substring(0, 2000)
    }

    // Get client info for tracking
    const requestInfo = {
      clientIP,
      userAgent: request.headers.get('user-agent') || 'Unknown',
      referer: request.headers.get('referer') || 'Direct',
      timestamp: new Date().toISOString()
    }

    // Send emails using dynamic templates
    const emailResults = await sendContactEmails(formData, requestInfo)

    // Log successful submission for analytics
    console.log('Contact form submission:', {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      hasMessage: !!formData.message,
      clientIP,
      userAgent: requestInfo.userAgent,
      emailResults,
      timestamp: requestInfo.timestamp
    })

    return Response.json(
      { 
        success: true,
        message: 'Message sent successfully',
        emailResults: {
          notification: emailResults.notification.success,
          autoReply: emailResults.autoReply.success
        }
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': '3',
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toString()
        }
      }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    // Don't expose internal errors to users
    const isConfigError = error.message.includes('configuration') || 
                         error.message.includes('template')
    
    if (isConfigError) {
      return Response.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }
    
    return Response.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
        ? 'https://joelemmanuel.dev' 
        : '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400', // 24 hours
    },
  })
}

// Health check endpoint
export async function GET(request) {
  try {
    const emailConfig = validateEmailConfig()
    
    return Response.json({
      status: 'healthy',
      emailConfig: {
        isValid: emailConfig.isValid,
        hasApiKey: emailConfig.config.hasApiKey,
        hasContactTemplate: emailConfig.config.hasContactTemplate,
        hasAutoReplyTemplate: emailConfig.config.hasAutoReplyTemplate,
        warnings: emailConfig.warnings
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return Response.json(
      { 
        status: 'unhealthy', 
        error: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}