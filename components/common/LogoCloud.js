'use client'
import Link from 'next/link'
import Image from 'next/image'

const defaultCompanies = [
  {
    name: 'Invillia',
    url: 'https://invillia.ai/en/home',
    description: 'AI & Automation Platform',
    logo: '/logos/invillia.svg'
  },
  {
    name: 'Freedom',
    url: 'https://www.freedomghana.com/',
    description: 'Ride-hailing Platform',
    logo: '/logos/freedom.svg'
  },
  {
    name: 'Compass UOL',
    url: 'https://compass.uol/en/about-us/',
    description: 'Technology Consulting',
    logo: '/logos/compass-uol.svg'
  },
  {
    name: 'Yamaha Motor',
    url: 'https://yamaha-motor.com/',
    description: 'Automotive',
    logo: '/logos/yamaha.svg'
  },
  {
    name: 'SLB',
    url: 'https://www.slb.com/',
    description: 'Energy Technology',
    logo: '/logos/slb.svg'
  },
  {
    name: 'nSight Live',
    url: 'https://nsightlive.com/',
    description: 'Automotive Tech',
    logo: '/logos/nsight-live.svg'
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
    <section className={`py-12 sm:py-16 lg:py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {title && (
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xs sm:text-sm lg:text-base font-semibold text-black uppercase tracking-wider mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg lg:text-xl text-black font-medium">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
          {displayCompanies.map((company) => (
            <div key={company.name} className="flex justify-center w-full">
              <CompanyLogo company={company} />
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <Link
            href="/experience"
            className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base lg:text-lg font-medium"
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
    <div className="group w-24 sm:w-28 lg:w-32 h-12 sm:h-14 lg:h-16 flex items-center justify-center text-center transition-all duration-300 hover:opacity-70">
      <Image
        src={company.logo}
        alt={`${company.name} logo`}
        width={128}
        height={64}
        className="object-contain max-w-full max-h-full transition-all duration-300 filter brightness-0"
      />
    </div>
  )

  if (company.url) {
    return (
      <Link
        href={company.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-lg"
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
    <div className="py-6 sm:py-8 lg:py-10">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
        {companies.map((company) => (
          <div key={company.name} className="flex-shrink-0">
            <CompanyLogo company={company} />
          </div>
        ))}
      </div>
      
      {/* Mobile-friendly CTA */}
      <div className="text-center mt-6 sm:mt-8 lg:mt-10">
        <Link
          href="/experience"
          className="text-black hover:text-blue-600 transition-colors text-sm sm:text-base font-semibold underline decoration-2 underline-offset-4"
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
    <div className="py-4 sm:py-6 lg:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {companies.map((company) => (
          <div
            key={company.name}
            className="h-8 sm:h-10 lg:h-12 flex items-center justify-center text-center"
          >
            <span className="text-xs sm:text-sm lg:text-base font-semibold text-black">
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
    <section className="py-8 sm:py-12 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xs sm:text-sm lg:text-base font-semibold text-black uppercase tracking-wider">
            Trusted by leading companies
          </h2>
        </div>

        {/* Scrollable container for mobile */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-8 sm:space-x-12 lg:space-x-16 pb-4 min-w-max">
            {companies.map((company) => (
              <div key={company.name} className="flex-shrink-0">
                <CompanyLogo company={company} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base lg:text-lg font-medium"
          >
            Work with me
          </Link>
        </div>
      </div>
    </section>
  )
}