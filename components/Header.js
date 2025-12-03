'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white shadow-md backdrop-blur-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <div className="flex">
              <Link href="/" className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 relative">
                  <Image
                    src="/logos/logo2.png"
                    alt="Joel Emmanuel Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-5 xl:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm lg:text-base font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-black font-semibold'
                      : 'text-black hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 lg:px-6 py-2 lg:py-2.5 bg-blue-600 text-white text-sm lg:text-base font-medium rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-sm"
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="p-2 text-black hover:text-blue-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-5 py-5">
              <div className="space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-base font-medium transition-colors duration-200 py-2 ${
                      pathname === item.href
                        ? 'text-black font-semibold'
                        : 'text-black hover:text-blue-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-3 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-blue-600 text-white text-base font-medium rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}