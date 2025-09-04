'use client'
import Link from 'next/link'
import { ArrowLeft, FileText, AlertCircle, Scale, Users, Shield } from 'lucide-react'

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
            'Initial consultations may be provided free of charge at our discretion',
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
            'We do not guarantee uninterrupted access or error-free operation',
            'Content may be updated, modified, or removed without notice',
            'Third-party integrations (booking, email) may have separate terms'
          ]
        },
        {
          subtitle: 'Limitation of Liability',
          items: [
            'We are not liable for any indirect, incidental, or consequential damages',
            'Our total liability is limited to the amount paid for services, if any',
            'We are not responsible for decisions made based on website content',
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
            'We collect information as described in our Privacy Policy',
            'Contact form submissions are used solely for responding to inquiries',
            'We do not sell or share personal information with third parties',
            'Analytics data is collected anonymously for website improvement'
          ]
        },
        {
          subtitle: 'Communications',
          items: [
            'By contacting us, you consent to receive response communications',
            'We may follow up on project inquiries and consultation requests',
            'You can opt out of non-essential communications at any time',
            'Emergency or service-related communications may still be sent'
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center text-black hover:text-blue-600 transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-6">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-black font-light mb-4">
              — Governing your use of our website and services
            </p>
            <p className="text-black font-medium">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-16">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-6">
                  Contents
                </h3>
                <nav className="space-y-3">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-black hover:text-blue-600 transition-colors font-medium"
                    >
                      {section.title}
                    </a>
                  ))}
                  <a
                    href="#governing-law"
                    className="block text-black hover:text-blue-600 transition-colors font-medium"
                  >
                    Governing Law
                  </a>
                  <a
                    href="#contact-info"
                    className="block text-black hover:text-blue-600 transition-colors font-medium"
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
                    <h2 className="text-2xl sm:text-3xl font-light text-black mb-8">
                      {section.title}
                    </h2>

                    <div className="space-y-8">
                      {section.content.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
                            {subsection.subtitle}
                          </h3>
                          <div className="space-y-3">
                            {subsection.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <p className="text-black leading-relaxed font-medium">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Governing Law */}
                <div id="governing-law" className="mb-16">
                  <h2 className="text-2xl sm:text-3xl font-light text-black mb-8">
                    Governing Law and Dispute Resolution
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-4">Governing Law</h3>
                      <p className="text-black leading-relaxed font-medium">
                        These Terms of Service are governed by and construed in accordance with the laws of Nigeria. 
                        Any disputes arising from these terms or your use of the website will be subject to the 
                        jurisdiction of Nigerian courts.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-4">Dispute Resolution</h3>
                      <p className="text-black leading-relaxed font-medium">
                        We prefer to resolve disputes amicably through direct communication. If a dispute cannot be 
                        resolved through discussion, it may be subject to arbitration or mediation before resorting 
                        to formal legal proceedings.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-4">Severability</h3>
                      <p className="text-black leading-relaxed font-medium">
                        If any provision of these terms is found to be unenforceable, the remaining provisions 
                        will remain in full force and effect.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div id="contact-info" className="mb-16">
                  <h2 className="text-2xl sm:text-3xl font-light text-black mb-8">
                    Questions About These Terms
                  </h2>

                  <div className="border border-black rounded-lg p-6 sm:p-8 bg-white">
                    <p className="text-black mb-6 leading-relaxed font-medium">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    
                    <div className="space-y-3">
                      <p className="text-black font-bold text-lg">Joel Emmanuel</p>
                      <div className="space-y-2">
                        <p className="text-black">
                          <span className="font-bold">Email:</span>{' '}
                          <a href="mailto:ejoel00@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                            ejoel00@gmail.com
                          </a>
                        </p>
                        <p className="text-black">
                          <span className="font-bold">Phone:</span>{' '}
                          <a href="tel:+2347069763692" className="text-blue-600 hover:text-blue-800 font-medium">
                            +234 706 976 3692
                          </a>
                        </p>
                        <p className="text-black">
                          <span className="font-bold">Website:</span>{' '}
                          <a href="https://joelemmanuel.dev" className="text-blue-600 hover:text-blue-800 font-medium">
                            joelemmanuel.dev
                          </a>
                        </p>
                        <p className="text-black">
                          <span className="font-bold">Location:</span> Metaverse
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Updates Notice */}
                <div className="border border-black rounded-lg p-6 sm:p-8 mb-8 bg-white">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
                    Changes to Terms
                  </h3>
                  <p className="text-black leading-relaxed font-medium">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                    immediately upon posting on this page. Your continued use of the website after changes are 
                    posted constitutes acceptance of the modified terms.
                  </p>
                </div>

                {/* Additional Legal Info */}
                <div className="border border-black rounded-lg p-6 sm:p-8 bg-white">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
                    Important Notice
                  </h3>
                  <p className="text-black leading-relaxed font-medium">
                    This website is a professional portfolio and service offering platform. For specific project 
                    work, separate service agreements with detailed terms, scope, and pricing will be required. 
                    These Terms of Service govern only the use of this website and initial consultations.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/privacy"
                    className="inline-flex items-center justify-center px-8 py-4 text-black hover:text-white hover:bg-blue-600 border border-blue-600 rounded-lg transition-colors text-sm font-medium"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}