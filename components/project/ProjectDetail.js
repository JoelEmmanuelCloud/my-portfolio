'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, User, Target, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Badge, { TechBadge } from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { Section, SectionContainer } from '@/components/ui/Section'

const ProjectDetail = ({ project }) => {
  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button variant="primary">Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  const {
    title,
    role,
    summary,
    context,
    challenge,
    solution,
    impact = [],
    stack = [],
    technologies = {},
    links = {},
    images = []
  } = project

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <SectionContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Link
                href="/projects"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Badge variant="primary" size="lg">
                  {role}
                </Badge>
                {links.live && (
                  <a
                    href={links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                )}
                {links.github && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {summary}
              </p>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                {stack.map((tech, index) => (
                  <TechBadge key={index}>{tech}</TechBadge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </SectionContainer>
      </Section>

      {/* Project Images */}
      {images.length > 0 && (
        <Section background="white" padding="lg">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-xl group"
                >
                  <Image
                    src={image}
                    alt={`${title} screenshot ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              ))}
            </motion.div>
          </SectionContainer>
        </Section>
      )}

      {/* Project Details */}
      <Section background="gray" padding="lg">
        <SectionContainer>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Context */}
              {context && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Target className="h-6 w-6 text-blue-600 mr-3" />
                        Project Context
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{context}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Challenge */}
              {challenge && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="h-6 w-6 text-orange-600 mr-3" />
                        The Challenge
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{challenge}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Solution */}
              {solution && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="h-6 w-6 text-green-600 mr-3" />
                        My Solution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{solution}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Impact & Results */}
              {impact.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Impact & Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {impact.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                            <span className="text-gray-600 leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Project Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Role</h4>
                      <p className="text-gray-600">{role}</p>
                    </div>
                    
                    {links.live && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Live Project</h4>
                        <a
                          href={links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
                        >
                          Visit Site
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    )}

                    {links.github && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Source Code</h4>
                        <a
                          href={links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
                        >
                          View Code
                          <Github className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technology Stack */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Technology Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {technologies && Object.keys(technologies).length > 0 ? (
                      <div className="space-y-6">
                        {Object.entries(technologies).map(([category, techs]) => (
                          <div key={category}>
                            <h4 className="font-semibold text-gray-900 mb-3 capitalize">
                              {category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {techs.map((tech, index) => (
                                <TechBadge key={index}>{tech}</TechBadge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {stack.map((tech, index) => (
                          <TechBadge key={index}>{tech}</TechBadge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* CTA Section */}
      <Section background="gradient-dark" padding="lg">
        <SectionContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Interested in working together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="white" size="lg">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  View More Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </SectionContainer>
      </Section>
    </div>
  )
}

export default ProjectDetail