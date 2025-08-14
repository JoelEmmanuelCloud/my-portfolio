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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 hover:shadow-lg transform hover:-translate-y-0.5',
    outline: 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    white: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 hover:shadow-lg transform hover:-translate-y-0.5'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg',
    xl: 'px-10 py-5 text-xl rounded-xl',
    icon: 'p-2 rounded-lg'
  }
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    loading && 'cursor-wait',
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
          Loading...
        </>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
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

export const GradientButton = ({ children, ...props }) => (
  <Button variant="gradient" {...props}>{children}</Button>
)