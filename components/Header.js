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
        <nav className="container mx-auto px-4 sm:px-6" aria-label="Global">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
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
            <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm sm:text-base font-medium transition-colors duration-200 ${
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
                className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-sm"
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
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-lg font-medium transition-colors duration-200 py-2 ${
                      pathname === item.href
                        ? 'text-black font-semibold'
                        : 'text-black hover:text-blue-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-sm"
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