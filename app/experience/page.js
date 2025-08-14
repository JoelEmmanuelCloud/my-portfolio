'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Calendar, MapPin, ArrowRight, Award, GraduationCap } from 'lucide-react'
import { experience, certifications, education } from '@/data/experience'

export default function Experience() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Professional Experience
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              A journey through innovative companies and challenging projects that shaped my expertise in full-stack development and AI/ML technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-gray-600">
              Building production systems and leading technical initiatives across multiple industries
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block" />

            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block" />
                  
                  <div className="md:ml-20">
                    <div className="glass-card rounded-2xl p-8 hover-lift">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="mb-4 lg:mb-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {job.role}
                            </h3>
                            {job.current && (
                              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                            <div className="flex items-center gap-1">
                              <span className="font-semibold text-blue-600">{job.company}</span>
                              {job.website && (
                                <a
                                  href={job.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              )}
                            </div>
                            
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
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {job.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {job.bullets.map((bullet, bulletIndex) => (
                          <motion.div
                            key={bulletIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: bulletIndex * 0.1, duration: 0.4 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-gray-700 leading-relaxed">{bullet}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Validated expertise in cloud computing and emerging technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-xl p-6 hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-600 mb-3">{cert.date}</p>
                {cert.id && (
                  <p className="text-xs text-gray-500 mb-3">ID: {cert.id}</p>
                )}
                <p className="text-sm text-gray-700">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Education
            </h2>
            <p className="text-lg text-gray-600">
              Strong foundation in computer science fundamentals and software engineering
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-xl p-8 hover-lift"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-purple-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{edu.school}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how my experience can help your next project succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}