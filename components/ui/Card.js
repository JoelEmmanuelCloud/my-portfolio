'use client'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Card = forwardRef(({
  className,
  variant = 'default',
  padding = 'default',
  shadow = 'default',
  hover = false,
  children,
  ...props
}, ref) => {
  const baseStyles = 'bg-white border border-gray-200 rounded-lg transition-all duration-200'
  
  const variants = {
    default: 'bg-white border-gray-200',
    glass: 'bg-white/80 backdrop-blur-sm border-gray-200/50',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border-gray-200',
    dark: 'bg-gray-900 border-gray-700 text-white',
    outline: 'bg-transparent border-2 border-gray-300',
    elevated: 'bg-white border-0 shadow-lg'
  }
  
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }
  
  const shadows = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    default: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }
  
  const hoverEffects = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : ''
  
  const classes = cn(
    baseStyles,
    variants[variant],
    paddings[padding],
    shadows[shadow],
    hoverEffects,
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
    'flex flex-col space-y-1.5 mb-6',
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
    'text-xl font-semibold leading-none tracking-tight text-gray-900',
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
    'text-sm text-gray-600',
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
  const classes = cn('', className)
  
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
    'flex items-center justify-between mt-6 pt-6 border-t border-gray-200',
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
export const GlassCard = ({ children, ...props }) => (
  <Card variant="glass" shadow="lg" {...props}>
    {children}
  </Card>
)

export const ProjectCard = ({ children, ...props }) => (
  <Card hover shadow="default" {...props}>
    {children}
  </Card>
)

export const FeatureCard = ({ children, ...props }) => (
  <Card variant="gradient" padding="lg" shadow="lg" {...props}>
    {children}
  </Card>
)