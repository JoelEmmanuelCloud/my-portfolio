import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'
import ThemeProvider from '@/components/ThemeProvider'
import AppRefresher from '@/components/AppRefresher'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Joel Emmanuel — Fullstack & Blockchain Developer',
  description: 'Fullstack & Blockchain Developer with 3+ years building scalable Web3 apps, AI platforms, and production systems for companies across Nigeria, Brazil, USA, Canada, and Ghana. Expert in React, NestJS, Lisk Blockchain, Ethereum, AWS, and AI/ML. Founder of Avigate.',
  keywords: [
    'Fullstack Developer', 'Blockchain Developer', 'Web3 Developer', 'React Developer',
    'NestJS Developer', 'Lisk Blockchain', 'Ethereum', 'Solidity', 'Smart Contracts',
    'DeFi', 'AI Developer', 'ML Engineer', 'AWS Certified', 'Node.js', 'TypeScript',
    'Next.js', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Docker', 'LangChain', 'RAG',
    'Joel Emmanuel', 'Nigeria Developer', 'Remote Developer', 'Avigate'
  ],
  authors: [{ name: 'Joel Emmanuel', url: 'https://joelemmanuel.dev' }],
  creator: 'Joel Emmanuel',

  metadataBase: new URL('https://joelemmanuel.dev'),

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [
      { url: '/logos/logo-je.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },

  openGraph: {
    title: 'Joel Emmanuel — Fullstack & Blockchain Developer',
    description: 'Fullstack & Blockchain Developer building scalable Web3 apps, AI platforms, and production systems. Founder of Avigate. Expert in React, NestJS, Lisk Blockchain, Ethereum, and AWS.',
    url: 'https://joelemmanuel.dev',
    siteName: 'Joel Emmanuel',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Joel Emmanuel — Fullstack & Blockchain Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joel Emmanuel — Fullstack & Blockchain Developer',
    description: 'Building Web3 apps, AI platforms, and production systems. Founder of Avigate. Expert in Blockchain, React, NestJS, and AWS.',
    creator: '@joelCloud899799',
    images: ['/opengraph-image'],
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
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Joel Emmanuel",
              "jobTitle": "Fullstack & Blockchain Developer",
              "description": "Fullstack & Blockchain Developer building scalable Web3 applications, AI-powered platforms, and production systems. Building Avigate, a personal transportation navigation app for Nigerian cities.",
              "url": "https://joelemmanuel.dev",
              "image": "https://joelemmanuel.dev/images/profile/profile.jpeg",
              "sameAs": [
                "https://www.linkedin.com/in/joel-emmanuel-149708202/",
                "https://github.com/joelemmanuel",
                "https://x.com/joelCloud899799"
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
              "sideProject": {
                "@type": "SoftwareApplication",
                "name": "Avigate",
                "description": "Personal transportation navigation app for Nigerian cities"
              }
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
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
        <AppRefresher />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
        </ThemeProvider>
      </body>
    </html>
  )
}