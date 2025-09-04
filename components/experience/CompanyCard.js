'use client'
import { useState } from 'react'
import { ExternalLink, MapPin, Users } from 'lucide-react'

export default function CompanyCard({ 
  company, 
  experiences = [], 
  index = 0, 
  variant = 'default' 
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isDetailed = variant === 'detailed'
  const isCompact = variant === 'compact'
  
  // Get the most recent/current role
  const currentRole = experiences.find(exp => exp.current) || experiences[0]
  const totalRoles = experiences.length
  const hasMultipleRoles = totalRoles > 1
  
  // Combine all technologies from all roles
  const allTechnologies = [...new Set(experiences.flatMap(exp => exp.stack || []))]

  return (
    <div className={`group border-b-2 border-slate-200 py-6 sm:py-8 px-4 sm:px-0 hover:bg-blue-50 transition-colors duration-200 bg-white ${
      currentRole?.current ? 'bg-blue-50 border-blue-200' : ''
    }`}>
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3 sm:gap-4">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {company}
            </h3>
            {currentRole?.current && (
              <span className="text-xs font-bold text-green-800 bg-green-100 px-3 py-1.5 rounded-full w-fit">
                Current
              </span>
            )}
          </div>
          
          <p className="text-sm sm:text-base text-slate-800 font-semibold mb-2">
            {currentRole?.role}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-slate-700">
            <span className="font-semibold">{currentRole?.period || 'Period not specified'}</span>
            
            {currentRole?.location && (
              <span className="flex items-center gap-1 font-medium">
                <MapPin className="h-4 w-4" />
                {currentRole.location}
              </span>
            )}
            
            {hasMultipleRoles && (
              <span className="flex items-center gap-1 font-medium">
                <Users className="h-4 w-4" />
                {totalRoles} role{totalRoles > 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
        
        {/* External Link */}
        {currentRole?.website && (
          <div className="flex justify-end sm:justify-start">
            <a
              href={currentRole.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 text-slate-600 hover:text-blue-600 hover:bg-blue-100 rounded-full transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        )}
      </div>

      {/* Key Achievements */}
      {currentRole?.bullets && currentRole.bullets.length > 0 && (
        <div className="mb-4 sm:mb-6">
          {(isExpanded ? currentRole.bullets : currentRole.bullets.slice(0, isCompact ? 1 : 2)).map((bullet, bulletIndex) => (
            <div key={bulletIndex} className="mb-2 last:mb-0">
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                • {isCompact && bullet.length > 80 ? `${bullet.substring(0, 80)}...` : bullet}
              </p>
            </div>
          ))}
          
          {/* Expand button */}
          {!isCompact && currentRole.bullets.length > 2 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsExpanded(!isExpanded)
              }}
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm font-medium mt-3"
            >
              {isExpanded ? 'Show less' : `Show ${currentRole.bullets.length - 2} more`}
            </button>
          )}
        </div>
      )}

      {/* Technology Stack */}
      {allTechnologies.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {allTechnologies.slice(0, isCompact ? 4 : 8).map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
            {allTechnologies.length > (isCompact ? 4 : 8) && (
              <span className="text-xs font-medium text-slate-600 px-3 py-1.5">
                +{allTechnologies.length - (isCompact ? 4 : 8)} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Multiple Roles */}
      {hasMultipleRoles && !isCompact && (
        <div className="pt-4 border-t-2 border-slate-200">
          <p className="text-sm font-semibold text-slate-700 mb-3">All positions</p>
          <div className="space-y-2">
            {experiences.map((exp, expIndex) => (
              <div key={expIndex} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                <span className="text-sm text-slate-800 font-medium">{exp.role}</span>
                <span className="text-slate-600 text-xs font-medium">{exp.period}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Compact grid version
export function CompanyCardCompact({ company, experiences = [], index = 0 }) {
  const currentRole = experiences.find(exp => exp.current) || experiences[0]
  
  return (
    <div className="group p-4 sm:p-6 border-2 border-slate-300 hover:border-blue-300 transition-colors duration-200 rounded-lg bg-white shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 truncate">
            {company}
          </h4>
          <p className="text-sm text-slate-800 font-semibold mb-1 truncate">
            {currentRole?.role}
          </p>
          <p className="text-xs text-slate-600 font-medium">
            {currentRole?.period}
          </p>
        </div>

        {currentRole?.current && (
          <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0 mt-2" />
        )}
      </div>

      {/* View Details Button */}
      <div className="mt-4">
        <button className="inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-xs font-medium w-full sm:w-auto">
          View Details
        </button>
      </div>
    </div>
  )
}

// Featured company showcase
export function CompanyCardFeatured({ company, experiences = [], index = 0 }) {
  const currentRole = experiences.find(exp => exp.current) || experiences[0]
  const allTechnologies = [...new Set(experiences.flatMap(exp => exp.stack || []))]
  
  return (
    <div className="group py-8 sm:py-12 px-4 sm:px-0 border-b-2 border-slate-200 last:border-b-0 bg-white">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8 gap-4">
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
            {company}
          </h3>
          <p className="text-lg sm:text-xl text-slate-800 font-semibold mb-1">
            {currentRole?.role}
          </p>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {currentRole?.period}
          </p>
        </div>
        
        {currentRole?.current && (
          <span className="text-sm font-bold text-green-800 bg-green-100 px-4 py-2 rounded-full w-fit">
            Current Position
          </span>
        )}
      </div>

      {/* Key Achievement */}
      {currentRole?.bullets && currentRole.bullets[0] && (
        <div className="mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed max-w-3xl">
            • {currentRole.bullets[0]}
          </p>
        </div>
      )}

      {/* Technologies */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-wrap gap-2">
          {allTechnologies.slice(0, 10).map((tech) => (
            <span
              key={tech}
              className="text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {currentRole?.website && (
          <a
            href={currentRole.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
          >
            Visit Company
          </a>
        )}
        <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 text-slate-800 rounded-full hover:bg-slate-50 hover:border-blue-300 transition-colors duration-200 text-sm font-medium">
          View All Roles
        </button>
      </div>
    </div>
  )
}

// Statistics card for companies overview
export function CompanyStats({ companies }) {
  const totalCompanies = companies.length
  const currentCompanies = companies.filter(comp => 
    comp.experiences?.some(exp => exp.current)
  ).length
  const totalYears = companies.reduce((acc, comp) => acc + (comp.experiences?.length || 0), 0)
  const allTechs = [...new Set(companies.flatMap(comp => 
    comp.experiences?.flatMap(exp => exp.stack || []) || []
  ))].length

  const stats = [
    { label: 'Companies', value: totalCompanies },
    { label: 'Current Roles', value: currentCompanies },
    { label: 'Total Positions', value: totalYears },
    { label: 'Technologies', value: `${allTechs}+` }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 py-8 sm:py-12 px-4 sm:px-0 border-b-2 border-slate-200 bg-white">
      {stats.map((stat, index) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm text-slate-700 font-semibold">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}