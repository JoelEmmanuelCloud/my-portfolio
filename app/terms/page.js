'use client'
import Link from 'next/link'
import { ArrowLeft, FileText, AlertCircle, Scale, Users, Shield } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SlideButton from '@/components/ui/SlideButton'

export default function TermsOfService() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: Scale,
      content: [
        {
          subtitle: 'Agreement to Terms',
          items: [
            'By accessing and using this website, you accept and agree to be bound by these Terms of Service',
            'If you do not agree to these terms, please do not use this website',
            'Your continued use of the site constitutes acceptance of any updates to these terms',
            'These terms apply to all visitors, users, and others who access the service'
          ]
        },
        {
          subtitle: 'Capacity to Accept',
          items: [
            'You must be at least 18 years old to use this service',
            'You represent that you have the legal authority to accept these terms',
            'If accepting on behalf of a company, you must have authority to bind that entity',
            'You are responsible for compliance with local laws and regulations'
          ]
        }
      ]
    },
    {
      id: 'website-use',
      title: 'Website Use and Restrictions',
      icon: Users,
      content: [
        {
          subtitle: 'Permitted Use',
          items: [
            'View portfolio content and project information',
            'Contact us through provided forms and methods',
            'Schedule consultations through integrated booking systems',
            'Download publicly available resources (resume, case studies)'
          ]
        },
        {
          subtitle: 'Prohibited Activities',
          items: [
            'Attempting to gain unauthorized access to any part of the website',
            'Using automated tools to scrape or download content',
            'Submitting false or misleading information through contact forms',
            'Using the website for any illegal or unauthorized purpose',
            'Interfering with the security or functionality of the website'
          ]
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: Shield,
      content: [
        {
          subtitle: 'Our Content',
          items: [
            'All content on this website is owned by Joel Emmanuel or used with permission',
            'This includes text, graphics, logos, images, code samples, and software',
            'Content is protected by copyright, trademark, and other intellectual property laws',
            'You may not reproduce, distribute, or create derivative works without permission'
          ]
        },
        {
          subtitle: 'Client Work and Projects',
          items: [
            'Portfolio examples are displayed with appropriate permissions',
            'Client confidential information is not disclosed without consent',
            'Project details are presented for demonstration purposes only',
            'Specific implementation details may be generalized for confidentiality'
          ]
        }
      ]
    },
    {
      id: 'services-consultation',
      title: 'Services and Consultation',
      icon: FileText,
      content: [
        {
          subtitle: 'Service Descriptions',
          items: [
            'Services listed are for informational purposes and subject to availability',
            'Actual project scope and pricing are determined through individual consultation',
            'No commitment to provide services is made through website content alone',
            'All service agreements require separate written contracts'
          ]
        },
        {
          subtitle: 'Consultation Process',
          items: [
            'Initial consultations may be provided free of charge at my discretion',
            'Detailed proposals and agreements are subject to separate terms',
            'Booking a consultation does not guarantee project acceptance',
            'Confidentiality of consultation discussions is maintained'
          ]
        }
      ]
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers and Limitations',
      icon: AlertCircle,
      content: [
        {
          subtitle: 'Website Availability',
          items: [
            'The website is provided "as is" without warranties of any kind',
            'I do not guarantee uninterrupted access or error-free operation',
            'Content may be updated, modified, or removed without notice',
            'Third-party integrations (booking, email) may have separate terms'
          ]
        },
        {
          subtitle: 'Limitation of Liability',
          items: [
            'I am not liable for any indirect, incidental, or consequential damages',
            'My total liability is limited to the amount paid for services, if any',
            'I am not responsible for decisions made based on website content',
            'Users are responsible for their own data backup and security'
          ]
        }
      ]
    },
    {
      id: 'privacy-communications',
      title: 'Privacy and Communications',
      icon: Shield,
      content: [
        {
          subtitle: 'Information Collection',
          items: [
            'Information is collected as described in the Privacy Policy',
            'Contact form submissions are used solely for responding to inquiries',
            'I do not sell or share personal information with third parties',
            'Analytics data is collected anonymously for website improvement'
          ]
        },
        {
          subtitle: 'Communications',
          items: [
            'By contacting me, you consent to receive response communications',
            'I may follow up on project inquiries and consultation requests',
            'You can opt out of non-essential communications at any time',
            'Emergency or service-related communications may still be sent'
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
              Terms of Service
            </h1>
            <p className="mb-4 text-lg text-ink/65 dark:text-cream/65 sm:mb-6 sm:text-xl lg:text-2xl">
              Governing your use of this website and its services.
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
                    href="#governing-law"
                    className="block border-l-2 border-transparent py-1.5 pl-3 text-sm font-medium text-ink/60 transition-colors hover:border-gold hover:text-ink dark:text-cream/60 dark:hover:text-cream sm:text-base"
                  >
                    Governing Law
                  </a>
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

                <Reveal id="governing-law" className="mb-12 sm:mb-16">
                  <h2 className="mb-6 text-2xl font-semibold leading-tight text-ink dark:text-cream sm:mb-8 sm:text-3xl lg:text-4xl">
                    Governing Law and Dispute Resolution
                  </h2>

                  <div className="space-y-4 sm:space-y-5">
                    <div className="rounded-2xl border border-ink/10 bg-white p-5 dark:border-cream/10 dark:bg-ink/60 sm:p-6">
                      <h3 className="mb-3 text-base font-semibold text-ink dark:text-cream sm:text-lg">Governing Law</h3>
                      <p className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
                        These Terms of Service are governed by and construed in accordance with applicable law.
                        Any disputes arising from these terms or your use of the website will be subject to the
                        jurisdiction of the competent courts.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-ink/10 bg-white p-5 dark:border-cream/10 dark:bg-ink/60 sm:p-6">
                      <h3 className="mb-3 text-base font-semibold text-ink dark:text-cream sm:text-lg">Dispute Resolution</h3>
                      <p className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
                        I prefer to resolve disputes amicably through direct communication. If a dispute cannot be
                        resolved through discussion, it may be subject to arbitration or mediation before resorting
                        to formal legal proceedings.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-ink/10 bg-white p-5 dark:border-cream/10 dark:bg-ink/60 sm:p-6">
                      <h3 className="mb-3 text-base font-semibold text-ink dark:text-cream sm:text-lg">Severability</h3>
                      <p className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
                        If any provision of these terms is found to be unenforceable, the remaining provisions
                        will remain in full force and effect.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal id="contact-info" className="mb-12 sm:mb-16">
                  <h2 className="mb-6 text-2xl font-semibold leading-tight text-ink dark:text-cream sm:mb-8 sm:text-3xl lg:text-4xl">
                    Questions About These Terms
                  </h2>

                  <div className="rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60 sm:p-8">
                    <p className="mb-6 text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
                      If you have any questions about these Terms of Service, please get in touch:
                    </p>

                    <div className="space-y-3">
                      <p className="text-lg font-semibold text-ink dark:text-cream">Joel Emmanuel</p>
                      <div className="space-y-2">
                        <p className="text-sm text-ink/70 dark:text-cream/70 sm:text-base">
                          <span className="font-semibold text-ink dark:text-cream">Email:</span>{' '}
                          <a href="mailto:ejoel0035@gmail.com" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-2 transition-colors hover:text-gold dark:text-cream">
                            ejoel0035@gmail.com
                          </a>
                        </p>
                        <p className="text-sm text-ink/70 dark:text-cream/70 sm:text-base">
                          <span className="font-semibold text-ink dark:text-cream">Website:</span>{' '}
                          <a href="https://joelemmanuel.dev" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-2 transition-colors hover:text-gold dark:text-cream">
                            joelemmanuel.dev
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal className="mb-5 rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60 sm:p-8">
                  <h3 className="mb-3 text-lg font-semibold text-ink dark:text-cream sm:mb-4 sm:text-xl">
                    Changes to Terms
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
                    I reserve the right to modify these Terms of Service at any time. Changes will be effective
                    immediately upon posting on this page. Your continued use of the website after changes are
                    posted constitutes acceptance of the modified terms.
                  </p>
                </Reveal>

                <Reveal className="rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60 sm:p-8">
                  <h3 className="mb-3 text-lg font-semibold text-ink dark:text-cream sm:mb-4 sm:text-xl">
                    Important Notice
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
                    This website is a professional portfolio and service offering platform. For specific project
                    work, separate service agreements with detailed terms, scope, and pricing will be required.
                    These Terms of Service govern only the use of this website and initial consultations.
                  </p>
                </Reveal>

                <div className="mt-10 flex flex-col justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
                  <SlideButton href="/contact" variant="dark">
                    Contact me
                  </SlideButton>
                  <SlideButton href="/privacy" variant="outline">
                    Privacy Policy
                  </SlideButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
