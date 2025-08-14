'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram, 
  Globe, 
  MessageCircle,
  Download,
  ExternalLink
} from 'lucide-react'

const defaultSocialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/joelemmanuel',
    icon: Linkedin,
    color: 'hover:bg-blue-600',
    description: 'Connect on LinkedIn'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/joelemmanuel',
    icon: Github,
    color: 'hover:bg-gray-800',
    description: 'View my code on GitHub'
  },
  {
    name: 'Email',
    url: 'mailto:ejoel00@gmail.com',
    icon: Mail,
    color: 'hover:bg-red-600',
    description: 'Send me an email'
  },
  {
    name: 'Phone',
    url: 'tel:+2347069763692',
    icon: Phone,
    color: 'hover:bg-green-600',
    description: 'Call me'
  }
]

const additionalLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: Twitter,
    color: 'hover:bg-blue-400',
    description: 'Follow on Twitter'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
    icon: Instagram,
    color: 'hover:bg-pink-600',
    description: 'Follow on Instagram'
  },
  {
    name: 'Website',
    url: 'https://joelemmanuel.dev',
    icon: Globe,
    color: 'hover:bg-purple-600',
    description: 'Visit my website'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/2347069763692',
    icon: MessageCircle,
    color: 'hover:bg-green-500',
    description: 'Message on WhatsApp'
  }
]

export default function SocialLinks({
  links = defaultSocialLinks,
  layout = 'horizontal', // 'horizontal', 'vertical', 'grid'
  size = 'md', // 'sm', 'md', 'lg'
  showLabels = false,
  showTooltips = true,
  animated = true,
  className = ""
}) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  }

  const layoutClasses = {
    horizontal: 'flex flex-row space-x-4',
    vertical: 'flex flex-col space-y-4',
    grid: 'grid grid-cols-2 gap-4'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const hoverVariants = {
    hover: { 
      scale: 1.1,
      y: -2,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  }

  const Container = animated ? motion.div : 'div'
  const Item = animated ? motion.a : 'a'

  return (
    <Container
      variants={animated ? containerVariants : undefined}
      initial={animated ? "hidden" : undefined}
      animate={animated ? "visible" : undefined}
      className={`${layoutClasses[layout]} ${className}`}
    >
      {links.map((link, index) => {
        const Icon = link.icon
        
        return (
          <div key={link.name} className="relative group">
            <Item
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
              variants={animated ? itemVariants : undefined}
              whileHover={animated ? "hover" : undefined}
              className={`
                ${sizeClasses[size]} 
                bg-gray-100 text-gray-600 rounded-full flex items-center justify-center 
                transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 
                focus:ring-blue-500 focus:ring-offset-2 group-hover:shadow-lg
                ${link.color}
                ${showLabels ? 'rounded-lg px-4 py-2 space-x-2' : ''}
              `}
              aria-label={link.description || `Visit ${link.name}`}
            >
              <Icon className={iconSizes[size]} />
              {showLabels && (
                <span className="text-sm font-medium">{link.name}</span>
              )}
            </Item>

            {/* Tooltip */}
            {showTooltips && !showLabels && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {link.description || link.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            )}
          </div>
        )
      })}
    </Container>
  )
}

// Floating Action Button style
export function SocialLinksFloating({ 
  links = defaultSocialLinks.slice(0, 3),
  position = 'bottom-right' // 'bottom-right', 'bottom-left', 'top-right', 'top-left'
}) {
  const [isOpen, setIsOpen] = useState(false)

  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6'
  }

  const linkPositions = {
    'bottom-right': (index) => ({ bottom: 70 + (index * 60), right: 0 }),
    'bottom-left': (index) => ({ bottom: 70 + (index * 60), left: 0 }),
    'top-right': (index) => ({ top: 70 + (index * 60), right: 0 }),
    'top-left': (index) => ({ top: 70 + (index * 60), left: 0 })
  }

  return (
    <div className={`${positionClasses[position]} z-50`}>
      {/* Main toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Mail className="h-6 w-6" />
        </motion.div>
      </motion.button>

      {/* Social links */}
      {links.map((link, index) => {
        const Icon = link.icon
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
            className={`absolute w-12 h-12 bg-white text-gray-600 rounded-full shadow-lg hover:text-white hover:shadow-xl flex items-center justify-center transition-colors duration-300 ${link.color}`}
            style={linkPositions[position](index)}
            initial={{ scale: 0, opacity: 0 }}
            animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            <Icon className="h-5 w-5" />
          </motion.a>
        )
      })}
    </div>
  )
}

// Compact horizontal version for headers/footers
export function SocialLinksCompact({ links = defaultSocialLinks }) {
  return (
    <div className="flex space-x-3">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label={link.description || link.name}
          >
            <Icon className="h-5 w-5" />
          </a>
        )
      })}
    </div>
  )
}

// Card style with descriptions
export function SocialLinksCard({ 
  links = defaultSocialLinks,
  title = "Let's Connect",
  className = ""
}) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        {title}
      </h3>
      
      <div className="space-y-4">
        {links.map((link, index) => {
          const Icon = link.icon
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 hover:shadow-md group ${link.color} hover:text-white`}
            >
              <div className="flex-shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{link.name}</p>
                <p className="text-sm opacity-75 group-hover:opacity-100">
                  {link.description}
                </p>
              </div>
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}

// Action buttons for specific purposes
export function SocialActionButtons({ className = "" }) {
  const actionButtons = [
    {
      name: 'Download CV',
      url: '/documents/joel-emmanuel-resume.pdf',
      icon: Download,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Download my resume'
    },
    {
      name: 'Schedule Call',
      url: '/contact',
      icon: Phone,
      color: 'bg-green-600 hover:bg-green-700',
      description: 'Book a consultation'
    },
    {
      name: 'Send Email',
      url: 'mailto:ejoel00@gmail.com',
      icon: Mail,
      color: 'bg-purple-600 hover:bg-purple-700',
      description: 'Get in touch'
    }
  ]

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {actionButtons.map((button, index) => {
        const Icon = button.icon
        return (
          <motion.a
            key={button.name}
            href={button.url}
            target={button.url.startsWith('http') ? '_blank' : '_self'}
            rel={button.url.startsWith('http') ? 'noopener noreferrer' : ''}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`flex items-center justify-center space-x-2 px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${button.color}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Icon className="h-5 w-5" />
            <span>{button.name}</span>
          </motion.a>
        )
      })}
    </div>
  )
}