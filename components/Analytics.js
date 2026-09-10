'use client'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { CONSENT_KEY, CONSENT_EVENT } from '@/components/ui/CookieConsent'

export default function Analytics({ domain }) {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    try {
      setAllowed(localStorage.getItem(CONSENT_KEY) === 'accepted')
    } catch {
      setAllowed(false)
    }

    const onChange = (e) => setAllowed(e.detail === 'accepted')
    window.addEventListener(CONSENT_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_EVENT, onChange)
  }, [])

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
