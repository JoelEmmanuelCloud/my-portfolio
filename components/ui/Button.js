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
  const baseStyles = 'inline-flex items-center justify-center font-light transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 border border-gray-900',
    secondary: 'bg-transparent text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white',
    outline: 'bg-transparent text-gray-700 border border-gray-300 hover:border-gray-900 hover:text-gray-900',
    ghost: 'bg-transparent text-gray-700 hover:text-gray-900 border-none',
    minimal: 'bg-transparent text-gray-900 hover:text-gray-600 border-none underline-offset-4 hover:underline',
    danger: 'bg-red-600 text-white hover:bg-red-700 border border-red-600',
    success: 'bg-green-600 text-white hover:bg-green-700 border border-green-600',
    white: 'bg-white text-gray-900 border border-gray-200 hover:border-gray-300 shadow-sm',
    link: 'bg-transparent text-gray-900 hover:text-gray-600 p-0 h-auto font-normal underline-offset-4 hover:underline'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg',
    xl: 'px-10 py-5 text-xl rounded-xl',
    icon: 'p-3 rounded-lg'
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

export const MinimalButton = ({ children, ...props }) => (
  <Button variant="minimal" {...props}>{children}</Button>
)

export const LinkButton = ({ children, ...props }) => (
  <Button variant="link" {...props}>{children}</Button>
)