'use client'
import { useState, useEffect } from 'react'

// Minimal default spinner
export default function LoadingSpinner({ 
  size = 'md', 
  className = "",
  text = null
}) {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`
          ${sizeClasses[size]} 
          border border-gray-300 border-t-gray-900 rounded-full animate-spin
        `}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="mt-3 text-sm text-gray-600 font-light">
          {text}
        </p>
      )}
    </div>
  )
}

// Minimal dots
export function LoadingDots({ 
  size = 'md',
  className = ""
}) {
  const dotSizes = {
    xs: 'w-1 h-1',
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }

  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`${dotSizes[size]} bg-gray-400 rounded-full animate-pulse`}
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  )
}

// Minimal skeleton
export function LoadingSkeleton({ 
  lines = 3,
  className = ""
}) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`h-4 bg-gray-200 rounded ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Minimal progress
export function LoadingProgress({ 
  progress = 0,
  text = "Loading...",
  className = ""
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex justify-between text-sm text-gray-600 font-light">
        <span>{text}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 h-0.5">
        <div
          className="bg-gray-900 h-0.5 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

// Minimal overlay
export function LoadingOverlay({ 
  isVisible = false,
  text = "Loading..."
}) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-600 font-light">{text}</p>
      </div>
    </div>
  )
}

// Minimal button loading state
export function LoadingButton({ 
  isLoading = false,
  children,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={isLoading}
      className={`flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {isLoading && <LoadingSpinner size="sm" />}
      <span>{children}</span>
    </button>
  )
}

// Minimal page loader
export function PageLoader({ isLoading = false }) {
  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-200 z-50">
      <div className="h-full bg-gray-900 animate-pulse" style={{ width: '30%' }} />
    </div>
  )
}

// Minimal typing text
export function LoadingText({ 
  text = "Loading...",
  className = ""
}) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        index = 0
      }
    }, 150)

    return () => clearInterval(timer)
  }, [text])

  return (
    <div className={`font-light ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  )
}