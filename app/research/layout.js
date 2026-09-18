export const metadata = {
  title: 'Research — Joel Emmanuel',
  description: 'Applied AI research and write-ups by Joel Emmanuel — paper replications, experiments, and evaluation studies on retrieval-augmented generation and related systems.',
  keywords: [
    'Joel Emmanuel research', 'RAG evaluation', 'retrieval augmented generation research',
    'AI research write-up', 'LLM evaluation experiment'
  ],
  alternates: { canonical: '/research' },
  openGraph: {
    title: 'Research — Joel Emmanuel',
    description: 'Paper replications, experiments, and evaluation studies on retrieval-augmented generation and related AI systems.',
    url: 'https://joelemmanuel.dev/research',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Joel Emmanuel Research' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research — Joel Emmanuel',
    description: 'Paper replications, experiments, and evaluation studies on retrieval-augmented generation and related AI systems.',
    creator: '@joelCloud899799',
  },
}

export default function ResearchLayout({ children }) {
  return children
}
