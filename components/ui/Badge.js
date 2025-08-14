'use client'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Badge = forwardRef(({
  className,
  variant = 'default',
  size = 'md',
  children,
  icon,
  removable = false,
  onRemove,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center font-medium transition-all duration-200'
  
  const variants = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    primary: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    secondary: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    success: 'bg-green-100 text-green-800 hover:bg-green-200',
    warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    danger: 'bg-red-100 text-red-800 hover:bg-red-200',
    info: 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200',
    dark: 'bg-gray-800 text-white hover:bg-gray-700',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50',
    gradient: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700',
    tech: 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100',
    skill: 'bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100'
  }
  
  const sizes = {
    sm: 'px-2 py-1 text-xs rounded-md',
    md: 'px-3 py-1 text-sm rounded-md',
    lg: 'px-4 py-2 text-base rounded-lg'
  }
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )
  
  return (
    <span ref={ref} className={classes} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
      {removable && onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          className="ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors duration-200"
          aria-label="Remove"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  )
})

Badge.displayName = 'Badge'

export default Badge

// Preset badge components for common use cases
export const TechBadge = ({ children, ...props }) => (
  <Badge variant="tech" size="sm" {...props}>
    {children}
  </Badge>
)

export const SkillBadge = ({ children, ...props }) => (
  <Badge variant="skill" size="md" {...props}>
    {children}
  </Badge>
)

export const StatusBadge = ({ status, ...props }) => {
  const statusVariants = {
    active: 'success',
    inactive: 'danger',
    pending: 'warning',
    completed: 'success',
    draft: 'default'
  }
  
  return (
    <Badge variant={statusVariants[status] || 'default'} {...props}>
      {status}
    </Badge>
  )
}

export const PriorityBadge = ({ priority, ...props }) => {
  const priorityConfig = {
    high: { variant: 'danger', text: 'High Priority' },
    medium: { variant: 'warning', text: 'Medium Priority' },
    low: { variant: 'success', text: 'Low Priority' }
  }
  
  const config = priorityConfig[priority] || { variant: 'default', text: 'Unknown' }
  
  return (
    <Badge variant={config.variant} {...props}>
      {config.text}
    </Badge>
  )
}

// Badge group component for multiple badges
export const BadgeGroup = ({ 
  badges = [], 
  className,
  maxVisible = 6,
  showMore = false,
  onShowMore,
  ...props 
}) => {
  const visibleBadges = showMore ? badges : badges.slice(0, maxVisible)
  const remainingCount = badges.length - maxVisible
  
  return (
    <div className={cn('flex flex-wrap gap-2', className)} {...props}>
      {visibleBadges.map((badge, index) => (
        <Badge key={index} {...badge.props}>
          {badge.label}
        </Badge>
      ))}
      {!showMore && remainingCount > 0 && (
        <Badge 
          variant="outline" 
          className="cursor-pointer"
          onClick={onShowMore}
        >
          +{remainingCount} more
        </Badge>
      )}
    </div>
  )
}