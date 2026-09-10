'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie, Check } from 'lucide-react'

export const CONSENT_KEY = 'cookie-consent'
export const CONSENT_EVENT = 'cookie-consent-changed'
export const OPEN_CONSENT_EVENT = 'open-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [managing, setManaging] = useState(false)
  const [analyticsOn, setAnalyticsOn] = useState(true)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY)
      if (!stored) setVisible(true)
      setAnalyticsOn(stored !== 'declined')
    } catch {
      setVisible(false)
    }

    const onOpen = () => {
      try {
        setAnalyticsOn(localStorage.getItem(CONSENT_KEY) !== 'declined')
      } catch (err) {
        void err
      }
      setManaging(true)
      setVisible(true)
    }
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen)
  }, [])

  const persist = (value) => {
    try {
      localStorage.setItem(CONSENT_KEY, value)
      window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }))
    } catch (err) {
      void err
    }
    setVisible(false)
    setManaging(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-lg rounded-lg border border-ink/10 bg-cream p-5 shadow-2xl animate-subtle-fade-in sm:inset-x-auto sm:right-5 sm:bottom-5 sm:p-6"
    >
      <div className="mb-3 flex items-center gap-2.5">
        <Cookie className="size-5 shrink-0 text-gold" aria-hidden="true" />
        <h2 className="text-sm font-semibold text-ink">Cookies &amp; privacy</h2>
      </div>

      {!managing ? (
        <>
          <p className="mb-4 text-sm leading-relaxed text-ink/65">
            This site uses privacy-friendly analytics to understand how visitors use it — no personal
            data is sold or shared. Read the{' '}
            <Link href="/privacy" className="font-medium text-ink underline decoration-gold decoration-2 underline-offset-2 hover:text-gold">
              Privacy Policy
            </Link>{' '}
            for details.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => persist('accepted')}
              className="rounded-md bg-ink px-4 py-3 text-xs font-semibold text-cream transition-colors hover:bg-ink/80"
            >
              Accept
            </button>
            <button
              onClick={() => persist('declined')}
              className="rounded-md border border-ink/15 px-4 py-3 text-xs font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              Decline
            </button>
            <button
              onClick={() => setManaging(true)}
              className="rounded-md px-4 py-3 text-xs font-semibold text-ink/60 underline decoration-ink/30 decoration-2 underline-offset-2 transition-colors hover:text-ink"
            >
              Manage cookies
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-4 space-y-3">
            <div className="flex items-start justify-between gap-4 rounded-md border border-ink/10 p-3">
              <div>
                <p className="text-sm font-medium text-ink">Essential</p>
                <p className="text-xs text-ink/55">Required for the site to function. Always on.</p>
              </div>
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-ink text-cream">
                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 rounded-md border border-ink/10 p-3">
              <div>
                <p className="text-sm font-medium text-ink">Analytics</p>
                <p className="text-xs text-ink/55">Privacy-friendly, anonymous usage analytics.</p>
              </div>
              <button
                role="switch"
                aria-checked={analyticsOn}
                aria-label="Toggle analytics cookies"
                onClick={() => setAnalyticsOn((v) => !v)}
                className="shrink-0 -m-3 p-3"
              >
                <span className={`relative flex h-5 w-9 items-center rounded-full transition-colors ${analyticsOn ? 'bg-gold' : 'bg-ink/20'}`}>
                  <span
                    className={`absolute size-4 rounded-full bg-cream shadow transition-all ${analyticsOn ? 'left-4' : 'left-0.5'}`}
                  />
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => persist(analyticsOn ? 'accepted' : 'declined')}
              className="rounded-md bg-ink px-4 py-3 text-xs font-semibold text-cream transition-colors hover:bg-ink/80"
            >
              Save preferences
            </button>
            <button
              onClick={() => setManaging(false)}
              className="rounded-md border border-ink/15 px-4 py-3 text-xs font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              Back
            </button>
          </div>
        </>
      )}
    </div>
  )
}
