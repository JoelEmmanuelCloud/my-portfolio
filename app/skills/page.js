'use client'
//app/skills/page.js
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
      <section className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-4 sm:mb-6">
              Skills
            </h1>
            <p className="text-lg sm:text-xl text-black font-light mb-6 sm:mb-8">
              — Modern technologies for scalable web development
            </p>
            <div className="text-black space-y-2 text-sm sm:text-base">
              <p>Full-stack development with React, Node.js, and AWS</p>
              <p>5+ years building production applications</p>
              <p>Continuous learning and adaptation to new technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-12 sm:mb-16 text-center">Key Strengths</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {highlights.map((highlight, index) => (
                <div key={highlight.title} className="text-center border border-black rounded-lg p-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{highlight.icon}</div>
                  <h3 className="text-base sm:text-lg font-medium text-black mb-2">{highlight.title}</h3>
                  <p className="text-black text-sm sm:text-base">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-12 sm:mb-16 text-center">Technical Skills</h2>
            
            <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Category Navigation */}
              <div className="lg:col-span-1">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                  {skillCategories.map(([key, category]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`w-full text-left p-3 sm:p-4 rounded border transition-all duration-200 text-sm sm:text-base font-medium ${
                        selectedCategory === key
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-black border-black hover:bg-blue-50 hover:border-blue-600'
                      }`}
                    >
                      <span className="mr-2 sm:mr-3">{category.icon}</span>
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
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-light text-black mb-2 flex items-center gap-3">
                        <span>{category.icon}</span>
                        {category.title}
                      </h3>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      {category.skills.map((skill, index) => {
                        const proficiency = skillProficiency[skill] || 'Intermediate'
                        
                        return (
                          <div key={skill} className="border-b border-black pb-3 sm:pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-base sm:text-lg text-black font-medium">{skill}</h4>
                              <span className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full font-medium ${
                                proficiency === 'Expert' ? 'bg-green-100 text-green-800 border border-green-800' :
                                proficiency === 'Advanced' ? 'bg-blue-100 text-blue-800 border border-blue-800' :
                                proficiency === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 border border-yellow-800' :
                                'bg-red-100 text-red-800 border border-red-800'
                              }`}>
                                {proficiency}
                              </span>
                            </div>
                            
                            {/* Proficiency Bar */}
                            <div className="w-full bg-white rounded h-2 border border-black">
                              <div
                                className={`h-full rounded ${
                                  proficiency === 'Expert' ? 'bg-green-600 w-full' :
                                  proficiency === 'Advanced' ? 'bg-blue-600 w-4/5' :
                                  proficiency === 'Intermediate' ? 'bg-yellow-600 w-3/5' :
                                  'bg-red-600 w-2/5'
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
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-12 sm:mb-16 text-center">Professional Certifications</h2>
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {/* AWS Cloud Practitioner */}
              <div className="border border-black rounded-lg p-6 sm:p-8 bg-white">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-medium text-black mb-2">AWS Certified Cloud Practitioner</h3>
                  <p className="text-black mb-3 sm:mb-4 text-sm sm:text-base font-medium">Amazon Web Services</p>
                  
                  <div className="space-y-2 text-xs sm:text-sm text-black">
                    <p>Valid: Oct 11, 2023 – Oct 11, 2026</p>
                    <p>ID: VVNDR86202F4155M</p>
                  </div>
                </div>
                
                <p className="text-black mb-4 text-sm sm:text-base">
                  Foundational understanding of AWS Cloud services, architecture, security, and pricing models.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['EC2', 'S3', 'Lambda', 'CloudWatch', 'IAM', 'VPC'].map((service) => (
                    <span key={service} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs border border-orange-700 rounded font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* AWS AI Practitioner */}
              <div className="border border-black rounded-lg p-6 sm:p-8 bg-white">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-medium text-black mb-2">AWS Certified AI Practitioner</h3>
                  <p className="text-black mb-3 sm:mb-4 text-sm sm:text-base font-medium">Amazon Web Services</p>
                  
                  <div className="space-y-2 text-xs sm:text-sm text-black">
                    <p>Certified 2024</p>
                    <p>Latest AI/ML Certification</p>
                  </div>
                </div>
                
                <p className="text-black mb-4 text-sm sm:text-base">
                  Expertise in AWS AI and machine learning services, including model deployment and MLOps practices.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['SageMaker', 'Bedrock', 'Lex', 'Textract', 'Comprehend', 'Rekognition'].map((service) => (
                    <span key={service} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs border border-purple-700 rounded font-medium">
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
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-12 sm:mb-16 text-center">Continuous Learning</h2>
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
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
                <div key={area.title} className="border border-black rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-medium text-black mb-3 sm:mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="text-black flex items-center gap-2 text-sm sm:text-base">
                        <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-lg sm:text-xl font-light text-black mb-6 sm:mb-8 text-center">
              Proficiency Levels
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { level: 'Expert', description: '5+ years, production experience', color: 'bg-green-600' },
                { level: 'Advanced', description: '3+ years, complex projects', color: 'bg-blue-600' },
                { level: 'Intermediate', description: '1-3 years, regular use', color: 'bg-yellow-600' },
                { level: 'Learning', description: 'Currently exploring', color: 'bg-red-600' }
              ].map((level, index) => (
                <div key={level.level} className="text-center border border-black rounded p-3 sm:p-4 bg-white">
                  <div className="w-full bg-white rounded h-2 mb-2 sm:mb-3 border border-black">
                    <div 
                      className={`h-full rounded ${level.color}`}
                      style={{ 
                        width: level.level === 'Expert' ? '100%' : 
                               level.level === 'Advanced' ? '85%' : 
                               level.level === 'Intermediate' ? '70%' : '50%' 
                      }}
                    />
                  </div>
                  <h4 className="font-medium text-black mb-1 text-sm sm:text-base">{level.level}</h4>
                  <p className="text-xs text-black">{level.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl text-center mx-auto">
            <h2 className="text-3xl sm:text-4xl font-light text-black mb-4 sm:mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-lg sm:text-xl text-black mb-8 sm:mb-12">
              Let&apos;s discuss how these skills can help solve your technical challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
              >
                Start a Project
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-black hover:text-white hover:bg-blue-600 border border-blue-600 rounded-lg transition-colors text-sm sm:text-base font-medium"
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