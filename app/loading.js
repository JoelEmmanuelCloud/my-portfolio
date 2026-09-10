'use client'

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 bg-cream dark:bg-ink flex items-center justify-center z-50"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-ink/10 dark:bg-cream/10 overflow-hidden">
        <div className="h-full bg-gold animate-progress-bar rounded-full" />
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
              className="text-ink/10 dark:text-cream/10"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="56 170"
              className="text-gold"
            />
          </svg>

          <div className="animate-logo-pulse w-10 h-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" aria-hidden="true">
              <path d="M35 13 L35 33 C35 41 29 45.5 21 45.5 C18 45.5 15.5 44.8 13 43.5"
                    fill="none" stroke="#F2C200" strokeWidth="7.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <p className="eyebrow">
          Loading
        </p>
      </div>
    </div>
  )
}
