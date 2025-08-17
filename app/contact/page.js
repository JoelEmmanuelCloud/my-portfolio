'use client'
import { useState, useEffect } from 'react'
import { CheckCircle, Calendar, ExternalLink } from 'lucide-react'

// Calendly integration component
function CalendlyEmbed({ onSuccess }) {
  useEffect(() => {
    // Load Calendly CSS
    const existingCSS = document.querySelector('link[href*="calendly.com"]');
    if (!existingCSS) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    
    // Load Calendly script
    const existingScript = document.querySelector('script[src*="calendly.com"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Listen for Calendly events
    const handleCalendlyEvent = (e) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          onSuccess();
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [onSuccess]);

  return null;
}

// Success modal for calendar booking
function BookingSuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Meeting Scheduled!
          </h3>
          <p className="text-gray-600 mb-6">
            Thanks for booking a call. I'll reach out to you shortly with more details and prepare for our conversation.
          </p>
          <button
            onClick={onClose}
            className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showBookingSuccess, setShowBookingSuccess] = useState(false)

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

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        alert(data.error || 'Failed to send message. Please try again.')
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

  const handleCalendlySuccess = () => {
    setShowBookingSuccess(true)
  }

  const handleBookCallClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/joelemmanuel/meet',
        pageSettings: {
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '1f2937',
          textColor: '374151'
        },
        prefill: {},
        utm: {
          utmCampaign: 'website-contact',
          utmSource: 'joelemmanuel.dev',
          utmMedium: 'contact-page'
        }
      });
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 sm:mb-24 text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 mb-4 sm:mb-6">
                Contact
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto lg:mx-0">
                — Let's discuss your project or opportunity
              </p>
            </div>

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 sm:mb-12 text-center lg:text-left">
                  Send a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12 sm:py-16">
                    <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-4 sm:mb-6" />
                    <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">
                      Message Sent
                    </h3>
                    <p className="text-gray-600 mb-6">
                      I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="grid gap-6 sm:gap-8">
                      <div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-0 py-3 sm:py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-base sm:text-lg placeholder-gray-400 transition-colors duration-200"
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
                          className="w-full px-0 py-3 sm:py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-base sm:text-lg placeholder-gray-400 transition-colors duration-200"
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
                          className="w-full px-0 py-3 sm:py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-base sm:text-lg placeholder-gray-400 transition-colors duration-200"
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
                          className="w-full px-0 py-3 sm:py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-base sm:text-lg placeholder-gray-400 transition-colors duration-200 resize-none"
                          placeholder="Tell me about your project *"
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto mt-8 sm:mt-12 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="order-1 lg:order-2 space-y-8 sm:space-y-12">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-8">
                    Get In Touch
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you're a startup or enterprise, let's discuss how I can help.
                  </p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <div className="border-b border-gray-100 pb-4 sm:pb-6 text-center lg:text-left">
                    <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Email</h3>
                    <a
                      href="mailto:ejoel00@gmail.com"
                      className="text-base sm:text-lg text-gray-900 hover:text-gray-600 transition-colors duration-200"
                    >
                      ejoel00@gmail.com
                    </a>
                  </div>

                  <div className="border-b border-gray-100 pb-4 sm:pb-6 text-center lg:text-left">
                    <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Phone</h3>
                    <a
                      href="tel:+2347069763692"
                      className="text-base sm:text-lg text-gray-900 hover:text-gray-600 transition-colors duration-200"
                    >
                      +234 706 976 3692
                    </a>
                  </div>

                  <div className="border-b border-gray-100 pb-4 sm:pb-6 text-center lg:text-left">
                    <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Location</h3>
                    <p className="text-base sm:text-lg text-gray-900">Remote Worldwide</p>
                    <p className="text-sm text-gray-500 mt-1">Available across all time zones</p>
                  </div>

                  <div className="border-b border-gray-100 pb-4 sm:pb-6 text-center lg:text-left">
                    <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Response Time</h3>
                    <p className="text-base sm:text-lg text-gray-900">Within 24 hours</p>
                    <p className="text-sm text-gray-500 mt-1">Usually much faster</p>
                  </div>
                </div>

                {/* Call Booking */}
                <div className="mt-12 sm:mt-16 text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-4">
                    Prefer to talk?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Schedule a 30-minute call to discuss your project in detail.
                  </p>
                  <button
                    onClick={handleBookCallClick}
                    className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book a Call
                  </button>
                </div>

                {/* Quick Links */}
                <div className="mt-12 sm:mt-16 text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-6">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://linkedin.com/in/joelemmanuel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center lg:justify-start text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      LinkedIn Profile
                    </a>
                    <a
                      href="/projects"
                      className="flex items-center justify-center lg:justify-start text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 sm:mb-16 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
                Frequently Asked
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Common questions about working together
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
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
                },
                {
                  question: "How do you handle project communication?",
                  answer: "I believe in transparent communication. I provide regular updates via email, Slack, or your preferred method. We can schedule weekly check-ins and I'm always available for urgent matters."
                },
                {
                  question: "What's your preferred way to start a project?",
                  answer: "I prefer to start with a discovery call to understand your goals, followed by a detailed proposal. Once approved, we kick off with project planning and wireframing before development begins."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 sm:pb-8">
                  <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Integration */}
      <CalendlyEmbed onSuccess={handleCalendlySuccess} />

      {/* Booking Success Modal */}
      <BookingSuccessModal 
        isOpen={showBookingSuccess}
        onClose={() => setShowBookingSuccess(false)}
      />
    </div>
  )
}