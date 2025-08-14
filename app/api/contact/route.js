import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json()

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required' },
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

    // Get client info
    const userAgent = request.headers.get('user-agent') || ''
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'

    // Main notification email
    const msg = {
      to: 'ejoel00@gmail.com',
      from: 'hello@joelemmanuel.dev',
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}

---
From: ${clientIP}
Agent: ${userAgent}
      `,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #374151;">
          
          <div style="padding: 40px 0; border-bottom: 1px solid #e5e7eb;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 300; color: #111827;">
              New message from ${name}
            </h1>
          </div>
          
          <div style="padding: 40px 0;">
            <div style="margin-bottom: 32px;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280; font-weight: 300;">Name</p>
              <p style="margin: 0; font-size: 16px; color: #111827;">${name}</p>
            </div>
            
            <div style="margin-bottom: 32px;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280; font-weight: 300;">Email</p>
              <p style="margin: 0; font-size: 16px; color: #111827;">
                <a href="mailto:${email}" style="color: #111827; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            ${company ? `
            <div style="margin-bottom: 32px;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280; font-weight: 300;">Company</p>
              <p style="margin: 0; font-size: 16px; color: #111827;">${company}</p>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 32px;">
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #6b7280; font-weight: 300;">Message</p>
              <div style="padding: 24px; background-color: #f9fafb; border-left: 2px solid #e5e7eb;">
                <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #111827; white-space: pre-line;">${message}</p>
              </div>
            </div>
          </div>
          
          <div style="padding: 24px 0; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af; font-weight: 300;">
              Submitted from ${clientIP}
            </p>
          </div>
        </div>
      `,
    }

    // Auto-reply email
    const autoReply = {
      to: email,
      from: 'ejoel00@gmail.com',
      subject: 'Message received',
      text: `
Hi ${name},

Thanks for your message. I'll get back to you within 24 hours.

Best regards,
Joel Emmanuel
      `,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #374151;">
          
          <div style="padding: 40px 0;">
            <h1 style="margin: 0 0 24px 0; font-size: 24px; font-weight: 300; color: #111827;">
              Message received
            </h1>
            
            <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #374151; font-weight: 300;">
              Hi ${name},
            </p>
            
            <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #374151; font-weight: 300;">
              Thanks for your message. I'll get back to you within 24 hours.
            </p>
            
            <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #374151; font-weight: 300;">
              Best regards,<br>
              Joel Emmanuel
            </p>
          </div>
          
          <div style="padding: 24px 0; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 14px; color: #6b7280; font-weight: 300;">
              Joel Emmanuel • Frontend Engineer
            </p>
            <p style="margin: 4px 0 0 0; font-size: 14px; color: #9ca3af; font-weight: 300;">
              ejoel00@gmail.com • +234 706 976 3692
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      sgMail.send(msg),
      sgMail.send(autoReply)
    ])

    return Response.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
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
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}