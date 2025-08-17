'use client'
import Link from 'next/link'
import Image from 'next/image'

const defaultCompanies = [
  {
    name: 'Invillia',
    url: 'https://invillia.ai/en/home',
    description: 'AI & Automation Platform'
  },
  {
    name: 'Freedom',
    url: 'https://www.freedomghana.com/',
    description: 'Ride-hailing Platform'
  },
  {
    name: 'Compass UOL',
    url: 'https://compass.uol/en/about-us/',
    description: 'Technology Consulting'
  },
  {
    name: 'Yamaha Motor',
    url: 'https://yamaha-motor.com/',
    description: 'Automotive'
  },
  {
    name: 'SLB',
    url: 'https://www.slb.com/',
    description: 'Energy Technology'
  },
  {
    name: 'nSight Live',
    url: 'https://nsightlive.com/',
    description: 'Automotive Tech'
  }
]

export default function LogoCloud({ 
  companies = defaultCompanies, 
  title = "Trusted by leading companies",
  subtitle = null,
  maxItems = null,
  className = ""
}) {
  const displayCompanies = maxItems ? companies.slice(0, maxItems) : companies

  return (
    <section className={`py-12 sm:py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        {title && (
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xs sm:text-sm font-light text-gray-500 uppercase tracking-wide mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg text-gray-600 font-light">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
          {displayCompanies.map((company) => (
            <div key={company.name} className="flex justify-center">
              <CompanyLogo company={company} />
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/experience"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
          >
            View Experience
          </Link>
        </div>
      </div>
    </section>
  )
}

function CompanyLogo({ company }) {
    const logoContent = (
    <div className="group w-20 sm:w-24 h-10 sm:h-12 flex items-center justify-center text-center transition-all duration-300 hover:opacity-60">
      <Image
        src={company.logo}
        alt={`${company.name} logo`}
        width={96}
        height={48}
        className="object-contain max-w-full max-h-full transition-all duration-300"
      />
    </div>
  )

  if (company.url) {
    return (
      <Link
        href={company.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none"
        aria-label={`Visit ${company.name} website`}
      >
        {logoContent}
      </Link>
    )
  }

  return logoContent
}

// Compact version for mobile
export function LogoCloudCompact({ companies = defaultCompanies.slice(0, 4) }) {
  return (
    <div className="py-6 sm:py-8">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
        {companies.map((company) => (
          <div key={company.name} className="flex-shrink-0">
            <CompanyLogo company={company} />
          </div>
        ))}
      </div>
      
      {/* Mobile-friendly CTA */}
      <div className="text-center mt-6 sm:mt-8">
        <Link
          href="/experience"
          className="text-gray-900 hover:text-gray-600 transition-colors text-sm font-light"
        >
          See all partnerships →
        </Link>
      </div>
    </div>
  )
}

// Minimal footer version - optimized for mobile
export function LogoCloudMinimal({ companies = defaultCompanies.slice(0, 4) }) {
  return (
    <div className="py-4 sm:py-6">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {companies.map((company) => (
          <div
            key={company.name}
            className="h-6 sm:h-8 flex items-center justify-center text-center"
          >
            <span className="text-xs font-light text-gray-400">
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Mobile-first carousel version
export function LogoCloudCarousel({ companies = defaultCompanies }) {
  return (
    <section className="py-8 sm:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xs sm:text-sm font-light text-gray-500 uppercase tracking-wide">
            Trusted by leading companies
          </h2>
        </div>

        {/* Scrollable container for mobile */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-8 sm:space-x-12 pb-4">
            {companies.map((company) => (
              <div key={company.name} className="flex-shrink-0">
                <CompanyLogo company={company} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-6 sm:mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
          >
            Work with me
          </Link>
        </div>
      </div>
    </section>
  )
}