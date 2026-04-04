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
      icon: ''
    },
    {
      title: 'Experience',
      description: 'See my background',
      href: '/experience',
      icon: ''
    },
    {
      title: 'Contact',
      description: 'Get in touch',
      href: '/contact',
      icon: ''
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center sm:text-left">

          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-normal text-gray-900 dark:text-white mb-6 sm:mb-8">
            404
          </h1>

          <h2 className="text-xl sm:text-2xl font-normal text-gray-900 dark:text-white mb-3 sm:mb-4">
            Page not found
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 font-normal leading-relaxed max-w-lg mx-auto sm:mx-0">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go back
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 sm:pt-12">
            <h3 className="text-base sm:text-lg font-normal text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center justify-center sm:justify-start">
              <Search className="h-5 w-5 mr-2 text-gray-400 dark:text-gray-500" />
              Explore instead
            </h3>

            <div className="grid gap-4 sm:gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block group"
                >
                  <div className="flex items-center justify-between p-4 sm:p-2 bg-gray-50 dark:bg-gray-800 sm:bg-transparent dark:sm:bg-transparent rounded-lg sm:rounded-none hover:bg-gray-100 dark:hover:bg-gray-700 sm:hover:bg-transparent transition-colors duration-200">
                    <div className="flex items-center">
                      <span className="text-xl sm:text-base mr-3 sm:mr-0 sm:hidden">
                        {link.icon}
                      </span>
                      <div>
                        <h4 className="text-sm sm:text-base font-normal text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                          {link.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-normal">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-200">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center sm:text-left">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Still can&apos;t find what you&apos;re looking for?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal mb-4">
                I&apos;m here to help. Feel free to reach out directly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:hidden fixed bottom-4 left-4 right-4 z-10">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Need help?
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Get support quickly
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden sm:block fixed bottom-6 right-6 lg:bottom-8 lg:right-8">
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-normal">
              Need help?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 text-sm font-medium shadow-lg"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
