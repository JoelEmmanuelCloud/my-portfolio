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
  const baseStyles = 'inline-flex items-center font-medium transition-all duration-300 whitespace-nowrap'
  
  const variants = {
    default: 'bg-white text-slate-800 border-2 border-slate-300 shadow-sm',
    primary: 'bg-blue-50 text-blue-700 border-2 border-blue-200',
    secondary: 'bg-purple-50 text-purple-700 border-2 border-purple-200',
    success: 'bg-green-50 text-green-700 border-2 border-green-200',
    warning: 'bg-yellow-50 text-yellow-700 border-2 border-yellow-200',
    danger: 'bg-red-50 text-red-700 border-2 border-red-200',
    info: 'bg-cyan-50 text-cyan-700 border-2 border-cyan-200',
    dark: 'bg-slate-900 text-white border-2 border-slate-700',
    outline: 'bg-white border-2 border-slate-400 text-slate-800',
    minimal: 'bg-white text-slate-700 border-none shadow-sm',
    tech: 'bg-white text-slate-800 border-2 border-slate-300 shadow-md',
    skill: 'bg-white text-slate-800 border-2 border-slate-300 shadow-sm'
  }
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs rounded-full min-h-[20px]',
    md: 'px-3 py-1 text-sm rounded-full min-h-[24px] sm:px-4 sm:py-1.5',
    lg: 'px-4 py-1.5 text-base rounded-full min-h-[32px] sm:px-5 sm:py-2'
  }
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    'touch-manipulation select-none', // Mobile optimization
    className
  )
  
  return (
    <span ref={ref} className={classes} {...props}>
      {icon && <span className="mr-1 sm:mr-1.5 flex-shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
      {removable && onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          className="ml-1 sm:ml-2 hover:bg-slate-200 rounded-full p-0.5 transition-colors duration-200 flex-shrink-0 touch-manipulation"
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
    <div className={cn('flex flex-wrap gap-1.5 sm:gap-2', className)} {...props}>
      {visibleBadges.map((badge, index) => (
        <Badge key={index} {...badge.props}>
          {badge.label}
        </Badge>
      ))}
      {!showMore && remainingCount > 0 && (
        <Badge 
          variant="outline" 
          className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 touch-manipulation"
          onClick={onShowMore}
        >
          +{remainingCount} more
        </Badge>
      )}
    </div>
  )
}