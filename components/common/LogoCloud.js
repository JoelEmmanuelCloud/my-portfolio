'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const defaultCompanies = [
  {
    name: 'Invillia',
    logo: '/logos/invillia.svg',
    url: 'https://invillia.ai/en/home',
    description: 'AI & Automation Platform - Frontend Developer'
  },
  {
    name: 'Freedom',
    logo: '/logos/freedom.svg',
    url: 'https://www.freedomghana.com/',
    description: 'Ride-hailing Platform - Full-stack Developer'
  },
  {
    name: 'Compass UOL',
    logo: '/logos/compass.svg',
    url: 'https://compass.uol/en/about-us/',
    description: 'Technology Consulting - Full-stack & AI/ML Developer'
  },
  {
    name: 'Yamaha Motor',
    logo: '/logos/yamaha.svg',
    url: 'https://yamaha-motor.com/',
    description: 'Automotive - ML Recommendation Engine'
  },
  {
    name: 'SLB',
    logo: '/logos/slb.svg',
    url: 'https://www.slb.com/',
    description: 'Energy Technology - End-of-Well Report Automation'
  },
  {
    name: 'nSight Live',
    logo: '/logos/nsight.svg',
    url: 'https://nsightlive.com/',
    description: 'Automotive Tech - AI Customer Support Bot'
  },
  {
    name: 'Rewod Technologies',
    logo: '/logos/rewod.svg',
    url: 'https://www.rewodtechnologies.com/',
    description: 'Technology Solutions - Backend Developer'
  },
  {
    name: 'Mumalieff',
    logo: '/logos/mumalieff.svg',
    url: 'https://www.mumalieff.com/',
    description: 'E-commerce - Full-stack Developer'
  }
]

export default function LogoCloud({ 
  companies = defaultCompanies, 
  title = "Trusted by leading companies",
  subtitle = "Delivering production-ready solutions for innovative organizations",
  showTooltip = true,
  layout = "grid", // "grid" or "scroll"
  maxItems = null,
  className = ""
}) {
  const displayCompanies = maxItems ? companies.slice(0, maxItems) : companies

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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  }

  const scrollVariants = {
    animate: {
      x: [0, -100 * displayCompanies.length],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  }

  if (layout === "scroll") {
    return (
      <section className={`py-16 bg-white overflow-hidden ${className}`}>
        <div className="container-max section-padding">
          {title && (
            <div className="text-center mb-12">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg text-gray-600">{subtitle}</p>
              )}
            </div>
          )}
          
          <div className="relative">
            <motion.div
              variants={scrollVariants}
              animate="animate"
              className="flex space-x-16"
              style={{ width: `${displayCompanies.length * 200}px` }}
            >
              {[...displayCompanies, ...displayCompanies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center group"
                >
                  <CompanyLogo company={company} showTooltip={showTooltip} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container-max section-padding">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600">{subtitle}</p>
            )}
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 items-center"
        >
          {displayCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              variants={itemVariants}
              className="flex justify-center"
            >
              <CompanyLogo company={company} showTooltip={showTooltip} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CompanyLogo({ company, showTooltip = true }) {
  const logoContent = (
    <div className="group relative w-full h-16 flex items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {/* Fallback logo placeholder */}
      <div className="w-full h-full flex items-center justify-center bg-white rounded border border-gray-200 group-hover:border-gray-300 transition-colors duration-200">
        <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
          {company.name}
        </span>
      </div>
      
      {/* Uncomment below when you have actual logo files */}
      {/* 
      <Image
        src={company.logo}
        alt={`${company.name} logo`}
        width={120}
        height={60}
        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
        onError={(e) => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
      */}

      {/* Tooltip */}
      {showTooltip && company.description && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
          {company.description}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  )

  if (company.url) {
    return (
      <Link
        href={company.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-32 h-16 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
        aria-label={`Visit ${company.name} website`}
      >
        {logoContent}
      </Link>
    )
  }

  return logoContent
}

// Compact version for smaller spaces
export function LogoCloudCompact({ companies = defaultCompanies.slice(0, 6) }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {companies.map((company, index) => (
        <motion.div
          key={company.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="flex-shrink-0"
        >
          <CompanyLogo company={company} showTooltip={false} />
        </motion.div>
      ))}
    </div>
  )
}

// Minimal version for footer or sidebar
export function LogoCloudMinimal({ companies = defaultCompanies.slice(0, 4) }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {companies.map((company) => (
        <div
          key={company.name}
          className="h-8 flex items-center justify-center bg-gray-100 rounded text-xs font-medium text-gray-600"
        >
          {company.name}
        </div>
      ))}
    </div>
  )
}