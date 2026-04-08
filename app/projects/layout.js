export const metadata = {
  title: 'Projects — Joel Emmanuel',
  description: 'Portfolio of blockchain platforms, AI-powered apps, ride-hailing systems, and enterprise applications. Includes Avigate (navigation), Learnway (blockchain education on Lisk), Freedom (ride-hailing), and 10+ more production projects.',
  keywords: [
    'Joel Emmanuel projects', 'blockchain projects', 'Web3 portfolio', 'Avigate app',
    'Learnway Lisk', 'Freedom ride-hailing', 'React projects', 'NestJS projects',
    'AI ML projects', 'AWS projects', 'fullstack portfolio Nigeria'
  ],
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects — Joel Emmanuel',
    description: 'Blockchain platforms, AI apps, ride-hailing systems, and enterprise solutions. 10+ production projects across Web3, AI/ML, and fullstack development.',
    url: 'https://joelemmanuel.dev/projects',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Joel Emmanuel Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects — Joel Emmanuel',
    description: 'Blockchain platforms, AI apps, and fullstack systems. 10+ production projects including Avigate, Learnway, and Freedom.',
    creator: '@joelCloud899799',
  },
}

export default function ProjectsLayout({ children }) {
  return children
}
