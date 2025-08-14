import sgMail from '@sendgrid/mail'

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
} else {
  console.warn('SENDGRID_API_KEY is not set in environment variables')
}

/**
 * SendGrid email service configuration and utilities
 */

const defaultConfig = {
  from: process.env.FROM_EMAIL || 'hello@joelemmanuel.dev',
  to: process.env.CONTACT_EMAIL || 'ejoel00@gmail.com',
}

/**
 * Send contact form email
 */
export async function sendContactEmail(formData) {
  const { name, email, company, message } = formData

  if (!name || !email || !message) {
    throw new Error('Missing required fields: name, email, message')
  }

  try {
    const msg = {
      to: defaultConfig.to,
      from: defaultConfig.from,
      subject: `New Contact Form Message from ${name}`,
      text: generateTextEmail(formData),
      html: generateHTMLEmail(formData),
    }

    await sgMail.send(msg)
    return true
  } catch (error) {
    console.error('SendGrid Error:', error)
    
    if (error.response) {
      console.error('Response body:', error.response.body)
    }
    
    throw new Error('Failed to send email')
  }
}

/**
 * Send auto-reply email to the sender
 */
export async function sendAutoReply(formData) {
  const { name, email } = formData

  try {
    const msg = {
      to: email,
      from: process.env.CONTACT_EMAIL || 'ejoel00@gmail.com',
      subject: 'Thanks for reaching out',
      text: generateAutoReplyText(name),
      html: generateAutoReplyHTML(name),
    }

    await sgMail.send(msg)
    return true
  } catch (error) {
    console.error('Auto-reply SendGrid Error:', error)
    throw new Error('Failed to send auto-reply')
  }
}

/**
 * Generate plain text email for contact form
 */
function generateTextEmail({ name, email, company, message }) {
  return `
New contact form submission:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
  `.trim()
}

/**
 * Generate HTML email for contact form
 */
function generateHTMLEmail({ name, email, company, message }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Message</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6; 
      color: #1f2937; 
      max-width: 600px; 
      margin: 0 auto; 
      padding: 20px;
    }
    .header { 
      background: #f9fafb;
      padding: 30px 20px; 
      border-radius: 8px; 
      margin-bottom: 20px;
    }
    .content { 
      background: white; 
      padding: 30px; 
      border: 1px solid #e5e7eb;
      border-radius: 8px;
    }
    .field { 
      margin-bottom: 20px; 
      padding: 15px; 
      background: #f9fafb; 
      border-radius: 6px;
    }
    .label { 
      font-weight: 600; 
      color: #374151; 
      display: block; 
      margin-bottom: 5px;
      font-size: 14px;
    }
    .message-box { 
      background: white; 
      padding: 20px; 
      border-radius: 6px; 
      border: 1px solid #e5e7eb;
      white-space: pre-wrap;
      margin-top: 10px;
    }
    .footer { 
      margin-top: 30px; 
      padding-top: 20px; 
      border-top: 1px solid #e5e7eb; 
      font-size: 14px; 
      color: #6b7280; 
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="header">
    <h2 style="margin: 0; font-size: 24px; font-weight: 400;">New Contact Form Message</h2>
  </div>
  
  <div class="content">
    <div class="field">
      <span class="label">Name</span>
      ${name}
    </div>
    
    <div class="field">
      <span class="label">Email</span>
      <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
    </div>
    
    <div class="field">
      <span class="label">Company</span>
      ${company || 'Not provided'}
    </div>
    
    <div style="margin-top: 20px;">
      <span class="label">Message</span>
      <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
    </div>
  </div>
  
  <div class="footer">
    <p>Submitted on ${new Date().toLocaleString()}</p>
  </div>
</body>
</html>
  `.trim()
}

/**
 * Generate auto-reply text email
 */
function generateAutoReplyText(name) {
  return `
Hi ${name},

Thanks for getting in touch. I've received your message and will get back to you within 24 hours.

Best regards,
Joel Emmanuel
Frontend Engineer

---
📧 ejoel00@gmail.com
📱 +234 706 976 3692
🌐 https://joelemmanuel.dev
💼 https://linkedin.com/in/joelemmanuel
  `.trim()
}

/**
 * Generate auto-reply HTML email
 */
function generateAutoReplyHTML(name) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for reaching out</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6; 
      color: #1f2937; 
      max-width: 600px; 
      margin: 0 auto; 
      padding: 20px;
    }
    .header { 
      background: #f9fafb;
      padding: 40px 30px; 
      border-radius: 8px; 
      text-align: center;
      margin-bottom: 30px;
    }
    .content { 
      background: white; 
      padding: 40px 30px; 
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .signature { 
      background: #f9fafb; 
      padding: 30px; 
      border-radius: 8px;
    }
    .links { 
      margin: 20px 0;
    }
    .links a { 
      color: #2563eb; 
      text-decoration: none; 
      margin-right: 20px;
      font-weight: 500;
    }
    .links a:hover { 
      text-decoration: underline; 
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0; font-size: 28px; font-weight: 400;">Thanks for reaching out</h1>
  </div>
  
  <div class="content">
    <p>Hi <strong>${name}</strong>,</p>
    
    <p>Thanks for getting in touch. I've received your message and will get back to you within 24 hours.</p>
    
    <p>In the meantime, feel free to check out my work at <a href="https://joelemmanuel.dev/projects">joelemmanuel.dev/projects</a> or connect with me on <a href="https://linkedin.com/in/joelemmanuel">LinkedIn</a>.</p>
    
    <p>Looking forward to our conversation.</p>
  </div>
  
  <div class="signature">
    <p style="margin-bottom: 15px;"><strong>Joel Emmanuel</strong><br>
    <span style="color: #6b7280;">Frontend Engineer</span></p>
    
    <div class="links">
      <a href="mailto:ejoel00@gmail.com">ejoel00@gmail.com</a>
      <a href="tel:+2347069763692">+234 706 976 3692</a>
    </div>
    
    <div class="links">
      <a href="https://joelemmanuel.dev">Portfolio</a>
      <a href="https://linkedin.com/in/joelemmanuel">LinkedIn</a>
    </div>
  </div>
</body>
</html>
  `.trim()
}

/**
 * Validate SendGrid configuration
 */
export function validateSendGridConfig() {
  const issues = []

  if (!process.env.SENDGRID_API_KEY) {
    issues.push('SENDGRID_API_KEY is not set')
  }

  if (!process.env.FROM_EMAIL) {
    issues.push('FROM_EMAIL is not set (using default)')
  }

  if (!process.env.CONTACT_EMAIL) {
    issues.push('CONTACT_EMAIL is not set (using default)')
  }

  return {
    isValid: issues.length === 0,
    issues,
    config: {
      hasApiKey: !!process.env.SENDGRID_API_KEY,
      fromEmail: process.env.FROM_EMAIL || defaultConfig.from,
      toEmail: process.env.CONTACT_EMAIL || defaultConfig.to,
    }
  }
}

/**
 * Rate limiting helper (simple in-memory)
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

export default sgMail