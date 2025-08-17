import sgMail from '@sendgrid/mail'

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
} else {
  console.warn('SENDGRID_API_KEY is not set in environment variables')
}

/**
 * SendGrid email service configuration and utilities
 * Using Dynamic Templates instead of hardcoded HTML
 */

const defaultConfig = {
  from: process.env.FROM_EMAIL || 'hello@joelemmanuel.dev',
  to: process.env.CONTACT_EMAIL || 'ejoel00@gmail.com',
  // Add your SendGrid template IDs here
  templates: {
    contactNotification:'d-aec1c9c023694d26863615d61a7681f1',
    autoReply:'d-96c64f0f0c824fcc989359094a00cbd1'
  }
}

/**
 * Send contact form notification email using dynamic template
 */
export async function sendContactEmail(formData, requestInfo = {}) {
  const { name, email, company, message } = formData
  const { clientIP, userAgent } = requestInfo

  if (!name || !email || !message) {
    throw new Error('Missing required fields: name, email, message')
  }

  if (!defaultConfig.templates.contactNotification || defaultConfig.templates.contactNotification.includes('xxxxxxxxx')) {
    throw new Error('Contact notification template ID not configured. Please set SENDGRID_CONTACT_TEMPLATE_ID in environment variables.')
  }

  try {
    const msg = {
      to: defaultConfig.to,
      from: defaultConfig.from,
      templateId: defaultConfig.templates.contactNotification,
      dynamicTemplateData: {
        name: name,
        email: email,
        company: company || null,
        message: message,
        submitted_at: new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        }),
        client_ip: clientIP || 'Unknown',
        user_agent: userAgent || 'Unknown'
      }
    }

    await sgMail.send(msg)
    return { success: true, messageId: msg.messageId }
  } catch (error) {
    console.error('SendGrid Contact Email Error:', error)
    
    if (error.response) {
      console.error('Response body:', error.response.body)
    }
    
    throw new Error('Failed to send contact notification email')
  }
}

/**
 * Send auto-reply email to the sender using dynamic template
 */
export async function sendAutoReply(formData) {
  const { name, email } = formData

  if (!name || !email) {
    throw new Error('Missing required fields for auto-reply: name, email')
  }

  if (!defaultConfig.templates.autoReply || defaultConfig.templates.autoReply.includes('xxxxxxxxx')) {
    console.warn('Auto-reply template ID not configured. Skipping auto-reply.')
    return { success: false, reason: 'Template not configured' }
  }

  try {
    const msg = {
      to: email,
      from: process.env.CONTACT_EMAIL || 'ejoel00@gmail.com',
      templateId: defaultConfig.templates.autoReply,
      dynamicTemplateData: {
        name: name,
        submitted_date: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }
    }

    await sgMail.send(msg)
    return { success: true, messageId: msg.messageId }
  } catch (error) {
    console.error('Auto-reply SendGrid Error:', error)
    
    if (error.response) {
      console.error('Response body:', error.response.body)
    }
    
    // Don't throw error for auto-reply failures - it's not critical
    console.warn('Auto-reply failed but continuing...')
    return { success: false, error: error.message }
  }
}

/**
 * Send both notification and auto-reply emails
 */
export async function sendContactEmails(formData, requestInfo = {}) {
  const results = {
    notification: { success: false },
    autoReply: { success: false }
  }

  try {
    // Send notification email (critical)
    results.notification = await sendContactEmail(formData, requestInfo)
  } catch (error) {
    console.error('Failed to send notification email:', error)
    throw error // This is critical, so we throw
  }

  try {
    // Send auto-reply (non-critical)
    results.autoReply = await sendAutoReply(formData)
  } catch (error) {
    console.error('Failed to send auto-reply:', error)
    // Don't throw - auto-reply failure shouldn't break the flow
  }

  return results
}

/**
 * Validate email configuration
 */
export function validateEmailConfig() {
  const issues = []
  const warnings = []

  if (!process.env.SENDGRID_API_KEY) {
    issues.push('SENDGRID_API_KEY is not set')
  }

  if (!process.env.FROM_EMAIL) {
    warnings.push('FROM_EMAIL is not set (using default)')
  }

  if (!process.env.CONTACT_EMAIL) {
    warnings.push('CONTACT_EMAIL is not set (using default)')
  }

  if (!process.env.SENDGRID_CONTACT_TEMPLATE_ID || process.env.SENDGRID_CONTACT_TEMPLATE_ID.includes('xxxxxxxxx')) {
    issues.push('SENDGRID_CONTACT_TEMPLATE_ID is not properly configured')
  }

  if (!process.env.SENDGRID_AUTOREPLY_TEMPLATE_ID || process.env.SENDGRID_AUTOREPLY_TEMPLATE_ID.includes('xxxxxxxxx')) {
    warnings.push('SENDGRID_AUTOREPLY_TEMPLATE_ID is not properly configured (auto-replies will be disabled)')
  }

  return {
    isValid: issues.length === 0,
    issues,
    warnings,
    config: {
      hasApiKey: !!process.env.SENDGRID_API_KEY,
      fromEmail: process.env.FROM_EMAIL || defaultConfig.from,
      toEmail: process.env.CONTACT_EMAIL || defaultConfig.to,
      hasContactTemplate: !!(process.env.SENDGRID_CONTACT_TEMPLATE_ID && !process.env.SENDGRID_CONTACT_TEMPLATE_ID.includes('xxxxxxxxx')),
      hasAutoReplyTemplate: !!(process.env.SENDGRID_AUTOREPLY_TEMPLATE_ID && !process.env.SENDGRID_AUTOREPLY_TEMPLATE_ID.includes('xxxxxxxxx'))
    }
  }
}

/**
 * Test email configuration by sending a test email
 */
export async function testEmailConfig() {
  const validation = validateEmailConfig()
  
  if (!validation.isValid) {
    return {
      success: false,
      errors: validation.issues,
      warnings: validation.warnings
    }
  }

  try {
    const testData = {
      name: 'Test User',
      email: process.env.CONTACT_EMAIL || 'ejoel00@gmail.com',
      company: 'Test Company',
      message: 'This is a test message to verify email configuration.'
    }

    const testInfo = {
      clientIP: '127.0.0.1',
      userAgent: 'Email Configuration Test'
    }

    const results = await sendContactEmails(testData, testInfo)

    return {
      success: true,
      results,
      message: 'Test emails sent successfully'
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: 'Test email failed'
    }
  }
}

/**
 * Rate limiting helper (simple in-memory)
 * In production, consider using Redis or a proper database
 */
const rateLimitStore = new Map()

export function checkRateLimit(identifier, maxRequests = 5, windowMs = 60000) {
  const now = Date.now()
  const key = `rate_limit_${identifier}`
  
  if (!rateLimitStore.has(key)) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs
    })
    return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs }
  }

  const record = rateLimitStore.get(key)
  
  if (now > record.resetTime) {
    record.count = 1
    record.resetTime = now + windowMs
    return { allowed: true, remaining: maxRequests - 1, resetTime: record.resetTime }
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime }
  }

  record.count++
  return { 
    allowed: true, 
    remaining: maxRequests - record.count, 
    resetTime: record.resetTime 
  }
}

/**
 * Clean up old rate limit entries (call this periodically)
 */
export function cleanupRateLimit() {
  const now = Date.now()
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key)
    }
  }
}

export default sgMail