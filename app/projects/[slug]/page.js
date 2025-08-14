'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ExternalLink, ArrowLeft, Calendar, User, Code, Zap, Award, CheckCircle } from 'lucide-react'
import { projects } from '@/data/projects'

export default function ProjectDetail({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  
  if (!project) {
    notFound()
  }

  // Get related projects (exclude current project)
  const relatedProjects = projects
    .filter(p => p.slug !== params.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen pt-16">
      {/* Back Navigation */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-max section-padding">
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{project.role}</span>
              </div>
              
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                >
                  <ExternalLink className="h-5 w-5" />
                  View Live Site
                </a>
              )}
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {project.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      {project.images && project.images[0] && (
        <section className="py-12 bg-white">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-24 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Context */}
                {project.context && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Code className="h-6 w-6 text-blue-600" />
                      Project Context
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{project.context}</p>
                  </motion.div>
                )}

                {/* Challenge */}
                {project.challenge && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Zap className="h-6 w-6 text-orange-600" />
                      The Challenge
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                  </motion.div>
                )}

                {/* Solution */}
                {project.solution && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      The Solution
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                  </motion.div>
                )}

                {/* Technology Breakdown */}
                {project.technologies && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Technology Stack
                    </h2>
                    <div className="space-y-6">
                      {Object.entries(project.technologies).map(([category, techs], index) => (
                        <div key={category} className="glass-card rounded-lg p-6">
                          <h3 className="font-semibold text-gray-900 mb-3 capitalize">
                            {category.replace(/([A-Z])/g, ' $1').trim()}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Impact */}
                {project.impact && project.impact.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Award className="h-6 w-6 text-purple-600" />
                      Impact & Results
                    </h2>
                    <div className="space-y-4">
                      {project.impact.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                          className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200"
                        >
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-800 leading-relaxed">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Additional Images */}
                {project.images && project.images.length > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Additional Screenshots
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.images.slice(1).map((image, index) => (
                        <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${index + 2}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Tech Stack Summary */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="glass-card rounded-xl p-6"
                >
                  <h3 className="font-bold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="space-y-3">
                    {project.stack.map((tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-sm text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Project Links */}
                {(project.links?.live || project.links?.github || project.links?.company) && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="glass-card rounded-xl p-6"
                  >
                    <h3 className="font-bold text-gray-900 mb-4">Project Links</h3>
                    <div className="space-y-3">
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                        >
                          <ExternalLink className="h-5 w-5 text-blue-600" />
                          <span className="font-medium text-blue-700">Live Website</span>
                        </a>
                      )}
                      
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Code className="h-5 w-5 text-gray-600" />
                          <span className="font-medium text-gray-700">Source Code</span>
                        </a>
                      )}
                      
                      {project.links?.company && (
                        <a
                          href={project.links.company}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
                        >
                          <ExternalLink className="h-5 w-5 text-purple-600" />
                          <span className="font-medium text-purple-700">Company</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="glass-card rounded-xl p-6 bg-gradient-to-r from-blue-50 to-purple-50"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="h-6 w-6 text-blue-600" />
                      <h3 className="font-bold text-gray-900">Featured Project</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      This project showcases advanced technical skills and real-world impact.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                More Projects
              </h2>
              <p className="text-lg text-gray-600">
                Explore other projects showcasing different technologies and approaches
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Link href={`/projects/${relatedProject.slug}`} className="group block">
                    <div className="glass-card rounded-xl p-6 hover-lift">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {relatedProject.title}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm mb-3">
                        {relatedProject.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {relatedProject.summary}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {relatedProject.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              Interested in Similar Work?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project requirements and how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Start a Conversation
              </Link>
              <Link
                href="/projects"
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                View All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}