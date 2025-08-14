'use client'
import Link from 'next/link'
import { ExternalLink, Calendar, MapPin } from 'lucide-react'
import { experience, certifications, education } from '@/data/experience'

export default function Experience() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-7xl font-light text-gray-900 mb-6">
              Experience
            </h1>
            <p className="text-xl text-gray-600 font-light mb-8">
              — Building production systems across innovative companies
            </p>
            <div className="text-gray-600 space-y-2">
              <p>Frontend Engineer specializing in React and modern web technologies</p>
              <p>5+ years of full-stack development experience</p>
              <p>AWS certified with expertise in cloud architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-16">Work History</h2>
            
            <div className="space-y-16">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
                  
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium text-gray-900">{job.role}</h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <span className="font-medium">{job.company}</span>
                          {job.website && (
                            <a
                              href={job.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{job.period}</span>
                          </div>
                          {job.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                          )}
                        </div>
                        {job.current && (
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-6">
                      <div className="space-y-3">
                        {job.bullets.map((bullet, bulletIndex) => (
                          <p key={bulletIndex} className="text-gray-700 leading-relaxed">
                            {bullet}
                          </p>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white text-gray-700 text-sm border border-gray-200 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-16">Certifications</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{cert.name}</h3>
                      <p className="text-gray-600 font-medium">{cert.issuer}</p>
                    </div>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>{cert.date}</p>
                    {cert.id && <p>ID: {cert.id}</p>}
                  </div>
                  
                  <p className="text-gray-700">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-16">Education</h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-8 bg-white">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-gray-600 font-medium mb-4">{edu.school}</p>
                      
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to discuss how my experience can help your next project succeed?
            </p>
            <div className="flex gap-6">
              <Link
                href="/projects"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                View My Work →
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}