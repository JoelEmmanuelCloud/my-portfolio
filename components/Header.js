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
      <header className="fixed w-full top-0 z-50 bg-black backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6" aria-label="Global">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-16 h-16 relative">
                  <Image
                    src="/logos/logo.svg"
                    alt="Joel Emmanuel Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-light transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
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
                className="inline-flex items-center justify-center px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
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

        {/* Mobile menu dropdown (no full-screen overlay) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800 shadow-lg">
            <div className="container mx-auto px-6 py-8">
              <div className="space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-lg font-light transition-colors duration-200 ${
                      pathname === item.href
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-6 border-t border-gray-800">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
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