export const certifications = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    credentialId: 'VVNDR86202F4155M',
    issueDate: '2023-10-11',
    expiryDate: '2026-10-11',
    status: 'active',
    category: 'cloud',
    verificationUrl: 'https://aws.amazon.com/verification',
    description: 'Foundational understanding of AWS Cloud services and architecture',
    skills: [
      'AWS Core Services',
      'Cloud Architecture',
      'Security and Compliance',
      'Billing and Pricing'
    ]
  },
  {
    id: 'aws-ai-practitioner',
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    issueDate: '2024-03-15',
    expiryDate: '2027-03-15',
    status: 'active',
    category: 'ai',
    verificationUrl: 'https://aws.amazon.com/verification',
    description: 'AI and machine learning services on AWS including SageMaker and Bedrock',
    skills: [
      'AWS AI/ML Services',
      'Machine Learning',
      'Model Deployment',
      'MLOps'
    ]
  },
  {
    id: 'huawei-hcna',
    name: 'Huawei Certified Network Associate',
    issuer: 'Huawei Technologies',
    issueDate: '2023-06-20',
    expiryDate: '2026-06-20',
    status: 'active',
    category: 'networking',
    description: 'Network fundamentals and Huawei networking technologies',
    skills: [
      'Network Fundamentals',
      'Routing and Switching',
      'Network Configuration',
      'Troubleshooting'
    ]
  }
]

export const certificationCategories = {
  cloud: {
    name: 'Cloud Computing',
    icon: '☁️',
    color: 'blue'
  },
  ai: {
    name: 'Artificial Intelligence',
    icon: '🤖',
    color: 'purple'
  },
  networking: {
    name: 'Networking',
    icon: '🌐',
    color: 'green'
  }
}

// Helper functions
export function getActiveCertifications() {
  return certifications.filter(cert => cert.status === 'active')
}

export function getCertificationsByCategory(category) {
  return certifications.filter(cert => cert.category === category)
}

export function formatCertificationDate(dateString) {
  const options = { year: 'numeric', month: 'long' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}