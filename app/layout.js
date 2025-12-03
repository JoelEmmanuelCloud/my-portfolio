import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joel Emmanuel - Fullstack & Blockchain Developer | Tech Entrepreneur',
  description: 'Fullstack & Blockchain Developer building scalable Web3 applications, AI-powered platforms, and production systems. Co-Founder of Avigate. Expert in React, NestJS, Lisk Blockchain, Ethereum, AWS, and AI/ML. Building on Lisk, Ethereum, and modern cloud infrastructure.',
  keywords: 'Blockchain Developer, Web3 Developer, Fullstack Developer, React Developer, NestJS, Lisk Blockchain, Ethereum, Solidity, Smart Contracts, DeFi, AI/ML Developer, AWS Certified, Startup Founder, Tech Entrepreneur, Node.js, TypeScript, PostgreSQL',
  authors: [{ name: 'Joel Emmanuel' }],
  creator: 'Joel Emmanuel',
  
  // Favicon and icon configuration
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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Joel Emmanuel - Blockchain & Fullstack Developer'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joel Emmanuel - Fullstack & Blockchain Developer',
    description: 'Building Web3 applications, AI platforms, and production systems. Co-Founder of Avigate. Expert in Blockchain, React, NestJS, and AWS.',
    images: ['/og-image.png'],
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
                "https://linkedin.com/in/joelemmanuel",
                "https://github.com/joelemmanuel",
                "https://twitter.com/joelemmanuel"
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}