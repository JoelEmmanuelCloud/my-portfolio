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
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-6xl font-light text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 font-light mb-4">
              — How we collect, use, and protect your information
            </p>
            <p className="text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-6">
                  Contents
                </h3>
                <nav className="space-y-3">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {section.title}
                    </a>
                  ))}
                  <a
                    href="#contact-info"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
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
                    className="mb-16"
                  >
                    <h2 className="text-3xl font-light text-gray-900 mb-8">
                      {section.title}
                    </h2>

                    <div className="space-y-8">
                      {section.content.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h3 className="text-xl font-medium text-gray-900 mb-4">
                            {subsection.subtitle}
                          </h3>
                          <div className="space-y-3">
                            {subsection.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <p className="text-gray-700 leading-relaxed">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Contact Information */}
                <div id="contact-info" className="mb-16">
                  <h2 className="text-3xl font-light text-gray-900 mb-8">
                    Contact Information
                  </h2>

                  <div className="border border-gray-200 rounded-lg p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      If you have any questions about this Privacy Policy or how we handle your data, 
                      please contact us:
                    </p>
                    
                    <div className="space-y-3">
                      <p className="text-gray-900 font-medium text-lg">Joel Emmanuel</p>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          <span className="font-medium">Email:</span>{' '}
                          <a href="mailto:ejoel00@gmail.com" className="text-gray-900 hover:text-gray-600">
                            ejoel00@gmail.com
                          </a>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Phone:</span>{' '}
                          <a href="tel:+2347069763692" className="text-gray-900 hover:text-gray-600">
                            +234 706 976 3692
                          </a>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Website:</span>{' '}
                          <a href="https://joelemmanuel.dev" className="text-gray-900 hover:text-gray-600">
                            joelemmanuel.dev
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Updates Notice */}
                <div className="border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Policy Updates
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
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