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
  const baseStyles = 'inline-flex items-center font-light transition-all duration-300'
  
  const variants = {
    default: 'bg-gray-50 text-gray-700 border border-gray-200',
    primary: 'bg-blue-50 text-blue-700 border border-blue-200',
    secondary: 'bg-purple-50 text-purple-700 border border-purple-200',
    success: 'bg-green-50 text-green-700 border border-green-200',
    warning: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
    danger: 'bg-red-50 text-red-700 border border-red-200',
    info: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
    dark: 'bg-gray-900 text-white border border-gray-800',
    outline: 'bg-transparent border border-gray-300 text-gray-700',
    minimal: 'bg-transparent text-gray-600 border-none',
    tech: 'bg-white text-gray-800 border border-gray-200 shadow-sm',
    skill: 'bg-gray-50 text-gray-700 border border-gray-200'
  }
  
  const sizes = {
    sm: 'px-3 py-1 text-xs rounded-full',
    md: 'px-4 py-1.5 text-sm rounded-full',
    lg: 'px-5 py-2 text-base rounded-full'
  }
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )
  
  return (
    <span ref={ref} className={classes} {...props}>
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
      {removable && onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          className="ml-2 hover:bg-gray-200 rounded-full p-0.5 transition-colors duration-200"
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

export const MinimalBadge = ({ children, ...props }) => (
  <Badge variant="minimal" size="sm" {...props}>
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
          className="cursor-pointer hover:bg-gray-50"
          onClick={onShowMore}
        >
          +{remainingCount} more
        </Badge>
      )}
    </div>
  )
}