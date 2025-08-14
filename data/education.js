export const education = [
  {
    id: 'uniport-cs',
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Port Harcourt',
    location: 'Port Harcourt, Nigeria',
    period: '2018 – 2022',
    startDate: '2018-09',
    endDate: '2022-07',
    gpa: '', // Add your GPA if you want to display it
    status: 'completed',
    description: 'Comprehensive computer science education with focus on software engineering, algorithms, and system design.',
    coursework: [
      'Computer Science Fundamentals',
      'Algorithms and Data Structures',
      'Object-Oriented Programming and Design',
      'Database Systems',
      'Distributed Systems',
      'Software Engineering',
      'Computer Networks',
      'Operating Systems',
      'Web Development',
      'Mobile Application Development',
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Graphics',
      'Human-Computer Interaction'
    ],
    highlights: [
      'Strong foundation in programming languages including Java, Python, and JavaScript',
      'Extensive training in algorithm design and complexity analysis',
      'Hands-on experience with database design and management',
      'Understanding of distributed systems and network protocols',
      'Software engineering best practices and design patterns'
    ],
    projects: [
      {
        title: 'Final Year Project',
        description: 'Developed a comprehensive web application demonstrating full-stack development skills',
        technologies: ['JavaScript', 'Node.js', 'React', 'MongoDB']
      }
    ],
    awards: [
      // Add any academic awards or recognitions
      // {
      //   title: 'Dean\'s List',
      //   year: '2021',
      //   description: 'Recognition for academic excellence'
      // }
    ],
    relevantSkills: [
      'Programming Languages',
      'Data Structures & Algorithms',
      'Software Design Patterns',
      'Database Management',
      'System Architecture',
      'Problem Solving',
      'Team Collaboration',
      'Technical Communication'
    ]
  }
]

export const academicProjects = [
  {
    id: 'database-management-system',
    title: 'University Database Management System',
    course: 'Database Systems',
    period: '2021',
    description: 'Designed and implemented a comprehensive database system for university student and course management.',
    technologies: ['MySQL', 'PHP', 'HTML/CSS', 'JavaScript'],
    features: [
      'Student enrollment and course registration',
      'Grade management and transcript generation',
      'Faculty and course scheduling',
      'Administrative reporting dashboard'
    ],
    learningOutcomes: [
      'Database design and normalization',
      'SQL query optimization',
      'Web application development',
      'User interface design'
    ]
  },
  {
    id: 'distributed-file-system',
    title: 'Distributed File System',
    course: 'Distributed Systems',
    period: '2022',
    description: 'Built a distributed file system with fault tolerance and data replication capabilities.',
    technologies: ['Python', 'Socket Programming', 'Threading'],
    features: [
      'File distribution across multiple nodes',
      'Data replication for fault tolerance',
      'Consistent hashing for load balancing',
      'Client interface for file operations'
    ],
    learningOutcomes: [
      'Distributed system concepts',
      'Network programming',
      'Fault tolerance mechanisms',
      'Load balancing strategies'
    ]
  },
  {
    id: 'ai-chatbot',
    title: 'Intelligent Chatbot with NLP',
    course: 'Artificial Intelligence',
    period: '2022',
    description: 'Developed an AI-powered chatbot using natural language processing for customer service automation.',
    technologies: ['Python', 'NLTK', 'TensorFlow', 'Flask'],
    features: [
      'Natural language understanding',
      'Intent recognition and classification',
      'Context-aware responses',
      'Learning from user interactions'
    ],
    learningOutcomes: [
      'Natural language processing',
      'Machine learning algorithms',
      'Neural network implementation',
      'AI system deployment'
    ]
  }
]

export const academicAchievements = [
  {
    type: 'academic',
    title: 'Computer Science Graduate',
    description: 'Successfully completed Bachelor of Science in Computer Science with comprehensive understanding of software development principles',
    year: '2022',
    institution: 'University of Port Harcourt'
  },
  {
    type: 'project',
    title: 'Outstanding Final Year Project',
    description: 'Recognized for exceptional technical implementation and innovative approach in final year project',
    year: '2022',
    institution: 'University of Port Harcourt'
  },
  {
    type: 'skill',
    title: 'Full-Stack Development Proficiency',
    description: 'Demonstrated expertise in both frontend and backend development during academic coursework',
    year: '2020-2022',
    institution: 'University of Port Harcourt'
  }
]

export const extracurricularActivities = [
  {
    activity: 'Computer Science Students Association',
    role: 'Active Member',
    period: '2019-2022',
    description: 'Participated in programming competitions and technical workshops',
    achievements: [
      'Organized coding bootcamps for junior students',
      'Participated in inter-university programming contests',
      'Mentored students in web development projects'
    ]
  },
  {
    activity: 'Technology Innovation Club',
    role: 'Project Lead',
    period: '2020-2022',
    description: 'Led technology innovation initiatives and startup projects',
    achievements: [
      'Led team of 5 students in developing mobile applications',
      'Organized tech talks and industry networking events',
      'Collaborated with industry professionals on real-world projects'
    ]
  }
]

// Helper function to get education by level
export function getEducationByLevel(level = 'all') {
  const levels = {
    undergraduate: education.filter(edu => edu.degree.toLowerCase().includes('bachelor')),
    graduate: education.filter(edu => edu.degree.toLowerCase().includes('master') || edu.degree.toLowerCase().includes('phd')),
    all: education
  }
  
  return levels[level] || levels.all
}

// Helper function to get current education status
export function getCurrentEducationStatus() {
  const currentEducation = education.find(edu => edu.status === 'current')
  return currentEducation || null
}

// Helper function to format education period
export function formatEducationPeriod(startDate, endDate, status) {
  const start = new Date(startDate).getFullYear()
  const end = status === 'current' ? 'Present' : new Date(endDate).getFullYear()
  return `${start} – ${end}`
}