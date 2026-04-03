/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: Fix pre-existing CRLF linebreak and formatting violations across the codebase,
  // then remove this to enforce lint checks in CI builds.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Updated image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Headers for security and performance
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production'

    const cspDirectives = [
      "default-src 'self'",
      // Next.js requires unsafe-inline for styles; nonces would be needed for strict CSP
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
      "font-src 'self' https://fonts.gstatic.com",
      // unsafe-eval needed by Next.js in dev; unsafe-inline needed for JSON-LD inline script
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com"
        : "script-src 'self' 'unsafe-inline' https://assets.calendly.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://api.sendgrid.com",
      "frame-src https://calendly.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ]

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            key: 'Content-Security-Policy',
            value: cspDirectives.join('; '),
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'production'
              ? 'https://joelemmanuel.dev'
              : '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type',
          },
        ],
      },
    ]
  },

  async redirects() {
    return []
  },
}

module.exports = nextConfig