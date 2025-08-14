'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, MapPin, Calendar, Users, Building2, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
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
  
  // Calculate total duration (simplified)
  const totalDuration = experiences.reduce((total, exp) => {
    // This is a simplified calculation - you might want to implement proper date parsing
    if (exp.current) return total + " - Present"
    return total
  }, "")

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 ${
        currentRole?.current ? 'ring-2 ring-blue-500/20 border-blue-200' : ''
      }`}
    >
      {/* Current Badge */}
      {currentRole?.current && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            Current
          </span>
        </div>
      )}

      {/* Company Logo Placeholder */}
      <div className="relative h-24 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
          <Building2 className="h-8 w-8 text-blue-600" />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
              {company}
            </h3>
            
            <div className="space-y-1">
              <p className="text-sm font-medium text-blue-600">
                {currentRole?.role}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{currentRole?.period || 'Period not specified'}</span>
                </div>
                
                {currentRole?.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{currentRole.location}</span>
                  </div>
                )}
                
                {hasMultipleRoles && (
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{totalRoles} role{totalRoles > 1 ? 's' : ''}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* External Link */}
          {currentRole?.website && (
            <a
              href={currentRole.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Key Achievements Preview */}
        {currentRole?.bullets && currentRole.bullets.length > 0 && (
          <div className="mb-4">
            {(isExpanded ? currentRole.bullets : currentRole.bullets.slice(0, isCompact ? 1 : 2)).map((bullet, bulletIndex) => (
              <motion.div
                key={bulletIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: bulletIndex * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 mb-3 last:mb-0"
              >
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  {isCompact && bullet.length > 100 ? `${bullet.substring(0, 100)}...` : bullet}
                </p>
              </motion.div>
            ))}
            
            {/* Expand button for current role */}
            {!isCompact && currentRole.bullets.length > 2 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsExpanded(!isExpanded)
                }}
                className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 mt-2"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="h-3 w-3" />
                    Show less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-3 w-3" />
                    Show {currentRole.bullets.length - 2} more
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Technology Stack */}
        {allTechnologies.length > 0 && (
          <div className="mb-4">
            <TechStack 
              technologies={allTechnologies} 
              limit={isCompact ? 4 : 8}
              size="sm"
              animated={false}
            />
          </div>
        )}

        {/* Multiple Roles Indicator */}
        {hasMultipleRoles && !isCompact && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">All Roles</h4>
            <div className="space-y-1">
              {experiences.map((exp, expIndex) => (
                <div key={expIndex} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{exp.role}</span>
                  <span className="text-gray-500 text-xs">{exp.period}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            {currentRole?.website && (
              <a
                href={currentRole.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                Visit Company
              </a>
            )}
          </div>
          
          {hasMultipleRoles && (
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Users className="h-3 w-3" />
              {totalRoles} positions
            </span>
          )}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

// Compact grid version
export function CompanyCardCompact({ company, experiences = [], index = 0 }) {
  const currentRole = experiences.find(exp => exp.current) || experiences[0]
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className="group p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <Building2 className="h-5 w-5 text-blue-600" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors duration-200">
            {company}
          </h4>
          <p className="text-sm text-blue-600 font-medium truncate">
            {currentRole?.role}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {currentRole?.period}
          </p>
        </div>

        {currentRole?.current && (
          <div className="flex-shrink-0">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        )}
      </div>
    </motion.div>
  )
}

// Featured company showcase
export function CompanyCardFeatured({ company, experiences = [], index = 0 }) {
  const currentRole = experiences.find(exp => exp.current) || experiences[0]
  const allTechnologies = [...new Set(experiences.flatMap(exp => exp.stack || []))]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-blue-50/50 border border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16" />
      
      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {company}
            </h3>
            <p className="text-blue-600 font-semibold text-lg">
              {currentRole?.role}
            </p>
            <p className="text-gray-600 mt-1">
              {currentRole?.period}
            </p>
          </div>
          
          {currentRole?.current && (
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
              Current Position
            </span>
          )}
        </div>

        {/* Key Achievement */}
        {currentRole?.bullets && currentRole.bullets[0] && (
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              {currentRole.bullets[0]}
            </p>
          </div>
        )}

        {/* Technologies */}
        <TechStack 
          technologies={allTechnologies} 
          variant="prominent"
          limit={10}
          animated={false}
        />

        {/* External Link */}
        {currentRole?.website && (
          <div className="mt-8">
            <a
              href={currentRole.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Visit Company
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
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
    { label: 'Companies', value: totalCompanies, icon: Building2 },
    { label: 'Current Roles', value: currentCompanies, icon: Users },
    { label: 'Total Positions', value: totalYears, icon: Calendar },
    { label: 'Technologies', value: `${allTechs}+`, icon: ArrowRight }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <stat.icon className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
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