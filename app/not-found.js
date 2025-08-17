'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()

  const quickLinks = [
    {
      title: 'Projects',
      description: 'View case studies',
      href: '/projects',
      icon: '💼'
    },
    {
      title: 'Experience',
      description: 'See my background',
      href: '/experience',
      icon: '🚀'
    },
    {
      title: 'Contact',
      description: 'Get in touch',
      href: '/contact',
      icon: '💬'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center sm:text-left">
          {/* Large 404 - Responsive */}
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-light text-gray-900 mb-6 sm:mb-8">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4">
            Page not found
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 font-light leading-relaxed max-w-lg mx-auto sm:mx-0">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back on track.
          </p>

          {/* Primary Actions - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go back
            </button>
            
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-200 pt-8 sm:pt-12">
            <h3 className="text-base sm:text-lg font-light text-gray-900 mb-6 sm:mb-8 flex items-center justify-center sm:justify-start">
              <Search className="h-5 w-5 mr-2 text-gray-400" />
              Explore instead
            </h3>
            
            <div className="grid gap-4 sm:gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block group"
                >
                  <div className="flex items-center justify-between p-4 sm:p-2 bg-gray-50 sm:bg-transparent rounded-lg sm:rounded-none hover:bg-gray-100 sm:hover:bg-transparent transition-colors duration-200">
                    <div className="flex items-center">
                      <span className="text-xl sm:text-base mr-3 sm:mr-0 sm:hidden">
                        {link.icon}
                      </span>
                      <div>
                        <h4 className="text-sm sm:text-base font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                          {link.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 font-light">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-12 sm:mt-16 text-center sm:text-left">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Still can&apos;t find what you&apos;re looking for?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 font-light mb-4">
                I&apos;m here to help. Feel free to reach out directly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile-optimized Contact CTA - Bottom */}
        <div className="sm:hidden fixed bottom-4 left-4 right-4 z-10">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Need help?
                </p>
                <p className="text-xs text-gray-500">
                  Get support quickly
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Contact CTA - Bottom Right */}
        <div className="hidden sm:block fixed bottom-6 right-6 lg:bottom-8 lg:right-8">
          <div className="text-right">
            <p className="text-sm text-gray-500 mb-2 font-light">
              Need help?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium shadow-lg"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}