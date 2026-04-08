'use client'

export default function LoadingSpinner({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`${sizeClasses[size] ?? sizeClasses.md} border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin ${className}`}
    />
  )
}
