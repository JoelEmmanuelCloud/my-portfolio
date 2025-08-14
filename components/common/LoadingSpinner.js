'use client'
import { motion } from 'framer-motion'

// Default spinner
export default function LoadingSpinner({ 
  size = 'md', 
  color = 'blue',
  className = "",
  text = null
}) {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const colorClasses = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white',
    green: 'border-green-600',
    red: 'border-red-600',
    purple: 'border-purple-600'
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`
          ${sizeClasses[size]} 
          ${colorClasses[color]} 
          border-2 border-t-transparent rounded-full animate-spin
        `}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className={`mt-3 text-sm ${color === 'white' ? 'text-white' : 'text-gray-600'}`}>
          {text}
        </p>
      )}
    </div>
  )
}

// Pulsing dots spinner
export function LoadingDots({ 
  size = 'md',
  color = 'blue',
  className = ""
}) {
  const dotSizes = {
    xs: 'w-1 h-1',
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  }

  const colorClasses = {
    blue: 'bg-blue-600',
    gray: 'bg-gray-600',
    white: 'bg-white',
    green: 'bg-green-600',
    red: 'bg-red-600',
    purple: 'bg-purple-600'
  }

  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${dotSizes[size]} ${colorClasses[color]} rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  )
}

// Bouncing balls spinner
export function LoadingBounce({ 
  size = 'md',
  color = 'blue',
  className = ""
}) {
  const ballSizes = {
    xs: 'w-2 h-2',
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }

  const colorClasses = {
    blue: 'bg-blue-600',
    gray: 'bg-gray-600',
    white: 'bg-white',
    green: 'bg-green-600',
    red: 'bg-red-600',
    purple: 'bg-purple-600'
  }

  return (
    <div className={`flex space-x-1 items-end ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${ballSizes[size]} ${colorClasses[color]} rounded-full`}
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Skeleton loader for content
export function LoadingSkeleton({ 
  lines = 3,
  className = "",
  avatar = false
}) {
  return (
    <div className={`animate-pulse ${className}`}>
      {avatar && (
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`h-4 bg-gray-300 rounded ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Card skeleton loader
export function LoadingCard({ className = "" }) {
  return (
    <div className={`animate-pulse bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
      
      <div className="flex space-x-2">
        <div className="h-6 bg-gray-300 rounded-full w-16"></div>
        <div className="h-6 bg-gray-300 rounded-full w-20"></div>
        <div className="h-6 bg-gray-300 rounded-full w-14"></div>
      </div>
    </div>
  )
}

// Spinner with progress bar
export function LoadingProgress({ 
  progress = 0,
  text = "Loading...",
  className = ""
}) {
  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <LoadingSpinner size="lg" />
      
      <div className="w-full max-w-xs">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>{text}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-blue-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  )
}

// Full screen loading overlay
export function LoadingOverlay({ 
  isVisible = false,
  text = "Loading...",
  backdrop = true
}) {
  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        backdrop ? 'bg-black bg-opacity-50' : ''
      }`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg p-8 shadow-lg max-w-sm mx-4"
      >
        <LoadingSpinner size="lg" text={text} className="text-center" />
      </motion.div>
    </motion.div>
  )
}

// Inline loading states
export function LoadingButton({ 
  isLoading = false,
  children,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={isLoading}
      className={`flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {isLoading && <LoadingSpinner size="sm" color="white" />}
      <span>{children}</span>
    </button>
  )
}

// Page transition loader
export function PageLoader({ isLoading = false }) {
  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50"
    >
      <motion.div
        className="h-full bg-white"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  )
}

// Text loading with typing effect
export function LoadingText({ 
  text = "Loading...",
  className = ""
}) {
  const [displayText, setDisplayText] = useState('')

  React.useEffect(() => {
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
    <div className={`font-mono ${className}`}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </div>
  )
}

// Grid skeleton for loading multiple items
export function LoadingGrid({ 
  items = 6,
  columns = 3,
  className = ""
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`}>
      {Array.from({ length: items }).map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  )
}