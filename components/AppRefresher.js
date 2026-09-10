'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { RefreshCw, X } from 'lucide-react'

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
    <div
      role="status"
      className="fixed inset-x-3 bottom-5 z-50 mx-auto flex max-w-sm flex-wrap items-center justify-center gap-3 rounded-lg border border-ink/10 bg-cream px-5 py-3 text-sm font-medium text-ink shadow-2xl animate-subtle-fade-in sm:inset-x-auto sm:left-1/2 sm:max-w-none sm:-translate-x-1/2 sm:flex-nowrap"
    >
      <span className="flex items-center gap-2 text-center sm:text-left">
        <RefreshCw className="size-4 shrink-0 text-gold" aria-hidden="true" />
        A new version is available
      </span>
      <button
        onClick={() => window.location.reload()}
        className="rounded-md bg-ink px-3 py-2.5 text-xs font-semibold text-cream transition-colors hover:bg-ink/80"
      >
        Reload
      </button>
      <button
        onClick={() => setUpdateReady(false)}
        aria-label="Dismiss"
        className="-m-2.5 p-2.5 text-ink/40 transition-colors hover:text-ink"
      >
        <X className="size-4" aria-hidden="true" />
      </button>
    </div>
  )
}
