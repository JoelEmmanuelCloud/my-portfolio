'use client'
import { Component } from 'react'
import Link from 'next/link'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-cream px-4 dark:bg-ink">
          <div className="max-w-md text-center">
            <h2 className="mb-3 text-2xl font-semibold text-ink dark:text-cream">Something went wrong</h2>
            <p className="mb-6 text-sm leading-relaxed text-ink/60 dark:text-cream/60">
              An unexpected error occurred. Try refreshing the page or go back home.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => this.setState({ hasError: false })}
                className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-ink/80 dark:bg-cream dark:text-ink dark:hover:bg-cream/80"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream dark:border-cream/20 dark:text-cream dark:hover:bg-cream dark:hover:text-ink"
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
