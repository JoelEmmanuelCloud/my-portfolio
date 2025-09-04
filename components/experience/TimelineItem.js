'use client'
import { useState } from 'react'
import { ExternalLink, MapPin } from 'lucide-react'

export default function TimelineItem({ 
  experience, 
  index = 0, 
  isLast = false,
  variant = 'default' 
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isCompact = variant === 'compact'
  const isCurrent = experience.current

  return (
    <div className="relative px-4 sm:px-0">
      {/* Timeline Line - Hidden on mobile, visible on tablet+ */}
      <div className="hidden sm:block absolute left-6 top-0 w-px bg-slate-300 h-full">
        {!isLast && (
          <div className="absolute top-12 left-0 w-px bg-slate-400 h-full" />
        )}
      </div>

      {/* Timeline Dot - Hidden on mobile, visible on tablet+ */}
      <div className="hidden sm:block absolute left-6 top-6 transform -translate-x-1/2">
        <div className={`w-3 h-3 rounded-full ${
          isCurrent ? 'bg-blue-600' : 'bg-slate-500'
        }`} />
      </div>

      {/* Mobile indicator */}
      <div className="sm:hidden flex items-center gap-3 mb-4">
        <div className={`w-2 h-2 rounded-full ${
          isCurrent ? 'bg-blue-600' : 'bg-slate-500'
        }`} />
        <div className="flex-1 h-px bg-slate-300" />
      </div>

      {/* Content */}
      <div className="sm:ml-16 pb-8 sm:pb-12">
        <div className={`${isCurrent ? 'bg-blue-50 border border-blue-200' : 'bg-white'} p-4 sm:p-6 sm:-ml-6 rounded-lg shadow-sm`}>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900">
                  {experience.role}
                </h3>
                {isCurrent && (
                  <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full w-fit">
                    Current
                  </span>
                )}
              </div>
              
              <div className="space-y-2 text-sm text-slate-700">
                <p className="font-medium text-base">{experience.company}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-600">
                  <span className="font-medium">{experience.period}</span>
                  {experience.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* External Link */}
            {experience.website && (
              <div className="flex justify-end sm:justify-start">
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>

          {/* Technology Stack */}
          {experience.stack && experience.stack.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {experience.stack.slice(0, isCompact ? 4 : 8).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {experience.stack.length > (isCompact ? 4 : 8) && (
                  <span className="text-xs font-medium text-slate-600 px-3 py-1.5">
                    +{experience.stack.length - (isCompact ? 4 : 8)} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Achievements/Bullets */}
          {experience.bullets && experience.bullets.length > 0 && (
            <div className="space-y-3">
              {(isExpanded || isCompact ? experience.bullets : experience.bullets.slice(0, 2)).map((bullet, bulletIndex) => (
                <div key={bulletIndex}>
                  <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                    • {bullet}
                  </p>
                </div>
              ))}
              
              {/* Expand/Collapse Button */}
              {!isCompact && experience.bullets.length > 2 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm font-medium mt-3"
                >
                  {isExpanded ? 'Show less' : `Show ${experience.bullets.length - 2} more`}
                </button>
              )}
            </div>
          )}

          {/* Additional Info */}
          {experience.description && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                {experience.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Compact version for sidebar or summary views
export function TimelineItemCompact({ experience, index = 0 }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 border-b border-slate-200 last:border-b-0 hover:bg-blue-50 transition-colors duration-200 bg-white">
      <div className="flex-shrink-0 mt-2">
        <div className={`w-2.5 h-2.5 rounded-full ${
          experience.current ? 'bg-blue-600' : 'bg-slate-500'
        }`} />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-1 truncate">
          {experience.role}
        </h4>
        <p className="text-xs sm:text-sm text-slate-700 font-medium truncate">
          {experience.company}
        </p>
        <p className="text-xs text-slate-600 mt-1 font-medium">
          {experience.period}
        </p>
        
        {experience.stack && (
          <div className="mt-2 flex flex-wrap gap-1">
            {experience.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="mt-3">
          <button className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-xs font-medium">
            View Details
          </button>
        </div>
      </div>
      
      {experience.website && (
        <a
          href={experience.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-slate-600 hover:text-blue-600 transition-colors duration-200 mt-1"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  )
}

// Horizontal version for timeline layouts
export function TimelineItemHorizontal({ experience, index = 0 }) {
  return (
    <div className="relative w-full sm:min-w-80 sm:max-w-sm">
      <div className={`p-4 sm:p-6 border-2 border-slate-300 hover:border-blue-300 transition-colors duration-200 rounded-lg ${
        experience.current ? 'bg-blue-50 border-blue-200' : 'bg-white'
      } shadow-sm`}>
        {/* Period Badge */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
            {experience.period}
          </span>
          {experience.current && (
            <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1.5 rounded-full">
              Current
            </span>
          )}
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
            {experience.role}
          </h3>
          <p className="text-sm sm:text-base text-slate-700 font-medium mb-2">
            {experience.company}
          </p>
          
          {experience.location && (
            <div className="flex items-center gap-1 text-sm text-slate-600 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">{experience.location}</span>
            </div>
          )}

          {experience.bullets && experience.bullets.length > 0 && (
            <div className="space-y-2 mb-4">
              {experience.bullets.slice(0, 2).map((bullet, bulletIndex) => (
                <p key={bulletIndex} className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  • {bullet.length > 80 ? `${bullet.substring(0, 80)}...` : bullet}
                </p>
              ))}
            </div>
          )}

          {experience.stack && (
            <div className="flex flex-wrap gap-1 mb-4">
              {experience.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-xs font-medium flex-1 sm:flex-none">
              View Details
            </button>
            {experience.website && (
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 border-2 border-slate-300 text-slate-700 rounded-full hover:bg-slate-50 hover:border-blue-300 transition-colors duration-200 text-xs font-medium flex-1 sm:flex-none"
              >
                Visit Company
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Stats version for overview
export function TimelineStats({ experiences }) {
  const totalYears = experiences.reduce((acc, exp) => {
    if (exp.current) return acc + 1 // Approximate current role as 1 year
    return acc + 1
  }, 0)

  const companies = experiences.length
  const currentRoles = experiences.filter(exp => exp.current).length
  const technologies = [...new Set(experiences.flatMap(exp => exp.stack || []))].length

  const stats = [
    { label: 'Years Experience', value: `${totalYears}+` },
    { label: 'Companies', value: companies },
    { label: 'Current Roles', value: currentRoles },
    { label: 'Technologies', value: `${technologies}+` }
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