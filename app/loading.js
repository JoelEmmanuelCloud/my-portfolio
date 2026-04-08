'use client'

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <div className="h-full bg-blue-600 animate-progress-bar rounded-full" />
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full animate-spin-arc"
            viewBox="0 0 80 80"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-100 dark:text-gray-800"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="56 170"
              className="text-blue-600"
            />
          </svg>

          <div className="animate-logo-pulse w-10 h-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" aria-hidden="true">
              <defs>
                <linearGradient id="topFaceLoader" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dbeafe" />
                  <stop offset="100%" stopColor="#93c5fd" />
                </linearGradient>
              </defs>
              <polygon points="16,25 28,32 28,46 16,39" fill="#1e40af" />
              <polygon points="40,25 40,39 28,46 28,32" fill="#2563eb" />
              <polygon points="28,18 40,25 28,32 16,25" fill="url(#topFaceLoader)" />
              <polygon points="28,18 40,25 40,39 28,46 16,39 16,25" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
              <circle cx="28" cy="18" r="2.25" fill="white" opacity="0.95" />
            </svg>
          </div>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  )
}
