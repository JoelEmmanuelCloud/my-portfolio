'use client'
import { useState } from 'react'
import { ExternalLink, MapPin, Calendar, Building } from 'lucide-react'
import TechStack from '../project/TechStack'

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
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 w-px bg-gray-200 h-full">
        {!isLast && (
          <div className="absolute top-12 left-0 w-px bg-gray-300 h-full" />
        )}
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-6 top-6 transform -translate-x-1/2">
        <div className={`w-3 h-3 rounded-full ${
          isCurrent ? 'bg-gray-900' : 'bg-gray-400'
        }`} />
      </div>

      {/* Content */}
      <div className="ml-16 pb-12">
        <div className={`${isCurrent ? 'bg-gray-50/50' : ''} p-6 -ml-6 rounded-lg`}>
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-light text-gray-900">
                  {experience.role}
                </h3>
                {isCurrent && (
                  <span className="text-xs font-light text-gray-600 bg-gray-200 px-2 py-1 rounded">
                    Current
                  </span>
                )}
              </div>
              
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-light">{experience.company}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{experience.period}</span>
                  {experience.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {experience.location}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* External Link */}
            {experience.website && (
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Technology Stack */}
          {experience.stack && experience.stack.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {experience.stack.slice(0, isCompact ? 4 : 8).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {experience.stack.length > (isCompact ? 4 : 8) && (
                  <span className="text-xs font-light text-gray-500">
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
                  <p className="text-gray-700 font-light leading-relaxed">
                    — {bullet}
                  </p>
                </div>
              ))}
              
              {/* Expand/Collapse Button */}
              {!isCompact && experience.bullets.length > 2 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-sm text-gray-500 hover:text-gray-700 font-light transition-colors duration-200 mt-3"
                >
                  {isExpanded ? 'Show less' : `Show ${experience.bullets.length - 2} more`}
                </button>
              )}
            </div>
          )}

          {/* Additional Info */}
          {experience.description && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-600 font-light leading-relaxed">
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
    <div className="flex items-start gap-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors duration-200">
      <div className="flex-shrink-0 mt-2">
        <div className={`w-2 h-2 rounded-full ${
          experience.current ? 'bg-gray-900' : 'bg-gray-400'
        }`} />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-light text-gray-900 mb-1">
          {experience.role}
        </h4>
        <p className="text-sm text-gray-600 font-light">
          {experience.company}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {experience.period}
        </p>
        
        {experience.stack && (
          <div className="mt-2 flex flex-wrap gap-1">
            {experience.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs font-light text-gray-500 bg-gray-100 px-1 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {experience.website && (
        <a
          href={experience.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  )
}

// Horizontal version for timeline layouts
export function TimelineItemHorizontal({ experience, index = 0 }) {
  return (
    <div className="relative min-w-80 max-w-sm">
      <div className={`p-6 border border-gray-200 hover:border-gray-300 transition-colors duration-200 ${
        experience.current ? 'bg-gray-50/50' : 'bg-white'
      }`}>
        {/* Period Badge */}
        <div className="mb-4">
          <span className="text-xs font-light text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {experience.period}
          </span>
          {experience.current && (
            <span className="ml-2 text-xs font-light text-gray-600 bg-gray-200 px-2 py-1 rounded">
              Current
            </span>
          )}
        </div>

        <div>
          <h3 className="text-lg font-light text-gray-900 mb-1">
            {experience.role}
          </h3>
          <p className="text-gray-600 font-light mb-2">
            {experience.company}
          </p>
          
          {experience.location && (
            <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
              <MapPin className="h-3 w-3" />
              <span className="font-light">{experience.location}</span>
            </div>
          )}

          {experience.bullets && experience.bullets.length > 0 && (
            <div className="space-y-2 mb-4">
              {experience.bullets.slice(0, 2).map((bullet, bulletIndex) => (
                <p key={bulletIndex} className="text-sm text-gray-700 font-light leading-relaxed">
                  — {bullet.length > 80 ? `${bullet.substring(0, 80)}...` : bullet}
                </p>
              ))}
            </div>
          )}

          {experience.stack && (
            <div className="flex flex-wrap gap-1">
              {experience.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-gray-100">
      {stats.map((stat, index) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl font-light text-gray-900 mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-gray-500 font-light">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}