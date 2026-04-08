'use client'
import { Download } from 'lucide-react'
import { experience, certifications, education, hackathons } from '@/data/experience'
import { skills } from '@/data/skills'

export default function ResumePage() {
  const currentRoles = experience.filter(e => e.current)
  const pastRoles = experience.filter(e => !e.current)

  const coreSkills = [
    { label: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS'] },
    { label: 'Backend', items: ['NestJS', 'Node.js', 'Spring Boot', 'Python', 'REST APIs', 'GraphQL'] },
    { label: 'Blockchain', items: ['Ethereum', 'Solidity', 'Lisk Blockchain', 'Smart Contracts', 'Web3.js'] },
    { label: 'Cloud & AI', items: ['AWS (EC2, S3, Lambda, Bedrock, SageMaker)', 'Docker', 'CI/CD', 'LangChain', 'RAG Systems'] },
    { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Vector Databases'] },
    { label: 'Prod. Eng.', items: ['Prometheus', 'Grafana', 'k6 Load Testing', 'Nginx', 'Incident Runbooks', 'Horizontal Scaling'] },
  ]

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 print:bg-white print:pt-0 print:pb-0">

      <div className="no-print flex justify-center mb-6 px-4">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center justify-center gap-2 w-full xs:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </button>
      </div>

      <div className="resume-page bg-white mx-auto shadow-xl print:shadow-none w-full px-5 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12"
        style={{ maxWidth: '210mm', minHeight: '297mm' }}>

        <div className="border-b border-gray-200 pb-5 mb-5">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Joel Emmanuel</h1>
          <p className="text-base font-medium text-blue-600 mt-1">Fullstack & Blockchain Developer</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-gray-600">
            <span>ejoel0035@gmail.com</span>
            <span>joelemmanuel.dev</span>
            <span>linkedin.com/in/joel-emmanuel-149708202</span>
            <span>github.com/joelemmanuel</span>
            <span>Nigeria</span>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            Fullstack & Blockchain Developer with 3+ years building scalable Web3 applications, AI-powered platforms, and production systems across international teams in Brazil, USA, Canada, Nigeria, and Ghana. Experienced with Lisk, Ethereum, React, NestJS, Spring Boot, and AWS. AWS Certified Cloud Practitioner and AI Practitioner.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-1 mb-3">
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-1.5">
            {coreSkills.map(group => (
              <div key={group.label} className="flex gap-2 text-xs">
                <span className="font-semibold text-gray-900 w-24 shrink-0">{group.label}:</span>
                <span className="text-gray-600">{group.items.join(' · ')}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-1 mb-3">
            Experience
          </h2>
          <div className="space-y-4">
            {experience.map((job) => (
              <div key={job.company} className="break-inside-avoid">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-sm font-bold text-gray-900">{job.role}</span>
                    <span className="text-sm text-gray-600"> — {job.company}</span>
                  </div>
                  <div className="text-xs text-gray-500 shrink-0 text-right">
                    <div>{job.period}</div>
                    <div>{job.location}</div>
                  </div>
                </div>
                <ul className="mt-1.5 space-y-0.5">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-xs text-gray-600 flex gap-2">
                      <span className="text-gray-400 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-1 mb-3">
            Hackathons
          </h2>
          <div className="space-y-3">
            {hackathons.map((h) => (
              <div key={h.name} className="break-inside-avoid">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-sm font-bold text-gray-900">{h.name}</span>
                    <span className="text-xs text-gray-600"> — {h.role}</span>
                  </div>
                  <span className="text-xs text-gray-500 shrink-0">{h.period}</span>
                </div>
                <ul className="mt-1 space-y-0.5">
                  {h.achievements.map((a, i) => (
                    <li key={i} className="text-xs text-gray-600 flex gap-2">
                      <span className="text-gray-400 shrink-0">•</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-1 mb-3">
            Certifications
          </h2>
          <div className="space-y-1.5">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-sm font-semibold text-gray-900">{cert.name}</span>
                  <span className="text-xs text-gray-600"> — {cert.issuer}</span>
                </div>
                <span className="text-xs text-gray-500 shrink-0">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
