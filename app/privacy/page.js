'use client'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Database } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Information You Provide',
          items: [
            'Contact form submissions (name, email, company, message)',
            'Booking information through Calendly integration',
            'Email communications when you contact us directly',
            'Any other information you voluntarily provide'
          ]
        },
        {
          subtitle: 'Automatically Collected Information',
          items: [
            'Browser type and version',
            'Operating system',
            'IP address (anonymized for analytics)',
            'Pages visited and time spent on site',
            'Referring website information',
            'Device information (mobile, desktop, tablet)'
          ]
        }
      ]
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Primary Uses',
          items: [
            'Respond to your inquiries and contact form submissions',
            'Schedule and manage consultation calls',
            'Provide information about services and project collaboration',
            'Send follow-up communications related to your inquiries'
          ]
        },
        {
          subtitle: 'Secondary Uses',
          items: [
            'Improve website functionality and user experience',
            'Analyze website traffic and performance (anonymized)',
            'Prevent spam and abuse of contact forms',
            'Comply with legal obligations'
          ]
        }
      ]
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing and Third Parties',
      icon: Shield,
      content: [
        {
          subtitle: 'Third-Party Services',
          items: [
            'SendGrid: Email delivery and contact form processing',
            'Calendly: Appointment scheduling and calendar integration',
            'Vercel: Website hosting and performance',
          ]
        },
        {
          subtitle: 'Data Sharing Policy',
          items: [
            'We never sell your personal information',
            'We do not share data with marketers or advertisers',
            'Information is only shared with service providers necessary for website operation',
            'All third-party services are required to protect your data'
          ]
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security and Storage',
      icon: Database,
      content: [
        {
          subtitle: 'Security Measures',
          items: [
            'HTTPS encryption for all data transmission',
            'Secure API endpoints with rate limiting',
            'Regular security updates and monitoring',
            'Limited access to personal information'
          ]
        },
        {
          subtitle: 'Data Retention',
          items: [
            'Contact form submissions: Stored for 2 years unless deletion requested',
            'Email communications: Retained for business correspondence purposes',
            'Analytics data: Anonymized and aggregated only',
            'You may request data deletion at any time'
          ]
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: Shield,
      content: [
        {
          subtitle: 'Your Rights',
          items: [
            'Access: Request a copy of your personal data',
            'Correction: Request correction of inaccurate information',
            'Deletion: Request removal of your personal data',
            'Portability: Request transfer of your data to another service'
          ]
        },
        {
          subtitle: 'How to Exercise Rights',
          items: [
            'Email us at ejoel0035@gmail.com with your request',
            'Include sufficient information to verify your identity',
            'We will respond within 30 days of receiving your request',
            'No fees for reasonable requests'
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-sm font-semibold text-ink/70 transition-colors hover:text-gold dark:text-cream/70 sm:mb-12 sm:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Back to Home
          </Link>

          <Reveal className="max-w-4xl">
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-6 sm:text-6xl lg:text-7xl">
              Privacy Policy
            </h1>
            <p className="mb-4 text-lg text-ink/65 dark:text-cream/65 sm:mb-6 sm:text-xl lg:text-2xl">
              How I collect, use, and protect your information.
            </p>
            <p className="font-mono text-xs text-ink/45 dark:text-cream/45 sm:text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-4 lg:gap-16">

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <p className="eyebrow mb-4 sm:mb-6">Contents</p>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block border-l-2 border-transparent py-1.5 pl-3 text-sm font-medium text-ink/60 transition-colors hover:border-gold hover:text-ink dark:text-cream/60 dark:hover:text-cream sm:text-base"
                    >
                      {section.title}
                    </a>
                  ))}
                  <a
                    href="#contact-info"
                    className="block border-l-2 border-transparent py-1.5 pl-3 text-sm font-medium text-ink/60 transition-colors hover:border-gold hover:text-ink dark:text-cream/60 dark:hover:text-cream sm:text-base"
                  >
                    Contact Information
                  </a>
                </nav>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="max-w-none">
                {sections.map((section) => (
                  <Reveal
                    key={section.id}
                    id={section.id}
                    className="mb-12 sm:mb-16 lg:mb-20"
                  >
                    <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-ink text-cream dark:bg-cream dark:text-ink sm:size-12">
                        <section.icon className="size-5 sm:size-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <h2 className="text-2xl font-semibold leading-tight text-ink dark:text-cream sm:text-3xl lg:text-4xl">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                      {section.content.map((subsection, subIndex) => (
                        <div key={subIndex} className="rounded-2xl border border-ink/10 bg-white p-5 dark:border-cream/10 dark:bg-ink/60 sm:p-6">
                          <h3 className="mb-3 text-base font-semibold text-ink dark:text-cream sm:mb-4 sm:text-lg">
                            {subsection.subtitle}
                          </h3>
                          <div className="space-y-2.5 sm:space-y-3">
                            {subsection.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                                <p className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ))}

                <Reveal id="contact-info" className="mb-12 sm:mb-16">
                  <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-ink text-cream dark:bg-cream dark:text-ink sm:size-12">
                      <Shield className="size-5 sm:size-6" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-semibold leading-tight text-ink dark:text-cream sm:text-3xl lg:text-4xl">
                      Contact Information
                    </h2>
                  </div>

                  <div className="rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60 sm:p-8 lg:p-10">
                    <p className="mb-6 text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base lg:text-lg">
                      If you have any questions about this Privacy Policy or how I handle your data,
                      please get in touch:
                    </p>

                    <div className="space-y-4 sm:space-y-6">
                      <p className="text-lg font-semibold text-ink dark:text-cream sm:text-xl lg:text-2xl">Joel Emmanuel</p>
                      <div className="space-y-2.5 sm:space-y-3">
                        <p className="text-sm text-ink/70 dark:text-cream/70 sm:text-base lg:text-lg">
                          <span className="font-semibold text-ink dark:text-cream">Email:</span>{' '}
                          <a
                            href="mailto:ejoel0035@gmail.com"
                            className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-2 transition-colors hover:text-gold dark:text-cream"
                          >
                            ejoel0035@gmail.com
                          </a>
                        </p>
                        <p className="text-sm text-ink/70 dark:text-cream/70 sm:text-base lg:text-lg">
                          <span className="font-semibold text-ink dark:text-cream">Website:</span>{' '}
                          <a
                            href="https://joelemmanuel.dev"
                            className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-2 transition-colors hover:text-gold dark:text-cream"
                          >
                            joelemmanuel.dev
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal className="rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60 sm:p-8 lg:p-10">
                  <div className="mb-4 flex items-center gap-2.5 sm:mb-6 sm:gap-3">
                    <Eye className="size-5 shrink-0 text-ink/50 dark:text-cream/50 sm:size-6" strokeWidth={1.75} aria-hidden="true" />
                    <h3 className="text-lg font-semibold leading-tight text-ink dark:text-cream sm:text-xl lg:text-2xl">
                      Policy Updates
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base lg:text-lg">
                    I may update this Privacy Policy from time to time. Any changes will be posted on this page
                    with an updated revision date. I encourage you to review this policy periodically.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
