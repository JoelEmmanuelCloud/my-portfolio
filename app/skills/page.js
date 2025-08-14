'use client'
import { useState } from 'react'
import Link from 'next/link'
import { skills, highlights } from '@/data/skills'

const skillCategories = Object.entries(skills)

// Skill proficiency mapping
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
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-7xl font-light text-gray-900 mb-6">
              Skills
            </h1>
            <p className="text-xl text-gray-600 font-light mb-8">
              — Modern technologies for scalable web development
            </p>
            <div className="text-gray-600 space-y-2">
              <p>Full-stack development with React, Node.js, and AWS</p>
              <p>5+ years building production applications</p>
              <p>Continuous learning and adaptation to new technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-16">Key Strengths</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <div key={highlight.title} className="text-center">
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-16">Technical Skills</h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Category Navigation */}
              <div className="lg:col-span-1">
                <div className="space-y-2">
                  {skillCategories.map(([key, category]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`w-full text-left p-4 rounded border transition-all duration-200 ${
                        selectedCategory === key
                          ? 'bg-gray-900 text-white border-gray-900'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="mr-3">{category.icon}</span>
                      {category.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills Content */}
              <div className="lg:col-span-3">
                {skillCategories.map(([key, category]) => (
                  <div
                    key={key}
                    className={selectedCategory === key ? 'block' : 'hidden'}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-light text-gray-900 mb-2 flex items-center gap-3">
                        <span>{category.icon}</span>
                        {category.title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {category.skills.map((skill, index) => {
                        const proficiency = skillProficiency[skill] || 'Intermediate'
                        
                        return (
                          <div key={skill} className="border-b border-gray-100 pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-lg text-gray-900">{skill}</h4>
                              <span className={`px-3 py-1 text-sm rounded-full ${
                                proficiency === 'Expert' ? 'bg-green-100 text-green-800' :
                                proficiency === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                                proficiency === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {proficiency}
                              </span>
                            </div>
                            
                            {/* Proficiency Bar */}
                            <div className="w-full bg-gray-200 rounded h-1">
                              <div
                                className={`h-1 rounded ${
                                  proficiency === 'Expert' ? 'bg-green-500 w-full' :
                                  proficiency === 'Advanced' ? 'bg-blue-500 w-4/5' :
                                  proficiency === 'Intermediate' ? 'bg-yellow-500 w-3/5' :
                                  'bg-gray-400 w-2/5'
                                }`}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-16">Professional Certifications</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* AWS Cloud Practitioner */}
              <div className="border border-gray-200 rounded-lg p-8 bg-white">
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">AWS Certified Cloud Practitioner</h3>
                  <p className="text-gray-600 mb-4">Amazon Web Services</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>Valid: Oct 11, 2023 – Oct 11, 2026</p>
                    <p>ID: VVNDR86202F4155M</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Foundational understanding of AWS Cloud services, architecture, security, and pricing models.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['EC2', 'S3', 'Lambda', 'CloudWatch', 'IAM', 'VPC'].map((service) => (
                    <span key={service} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs border border-orange-200 rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* AWS AI Practitioner */}
              <div className="border border-gray-200 rounded-lg p-8 bg-white">
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">AWS Certified AI Practitioner</h3>
                  <p className="text-gray-600 mb-4">Amazon Web Services</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>Certified 2024</p>
                    <p>Latest AI/ML Certification</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Expertise in AWS AI and machine learning services, including model deployment and MLOps practices.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['SageMaker', 'Bedrock', 'Lex', 'Textract', 'Comprehend', 'Rekognition'].map((service) => (
                    <span key={service} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs border border-purple-200 rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-16">Continuous Learning</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Current Focus',
                  items: ['Advanced AI/ML', 'Kubernetes', 'Serverless Architecture']
                },
                {
                  title: 'Next Learning',
                  items: ['Rust Programming', 'Web3/Blockchain', 'GraphQL Advanced']
                },
                {
                  title: 'Practice Areas',
                  items: ['System Design', 'DevOps Culture', 'Team Leadership']
                }
              ].map((area, index) => (
                <div key={area.title} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proficiency Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-light text-gray-900 mb-8 text-center">
              Proficiency Levels
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { level: 'Expert', description: '5+ years, production experience', color: 'bg-green-500' },
                { level: 'Advanced', description: '3+ years, complex projects', color: 'bg-blue-500' },
                { level: 'Intermediate', description: '1-3 years, regular use', color: 'bg-yellow-500' },
                { level: 'Learning', description: 'Currently exploring', color: 'bg-gray-400' }
              ].map((level, index) => (
                <div key={level.level} className="text-center border border-gray-200 rounded p-4 bg-white">
                  <div className="w-full bg-gray-200 rounded h-1 mb-3">
                    <div 
                      className={`h-1 rounded ${level.color}`}
                      style={{ 
                        width: level.level === 'Expert' ? '100%' : 
                               level.level === 'Advanced' ? '85%' : 
                               level.level === 'Intermediate' ? '70%' : '50%' 
                      }}
                    />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">{level.level}</h4>
                  <p className="text-xs text-gray-600">{level.description}</p>
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
              Ready to Collaborate?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how these skills can help solve your technical challenges.
            </p>
            <div className="flex gap-6">
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Start a Project →
              </Link>
              <Link
                href="/projects"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                View My Work →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}