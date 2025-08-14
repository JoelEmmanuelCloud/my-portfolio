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
  const baseStyles = 'bg-white transition-all duration-300'
  
  const variants = {
    default: 'bg-white border border-gray-200',
    minimal: 'bg-white border-none',
    outline: 'bg-transparent border border-gray-300',
    subtle: 'bg-gray-50 border border-gray-100',
    elevated: 'bg-white border border-gray-200',
    dark: 'bg-gray-900 border border-gray-800 text-white'
  }
  
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  }
  
  const shadows = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    default: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }
  
  const hoverEffects = hover ? 'hover:shadow-lg hover:border-gray-300 cursor-pointer' : ''
  
  const classes = cn(
    baseStyles,
    variants[variant],
    paddings[padding],
    shadows[shadow],
    hoverEffects,
    'rounded-lg',
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
    'flex flex-col space-y-2 mb-6',
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
    'text-xl font-light leading-tight tracking-tight text-gray-900',
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
    'text-sm text-gray-600 font-light',
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
export const MinimalCard = ({ children, ...props }) => (
  <Card variant="minimal" shadow="none" {...props}>
    {children}
  </Card>
)

export const ProjectCard = ({ children, ...props }) => (
  <Card hover shadow="sm" {...props}>
    {children}
  </Card>
)

export const FeatureCard = ({ children, ...props }) => (
  <Card variant="subtle" padding="lg" shadow="sm" {...props}>
    {children}
  </Card>
)

export const SimpleCard = ({ children, ...props }) => (
  <Card variant="default" padding="default" shadow="none" {...props}>
    {children}
  </Card>
)