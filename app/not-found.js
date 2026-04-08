import Link from 'next/link'
import Image from 'next/image'
import { Home } from 'lucide-react'

const quickLinks = [
  { title: 'Projects', description: 'View case studies', href: '/projects' },
  { title: 'Experience', description: 'See my background', href: '/experience' },
  { title: 'Contact', description: 'Get in touch', href: '/contact' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl mx-auto">

          <Link href="/" className="inline-flex items-center gap-2 mb-12 sm:mb-16 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <div className="w-6 h-6 relative">
              <Image src="/logos/logo-je.svg" alt="Joel Emmanuel" fill className="object-contain" />
            </div>
            joelemmanuel.dev
          </Link>

          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">404</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 leading-tight">
            Page not found
          </h1>

          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-10 sm:mb-12 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-col xs:flex-row gap-3 mb-14 sm:mb-16">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-semibold shadow-sm"
            >
              <Home className="h-4 w-4" />
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black dark:border-gray-600 text-black dark:text-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-sm font-semibold"
            >
              Get in touch
            </Link>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-10 sm:pt-12">
            <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
              You might be looking for
            </p>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {link.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{link.description}</p>
                  </div>
                  <span className="text-gray-300 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
