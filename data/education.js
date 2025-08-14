export const education = [
  {
    id: 'uniport-cs',
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Port Harcourt',
    location: 'Port Harcourt, Nigeria',
    period: '2018 – 2022',
    startDate: '2018-09',
    endDate: '2022-07',
    status: 'completed',
    description: 'Computer Science fundamentals with focus on software engineering and system design',
    coursework: [
      'Algorithms and Data Structures',
      'Object-Oriented Programming',
      'Database Systems',
      'Software Engineering',
      'Web Development',
      'Artificial Intelligence'
    ],
    highlights: [
      'Strong foundation in programming languages including Java, Python, and JavaScript',
      'Software engineering best practices and design patterns',
      'Understanding of distributed systems and databases'
    ],
    relevantSkills: [
      'Programming Languages',
      'Data Structures & Algorithms',
      'Software Design',
      'Problem Solving'
    ]
  }
]

// Helper functions
export function getEducationByLevel(level = 'all') {
  const levels = {
    undergraduate: education.filter(edu => edu.degree.toLowerCase().includes('bachelor')),
    all: education
  }
  
  return levels[level] || levels.all
}

export function formatEducationPeriod(startDate, endDate, status) {
  const start = new Date(startDate).getFullYear()
  const end = status === 'current' ? 'Present' : new Date(endDate).getFullYear()
  return `${start} – ${end}`
}