'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AppRefresher() {
  const router = useRouter()
  const buildIdRef = useRef(null)
  const [updateReady, setUpdateReady] = useState(false)

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const res = await fetch('/api/version', { cache: 'no-store' })
        const { id } = await res.json()
        return id
      } catch {
        return null
      }
    }

    const init = async () => {
      buildIdRef.current = await fetchVersion()
    }

    const checkForUpdate = async () => {
      const latest = await fetchVersion()
      if (latest && buildIdRef.current && latest !== buildIdRef.current) {
        setUpdateReady(true)
      }
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        router.refresh()
        checkForUpdate()
      }
    }

    init()
    document.addEventListener('visibilitychange', handleVisibilityChange)
    const interval = setInterval(checkForUpdate, 5 * 60 * 1000)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearInterval(interval)
    }
  }, [router])

  if (!updateReady) return null

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-3 rounded-full shadow-2xl text-sm font-medium animate-subtle-fade-in">
      <span>Update available</span>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-700 transition-colors"
      >
        Reload
      </button>
      <button
        onClick={() => setUpdateReady(false)}
        aria-label="Dismiss"
        className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-900 transition-colors leading-none"
      >
        x
      </button>
    </div>
  )
}
