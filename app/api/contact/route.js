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

    // Rate limiting (simple in-memory approach)
    // In production, use Redis or database for rate limiting
    const userAgent = request.headers.get('user-agent') || ''
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'

    const msg = {
      to: 'ejoel00@gmail.com',
      from: 'hello@joelemmanuel.dev', // Use your verified sender
      subject: `New Contact Form Message from ${name}`,
      text: `
        New contact form submission:
        
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        
        Message:
        ${message}
        
        ---
        Submitted from: ${clientIP}
        User Agent: ${userAgent}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>Submitted from: ${clientIP}</p>
            <p>User Agent: ${userAgent}</p>
          </div>
        </div>
      `,
    }

    // Auto-reply to sender
    const autoReply = {
      to: email,
      from: 'ejoel00@gmail.com',
      subject: 'Thanks for reaching out!',
      text: `
        Hi ${name},
        
        Thanks for getting in touch! I've received your message and will get back to you within 24 hours.
        
        In the meantime, feel free to check out my latest projects at https://joelemmanuel.dev/projects
        
        Best regards,
        Joel Emmanuel
        Full Stack & AI/ML Developer
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thanks for reaching out!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thanks for getting in touch! I've received your message and will get back to you within 24 hours.</p>
          
          <p>In the meantime, feel free to check out my latest projects at 
            <a href="https://joelemmanuel.dev/projects" style="color: #2563eb;">joelemmanuel.dev/projects</a>
          </p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
            <p style="margin: 0;"><strong>Joel Emmanuel</strong></p>
            <p style="margin: 5px 0; color: #6b7280;">Full Stack & AI/ML Developer</p>
            <p style="margin: 5px 0; color: #6b7280;">
              📧 ejoel00@gmail.com | 📱 +234 706 976 3692
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
    console.error('Error sending email:', error)
    
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