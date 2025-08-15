'use client'
import Link from 'next/link'
import { ExternalLink, Calendar, MapPin } from 'lucide-react'
import { experience, certifications, education } from '@/data/experience'

export default function Experience() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-4 sm:mb-6">
              Experience
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-light mb-6 sm:mb-8">
              — Building production systems across innovative companies
            </p>
            <div className="text-sm sm:text-base text-gray-600 space-y-2">
              <p>Frontend Engineer specializing in React and modern web technologies</p>
              <p>5+ years of full-stack development experience</p>
              <p>AWS certified with expertise in cloud architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-12 sm:mb-16 text-center lg:text-left">
              Work History
            </h2>
            
            <div className="space-y-12 sm:space-y-16">
              {experience?.map((job, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-6 sm:pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
                  
                  <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                      <div className="space-y-3 sm:space-y-2">
                        <h3 className="text-lg sm:text-xl font-medium text-gray-900">{job.role}</h3>
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
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
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
                    
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                      {job.highlights && job.highlights.length > 0 && (
                        <div className="space-y-3">
                          {job.highlights.map((highlight, highlightIndex) => (
                            <p key={highlightIndex} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                              {highlight}
                            </p>
                          ))}
                        </div>
                      )}
                      
                      {job.stack && job.stack.length > 0 && (
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
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-12 sm:mb-16 text-center lg:text-left">
              Certifications
            </h2>
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {certifications?.map((cert, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">{cert.name}</h3>
                      <p className="text-sm sm:text-base text-gray-600 font-medium">{cert.issuer}</p>
                    </div>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <p>{cert.date}</p>
                    {cert.id && <p className="break-all">ID: {cert.id}</p>}
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-12 sm:mb-16 text-center lg:text-left">
              Education
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              {education?.map((edu, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 sm:p-8 bg-white">
                  <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-sm sm:text-base text-gray-600 font-medium mb-4">{edu.school}</p>
                      
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
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Ready to discuss how my experience can help your next project succeed?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm sm:text-base font-light self-center"
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