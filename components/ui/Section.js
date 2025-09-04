'use client'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Section = forwardRef(({
  className,
  variant = 'default',
  padding = 'default',
  background = 'white',
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
    sm: 'py-6 sm:py-8 md:py-12',
    default: 'py-12 sm:py-16 md:py-20 lg:py-24',
    lg: 'py-16 sm:py-20 md:py-24 lg:py-32',
    xl: 'py-20 sm:py-24 md:py-32 lg:py-40'
  }
  
  const backgrounds = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    'white-subtle': 'bg-slate-50',
    primary: 'bg-slate-900 text-white',
    minimal: 'bg-white border-t-2 border-slate-200'
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
    sm: 'max-w-3xl',
    default: 'max-w-6xl',
    lg: 'max-w-7xl',
    full: 'max-w-full'
  }
  
  const classes = cn(
    'mx-auto px-4 sm:px-6 lg:px-8',
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
    'mb-12 sm:mb-16',
    centered && 'text-center',
    className
  )
  
  return (
    <div ref={ref} className={classes} {...props}>
      {subtitle && (
        <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3 sm:mb-4">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6 leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-none sm:max-w-3xl mx-auto">
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
  const classes = cn('text-slate-800', className)
  
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
    background="white-subtle" 
    padding="default"
    {...props}
  >
    <SectionContainer>
      <SectionHeader title={title} description={description} centered />
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
      <SectionHeader title={title} description={description} centered />
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