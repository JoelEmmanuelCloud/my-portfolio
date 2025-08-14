'use client'
import Link from 'next/link'

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
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-sm font-light text-gray-500 uppercase tracking-wide mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 font-light">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {displayCompanies.map((company) => (
            <div key={company.name} className="flex justify-center">
              <CompanyLogo company={company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CompanyLogo({ company }) {
  const logoContent = (
    <div className="group w-24 h-12 flex items-center justify-center text-center transition-all duration-300 hover:opacity-60">
      <span className="text-xs font-light text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
        {company.name}
      </span>
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

// Compact version
export function LogoCloudCompact({ companies = defaultCompanies.slice(0, 4) }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {companies.map((company) => (
        <div key={company.name} className="flex-shrink-0">
          <CompanyLogo company={company} />
        </div>
      ))}
    </div>
  )
}

// Minimal footer version
export function LogoCloudMinimal({ companies = defaultCompanies.slice(0, 4) }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {companies.map((company) => (
        <div
          key={company.name}
          className="h-8 flex items-center justify-center text-xs font-light text-gray-400"
        >
          {company.name}
        </div>
      ))}
    </div>
  )
}