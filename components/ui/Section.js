'use client'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Section = forwardRef(({
  className,
  variant = 'default',
  padding = 'default',
  background = 'transparent',
  children,
  id,
  ...props
}, ref) => {
  const baseStyles = 'relative w-full'
  
  const variants = {
    default: '',
    hero: 'min-h-screen flex items-center justify-center',
    feature: '',
    cta: 'text-center',
    content: ''
  }
  
  const paddings = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    default: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
    xl: 'py-32 md:py-40'
  }
  
  const backgrounds = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    gray: 'bg-gray-50',
    'gray-light': 'bg-gray-25',
    'gray-subtle': 'bg-gray-100',
    primary: 'bg-gray-900 text-white',
    minimal: 'bg-white border-t border-gray-200'
  }
  
  const classes = cn(
    baseStyles,
    variants[variant],
    paddings[padding],
    backgrounds[background],
    className
  )
  
  return (
    <section ref={ref} id={id} className={classes} {...props}>
      {children}
    </section>
  )
})

Section.displayName = 'Section'

// Section Container Component
const SectionContainer = forwardRef(({
  className,
  size = 'default',
  children,
  ...props
}, ref) => {
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-6xl',
    lg: 'max-w-7xl',
    full: 'max-w-full'
  }
  
  const classes = cn(
    'mx-auto px-6 lg:px-8',
    sizes[size],
    className
  )
  
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

SectionContainer.displayName = 'SectionContainer'

// Section Header Component
const SectionHeader = forwardRef(({
  className,
  title,
  subtitle,
  description,
  centered = false,
  children,
  ...props
}, ref) => {
  const classes = cn(
    'mb-16',
    centered && 'text-center',
    className
  )
  
  return (
    <div ref={ref} className={classes} {...props}>
      {subtitle && (
        <p className="text-sm font-light text-gray-500 uppercase tracking-wide mb-4">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-6">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  )
})

SectionHeader.displayName = 'SectionHeader'

// Section Content Component
const SectionContent = forwardRef(({
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

SectionContent.displayName = 'SectionContent'

// Export all components
export { Section, SectionContainer, SectionHeader, SectionContent }
export default Section

// Preset section components for common use cases
export const HeroSection = ({ children, ...props }) => (
  <Section 
    variant="hero" 
    background="white" 
    padding="lg"
    {...props}
  >
    <SectionContainer>
      {children}
    </SectionContainer>
  </Section>
)

export const FeatureSection = ({ title, description, children, ...props }) => (
  <Section 
    variant="feature" 
    background="gray" 
    padding="default"
    {...props}
  >
    <SectionContainer>
      <SectionHeader title={title} description={description} />
      <SectionContent>
        {children}
      </SectionContent>
    </SectionContainer>
  </Section>
)

export const CTASection = ({ title, description, children, ...props }) => (
  <Section 
    variant="cta" 
    background="primary" 
    padding="default"
    {...props}
  >
    <SectionContainer>
      <SectionHeader title={title} description={description} />
      <SectionContent>
        {children}
      </SectionContent>
    </SectionContainer>
  </Section>
)

export const ContentSection = ({ children, ...props }) => (
  <Section background="white" padding="default" {...props}>
    <SectionContainer>
      {children}
    </SectionContainer>
  </Section>
)

export const MinimalSection = ({ children, ...props }) => (
  <Section background="white" padding="default" {...props}>
    <SectionContainer size="sm">
      {children}
    </SectionContainer>
  </Section>
)