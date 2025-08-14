export const certifications = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issuerLogo: '/logos/aws.svg',
    credentialId: 'VVNDR86202F4155M',
    issueDate: '2023-10-11',
    expiryDate: '2026-10-11',
    status: 'active',
    level: 'foundational',
    category: 'cloud',
    verificationUrl: 'https://aws.amazon.com/verification',
    badgeUrl: '/images/badges/aws-cloud-practitioner.png',
    description: 'Foundational understanding of AWS Cloud services, architecture, security, and pricing models.',
    skills: [
      'AWS Core Services',
      'Cloud Architecture Basics',
      'Security and Compliance',
      'Billing and Pricing',
      'Technology Support'
    ],
    keyTopics: [
      'Cloud concepts and value proposition',
      'AWS global infrastructure',
      'Core AWS services (EC2, S3, RDS, Lambda)',
      'Security and compliance frameworks',
      'Billing, pricing, and support plans'
    ],
    relevantTo: [
      'Cloud Infrastructure',
      'DevOps',
      'System Architecture',
      'Cost Optimization'
    ],
    preparationTime: '2 months',
    examDetails: {
      duration: '90 minutes',
      questions: '65 questions',
      passingScore: '700/1000',
      format: 'Multiple choice and multiple response'
    }
  },
  {
    id: 'aws-ai-practitioner',
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issuerLogo: '/logos/aws.svg',
    credentialId: '', // Add your credential ID when you have it
    issueDate: '2024-03-15',
    expiryDate: '2027-03-15',
    status: 'active',
    level: 'foundational',
    category: 'artificial-intelligence',
    verificationUrl: 'https://aws.amazon.com/verification',
    badgeUrl: '/images/badges/aws-ai-practitioner.png',
    description: 'Comprehensive understanding of AI and machine learning services on AWS, including SageMaker, Bedrock, and MLOps practices.',
    skills: [
      'AWS AI/ML Services',
      'Machine Learning Concepts',
      'Model Training and Deployment',
      'MLOps Best Practices',
      'AI Ethics and Responsible AI'
    ],
    keyTopics: [
      'Amazon SageMaker for ML workflows',
      'Amazon Bedrock for generative AI',
      'Computer vision with Amazon Rekognition',
      'Natural language processing with Amazon Comprehend',
      'ML model deployment and monitoring'
    ],
    relevantTo: [
      'Machine Learning Engineering',
      'AI Application Development',
      'Data Science',
      'MLOps'
    ],
    preparationTime: '3 months',
    examDetails: {
      duration: '120 minutes',
      questions: '75 questions',
      passingScore: '700/1000',
      format: 'Multiple choice and multiple response'
    }
  },
  {
    id: 'huawei-hcna',
    name: 'Huawei Certified Network Associate (HCNA)',
    issuer: 'Huawei Technologies',
    issuerLogo: '/logos/huawei.svg',
    credentialId: '', // Add your credential ID
    issueDate: '2023-06-20',
    expiryDate: '2026-06-20',
    status: 'active',
    level: 'associate',
    category: 'networking',
    verificationUrl: 'https://support.huawei.com/learning/NavigationAction!goToTrainingCertification',
    badgeUrl: '/images/badges/huawei-hcna.png',
    description: 'Fundamental knowledge of networking technologies and Huawei networking equipment configuration and troubleshooting.',
    skills: [
      'Network Fundamentals',
      'Routing and Switching',
      'Huawei Equipment Configuration',
      'Network Troubleshooting',
      'Network Security Basics'
    ],
    keyTopics: [
      'OSI and TCP/IP models',
      'Ethernet and VLANs',
      'Routing protocols (OSPF, BGP)',
      'Switching technologies',
      'Network security fundamentals'
    ],
    relevantTo: [
      'Network Administration',
      'Infrastructure Management',
      'System Administration',
      'DevOps'
    ],
    preparationTime: '2 months',
    examDetails: {
      duration: '90 minutes',
      questions: '60 questions',
      passingScore: '600/1000',
      format: 'Multiple choice'
    }
  }
]

export const plannedCertifications = [
  {
    id: 'aws-solutions-architect',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    targetDate: '2024-06-30',
    category: 'cloud',
    level: 'associate',
    priority: 'high',
    description: 'Design and deploy scalable, highly available systems on AWS.',
    preparationStatus: 'planning',
    estimatedStudyTime: '3-4 months',
    prerequisites: ['AWS Cloud Practitioner'],
    relevantTo: [
      'Solution Architecture',
      'Cloud Infrastructure Design',
      'System Scalability',
      'Cost Optimization'
    ]
  },
  {
    id: 'aws-developer-associate',
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services (AWS)',
    targetDate: '2024-09-30',
    category: 'development',
    level: 'associate',
    priority: 'medium',
    description: 'Develop and maintain applications on the AWS platform.',
    preparationStatus: 'planning',
    estimatedStudyTime: '2-3 months',
    prerequisites: ['AWS Cloud Practitioner'],
    relevantTo: [
      'Cloud Application Development',
      'Serverless Architecture',
      'API Development',
      'CI/CD Pipelines'
    ]
  },
  {
    id: 'google-cloud-professional',
    name: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    targetDate: '2024-12-31',
    category: 'cloud',
    level: 'professional',
    priority: 'medium',
    description: 'Design and plan cloud solution architecture.',
    preparationStatus: 'considering',
    estimatedStudyTime: '4-5 months',
    prerequisites: [],
    relevantTo: [
      'Multi-cloud Architecture',
      'Google Cloud Services',
      'Enterprise Solutions',
      'Migration Strategies'
    ]
  }
]

export const certificationCategories = {
  cloud: {
    name: 'Cloud Computing',
    icon: '☁️',
    description: 'Cloud platforms, infrastructure, and services',
    color: 'blue'
  },
  'artificial-intelligence': {
    name: 'Artificial Intelligence',
    icon: '🤖',
    description: 'Machine learning, AI services, and data science',
    color: 'purple'
  },
  networking: {
    name: 'Networking',
    icon: '🌐',
    description: 'Network infrastructure, protocols, and security',
    color: 'green'
  },
  development: {
    name: 'Software Development',
    icon: '💻',
    description: 'Programming, frameworks, and development practices',
    color: 'orange'
  },
  security: {
    name: 'Cybersecurity',
    icon: '🔒',
    description: 'Security practices, compliance, and risk management',
    color: 'red'
  },
  data: {
    name: 'Data & Analytics',
    icon: '📊',
    description: 'Data engineering, analytics, and business intelligence',
    color: 'indigo'
  }
}

export const certificationLevels = {
  foundational: {
    name: 'Foundational',
    description: 'Entry-level understanding of core concepts',
    color: 'gray'
  },
  associate: {
    name: 'Associate',
    description: 'Practical skills and hands-on experience',
    color: 'blue'
  },
  professional: {
    name: 'Professional',
    description: 'Advanced expertise and leadership capabilities',
    color: 'purple'
  },
  expert: {
    name: 'Expert',
    description: 'Thought leadership and specialized expertise',
    color: 'gold'
  }
}

// Helper functions
export function getActiveCertifications() {
  return certifications.filter(cert => cert.status === 'active')
}

export function getCertificationsByCategory(category) {
  return certifications.filter(cert => cert.category === category)
}

export function getExpiringCertifications(monthsAhead = 6) {
  const cutoffDate = new Date()
  cutoffDate.setMonth(cutoffDate.getMonth() + monthsAhead)
  
  return certifications.filter(cert => {
    if (!cert.expiryDate) return false
    return new Date(cert.expiryDate) <= cutoffDate
  })
}

export function getCertificationProgress() {
  const total = certifications.length + plannedCertifications.length
  const completed = certifications.filter(cert => cert.status === 'active').length
  const inProgress = plannedCertifications.filter(cert => cert.preparationStatus === 'studying').length
  
  return {
    total,
    completed,
    inProgress,
    planned: plannedCertifications.length,
    completionRate: Math.round((completed / total) * 100)
  }
}

export function formatCertificationDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

export function getCertificationValidityStatus(cert) {
  if (!cert.expiryDate) return 'no-expiry'
  
  const today = new Date()
  const expiryDate = new Date(cert.expiryDate)
  const monthsUntilExpiry = (expiryDate - today) / (1000 * 60 * 60 * 24 * 30)
  
  if (monthsUntilExpiry < 0) return 'expired'
  if (monthsUntilExpiry < 3) return 'expiring-soon'
  if (monthsUntilExpiry < 6) return 'expires-in-6-months'
  return 'valid'
}

export function getRecommendedNextCertifications(currentCerts = certifications) {
  const currentCategories = [...new Set(currentCerts.map(cert => cert.category))]
  const currentLevels = currentCerts.reduce((acc, cert) => {
    acc[cert.category] = cert.level
    return acc
  }, {})
  
  return plannedCertifications.filter(planned => {
    // Recommend based on progression path
    if (currentCategories.includes(planned.category)) {
      const currentLevel = currentLevels[planned.category]
      return getNextLevel(currentLevel) === planned.level
    }
    return planned.priority === 'high'
  })
}

function getNextLevel(currentLevel) {
  const progression = ['foundational', 'associate', 'professional', 'expert']
  const currentIndex = progression.indexOf(currentLevel)
  return progression[currentIndex + 1] || 'expert'
}