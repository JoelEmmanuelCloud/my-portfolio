import { Box, Code, Database, Cloud } from 'lucide-react'

export const stats = [
  { value: '+50', label: 'Projects shipped' },
  { value: '+10', label: 'Companies served' },
  { value: '4', label: 'Continents' },
]

export const buildingApproach = [
  {
    title: 'Blockchain & Web3',
    description: 'Lisk, Ethereum, Solidity with DeFi protocols, smart contracts, and cross-chain solutions.',
    icon: Box,
    tech: ['Lisk', 'Ethereum', 'Solidity', 'DeFi'],
  },
  {
    title: 'Frontend Excellence',
    description: 'React, Next.js, TypeScript with modern UI/UX patterns and responsive mobile-first design.',
    icon: Code,
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Backend Power',
    description: 'NestJS, Spring Boot, Node.js with microservices, real-time features, and secure APIs.',
    icon: Database,
    tech: ['NestJS', 'Spring Boot', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Cloud & AI',
    description: 'AWS infrastructure, AI/ML integration, RAG systems, and automated CI/CD pipelines.',
    icon: Cloud,
    tech: ['AWS', 'Docker', 'Bedrock', 'LangChain'],
  },
]
