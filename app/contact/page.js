'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-24">
              <h1 className="text-7xl lg:text-8xl font-light text-gray-900 mb-6">
                Contact
              </h1>
              <p className="text-xl text-gray-600 font-light max-w-2xl">
                — Let's discuss your project or opportunity
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-24">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-12">
                  Send a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-light text-gray-900 mb-4">
                      Message Sent
                    </h3>
                    <p className="text-gray-600">
                      I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid gap-8">
                      <div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-lg placeholder-gray-400 transition-colors duration-200"
                          placeholder="Your name *"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-lg placeholder-gray-400 transition-colors duration-200"
                          placeholder="Your email *"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-lg placeholder-gray-400 transition-colors duration-200"
                          placeholder="Company (optional)"
                        />
                      </div>
                      
                      <div>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-lg placeholder-gray-400 transition-colors duration-200 resize-none"
                          placeholder="Tell me about your project *"
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-12 bg-gray-900 text-white px-8 py-4 hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-8">
                    Get In Touch
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you're a startup or enterprise, let's discuss how I can help.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Email</h3>
                    <a
                      href="mailto:ejoel00@gmail.com"
                      className="text-lg text-gray-900 hover:text-gray-600 transition-colors duration-200"
                    >
                      ejoel00@gmail.com
                    </a>
                  </div>

                  <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Phone</h3>
                    <a
                      href="tel:+2347069763692"
                      className="text-lg text-gray-900 hover:text-gray-600 transition-colors duration-200"
                    >
                      +234 706 976 3692
                    </a>
                  </div>

                  <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Location</h3>
                    <p className="text-lg text-gray-900">Lagos, Nigeria</p>
                    <p className="text-sm text-gray-500 mt-1">Available for remote work worldwide</p>
                  </div>

                  <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Response Time</h3>
                    <p className="text-lg text-gray-900">Within 24 hours</p>
                    <p className="text-sm text-gray-500 mt-1">Usually much faster</p>
                  </div>
                </div>

                {/* Call Booking */}
                <div className="mt-16">
                  <h3 className="text-xl font-light text-gray-900 mb-4">
                    Prefer to talk?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Schedule a call to discuss your project in detail.
                  </p>
                  <a
                    href="https://tidycal.com/embed/placeholder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-100 text-gray-900 px-6 py-3 hover:bg-gray-200 transition-colors duration-200"
                  >
                    Book a Call →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Frequently Asked
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about working together
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. I provide detailed timelines during our initial consultation."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Absolutely! I work with clients worldwide and am experienced with remote collaboration. I'm flexible with time zones and communication preferences."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "I specialize in React, Next.js, Node.js, AWS, and modern JavaScript/TypeScript. I also have experience with Python, Java Spring Boot, and AI/ML technologies."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes, I offer maintenance and support packages for projects I've built. This includes bug fixes, updates, feature additions, and technical support."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-8">
                  <h3 className="text-xl font-light text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}