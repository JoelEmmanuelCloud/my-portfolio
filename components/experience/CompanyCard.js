'use client'
import { useState } from 'react'
import { ExternalLink, MapPin, Calendar, Users, Building2, ChevronDown, ChevronUp } from 'lucide-react'
import TechStack from '../project/TechStack'

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
    <div className={`group border-b border-gray-100 py-6 sm:py-8 px-4 sm:px-0 hover:bg-gray-50/50 transition-colors duration-200 ${
      currentRole?.current ? 'bg-blue-50/20' : ''
    }`}>
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3 sm:gap-4">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
            <h3 className="text-xl sm:text-2xl font-light text-gray-900">
              {company}
            </h3>
            {currentRole?.current && (
              <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded w-fit">
                Current
              </span>
            )}
          </div>
          
          <p className="text-sm sm:text-base text-gray-600 font-light mb-2">
            {currentRole?.role}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500">
            <span>{currentRole?.period || 'Period not specified'}</span>
            
            {currentRole?.location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {currentRole.location}
              </span>
            )}
            
            {hasMultipleRoles && (
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3" />
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
              className="inline-flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>

      {/* Key Achievements */}
      {currentRole?.bullets && currentRole.bullets.length > 0 && (
        <div className="mb-4 sm:mb-6">
          {(isExpanded ? currentRole.bullets : currentRole.bullets.slice(0, isCompact ? 1 : 2)).map((bullet, bulletIndex) => (
            <div key={bulletIndex} className="mb-2 last:mb-0">
              <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                — {isCompact && bullet.length > 80 ? `${bullet.substring(0, 80)}...` : bullet}
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
              className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200 text-sm font-light mt-3"
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
                className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {allTechnologies.length > (isCompact ? 4 : 8) && (
              <span className="text-xs font-light text-gray-500 px-2 py-1">
                +{allTechnologies.length - (isCompact ? 4 : 8)} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Multiple Roles */}
      {hasMultipleRoles && !isCompact && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm font-light text-gray-500 mb-3">All positions</p>
          <div className="space-y-2">
            {experiences.map((exp, expIndex) => (
              <div key={expIndex} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                <span className="text-sm text-gray-600 font-light">{exp.role}</span>
                <span className="text-gray-400 text-xs">{exp.period}</span>
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
    <div className="group p-4 sm:p-6 border border-gray-100 hover:border-gray-200 transition-colors duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h4 className="text-base sm:text-lg font-light text-gray-900 mb-1 truncate">
            {company}
          </h4>
          <p className="text-sm text-gray-600 font-light mb-1 truncate">
            {currentRole?.role}
          </p>
          <p className="text-xs text-gray-400">
            {currentRole?.period}
          </p>
        </div>

        {currentRole?.current && (
          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2" />
        )}
      </div>

      {/* View Details Button */}
      <div className="mt-4">
        <button className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-xs font-medium w-full sm:w-auto">
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
    <div className="group py-8 sm:py-12 px-4 sm:px-0 border-b border-gray-100 last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8 gap-4">
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-2">
            {company}
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 font-light mb-1">
            {currentRole?.role}
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            {currentRole?.period}
          </p>
        </div>
        
        {currentRole?.current && (
          <span className="text-sm font-light text-green-700 bg-green-100 px-3 py-1 rounded w-fit">
            Current Position
          </span>
        )}
      </div>

      {/* Key Achievement */}
      {currentRole?.bullets && currentRole.bullets[0] && (
        <div className="mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed max-w-3xl">
            — {currentRole.bullets[0]}
          </p>
        </div>
      )}

      {/* Technologies */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-wrap gap-2">
          {allTechnologies.slice(0, 10).map((tech) => (
            <span
              key={tech}
              className="text-sm font-light text-gray-600 bg-gray-100 px-3 py-1 rounded"
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
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
          >
            Visit Company
          </a>
        )}
        <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 py-8 sm:py-12 px-4 sm:px-0 border-b border-gray-100">
      {stats.map((stat, index) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm text-gray-500 font-light">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}