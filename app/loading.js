'use client'

const LoadingSpinner = () => {
  return (
    <div className="inline-block animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-gray-900"></div>
  )
}

const LoadingDots = () => {
  return (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
    </div>
  )
}

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6">
      <div className="text-center max-w-sm mx-auto">
        {/* Large Initial */}
        <div className="mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
            <span className="text-xl sm:text-2xl font-light text-gray-900">JE</span>
          </div>
        </div>

        {/* Loading Text */}
        <h1 className="text-xl sm:text-2xl font-light text-gray-900 mb-2">
          Joel Emmanuel
        </h1>
        
        <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 font-light">
          Loading portfolio...
        </p>

        {/* Mobile-optimized Spinner */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="hidden sm:block">
            <LoadingSpinner />
          </div>
          <div className="sm:hidden">
            <LoadingDots />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-xs mx-auto mb-4">
          <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gray-900 rounded-full"
              style={{ 
                width: '0%',
                animation: 'loading 2s ease-in-out infinite'
              }}
            />
          </div>
        </div>

        {/* Loading percentage (mobile enhancement) */}
        <div className="sm:hidden">
          <p className="text-xs text-gray-400 font-light">
            Please wait...
          </p>
        </div>

        {/* Subtle message for slow connections */}
        <div className="mt-8 sm:mt-12">
          <p className="text-xs text-gray-400 font-light max-w-xs mx-auto leading-relaxed">
            Optimizing experience for your device
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { 
            width: 0%; 
            opacity: 0.5;
          }
          50% { 
            width: 60%; 
            opacity: 1;
          }
          100% { 
            width: 100%; 
            opacity: 0.8;
          }
        }
        
        /* Enhanced mobile animations */
        @media (max-width: 640px) {
          @keyframes loading {
            0% { width: 0%; }
            25% { width: 30%; }
            50% { width: 60%; }
            75% { width: 85%; }
            100% { width: 100%; }
          }
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-spin,
          .animate-pulse {
            animation: none !important;
          }
          
          div[style*="animation"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}