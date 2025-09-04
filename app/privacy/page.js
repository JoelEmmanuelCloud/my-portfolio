'use client'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Database } from 'lucide-react'

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
            'Email us at ejoel00@gmail.com with your request',
            'Include sufficient information to verify your identity',
            'We will respond within 30 days of receiving your request',
            'No fees for reasonable requests'
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 sm:mb-12 text-sm sm:text-base font-semibold"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-4 sm:mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-black font-medium mb-4 sm:mb-6 leading-relaxed">
              — How we collect, use, and protect your information
            </p>
            <p className="text-black font-medium text-sm sm:text-base">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 sm:top-24">
                <h3 className="text-sm sm:text-base font-bold text-black uppercase tracking-wide mb-4 sm:mb-6">
                  Contents
                </h3>
                <nav className="space-y-2 sm:space-y-3">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-black hover:text-blue-600 transition-colors text-sm sm:text-base font-medium py-1 border-l-2 border-transparent hover:border-blue-600 pl-3"
                    >
                      {section.title}
                    </a>
                  ))}
                  <a
                    href="#contact-info"
                    className="block text-black hover:text-blue-600 transition-colors text-sm sm:text-base font-medium py-1 border-l-2 border-transparent hover:border-blue-600 pl-3"
                  >
                    Contact Information
                  </a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="max-w-none">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="mb-12 sm:mb-16 lg:mb-20"
                  >
                    <div className="flex items-center mb-6 sm:mb-8">
                      <section.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black leading-tight">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                      {section.content.map((subsection, subIndex) => (
                        <div key={subIndex} className="border-l-4 border-blue-600 pl-4 sm:pl-6">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                            {subsection.subtitle}
                          </h3>
                          <div className="space-y-3 sm:space-y-4">
                            {subsection.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 sm:mt-2.5 mr-3 sm:mr-4 flex-shrink-0"></span>
                                <p className="text-black leading-relaxed font-medium text-sm sm:text-base lg:text-lg">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Contact Information */}
                <div id="contact-info" className="mb-12 sm:mb-16">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black leading-tight">
                      Contact Information
                    </h2>
                  </div>

                  <div className="border-2 border-black rounded-xl p-6 sm:p-8 lg:p-10 bg-white hover:shadow-lg transition-shadow duration-300">
                    <p className="text-black mb-6 leading-relaxed font-medium text-sm sm:text-base lg:text-lg">
                      If you have any questions about this Privacy Policy or how we handle your data, 
                      please contact us:
                    </p>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <p className="text-black font-bold text-lg sm:text-xl lg:text-2xl">Joel Emmanuel</p>
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-black text-sm sm:text-base lg:text-lg">
                          <span className="font-bold">Email:</span>{' '}
                          <a 
                            href="mailto:ejoel00@gmail.com" 
                            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 underline decoration-2 underline-offset-2"
                          >
                            ejoel00@gmail.com
                          </a>
                        </p>
                        <p className="text-black text-sm sm:text-base lg:text-lg">
                          <span className="font-bold">Phone:</span>{' '}
                          <a 
                            href="tel:+2347069763692" 
                            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 underline decoration-2 underline-offset-2"
                          >
                            +234 706 976 3692
                          </a>
                        </p>
                        <p className="text-black text-sm sm:text-base lg:text-lg">
                          <span className="font-bold">Website:</span>{' '}
                          <a 
                            href="https://joelemmanuel.dev" 
                            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 underline decoration-2 underline-offset-2"
                          >
                            joelemmanuel.dev
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Updates Notice */}
                <div className="border-2 border-black rounded-xl p-6 sm:p-8 lg:p-10 bg-white hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black leading-tight">
                      Policy Updates
                    </h3>
                  </div>
                  <p className="text-black leading-relaxed font-medium text-sm sm:text-base lg:text-lg">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                    with an updated revision date. We encourage you to review this policy periodically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}