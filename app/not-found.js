'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  const quickLinks = [
    {
      title: 'Projects',
      description: 'View case studies',
      href: '/projects'
    },
    {
      title: 'About',
      description: 'Learn more about me',
      href: '/about'
    },
    {
      title: 'Contact',
      description: 'Get in touch',
      href: '/contact'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-2xl">
          {/* Large 404 */}
          <h1 className="text-8xl lg:text-9xl font-light text-gray-900 mb-8">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-2xl font-light text-gray-900 mb-4">
            Page not found
          </h2>
          
          <p className="text-gray-600 mb-12 font-light leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Navigation Options */}
          <div className="flex gap-6 mb-16">
            <button
              onClick={() => router.back()}
              className="text-gray-900 hover:text-gray-600 transition-colors font-light"
            >
              ← Go back
            </button>
            
            <Link
              href="/"
              className="text-gray-900 hover:text-gray-600 transition-colors font-light"
            >
              Home →
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-lg font-light text-gray-900 mb-8">
              Explore
            </h3>
            
            <div className="space-y-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block group"
                >
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h4 className="font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-sm text-gray-500 font-light">
                        {link.description}
                      </p>
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA - Bottom Right */}
        <div className="fixed bottom-8 right-8">
          <div className="text-right">
            <p className="text-sm text-gray-500 mb-2 font-light">
              Need help?
            </p>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-gray-600 transition-colors font-light"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}