'use client'
import { OPEN_CONSENT_EVENT } from './CookieConsent'

export default function ManageCookiesButton({ className }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className={className}
    >
      Manage cookies
    </button>
  )
}
