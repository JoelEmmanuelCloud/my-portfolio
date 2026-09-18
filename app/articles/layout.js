export const metadata = {
  title: 'Articles — Joel Emmanuel',
  description: 'Engineering write-ups by Joel Emmanuel on building production fintech, AI, and blockchain systems — real lessons from shipped projects, not theory.',
  keywords: [
    'Joel Emmanuel articles', 'engineering write-ups', 'fintech engineering lessons',
    'production AI systems', 'software engineering case studies'
  ],
  alternates: { canonical: '/articles' },
  openGraph: {
    title: 'Articles — Joel Emmanuel',
    description: 'Engineering write-ups on building production fintech, AI, and blockchain systems — real lessons from shipped projects.',
    url: 'https://joelemmanuel.dev/articles',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Joel Emmanuel Articles' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles — Joel Emmanuel',
    description: 'Engineering write-ups on building production fintech, AI, and blockchain systems — real lessons from shipped projects.',
    creator: '@joelCloud899799',
  },
}

export default function ArticlesLayout({ children }) {
  return children
}
