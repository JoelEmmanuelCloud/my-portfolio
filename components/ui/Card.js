'use client'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Card = forwardRef(({
  className,
  variant = 'default',
  padding = 'default',
  shadow = 'none',
  hover = false,
  children,
  ...props
}, ref) => {
  const baseStyles = 'bg-white transition-all duration-300 rounded-lg'
  
  const variants = {
    default: 'bg-white border-2 border-slate-200',
    minimal: 'bg-white border-none',
    outline: 'bg-white border-2 border-slate-300',
    subtle: 'bg-white border-2 border-slate-100',
    elevated: 'bg-white border border-slate-200',
    dark: 'bg-slate-900 border-2 border-slate-700 text-white'
  }
  
  const paddings = {
    none: 'p-0',
    sm: 'p-3 sm:p-4',
    default: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
    xl: 'p-8 sm:p-12'
  }
  
  const shadows = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    default: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }
  
  const hoverEffects = hover ? 'hover:shadow-lg hover:border-blue-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0' : ''
  
  const classes = cn(
    baseStyles,
    variants[variant],
    paddings[padding],
    shadows[shadow],
    hoverEffects,
    'overflow-hidden', // Mobile optimization
    className
  )
  
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

Card.displayName = 'Card'

// Card Header Component
const CardHeader = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const classes = cn(
    'flex flex-col space-y-2 mb-4 sm:mb-6',
    className
  )
  
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

CardHeader.displayName = 'CardHeader'

// Card Title Component
const CardTitle = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const classes = cn(
    'text-lg sm:text-xl font-semibold leading-tight tracking-tight text-slate-900',
    className
  )
  
  return (
    <h3 ref={ref} className={classes} {...props}>
      {children}
    </h3>
  )
})

CardTitle.displayName = 'CardTitle'

// Card Description Component
const CardDescription = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const classes = cn(
    'text-sm sm:text-base text-slate-700 leading-relaxed',
    className
  )
  
  return (
    <p ref={ref} className={classes} {...props}>
      {children}
    </p>
  )
})

CardDescription.displayName = 'CardDescription'

// Card Content Component
const CardContent = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const classes = cn('text-slate-800', className)
  
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

CardContent.displayName = 'CardContent'

// Card Footer Component
const CardFooter = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const classes = cn(
    'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-slate-200',
    className
  )
  
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

CardFooter.displayName = 'CardFooter'

// Export all components
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export default Card

// Preset card components for common use cases
export const MinimalCard = ({ children, ...props }) => (
  <Card variant="minimal" shadow="sm" {...props}>
    {children}
  </Card>
)

export const ProjectCard = ({ children, ...props }) => (
  <Card hover shadow="md" className="border-slate-200 hover:border-blue-200" {...props}>
    {children}
  </Card>
)

export const FeatureCard = ({ children, ...props }) => (
  <Card variant="subtle" padding="lg" shadow="sm" className="border-slate-100" {...props}>
    {children}
  </Card>
)

export const SimpleCard = ({ children, ...props }) => (
  <Card variant="default" padding="default" shadow="sm" {...props}>
    {children}
  </Card>
)