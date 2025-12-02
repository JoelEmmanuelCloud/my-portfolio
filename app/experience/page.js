'use client'
//app/experience/page.js
import Link from 'next/link'
import { ExternalLink, Calendar, MapPin } from 'lucide-react'
import { experience, certifications, education } from '@/data/experience'

export default function Experience() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-4 sm:mb-6 leading-tight">
              Experience
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-black font-light mb-6 sm:mb-8 leading-relaxed">
              — Building production systems across innovative companies
            </p>
            <div className="text-sm sm:text-base lg:text-lg text-black space-y-3 sm:space-y-2">
              <p className="font-medium">Frontend Engineer specializing in React and modern web technologies</p>
              <p className="font-medium">5+ years of full-stack development experience</p>
              <p className="font-medium">AWS certified with expertise in cloud architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white border-t-2 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left">
              Work History
            </h2>
            
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {experience?.map((job, index) => (
                <div key={index} className="border-l-4 border-black pl-6 sm:pl-8 lg:pl-10 relative">
                  <div className="absolute -left-2.5 top-0 w-5 h-5 bg-black rounded-full"></div>
                  
                  <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-12">
                    <div className="lg:col-span-1">
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black leading-tight">{job.role}</h3>
                        <div className="flex items-center gap-2 text-black">
                          <span className="font-bold text-base sm:text-lg">{job.company}</span>
                          {job.website && (
                            <a
                              href={job.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            >
                              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                            </a>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-black">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                            <span className="font-medium">{job.period}</span>
                          </div>
                          {job.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                              <span className="font-medium">{job.location}</span>
                            </div>
                          )}
                        </div>
                        {job.current && (
                          <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                      {job.highlights && job.highlights.length > 0 && (
                        <div className="space-y-4">
                          {job.highlights.map((highlight, highlightIndex) => (
                            <p key={highlightIndex} className="text-sm sm:text-base lg:text-lg text-black leading-relaxed font-medium">
                              {highlight}
                            </p>
                          ))}
                        </div>
                      )}
                      
                      {job.stack && job.stack.length > 0 && (
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {job.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 sm:px-4 py-2 bg-white text-black text-sm sm:text-base border-2 border-black rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
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
      <section className="py-12 sm:py-16 lg:py-24 bg-white border-t-2 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left">
              Certifications
            </h2>
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
              {certifications?.map((cert, index) => (
                <div key={index} className="border-2 border-black rounded-xl p-6 sm:p-8 lg:p-10 bg-white hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex-1 mr-4">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-2 leading-tight">{cert.name}</h3>
                      <p className="text-sm sm:text-base lg:text-lg text-black font-semibold">{cert.issuer}</p>
                    </div>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex-shrink-0 transition-colors duration-200"
                      >
                        <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6" />
                      </a>
                    )}
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-black mb-4 sm:mb-6">
                    <p className="font-medium">{cert.date}</p>
                    {cert.id && <p className="break-all font-medium">ID: {cert.id}</p>}
                  </div>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed font-medium">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white border-t-2 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left">
              Education
            </h2>
            
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {education?.map((edu, index) => (
                <div key={index} className="border-2 border-black rounded-xl p-6 sm:p-8 lg:p-10 bg-white hover:shadow-lg transition-shadow duration-300">
                  <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-12">
                    <div className="lg:col-span-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-3 sm:mb-4 leading-tight">{edu.degree}</h3>
                      <p className="text-sm sm:text-base lg:text-lg text-black font-semibold mb-4 sm:mb-6">{edu.school}</p>
                      
                      <div className="space-y-3 text-sm sm:text-base text-black">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed font-medium">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white border-t-2 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-black mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-black mb-6 sm:mb-8 lg:mb-12 leading-relaxed font-medium">
              Ready to discuss how my experience can help your next project succeed?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-start items-center sm:items-start">
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-blue-600 text-white rounded-full hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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