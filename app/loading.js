'use client'

const LoadingSpinner = () => {
  return (
    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  )
}

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Large Initial */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-2xl font-light text-gray-900">JE</span>
          </div>
        </div>

        {/* Loading Text */}
        <h1 className="text-2xl font-light text-gray-900 mb-2">
          Joel Emmanuel
        </h1>
        
        <p className="text-gray-500 mb-8 font-light">
          Loading portfolio...
        </p>

        {/* Simple Spinner */}
        <div className="flex justify-center mb-8">
          <LoadingSpinner />
        </div>

        {/* Progress Bar */}
        <div className="max-w-xs mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gray-900 rounded-full animate-pulse"
              style={{ 
                width: '60%',
                animation: 'loading 2s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 60%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}