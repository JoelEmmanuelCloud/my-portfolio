'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  Home, 
  ArrowLeft, 
  Search, 
  FileQuestion, 
  Code, 
  Brain,
  Lightbulb,
  ExternalLink 
} from 'lucide-react'

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0, 1, 1, 0.5],
      y: [20, 0, -5, 5],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute opacity-20"
  >
    {children}
  </motion.div>
)

export default function NotFound() {
  const router = useRouter()

  const quickLinks = [
    {
      title: 'View Projects',
      description: 'Explore my featured work and case studies',
      href: '/projects',
      icon: Code,
      color: 'blue'
    },
    {
      title: 'Skills & Experience',
      description: 'See my technical expertise and background',
      href: '/skills',
      icon: Brain,
      color: 'purple'
    },
    {
      title: 'Get In Touch',
      description: 'Start a conversation about opportunities',
      href: '/contact',
      icon: Lightbulb,
      color: 'green'
    }
  ]

  const suggestions = [
    'Check out my latest projects and case studies',
    'Learn about my technical skills and certifications',
    'Read about my professional experience',
    'Get in touch for collaboration opportunities'
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement delay={0}>
          <div className="top-1/4 left-1/4">
            <FileQuestion className="h-16 w-16 text-gray-300" />
          </div>
        </FloatingElement>
        <FloatingElement delay={1}>
          <div className="top-1/3 right-1/4">
            <Search className="h-12 w-12 text-gray-300" />
          </div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="bottom-1/3 left-1/3">
            <Code className="h-14 w-14 text-gray-300" />
          </div>
        </FloatingElement>
      </div>

      <div className="container-max section-padding py-24 text-center relative z-10">
        {/* 404 Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Large 404 */}
          <div className="relative mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-none"
            >
              404
            </motion.h1>
            
            {/* Glitch effect overlay */}
            <motion.div
              animate={{ 
                x: [0, 2, -2, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-red-500 leading-none mix-blend-multiply"
            >
              404
            </motion.div>
          </div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the digital void. 
              But don't worry – there's plenty more to explore in my portfolio!
            </p>
          </motion.div>
        </motion.div>

        {/* Navigation Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </button>
            
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Home className="mr-2 h-4 w-4" />
              Home Page
            </Link>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-8">
            Explore Popular Sections
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={link.href}
                  className="group block p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-${link.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <link.icon className={`h-6 w-6 text-${link.color}-600`} />
                  </div>
                  
                  <h4 className={`font-bold text-gray-900 mb-2 group-hover:text-${link.color}-600 transition-colors duration-200`}>
                    {link.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {link.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                    <span>Explore</span>
                    <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Helpful Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            While You're Here...
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50"
              >
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {suggestion}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-16 max-w-lg mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Code className="h-4 w-4 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Did you know?</h4>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              This 404 page was built with React, Framer Motion, and Tailwind CSS – 
              the same technologies I use to create production applications!
            </p>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 max-w-md mx-auto">
            <h4 className="font-bold text-gray-900 mb-4">
              Still can't find what you're looking for?
            </h4>
            <p className="text-sm text-gray-600 mb-6">
              Feel free to reach out directly. I'd be happy to help!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}