'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const MotionLink = motion(Link)

const variants = {
  dark: 'bg-ink text-cream border-cream/15 hover:border-cream/30 dark:bg-cream dark:text-ink dark:border-ink/15 dark:hover:border-ink/30',
  light: 'bg-cream text-ink border-ink/15 hover:border-ink/30',
  gold: 'bg-gold text-ink border-ink/10 hover:border-ink/25',
  outline: 'bg-transparent text-ink dark:text-cream border-ink/20 dark:border-cream/20 hover:border-ink/40 dark:hover:border-cream/40',
  'outline-on-dark': 'bg-transparent text-cream border-cream/20 hover:border-cream/40',
  'on-light': 'bg-ink text-cream border-cream/15 hover:border-cream/30',
  'outline-on-light': 'bg-transparent text-ink border-ink/20 hover:border-ink/40',
}

const chipVariants = {
  dark: 'bg-gold text-ink',
  light: 'bg-ink text-cream',
  gold: 'bg-ink text-cream',
  outline: 'bg-ink text-cream dark:bg-cream dark:text-ink',
  'outline-on-dark': 'bg-cream text-ink',
  'on-light': 'bg-gold text-ink',
  'outline-on-light': 'bg-ink text-cream',
}

const sizes = {
  md: {
    container: 'gap-2 py-2.5 pr-5 pl-11 text-sm',
    chip: 'size-8 group-hover:left-[calc(100%-2.25rem)]',
    icon: 'size-4',
    label: 'group-hover:translate-x-4',
  },
  sm: {
    container: 'gap-1.5 py-2 pr-4 pl-9 text-xs',
    chip: 'size-6 group-hover:left-[calc(100%-1.75rem)]',
    icon: 'size-3.5',
    label: 'group-hover:translate-x-3',
  },
}

const tap = { scale: 0.96 }
const hover = { y: -2 }
const spring = { type: 'spring', stiffness: 400, damping: 25 }

const SlideButton = ({
  href,
  children,
  variant = 'dark',
  size = 'md',
  icon: Icon = ArrowUpRight,
  className,
  onClick,
  type,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion()
  const motionProps = shouldReduceMotion ? {} : { whileHover: hover, whileTap: tap, transition: spring }
  const sizing = sizes[size] || sizes.md

  const classes = cn(
    'group relative inline-flex items-center overflow-hidden rounded-lg border font-semibold tracking-tight transition-colors duration-300',
    sizing.container,
    variants[variant],
    className
  )

  const chip = (
    <span
      className={cn(
        'absolute left-1 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-md transition-all duration-400 ease-out group-hover:rotate-[135deg]',
        sizing.chip,
        chipVariants[variant]
      )}
    >
      <Icon className={sizing.icon} strokeWidth={2.25} aria-hidden="true" />
    </span>
  )

  const label = (
    <span className={cn('relative z-0 inline-block transition-transform duration-400 ease-out', sizing.label)}>
      {children}
    </span>
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:')
    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          {...motionProps}
          {...props}
        >
          {chip}
          {label}
        </motion.a>
      )
    }
    return (
      <MotionLink href={href} className={classes} onClick={onClick} {...motionProps} {...props}>
        {chip}
        {label}
      </MotionLink>
    )
  }

  return (
    <motion.button
      type={type || 'button'}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...props}
    >
      {chip}
      {label}
    </motion.button>
  )
}

export default SlideButton
