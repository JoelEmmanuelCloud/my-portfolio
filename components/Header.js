'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-md backdrop-blur-sm border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">

            <div className="flex">
              <Link href="/" className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 relative">
                  <Image
                    src="/logos/logo2.png"
                    alt="Joel Emmanuel Logo"
                    fill
                    className="object-contain dark:hidden"
                    priority
                  />
                  <Image
                    src="/logos/logo.svg"
                    alt="Joel Emmanuel Logo"
                    fill
                    className="object-contain hidden dark:block"
                    priority
                  />
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex lg:gap-x-5 xl:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm lg:text-base font-medium transition-colors duration-200 pb-1 ${
                    pathname === item.href
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                      : 'text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 lg:px-6 py-2 lg:py-2.5 bg-blue-600 text-white text-sm lg:text-base font-medium rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-sm"
              >
                Get in touch
              </Link>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                className="p-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800">
          <div className="w-10 h-10 relative">
            <Image
              src="/logos/logo2.png"
              alt="Joel Emmanuel Logo"
              fill
              className="object-contain dark:hidden"
            />
            <Image
              src="/logos/logo.svg"
              alt="Joel Emmanuel Logo"
              fill
              className="object-contain hidden dark:block"
            />
          </div>
          <button
            type="button"
            className="p-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col flex-1 px-6 py-8 gap-2 overflow-y-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg font-medium py-3 px-4 rounded-xl transition-colors duration-200 ${
                pathname === item.href
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                  : 'text-black dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-8 space-y-4">
          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-gray-50 dark:bg-gray-800">
            <span className="text-base font-medium text-black dark:text-gray-200">Appearance</span>
            <ThemeToggle />
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full px-5 py-3 bg-blue-600 text-white text-base font-medium rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </>
  )
}
