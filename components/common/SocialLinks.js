'use client'
import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Twitter, 
  Globe,
  Download,
  ExternalLink,
  MessageCircle,
  Calendar
} from 'lucide-react'

const defaultSocialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/joelemmanuel',
    icon: Linkedin,
    description: 'Connect on LinkedIn'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/joelemmanuel',
    icon: Github,
    description: 'View my code'
  },
  {
    name: 'Email',
    url: 'mailto:ejoel00@gmail.com',
    icon: Mail,
    description: 'Send email'
  },
  {
    name: 'Phone',
    url: 'tel:+2347069763692',
    icon: Phone,
    description: 'Call me'
  }
]

export default function SocialLinks({
  links = defaultSocialLinks,
  layout = 'horizontal', // 'horizontal', 'vertical'
  showLabels = false,
  className = ""
}) {
  const layoutClasses = {
    horizontal: 'flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6',
    vertical: 'flex flex-col space-y-4'
  }

  return (
    <div className={`${layoutClasses[layout]} ${className}`}>
      {links.map((link) => {
        const Icon = link.icon
        
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
            className={`
              flex items-center text-gray-400 hover:text-gray-900 transition-colors duration-300 font-light
              ${showLabels ? 'space-x-2' : ''}
              ${showLabels ? 'p-2' : 'p-3'}
            `}
            aria-label={link.description || link.name}
          >
            <Icon className="h-5 w-5 flex-shrink-0" />
            {showLabels && (
              <span className="text-sm">{link.name}</span>
            )}
          </a>
        )
      })}
    </div>
  )
}

// Mobile-optimized card version
export function SocialLinksCard({ 
  links = defaultSocialLinks,
  title = "Let's connect",
  subtitle = "— Get in touch",
  className = ""
}) {
  return (
    <div className={`bg-white p-6 sm:p-8 ${className}`}>
      <div className="mb-6 sm:mb-8 text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-base sm:text-lg text-gray-600 font-light">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="space-y-4 sm:space-y-6">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
              className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors duration-300 group p-3 sm:p-4 rounded-lg hover:bg-gray-50"
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-light">{link.name}</p>
                <p className="text-sm text-gray-400 font-light truncate">
                  {link.description}
                </p>
              </div>
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
            </a>
          )
        })}
      </div>

      {/* Mobile CTA */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href="mailto:ejoel00@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
        >
          <Mail className="h-4 w-4 mr-2" />
          Send Email
        </a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Call
        </a>
      </div>
    </div>
  )
}

// Mobile-optimized compact version
export function SocialLinksCompact({ links = defaultSocialLinks }) {
  return (
    <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-300 rounded-full border border-gray-200 hover:border-gray-300"
            aria-label={link.description || link.name}
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        )
      })}
    </div>
  )
}

// Mobile-first action buttons
export function SocialActionButtons({ className = "" }) {
  const actionButtons = [
    {
      name: 'Download Resume',
      url: '/documents/joel-emmanuel-resume.pdf',
      icon: Download,
      description: 'Download my resume',
      primary: false
    },
    {
      name: 'Schedule Call',
      url: '/contact',
      icon: Calendar,
      description: 'Book a consultation',
      primary: true
    },
    {
      name: 'Send Email',
      url: 'mailto:ejoel00@gmail.com',
      icon: Mail,
      description: 'Get in touch via email',
      primary: false
    }
  ]

  return (
    <div className={`flex flex-col space-y-3 sm:space-y-4 ${className}`}>
      {actionButtons.map((button) => {
        const Icon = button.icon
        return (
          <a
            key={button.name}
            href={button.url}
            target={button.url.startsWith('http') ? '_blank' : '_self'}
            rel={button.url.startsWith('http') ? 'noopener noreferrer' : ''}
            className={`
              inline-flex items-center justify-center px-6 py-3 rounded-full transition-colors duration-200 text-sm font-medium
              ${button.primary 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'border border-gray-300 text-gray-900 hover:bg-gray-50'
              }
            `}
          >
            <Icon className="h-4 w-4 mr-2" />
            <span>{button.name}</span>
          </a>
        )
      })}
    </div>
  )
}

// Mobile-optimized floating version
export function SocialLinksFloating({ 
  links = defaultSocialLinks.slice(0, 3),
  position = 'bottom-right'
}) {
  const [isOpen, setIsOpen] = useState(false)

  const positionClasses = {
    'bottom-right': 'fixed bottom-4 right-4 sm:bottom-6 sm:right-6',
    'bottom-left': 'fixed bottom-4 left-4 sm:bottom-6 sm:left-6'
  }

  return (
    <div className={`${positionClasses[position]} z-50`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none flex items-center justify-center transition-all duration-300"
        aria-label="Contact options"
      >
        {isOpen ? (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-20 sm:hidden -z-10"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 space-y-3 min-w-[200px]">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light p-2 rounded hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{link.name}</span>
                </a>
              )
            })}
            
            {/* Quick CTA */}
            <div className="pt-3 border-t border-gray-100">
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// Mobile-first contact section
export function SocialContactSection({ 
  title = "Ready to work together?",
  subtitle = "Let's discuss your project",
  className = "" 
}) {
  return (
    <section className={`py-12 sm:py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light">
            {subtitle}
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-4">
          <a
            href="mailto:ejoel00@gmail.com"
            className="inline-flex items-center justify-center w-full px-6 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
          >
            <Mail className="h-4 w-4 mr-2" />
            Send Email
          </a>
          
          <a
            href="/contact"
            className="inline-flex items-center justify-center w-full px-6 py-4 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Call
          </a>
        </div>

        <div className="flex justify-center mt-8">
          <SocialLinksCompact />
        </div>
      </div>
    </section>
  )
}