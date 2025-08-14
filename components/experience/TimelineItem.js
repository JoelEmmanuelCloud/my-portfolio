'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, MapPin, Calendar, ChevronDown, ChevronUp, Building } from 'lucide-react'
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
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 w-px bg-gradient-to-b from-blue-200 to-gray-200 h-full">
        {!isLast && (
          <div className="absolute top-12 left-0 w-px bg-gradient-to-b from-blue-400 to-blue-200 h-full" />
        )}
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-0 top-6 transform -translate-x-1/2">
        <div className={`w-4 h-4 rounded-full border-4 ${
          isCurrent 
            ? 'bg-blue-600 border-blue-200 shadow-lg shadow-blue-600/30' 
            : 'bg-white border-blue-300'
        }`}>
          {isCurrent && (
            <div className="absolute inset-1 bg-white rounded-full animate-pulse" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="ml-8 pb-8">
        <motion.div
          layout
          className={`bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 ${
            isCurrent ? 'ring-2 ring-blue-500/20 border-blue-200' : ''
          }`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {experience.role}
                </h3>
                {isCurrent && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    Current
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <Building className="h-4 w-4" />
                  <span className="font-medium text-blue-600">{experience.company}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.period}</span>
                </div>
                
                {experience.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* External Link */}
            {experience.website && (
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Technology Stack */}
          {experience.stack && experience.stack.length > 0 && (
            <div className="mb-4">
              <TechStack 
                technologies={experience.stack} 
                limit={isCompact ? 4 : 8}
                size="sm"
                animated={false}
              />
            </div>
          )}

          {/* Achievements/Bullets */}
          {experience.bullets && experience.bullets.length > 0 && (
            <div className="space-y-3">
              {(isExpanded || isCompact ? experience.bullets : experience.bullets.slice(0, 2)).map((bullet, bulletIndex) => (
                <motion.div
                  key={bulletIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: bulletIndex * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    {bullet}
                  </p>
                </motion.div>
              ))}
              
              {/* Expand/Collapse Button */}
              {!isCompact && experience.bullets.length > 2 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 mt-3"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show {experience.bullets.length - 2} more
                    </>
                  )}
                </button>
              )}
            </div>
          )}

          {/* Additional Info */}
          {experience.description && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 leading-relaxed">
                {experience.description}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

// Compact version for sidebar or summary views
export function TimelineItemCompact({ experience, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-blue-300 transition-colors duration-200"
    >
      <div className="flex-shrink-0">
        <div className={`w-3 h-3 rounded-full ${
          experience.current ? 'bg-green-500' : 'bg-blue-500'
        }`} />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 truncate">
          {experience.role}
        </h4>
        <p className="text-sm text-blue-600 font-medium">
          {experience.company}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {experience.period}
        </p>
        
        {experience.stack && (
          <div className="mt-2">
            <TechStack 
              technologies={experience.stack.slice(0, 3)} 
              size="xs"
              showCount={false}
              animated={false}
            />
          </div>
        )}
      </div>
      
      {experience.website && (
        <a
          href={experience.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 p-1 text-gray-400 hover:text-blue-600 transition-colors duration-200"
        >
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </motion.div>
  )
}

// Horizontal version for timeline layouts
export function TimelineItemHorizontal({ experience, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative min-w-80 max-w-sm"
    >
      <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
        experience.current 
          ? 'bg-blue-50 border-blue-200 shadow-md' 
          : 'bg-white border-gray-200 hover:border-blue-300'
      }`}>
        {/* Period Badge */}
        <div className="absolute -top-3 left-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
            {experience.period}
          </span>
        </div>

        {/* Current Badge */}
        {experience.current && (
          <div className="absolute -top-3 right-4">
            <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
              Current
            </span>
          </div>
        )}

        <div className="mt-2">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {experience.role}
          </h3>
          <p className="text-blue-600 font-semibold mb-2">
            {experience.company}
          </p>
          
          {experience.location && (
            <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
              <MapPin className="h-3 w-3" />
              <span>{experience.location}</span>
            </div>
          )}

          {experience.bullets && experience.bullets.length > 0 && (
            <div className="space-y-2 mb-4">
              {experience.bullets.slice(0, 2).map((bullet, bulletIndex) => (
                <div key={bulletIndex} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {bullet.length > 80 ? `${bullet.substring(0, 80)}...` : bullet}
                  </p>
                </div>
              ))}
            </div>
          )}

          {experience.stack && (
            <TechStack 
              technologies={experience.stack} 
              limit={4}
              size="xs"
              animated={false}
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Stats version for overview
export function TimelineStats({ experiences }) {
  const totalYears = experiences.reduce((acc, exp) => {
    if (exp.current) return acc + 1 // Approximate current role as 1 year
    // You could add more sophisticated date parsing here
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center p-4 bg-white rounded-lg border border-gray-200"
        >
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}