import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joel Emmanuel - Sotfware & AI/ML Developer',
  description: 'Frontend specialist + full-stack builder who ships production systems on React/Next.js, Node.js, AWS, and modern CI/CD—used by real customers today.',
  keywords: 'Sotfware Developer, React, Node.js, AWS, AI/ML, Frontend Developer, Backend Developer',
  authors: [{ name: 'Joel Emmanuel' }],
  creator: 'Joel Emmanuel',
  openGraph: {
    title: 'Joel Emmanuel - Sotfware & AI/ML Developer',
    description: 'Frontend specialist + full-stack builder who ships production systems on React/Next.js, Node.js, AWS, and modern CI/CD—used by real customers today.',
    url: 'https://joelemmanuel.dev',
    siteName: 'Joel Emmanuel Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joel Emmanuel - Sotfware & AI/ML Developer',
    description: 'Frontend specialist + full-stack builder who ships production systems on React/Next.js, Node.js, AWS, and modern CI/CD—used by real customers today.',
    images: ['/og-image.png'],
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
              "jobTitle": "Sotfware & AI/ML Developer",
              "description": "Frontend specialist + full-stack builder who ships production systems on React/Next.js, Node.js, AWS, and modern CI/CD—used by real customers today.",
              "url": "https://joelemmanuel.dev",
              "sameAs": [
                "https://linkedin.com/in/joelemmanuel",
                "https://github.com/joelemmanuel"
              ]
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