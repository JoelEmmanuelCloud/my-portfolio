export const metadata = {
  title: 'Skills — Joel Emmanuel',
  description: 'Expert-level skills in React, Next.js, NestJS, TypeScript, Lisk Blockchain, Ethereum, Solidity, Node.js, Spring Boot, AWS (EC2, S3, Lambda, Bedrock, SageMaker), Docker, PostgreSQL, MongoDB, LangChain, and RAG systems.',
  keywords: [
    'React developer skills', 'NestJS developer', 'Blockchain developer skills',
    'Lisk Ethereum Solidity', 'AWS developer', 'TypeScript Next.js', 'Spring Boot Java',
    'LangChain RAG AI', 'Docker Kubernetes', 'PostgreSQL MongoDB', 'fullstack skills'
  ],
  alternates: { canonical: '/skills' },
  openGraph: {
    title: 'Skills — Joel Emmanuel',
    description: 'Expert in React, NestJS, Lisk Blockchain, Ethereum, AWS, TypeScript, Spring Boot, LangChain, and RAG systems. AWS Certified Cloud and AI Practitioner.',
    url: 'https://joelemmanuel.dev/skills',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Joel Emmanuel Skills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skills — Joel Emmanuel',
    description: 'Expert in React, NestJS, Blockchain, AWS, TypeScript, Spring Boot, and AI/ML. AWS Certified Cloud and AI Practitioner.',
    creator: '@joelCloud899799',
  },
}

export default function SkillsLayout({ children }) {
  return children
}
