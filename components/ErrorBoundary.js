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
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-black mb-3">Something went wrong</h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              An unexpected error occurred. Try refreshing the page or go back home.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => this.setState({ hasError: false })}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors text-sm font-medium"
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
