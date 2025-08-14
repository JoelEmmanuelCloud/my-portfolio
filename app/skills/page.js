'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  Wrench, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Award,
  TrendingUp
} from 'lucide-react'
import { skills, highlights } from '@/data/skills'

const skillCategories = Object.entries(skills)

const proficiencyLevels = [
  { level: 'Expert', description: '5+ years, production experience', color: 'bg-green-500', width: '100%' },
  { level: 'Advanced', description: '3+ years, complex projects', color: 'bg-blue-500', width: '85%' },
  { level: 'Intermediate', description: '1-3 years, regular use', color: 'bg-yellow-500', width: '70%' },
  { level: 'Learning', description: 'Currently exploring', color: 'bg-gray-400', width: '50%' }
]

// Skill proficiency mapping (you can customize this based on your actual experience)
const skillProficiency = {
  'React.js': 'Expert',
  'Next.js': 'Expert', 
  'Node.js': 'Expert',
  'JavaScript ES6+': 'Expert',
  'TypeScript': 'Advanced',
  'AWS (EC2, S3, Lambda, SageMaker)': 'Advanced',
  'MongoDB': 'Advanced',
  'Express.js': 'Advanced',
  'Java': 'Advanced',
  'Spring Boot': 'Advanced',
  'Python': 'Advanced',
  'Tailwind CSS': 'Advanced',
  'Docker': 'Intermediate',
  'Kubernetes': 'Intermediate',
  'TensorFlow': 'Intermediate',
  'PyTorch': 'Learning'
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0][0])
  
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
              Skills & Technologies
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience in full-stack development, cloud architecture, and AI/ML implementation.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="text-3xl mb-4">{highlight.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-24 bg-white">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Skill Categories</h2>
                <div className="space-y-2">
                  {skillCategories.map(([key, category]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg text-left transition-all duration-200 ${
                        selectedCategory === key
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-xl">{category.icon}</span>
                      <span className="font-medium">{category.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Content */}
            <div className="lg:col-span-3">
              {skillCategories.map(([key, category]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ 
                    opacity: selectedCategory === key ? 1 : 0,
                    x: selectedCategory === key ? 0 : 30
                  }}
                  transition={{ duration: 0.4 }}
                  className={selectedCategory === key ? 'block' : 'hidden'}
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => {
                      const proficiency = skillProficiency[skill] || 'Intermediate'
                      const proficiencyData = proficiencyLevels.find(p => p.level === proficiency)
                      
                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.4 }}
                          className="glass-card rounded-lg p-6"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-gray-900">{skill}</h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              proficiency === 'Expert' ? 'bg-green-100 text-green-800' :
                              proficiency === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                              proficiency === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {proficiency}
                            </span>
                          </div>
                          
                          {/* Proficiency Bar */}
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: proficiencyData?.width }}
                              transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
                              className={`h-2 rounded-full ${proficiencyData?.color}`}
                            />
                          </div>
                          
                          <p className="text-xs text-gray-600">{proficiencyData?.description}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Professional Validation
            </h2>
            <p className="text-lg text-gray-600">
              Industry-recognized certifications demonstrating expertise and commitment to continuous learning
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* AWS Cloud Practitioner */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-xl p-8 hover-lift"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Cloud className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AWS Certified Cloud Practitioner</h3>
                    <p className="text-orange-600 font-medium">Amazon Web Services</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Valid: Oct 11, 2023 – Oct 11, 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="h-5 w-5 text-blue-500" />
                    <span>ID: VVNDR86202F4155M</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Demonstrates foundational understanding of AWS Cloud services, architecture, security, and pricing models.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['EC2', 'S3', 'Lambda', 'CloudWatch', 'IAM', 'VPC'].map((service) => (
                    <span key={service} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* AWS AI Practitioner */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-xl p-8 hover-lift"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Brain className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AWS Certified AI Practitioner</h3>
                    <p className="text-purple-600 font-medium">Amazon Web Services</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Certified 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                    <span>Latest AI/ML Certification</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Validates expertise in AWS AI and machine learning services, including model deployment and MLOps practices.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['SageMaker', 'Bedrock', 'Lex', 'Textract', 'Comprehend', 'Rekognition'].map((service) => (
                    <span key={service} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="py-24 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Continuous Learning
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Technology evolves rapidly, and so do I. I'm committed to staying current with the latest tools, frameworks, and best practices in software development.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    title: 'Current Focus',
                    items: ['Advanced AI/ML', 'Kubernetes', 'Serverless Architecture'],
                    icon: Brain,
                    color: 'blue'
                  },
                  {
                    title: 'Next Learning',
                    items: ['Rust Programming', 'Web3/Blockchain', 'GraphQL Advanced'],
                    icon: TrendingUp,
                    color: 'purple'
                  },
                  {
                    title: 'Practice Areas',
                    items: ['System Design', 'DevOps Culture', 'Team Leadership'],
                    icon: Zap,
                    color: 'green'
                  }
                ].map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`glass-card rounded-xl p-6 border-l-4 border-${area.color}-500`}
                  >
                    <div className={`w-12 h-12 bg-${area.color}-100 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                      <area.icon className={`h-6 w-6 text-${area.color}-600`} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3">{area.title}</h3>
                    <ul className="space-y-2">
                      {area.items.map((item) => (
                        <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 bg-${area.color}-500 rounded-full`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proficiency Legend */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Proficiency Levels Explained
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {proficiencyLevels.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-card rounded-lg p-4 text-center"
                >
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className={`h-2 rounded-full ${level.color}`}
                      style={{ width: level.width }}
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{level.level}</h4>
                  <p className="text-xs text-gray-600">{level.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools & Workflow */}
      <section className="py-24 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Development Workflow
            </h2>
            <p className="text-lg text-gray-600">
              Streamlined processes and tools that ensure quality, efficiency, and maintainability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Development',
                icon: Code,
                tools: ['VS Code', 'Git/GitHub', 'Docker', 'Postman', 'Chrome DevTools'],
                color: 'blue'
              },
              {
                title: 'Design & UI',
                icon: Wrench,
                tools: ['Figma', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'Responsive Design'],
                color: 'purple'
              },
              {
                title: 'Testing & Quality',
                icon: Shield,
                tools: ['Jest', 'Cypress', 'ESLint', 'Prettier', 'Lighthouse'],
                color: 'green'
              },
              {
                title: 'Deployment',
                icon: Cloud,
                tools: ['Vercel', 'AWS', 'GitHub Actions', 'Docker Hub', 'Netlify'],
                color: 'orange'
              }
            ].map((workflow, index) => (
              <motion.div
                key={workflow.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-xl p-6 hover-lift"
              >
                <div className={`w-12 h-12 bg-${workflow.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <workflow.icon className={`h-6 w-6 text-${workflow.color}-600`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{workflow.title}</h3>
                <ul className="space-y-2">
                  {workflow.tools.map((tool) => (
                    <li key={tool} className="text-sm text-gray-600 flex items-center gap-2">
                      <CheckCircle className={`h-3 w-3 text-${workflow.color}-500`} />
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills in Action */}
      <section className="py-24 bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Skills in Action
            </h2>
            <p className="text-lg text-gray-600">
              See how these technologies come together in real-world projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Freedom Ride-Hailing',
                description: 'Full-stack platform using React, Node.js, AWS, and real-time features',
                skills: ['React', 'Node.js', 'MongoDB', 'AWS EC2', 'Socket.IO', 'Google Maps'],
                link: '/projects/freedom-ride-hailing'
              },
              {
                title: 'AI Customer Support Bot',
                description: 'Intelligent chatbot with Amazon Lex, Bedrock, and React admin panel',
                skills: ['Amazon Lex', 'Amazon Bedrock', 'React', 'AWS Lambda', 'DynamoDB'],
                link: '/projects/nsight-ai-chatbot'
              },
              {
                title: 'Enterprise AI Apps',
                description: 'Complex frontend interfaces with React, TypeScript, and modern patterns',
                skills: ['React', 'TypeScript', 'Enterprise UI', 'API Integration'],
                link: '/projects/invillia-enterprise-ai'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-xl p-6 hover-lift"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={project.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
              Ready to Put These Skills to Work?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how my technical expertise can help solve your business challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}