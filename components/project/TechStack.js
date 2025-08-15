'use client'

// Minimal technology stack component with clean design
export default function TechStack({ 
  technologies = [], 
  limit = 6, 
  size = 'md',
  showCount = true,
  className = ''
}) {
  if (!technologies || technologies.length === 0) {
    return null
  }

  const displayedTech = technologies.slice(0, limit)
  const remainingCount = technologies.length - limit
  
  const sizeClasses = {
    xs: 'text-xs px-2 py-1',
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-sm px-4 py-2'
  }

  const containerClass = `flex flex-wrap gap-2 ${className}`
  const baseClass = `inline-block rounded border border-gray-200 bg-gray-50 text-gray-700 font-medium transition-colors hover:bg-gray-100 ${sizeClasses[size]}`

  return (
    <div className={containerClass}>
      {displayedTech.map((tech) => (
        <span key={tech} className={baseClass}>
          {tech}
        </span>
      ))}
      
      {remainingCount > 0 && showCount && (
        <span className={`${baseClass} text-gray-500`}>
          +{remainingCount} more
        </span>
      )}
    </div>
  )
}

// Grouped version for categories
export function TechStackGrouped({ technologies }) {
  if (!technologies || typeof technologies !== 'object') {
    return null
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {Object.entries(technologies).map(([category, techs]) => (
        <div key={category} className="space-y-2">
          <h4 className="text-xs sm:text-sm font-medium text-gray-900 uppercase tracking-wide">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h4>
          <TechStack 
            technologies={techs} 
            limit={12}
            size="sm"
            showCount={false}
          />
        </div>
      ))}
    </div>
  )
}

// Simple inline version
export function TechStackInline({ technologies, maxItems = 3 }) {
  if (!technologies || technologies.length === 0) {
    return null
  }

  const displayedTech = technologies.slice(0, maxItems)
  const remaining = technologies.length - maxItems

  return (
    <span className="text-xs sm:text-sm text-gray-600">
      {displayedTech.join(' • ')}
      {remaining > 0 && (
        <span className="text-gray-400"> (+{remaining} more)</span>
      )}
    </span>
  )
}

// Compact version with oval buttons for mobile
export function TechStackCompact({ technologies, limit = 4, onViewAll }) {
  if (!technologies || technologies.length === 0) {
    return null
  }

  const displayedTech = technologies.slice(0, limit)
  const remainingCount = technologies.length - limit

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {displayedTech.map((tech) => (
          <span 
            key={tech} 
            className="inline-block text-xs px-2 py-1 rounded border border-gray-200 bg-gray-50 text-gray-700 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {remainingCount > 0 && onViewAll && (
        <button
          onClick={onViewAll}
          className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
        >
          View All {technologies.length} Technologies
        </button>
      )}
    </div>
  )
}