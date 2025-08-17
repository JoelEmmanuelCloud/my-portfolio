/**
 * Application constants and configuration
 */

// Site metadata
export const SITE_CONFIG = {
  name: 'Joel Emmanuel',
  title: 'Joel Emmanuel - Frontend Engineer',
  description: 'Frontend Engineer building production web platforms with React, AWS, and modern technologies. Currently at Invillia working on AI/automation systems.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://joelemmanuel.dev',
  domain: 'joelemmanuel.dev',
  keywords: [
    'Frontend Engineer',
    'React Developer',
    'AWS Developer', 
    'JavaScript Developer',
    'TypeScript Developer',
    'Web Developer',
    'Joel Emmanuel',
  ],
  author: {
    name: 'Joel Emmanuel',
    email: 'ejoel00@gmail.com',
    phone: '+2347069763692',
    location: 'Metaverse',
    timezone: 'UTC+1',
  }
}

// Social media links
export const SOCIAL_LINKS = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/joelemmanuel',
  github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/joelemmanuel',
  email: 'mailto:ejoel00@gmail.com',
  phone: 'tel:+2347069763692',
}

// Navigation items
export const NAVIGATION_ITEMS = [
  { name: 'About', href: '/', order: 1 },
  { name: 'Experience', href: '/experience', order: 2 },
  { name: 'Projects', href: '/projects', order: 3 },
  { name: 'Contact', href: '/contact', order: 4 },
]

// Footer navigation
export const FOOTER_LINKS = {
  main: [
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'GitHub', href: SOCIAL_LINKS.github, external: true },
    { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, external: true },
  ],
  contact: [
    { name: 'ejoel00@gmail.com', href: 'mailto:ejoel00@gmail.com', external: true },
    { name: '+234 706 976 3692', href: 'tel:+2347069763692', external: true },
    { name: 'Metaverse', href: '#' },
  ]
}

// Technology categories
export const TECH_CATEGORIES = {
  frontend: {
    name: 'Frontend',
    color: '#2563eb',
    icon: '⚡',
  },
  backend: {
    name: 'Backend', 
    color: '#059669',
    icon: '🔧',
  },
  cloud: {
    name: 'Cloud',
    color: '#7c3aed',
    icon: '☁️',
  },
  tools: {
    name: 'Tools',
    color: '#64748b',
    icon: '🛠️',
  }
}

// Contact form validation
export const CONTACT_FORM = {
  maxMessageLength: 2000,
  minMessageLength: 10,
  maxNameLength: 100,
  maxCompanyLength: 100,
  rateLimitRequests: 5,
  rateLimitWindow: 60000,
  autoReplyEnabled: true,
  requiredFields: ['name', 'email', 'message'],
}

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  RATE_LIMIT_ERROR: 'Too many requests. Please wait a moment before trying again.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
  CONTACT_FORM_ERROR: 'Failed to send message. Please try again or contact me directly.',
}

// Success messages
export const SUCCESS_MESSAGES = {
  CONTACT_FORM_SUCCESS: 'Message sent successfully! I\'ll get back to you within 24 hours.',
  COPY_SUCCESS: 'Copied to clipboard!',
}

// Company information
export const COMPANIES = {
  invillia: {
    name: 'Invillia',
    url: 'https://invillia.ai/en/home',
    logo: '/logos/invillia.svg',
    category: 'AI/Automation'
  },
  freedom: {
    name: 'Freedom Ghana',
    url: 'https://www.freedomghana.com/',
    logo: '/logos/freedom.svg',
    category: 'Transportation'
  },
  compass: {
    name: 'Compass UOL',
    url: 'https://compass.uol/en/about-us/',
    logo: '/logos/compass.svg',
    category: 'Technology'
  },
  yamaha: {
    name: 'Yamaha Motor',
    url: 'https://yamaha-motor.com/',
    logo: '/logos/yamaha.svg',
    category: 'Manufacturing'
  },
  slb: {
    name: 'SLB',
    url: 'https://www.slb.com/',
    logo: '/logos/slb.svg',
    category: 'Energy'
  },
  nsight: {
    name: 'nSight Live',
    url: 'https://nsightlive.com/',
    logo: '/logos/nsight.svg',
    category: 'Automotive'
  }
}

// SEO configuration
export const SEO_CONFIG = {
  defaultTitle: SITE_CONFIG.title,
  titleTemplate: '%s | Joel Emmanuel',
  defaultDescription: SITE_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      }
    ]
  },
  twitter: {
    handle: '@joelemmanuel',
    site: '@joelemmanuel',
    cardType: 'summary_large_image',
  }
}

// Feature flags
export const FEATURE_FLAGS = {
  enableAnalytics: process.env.NODE_ENV === 'production',
  enableA11yWidget: true,
  enablePerformanceMonitoring: process.env.NODE_ENV === 'production',
}

// Cache durations (in seconds)
export const CACHE_DURATIONS = {
  static: 31536000, // 1 year
  images: 2592000,  // 30 days
  api: 300,         // 5 minutes
  page: 3600,       // 1 hour
}

// Content limits
export const CONTENT_LIMITS = {
  projectsPerPage: 6,
  recentProjectsCount: 4,
  skillsPerCategory: 10,
  experienceItemsLimit: 5,
}

// Image dimensions for optimization
export const IMAGE_DIMENSIONS = {
  hero: { width: 800, height: 800 },
  project: { width: 600, height: 400 },
  thumbnail: { width: 300, height: 200 },
  avatar: { width: 150, height: 150 },
  logo: { width: 120, height: 60 },
  og: { width: 1200, height: 630 },
}

// Default exports for commonly used constants
const constants = {
  SITE_CONFIG,
  SOCIAL_LINKS,
  NAVIGATION_ITEMS,
  TECH_CATEGORIES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
}

export default constants