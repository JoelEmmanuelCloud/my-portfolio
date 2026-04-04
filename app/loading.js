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

      <div className="flex flex-col items-center gap-5">
        <div className="w-14 h-14 rounded-full border-2 border-black dark:border-white flex items-center justify-center animate-pulse">
          <span className="text-sm font-semibold text-black dark:text-white tracking-widest">JE</span>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  )
}
