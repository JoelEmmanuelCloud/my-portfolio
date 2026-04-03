import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joel Emmanuel - Fullstack & Blockchain Developer | Tech Entrepreneur',
  description: 'Fullstack & Blockchain Developer building scalable Web3 applications, AI-powered platforms, and production systems. Co-Founder of Avigate. Expert in React, NestJS, Lisk Blockchain, Ethereum, AWS, and AI/ML. Building on Lisk, Ethereum, and modern cloud infrastructure.',
  keywords: 'Blockchain Developer, Web3 Developer, Fullstack Developer, React Developer, NestJS, Lisk Blockchain, Ethereum, Solidity, Smart Contracts, DeFi, AI/ML Developer, AWS Certified, Startup Founder, Tech Entrepreneur, Node.js, TypeScript, PostgreSQL',
  authors: [{ name: 'Joel Emmanuel' }],
  creator: 'Joel Emmanuel',

  metadataBase: new URL('https://joelemmanuel.dev'),

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },

  openGraph: {
    title: 'Joel Emmanuel - Fullstack & Blockchain Developer | Tech Entrepreneur',
    description: 'Building scalable Web3 applications and AI-powered platforms. Co-Founder of Avigate transportation startup. Expert in Blockchain (Lisk, Ethereum), React, NestJS, and AWS.',
    url: 'https://joelemmanuel.dev',
    siteName: 'Joel Emmanuel Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joel Emmanuel - Fullstack & Blockchain Developer',
    description: 'Building Web3 applications, AI platforms, and production systems. Co-Founder of Avigate. Expert in Blockchain, React, NestJS, and AWS.',
    creator: '@joelemmanuel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Joel Emmanuel",
              "jobTitle": "Fullstack & Blockchain Developer",
              "description": "Fullstack & Blockchain Developer building scalable Web3 applications, AI-powered platforms, and production systems. Co-Founder & CTO of Avigate transportation startup.",
              "url": "https://joelemmanuel.dev",
              "image": "https://joelemmanuel.dev/images/profile/profile.jpeg",
              "sameAs": [
                "https://www.linkedin.com/in/joel-emmanuel-149708202/",
                "https://github.com/joelemmanuel",
                "https://x.com/joelemmanuel"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "University of Port Harcourt"
              },
              "knowsAbout": [
                "Blockchain Development",
                "Web3",
                "Lisk Blockchain",
                "Ethereum",
                "Solidity",
                "Smart Contracts",
                "DeFi",
                "React",
                "Next.js",
                "TypeScript",
                "NestJS",
                "Node.js",
                "AWS",
                "AI/ML",
                "Full-stack Development"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "AWS Certified Cloud Practitioner",
                  "credentialCategory": "certification"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "AWS Certified AI Practitioner",
                  "credentialCategory": "certification"
                }
              ],
              "founder": {
                "@type": "Organization",
                "name": "Avigate",
                "description": "Smart transportation navigation startup for Nigerian cities"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <Header />
        <ErrorBoundary>
          <main id="main-content">{children}</main>
        </ErrorBoundary>
        <Footer />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}