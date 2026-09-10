'use client'
import { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import { CheckCircle, Calendar, ArrowUpRight } from 'lucide-react'
import SlideButton from '@/components/ui/SlideButton'
import Accordion from '@/components/ui/Accordion'
import Reveal from '@/components/ui/Reveal'

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
      className="fixed inset-0 bg-ink/60 flex items-center justify-center z-50 p-4"
      role="presentation"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="w-full max-w-md rounded-3xl bg-cream p-6 shadow-xl dark:bg-ink xs:p-8"
      >
        <div className="text-center">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-moss sm:h-16 sm:w-16" aria-hidden="true" />
          <h3 id="booking-modal-title" className="mb-4 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
            Meeting Scheduled!
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
            Thanks for booking a call. I&apos;ll reach out to you shortly with more details and prepare for our conversation.
          </p>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="rounded-lg bg-ink px-6 py-3 font-medium text-cream transition-all duration-200 hover:bg-ink/80 dark:bg-cream dark:text-ink dark:hover:bg-cream/80"
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
          backgroundColor: 'f2f0ea',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: 'f2c200',
          textColor: '0a0a09'
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
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="pt-10 pb-8 sm:pt-16 sm:pb-12 lg:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-10 sm:mb-14">
              <p className="eyebrow mb-4">Say hello</p>
              <h1 className="mb-4 text-4xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-6 sm:text-6xl lg:text-7xl">
                Contact
              </h1>
              <p className="max-w-2xl text-lg text-ink/65 dark:text-cream/65 sm:text-xl">
                Let&apos;s discuss your project or opportunity.
              </p>
            </Reveal>

            <div className="grid gap-5 lg:grid-cols-3">

              <Reveal className="rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60 sm:p-8 lg:col-span-2">
                <h2 className="mb-4 text-2xl font-semibold text-ink dark:text-cream sm:text-3xl">
                  Get In Touch
                </h2>
                <p className="mb-8 text-base leading-relaxed text-ink/70 dark:text-cream/70 sm:text-lg">
                  I&apos;m always interested in new opportunities and exciting projects.
                  Whether you&apos;re a startup or enterprise, let&apos;s discuss how I can help.
                </p>

                <div className="space-y-6">
                  <div className="border-b border-ink/10 pb-5 dark:border-cream/10">
                    <h3 className="eyebrow mb-2">Email</h3>
                    <a
                      href="mailto:ejoel0035@gmail.com"
                      className="text-base font-medium text-ink transition-colors hover:text-gold dark:text-cream sm:text-lg"
                    >
                      ejoel0035@gmail.com
                    </a>
                  </div>

                  <div className="border-b border-ink/10 pb-5 dark:border-cream/10">
                    <h3 className="eyebrow mb-2">Response Time</h3>
                    <p className="text-base font-medium text-ink dark:text-cream sm:text-lg">Within 24 hours</p>
                    <p className="mt-1 text-sm text-ink/50 dark:text-cream/50">Usually much faster</p>
                  </div>

                  <div>
                    <h3 className="eyebrow mb-3">Quick links</h3>
                    <div className="flex flex-col gap-2.5">
                      <a
                        href="https://www.linkedin.com/in/joel-emmanuel-149708202/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-gold dark:text-cream/70 sm:text-base"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                        LinkedIn profile
                      </a>
                      <a
                        href="https://github.com/JoelEmmanuelCloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-gold dark:text-cream/70 sm:text-base"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                        GitHub profile
                      </a>
                      <a
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-gold dark:text-cream/70 sm:text-base"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                        View portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.1} className="panel-dark flex flex-col justify-center p-6 sm:p-8">
                <div className="glow-orb -top-16 right-0 h-48 w-48 bg-gold/30" />
                <div className="relative">
                  <h3 className="mb-3 text-xl font-semibold text-cream sm:text-2xl">
                    Prefer to talk?
                  </h3>
                  <p className="mb-6 text-sm text-cream/65 sm:text-base">
                    Schedule a 30-minute call to discuss your project in detail.
                  </p>
                  <SlideButton
                    onClick={handleBookCallClick}
                    variant="gold"
                    icon={Calendar}
                    className="w-full justify-center"
                  >
                    Book a call
                  </SlideButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-8 sm:mb-12">
              <p className="eyebrow mb-3">FAQ</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-ink dark:text-cream sm:text-4xl lg:text-5xl">
                Frequently Asked
              </h2>
              <p className="text-base text-ink/65 dark:text-cream/65 sm:text-lg lg:text-xl">
                Common questions about working together.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Accordion
                items={[
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
                ]}
              />
            </Reveal>
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
