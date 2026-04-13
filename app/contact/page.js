'use client'
import { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import { CheckCircle, Calendar, ExternalLink } from 'lucide-react'

function CalendlyEmbed({ onSuccess }) {
  useEffect(() => {
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

  return (
    <>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}

function BookingSuccessModal({ isOpen, onClose }) {
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="presentation"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="bg-white dark:bg-gray-800 rounded-lg p-4 xs:p-6 sm:p-8 max-w-md w-full mx-4 shadow-xl"
      >
        <div className="text-center">
          <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-4" aria-hidden="true" />
          <h3 id="booking-modal-title" className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-4">
            Meeting Scheduled!
          </h3>
          <p className="text-black dark:text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
            Thanks for booking a call. I&apos;ll reach out to you shortly with more details and prepare for our conversation.
          </p>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  const [showBookingSuccess, setShowBookingSuccess] = useState(false)

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
          primaryColor: '2563eb',
          textColor: '000000'
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
    <div className="min-h-screen bg-white dark:bg-gray-900">

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-4 sm:mb-6 leading-tight">
                Contact
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-black dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Let's discuss your project or opportunity
              </p>
            </div>

            <div className="max-w-2xl">

              <div className="space-y-6 sm:space-y-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-6 sm:mb-8">
                    Get In Touch
                  </h2>
                  <p className="text-black dark:text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl">
                    I'm always interested in new opportunities and exciting projects.
                    Whether you're a startup or enterprise, let's discuss how I can help.
                  </p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <div className="border-b-2 border-black dark:border-gray-700 pb-4 sm:pb-6 text-center lg:text-left">
                    <h3 className="text-sm sm:text-base uppercase tracking-wide text-black dark:text-gray-400 font-bold mb-2">Email</h3>
                    <a
                      href="mailto:ejoel0035@gmail.com"
                      className="text-base sm:text-lg lg:text-xl text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                    >
                      ejoel0035@gmail.com
                    </a>
                  </div>

                  <div className="border-b-2 border-black dark:border-gray-700 pb-4 sm:pb-6 text-center lg:text-left">
                    <h3 className="text-sm sm:text-base uppercase tracking-wide text-black dark:text-gray-400 font-bold mb-2">Response Time</h3>
                    <p className="text-base sm:text-lg lg:text-xl text-black dark:text-gray-300 font-medium">Within 24 hours</p>
                    <p className="text-sm sm:text-base text-black dark:text-gray-400 mt-1">Usually much faster</p>
                  </div>
                </div>

                <div className="mt-6 sm:mt-10 text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white mb-4">
                    Prefer to talk?
                  </h3>
                  <p className="text-black dark:text-gray-300 mb-6 text-sm sm:text-base lg:text-lg">
                    Schedule a 30-minute call to discuss your project in detail.
                  </p>
                  <button
                    onClick={handleBookCallClick}
                    className="inline-flex items-center justify-center w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 text-base font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Book a Call
                  </button>
                </div>

                <div className="mt-6 sm:mt-10 text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white mb-6">
                    Quick Links
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <a
                      href="https://www.linkedin.com/in/joel-emmanuel-149708202/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center lg:justify-start text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base font-medium"
                    >
                      <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      LinkedIn Profile
                    </a>
                    <a
                      href="/projects"
                      className="flex items-center justify-center lg:justify-start text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base font-medium"
                    >
                      <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 border-t-2 border-black dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 sm:mb-12 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
                Frequently Asked
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-black dark:text-gray-300">
                Common questions about working together
              </p>
            </div>

            <div className="space-y-6 sm:space-y-10">
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
                <div key={index} className="border-b-2 border-black dark:border-gray-700 pb-4 sm:pb-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black dark:text-white mb-2 sm:mb-3 lg:mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-black dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CalendlyEmbed onSuccess={handleCalendlySuccess} />

      <BookingSuccessModal
        isOpen={showBookingSuccess}
        onClose={() => setShowBookingSuccess(false)}
      />
    </div>
  )
}
