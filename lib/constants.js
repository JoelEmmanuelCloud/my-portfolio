/**
 * Application constants and configuration
 */

// Site metadata
export const SITE_CONFIG = {
  name: 'Joel Emmanuel',
  title: 'Joel Emmanuel - Full Stack & AI/ML Developer',
  description: 'Frontend specialist + full-stack builder who ships production systems on React/Next.js, Node.js, AWS, and modern CI/CD—used by real customers today.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://joelemmanuel.dev',
  domain: 'joelemmanuel.dev',
  keywords: [
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'AWS Developer',
    'AI/ML Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Software Engineer',
    'Web Developer',
    'Joel Emmanuel',
  ],
  author: {
    name: 'Joel Emmanuel',
    email: 'ejoel00@gmail.com',
    phone: '+2347069763692',
    location: 'Lagos, Nigeria',
    timezone: 'Africa/Lagos',
  }
}

// Social media links
export const SOCIAL_LINKS = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/joelemmanuel',
  github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/joelemmanuel',
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/joelemmanuel',
  email: 'mailto:ejoel00@gmail.com',
  phone: 'tel:+2347069763692',
}

// Navigation items
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/', order: 1 },
  { name: 'Experience', href: '/experience', order: 2 },
  { name: 'Projects', href: '/projects', order: 3 },
  { name: 'Skills', href: '/skills', order: 4 },
  { name: 'Contact', href: '/contact', order: 5 },
]

// Footer navigation
export const FOOTER_LINKS = {
  main: [
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Resume', href: '/documents/joel-emmanuel-resume.pdf', external: true },
    { name: 'Case Studies', href: '/projects' },
    { name: 'GitHub', href: SOCIAL_LINKS.github, external: true },
    { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, external: true },
  ],
  contact: [
    { name: 'ejoel00@gmail.com', href: 'mailto:ejoel00@gmail.com', external: true },
    { name: '+234 706 976 3692', href: 'tel:+2347069763692', external: true },
    { name: 'Book a Call', href: '/contact' },
    { name: 'Lagos, Nigeria', href: '#' },
  ]
}

// Technology categories and colors
export const TECH_CATEGORIES = {
  frontend: {
    name: 'Frontend',
    color: '#3b82f6', // blue-500
    icon: '🎨',
  },
  backend: {
    name: 'Backend',
    color: '#059669', // green-600
    icon: '⚡',
  },
  cloud: {
    name: 'Cloud & DevOps',
    color: '#7c3aed', // purple-600
    icon: '☁️',
  },
  database: {
    name: 'Database',
    color: '#dc2626', // red-600
    icon: '🗄️',
  },
  ai: {
    name: 'AI & ML',
    color: '#ea580c', // orange-600
    icon: '🤖',
  },
  tools: {
    name: 'Tools',
    color: '#64748b', // slate-500
    icon: '🛠️',
  }
}

// Project status types
export const PROJECT_STATUS = {
  LIVE: 'live',
  IN_DEVELOPMENT: 'in-development',
  COMPLETED: 'completed',
  ARCHIVED: 'archived'
}

// Project categories
export const PROJECT_CATEGORIES = {
  WEB_APP: 'web-application',
  ECOMMERCE: 'e-commerce',
  AI_ML: 'ai-ml',
  MOBILE: 'mobile',
  API: 'api',
  TOOL: 'tool'
}

// Experience levels
export const EXPERIENCE_LEVELS = {
  JUNIOR: 'junior',
  MID: 'mid-level',
  SENIOR: 'senior',
  LEAD: 'lead',
  PRINCIPAL: 'principal'
}

// Contact form validation
export const CONTACT_FORM = {
  maxMessageLength: 2000,
  minMessageLength: 10,
  maxNameLength: 100,
  maxCompanyLength: 100,
  rateLimitRequests: 5,
  rateLimitWindow: 60000, // 1 minute in ms
  autoReplyEnabled: true,
  requiredFields: ['name', 'email', 'message'],
}

// Animation settings
export const ANIMATIONS = {
  pageTransition: {
    duration: 0.3,
    ease: 'easeInOut'
  },
  stagger: {
    container: 0.1,
    item: 0.05
  },
  durations: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 1.0
  },
  springs: {
    wobbly: {
      type: 'spring',
      damping: 10,
      stiffness: 100
    },
    gentle: {
      type: 'spring',
      damping: 20,
      stiffness: 300
    }
  }
}

// Breakpoints (matches Tailwind CSS)
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

// API endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
  subscribe: '/api/subscribe', // for future newsletter
  analytics: '/api/analytics', // for future analytics
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
  SUBSCRIPTION_SUCCESS: 'Successfully subscribed to updates!',
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
  },
  rewod: {
    name: 'Rewod Technologies',
    url: 'https://www.rewodtechnologies.com/',
    logo: '/logos/rewod.svg',
    category: 'Technology'
  }
}

// Analytics events (for future use)
export const ANALYTICS_EVENTS = {
  // Page views
  PAGE_VIEW: 'page_view',
  
  // User interactions
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  RESUME_DOWNLOAD: 'resume_download',
  PROJECT_VIEW: 'project_view',
  EXTERNAL_LINK_CLICK: 'external_link_click',
  
  // Navigation
  MENU_CLICK: 'menu_click',
  FOOTER_LINK_CLICK: 'footer_link_click',
  
  // Social interactions
  SOCIAL_LINK_CLICK: 'social_link_click',
  
  // Performance
  PERFORMANCE_METRIC: 'performance_metric',
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
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'theme-color',
      content: '#2563eb'
    },
    {
      name: 'msapplication-TileColor',
      content: '#2563eb'
    }
  ]
}

// Development flags
export const FEATURE_FLAGS = {
  enableAnalytics: process.env.NODE_ENV === 'production',
  enableNewsletter: false, // future feature
  enableBlog: false, // future feature
  enableDarkMode: false, // future feature
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
  testimonialsCount: 3, // future feature
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
export default {
  SITE_CONFIG,
  SOCIAL_LINKS,
  NAVIGATION_ITEMS,
  TECH_CATEGORIES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
}