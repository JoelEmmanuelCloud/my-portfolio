'use client'
import { useState, useEffect } from 'react'

// Minimal default spinner - mobile optimized
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
        <p className="mt-3 text-sm text-gray-600 font-light text-center px-4">
          {text}
        </p>
      )}
    </div>
  )
}

// Mobile-optimized dots
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
    <div className={`flex space-x-1 justify-center ${className}`}>
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

// Mobile-friendly skeleton
export function LoadingSkeleton({ 
  lines = 3,
  className = ""
}) {
  return (
    <div className={`animate-pulse p-4 sm:p-0 ${className}`}>
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`h-3 sm:h-4 bg-gray-200 rounded ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Mobile-optimized progress
export function LoadingProgress({ 
  progress = 0,
  text = "Loading...",
  className = ""
}) {
  return (
    <div className={`space-y-3 sm:space-y-4 px-4 sm:px-0 ${className}`}>
      <div className="flex justify-between text-sm text-gray-600 font-light">
        <span className="truncate">{text}</span>
        <span className="ml-2 flex-shrink-0">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 h-1 rounded-full">
        <div
          className="bg-gray-900 h-1 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

// Mobile-optimized overlay
export function LoadingOverlay({ 
  isVisible = false,
  text = "Loading..."
}) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 p-4">
      <div className="text-center max-w-sm">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-600 font-light">{text}</p>
      </div>
    </div>
  )
}

// Mobile-optimized button loading state
export function LoadingButton({ 
  isLoading = false,
  children,
  variant = 'primary', // 'primary', 'secondary'
  className = "",
  ...props
}) {
  const variantClasses = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'border border-gray-300 text-gray-900 hover:bg-gray-50'
  }

  return (
    <button
      disabled={isLoading}
      className={`
        inline-flex items-center justify-center px-6 py-3 rounded-full transition-colors duration-200 text-sm font-medium
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <LoadingSpinner size="sm" className="mr-2" />
      )}
      <span>{children}</span>
    </button>
  )
}

// Mobile-optimized page loader
export function PageLoader({ isLoading = false }) {
  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gray-900 transition-all duration-300 ease-out" 
        style={{ 
          width: '30%',
          animation: 'loading-slide 2s ease-in-out infinite'
        }} 
      />
      <style jsx>{`
        @keyframes loading-slide {
          0% { transform: translateX(-100%); width: 30%; }
          50% { transform: translateX(0); width: 70%; }
          100% { transform: translateX(100vw); width: 30%; }
        }
      `}</style>
    </div>
  )
}

// Mobile-optimized typing text
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
    <div className={`font-light text-center sm:text-left ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  )
}

// Mobile-first loading card
export function LoadingCard({ 
  title = "Loading...",
  subtitle = "Please wait",
  showButton = false,
  onRetry = null,
  className = ""
}) {
  return (
    <div className={`bg-white p-6 sm:p-8 text-center ${className}`}>
      <LoadingSpinner size="lg" className="mb-4" />
      <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 font-light mb-6">
        {subtitle}
      </p>
      
      {showButton && onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
        >
          Try again
        </button>
      )}
    </div>
  )
}

// Mobile-optimized loading states for forms
export function FormLoadingState({ 
  isLoading = false,
  successMessage = null,
  errorMessage = null,
  onReset = null
}) {
  if (successMessage) {
    return (
      <div className="text-center py-6 sm:py-8">
        <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-light text-gray-900 mb-2">Success!</h3>
        <p className="text-gray-600 font-light mb-6">{successMessage}</p>
        {onReset && (
          <button
            onClick={onReset}
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
          >
            Send another message
          </button>
        )}
      </div>
    )
  }

  if (errorMessage) {
    return (
      <div className="text-center py-6 sm:py-8">
        <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className="text-lg font-light text-gray-900 mb-2">Error</h3>
        <p className="text-gray-600 font-light mb-6">{errorMessage}</p>
        {onReset && (
          <button
            onClick={onReset}
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
          >
            Try again
          </button>
        )}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="text-center py-6 sm:py-8">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-gray-600 font-light">Sending your message...</p>
      </div>
    )
  }

  return null
}

// Mobile-optimized pulse loader
export function PulseLoader({ className = "" }) {
  return (
    <div className={`flex justify-center space-x-2 ${className}`}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"
          style={{
            animationDelay: `${index * 0.1}s`,
            animationDuration: '1.4s'
          }}
        />
      ))}
    </div>
  )
}

// Mobile-optimized slide loader
export function SlideLoader({ className = "" }) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className="w-1 h-8 bg-gray-400 animate-pulse"
          style={{
            animationDelay: `${index * 0.15}s`,
            animationDuration: '1.2s'
          }}
        />
      ))}
    </div>
  )
}

// Mobile-optimized wave loader
export function WaveLoader({ className = "" }) {
  return (
    <div className={`flex items-end space-x-1 ${className}`}>
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className="w-2 bg-gray-400 animate-pulse"
          style={{
            height: `${Math.random() * 20 + 10}px`,
            animationDelay: `${index * 0.1}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  )
}

// Mobile-optimized content placeholder
export function ContentPlaceholder({ 
  avatar = false,
  lines = 3,
  className = ""
}) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="flex space-x-4">
        {avatar && (
          <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
        )}
        <div className="flex-1 space-y-3">
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
    </div>
  )
}

// Mobile-optimized full screen loader
export function FullScreenLoader({ 
  isVisible = false,
  title = "Loading",
  subtitle = "Please wait while we prepare everything for you",
  showProgress = false,
  progress = 0
}) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center p-6">
      <div className="text-center max-w-sm w-full">
        <LoadingSpinner size="xl" className="mb-6" />
        
        <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3">
          {title}
        </h2>
        
        <p className="text-gray-600 font-light mb-6">
          {subtitle}
        </p>
        
        {showProgress && (
          <LoadingProgress 
            progress={progress} 
            text={`${Math.round(progress)}% complete`}
            className="mb-6"
          />
        )}
        
        <LoadingDots className="opacity-50" />
      </div>
    </div>
  )
}