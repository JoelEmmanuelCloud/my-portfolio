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
  ExternalLink
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
    horizontal: 'flex space-x-6',
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
            `}
            aria-label={link.description || link.name}
          >
            <Icon className="h-5 w-5" />
            {showLabels && (
              <span className="text-sm">{link.name}</span>
            )}
          </a>
        )
      })}
    </div>
  )
}

// Minimal card version
export function SocialLinksCard({ 
  links = defaultSocialLinks,
  title = "Let's connect",
  subtitle = "— Get in touch",
  className = ""
}) {
  return (
    <div className={`bg-white ${className}`}>
      <div className="mb-8">
        <h3 className="text-2xl font-light text-gray-900 mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-lg text-gray-600 font-light">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="space-y-6">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
              className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
            >
              <Icon className="h-5 w-5" />
              <div className="flex-1">
                <p className="font-light">{link.name}</p>
                <p className="text-sm text-gray-400 font-light">
                  {link.description}
                </p>
              </div>
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          )
        })}
      </div>
    </div>
  )
}

// Minimal footer version
export function SocialLinksCompact({ links = defaultSocialLinks }) {
  return (
    <div className="flex space-x-4">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
            aria-label={link.description || link.name}
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
    </div>
  )
}

// Action buttons
export function SocialActionButtons({ className = "" }) {
  const actionButtons = [
    {
      name: 'Download CV',
      url: '/documents/joel-emmanuel-resume.pdf',
      icon: Download,
      description: 'Download resume'
    },
    {
      name: 'Schedule Call',
      url: '/contact',
      icon: Phone,
      description: 'Book consultation'
    },
    {
      name: 'Send Email',
      url: 'mailto:ejoel00@gmail.com',
      icon: Mail,
      description: 'Get in touch'
    }
  ]

  return (
    <div className={`flex flex-col space-y-4 ${className}`}>
      {actionButtons.map((button) => {
        const Icon = button.icon
        return (
          <a
            key={button.name}
            href={button.url}
            target={button.url.startsWith('http') ? '_blank' : '_self'}
            rel={button.url.startsWith('http') ? 'noopener noreferrer' : ''}
            className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light"
          >
            <Icon className="h-5 w-5" />
            <span>{button.name}</span>
          </a>
        )
      })}
    </div>
  )
}

// Floating minimal version
export function SocialLinksFloating({ 
  links = defaultSocialLinks.slice(0, 3),
  position = 'bottom-right'
}) {
  const [isOpen, setIsOpen] = useState(false)

  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6'
  }

  return (
    <div className={`${positionClasses[position]} z-50`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none flex items-center justify-center transition-colors duration-300"
      >
        <Mail className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border border-gray-200 p-4 space-y-3">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light"
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{link.name}</span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}