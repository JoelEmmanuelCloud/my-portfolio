'use client'
//components/project/TechStack.js
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
    sm: 'text-xs sm:text-sm px-3 py-2',
    md: 'text-sm px-3 py-2',
    lg: 'text-sm sm:text-base px-4 py-3'
  }

  const containerClass = `flex flex-wrap gap-2 sm:gap-3 ${className}`
  const baseClass = `inline-block rounded border-2 border-black bg-white text-black font-semibold transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 ${sizeClasses[size]}`

  return (
    <div className={containerClass}>
      {displayedTech.map((tech) => (
        <span key={tech} className={baseClass}>
          {tech}
        </span>
      ))}
      
      {remainingCount > 0 && showCount && (
        <span className={`${baseClass} bg-blue-600 text-white border-blue-600`}>
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
    <div className="space-y-6 sm:space-y-8">
      {Object.entries(technologies).map(([category, techs]) => (
        <div key={category} className="space-y-3 sm:space-y-4">
          <h4 className="text-sm sm:text-base font-bold text-black uppercase tracking-wide">
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
    <span className="text-sm sm:text-base text-black font-medium">
      {displayedTech.join(' • ')}
      {remaining > 0 && (
        <span className="text-blue-600 font-semibold"> (+{remaining} more)</span>
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
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {displayedTech.map((tech) => (
          <span 
            key={tech} 
            className="inline-block text-xs sm:text-sm px-3 py-2 rounded border-2 border-black bg-white text-black font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {remainingCount > 0 && onViewAll && (
        <button
          onClick={onViewAll}
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
        >
          View All {technologies.length} Technologies
        </button>
      )}
    </div>
  )
}