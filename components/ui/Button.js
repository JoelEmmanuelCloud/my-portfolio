'use client'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Button = forwardRef(({
  className,
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 border border-blue-600 shadow-sm',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 active:bg-blue-100 shadow-sm',
    outline: 'bg-white text-slate-900 border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 active:border-blue-700 shadow-sm',
    ghost: 'bg-transparent text-slate-900 hover:bg-blue-50 hover:text-blue-600 border-none',
    minimal: 'bg-transparent text-blue-600 hover:text-blue-700 border-none underline-offset-4 hover:underline font-normal',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 border border-red-600 shadow-sm',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 border border-green-600 shadow-sm',
    white: 'bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-300 shadow-md hover:shadow-lg',
    link: 'bg-transparent text-blue-600 hover:text-blue-700 p-0 h-auto font-normal underline-offset-4 hover:underline'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md min-h-[32px]',
    md: 'px-4 py-2 text-base rounded-lg min-h-[40px] sm:px-6 sm:py-3',
    lg: 'px-6 py-3 text-lg rounded-lg min-h-[48px] sm:px-8 sm:py-4',
    xl: 'px-8 py-4 text-xl rounded-xl min-h-[56px] sm:px-10 sm:py-5',
    icon: 'p-2 rounded-lg min-h-[40px] min-w-[40px] sm:p-3'
  }
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    loading && 'cursor-wait',
    'touch-manipulation select-none', // Mobile optimization
    className
  )
  
  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
          <span className="hidden sm:inline">Loading...</span>
          <span className="sm:hidden">...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="mr-1.5 sm:mr-2 flex-shrink-0">{leftIcon}</span>}
          <span className="truncate">{children}</span>
          {rightIcon && <span className="ml-1.5 sm:ml-2 flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button

// Preset button components for common use cases
export const PrimaryButton = ({ children, ...props }) => (
  <Button variant="primary" {...props}>{children}</Button>
)

export const SecondaryButton = ({ children, ...props }) => (
  <Button variant="secondary" {...props}>{children}</Button>
)

export const OutlineButton = ({ children, ...props }) => (
  <Button variant="outline" {...props}>{children}</Button>
)

export const GhostButton = ({ children, ...props }) => (
  <Button variant="ghost" {...props}>{children}</Button>
)

export const MinimalButton = ({ children, ...props }) => (
  <Button variant="minimal" {...props}>{children}</Button>
)

export const LinkButton = ({ children, ...props }) => (
  <Button variant="link" {...props}>{children}</Button>
)