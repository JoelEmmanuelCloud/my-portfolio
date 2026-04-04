'use client'
import { Download, Printer } from 'lucide-react'
import { experience, certifications, education } from '@/data/experience'
import { skills } from '@/data/skills'

export default function ResumePage() {
  const currentRoles = experience.filter(e => e.current)
  const pastRoles = experience.filter(e => !e.current)

  const coreSkills = [
    { label: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS'] },
    { label: 'Backend', items: ['NestJS', 'Node.js', 'Spring Boot', 'REST APIs', 'GraphQL'] },
    { label: 'Blockchain', items: ['Ethereum', 'Solidity', 'Lisk Blockchain', 'Smart Contracts', 'Web3.js'] },
    { label: 'Cloud & AI', items: ['AWS (EC2, S3, Lambda, Bedrock, SageMaker)', 'Docker', 'CI/CD', 'LangChain', 'RAG Systems'] },
    { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Vector Databases'] },
  ]

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 print:bg-white print:pt-0 print:pb-0">

      <div className="no-print flex justify-center gap-3 mb-6 px-4">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </button>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 bg-white text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm"
        >
          <Printer className="h-4 w-4" />
          Print
        </button>
      </div>

      <div className="resume-page bg-white mx-auto shadow-xl print:shadow-none"
        style={{ width: '210mm', minHeight: '297mm', padding: '14mm 16mm' }}>

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
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.school} className="flex items-start justify-between gap-2">
              <div>
                <span className="text-sm font-bold text-gray-900">{edu.degree}</span>
                <p className="text-xs text-gray-600">{edu.school} — {edu.location}</p>
              </div>
              <span className="text-xs text-gray-500 shrink-0">{edu.period}</span>
            </div>
          ))}
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
