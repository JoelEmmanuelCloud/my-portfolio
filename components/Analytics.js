'use client'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { CONSENT_KEY, CONSENT_EVENT } from '@/components/ui/CookieConsent'

export default function Analytics({ domain }) {
  const [allowed, setAllowed] = useState(false)
  const loadedRef = useRef(false)

  useEffect(() => {
    try {
      setAllowed(localStorage.getItem(CONSENT_KEY) === 'accepted')
    } catch (err) {
      void err
      setAllowed(false)
    }

    const onChange = (e) => {
      const nextAllowed = e.detail === 'accepted'
      if (!nextAllowed && loadedRef.current) {
        window.location.reload()
        return
      }
      setAllowed(nextAllowed)
    }
    window.addEventListener(CONSENT_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_EVENT, onChange)
  }, [])

  useEffect(() => {
    if (allowed) loadedRef.current = true
  }, [allowed])

  if (!domain || !allowed) return null

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  )
}
