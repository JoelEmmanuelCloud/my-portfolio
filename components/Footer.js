import Link from 'next/link'
import Image from 'next/image'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/joelemmanuel' },
  { name: 'GitHub', href: 'https://github.com/joelemmanuel' },
  { name: 'Twitter', href: 'https://twitter.com/joelemmanuel' },
  { name: 'Instagram', href: 'https://instagram.com/joelemmanuel' },
]

const quickLinks = [
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Logo and Description */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-16 h-16 relative">
                <Image
                  src="/logos/logo.svg"
                  alt="Joel Emmanuel Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg sm:text-xl">JE</span>
            </Link>
            <p className="text-gray-400 font-light leading-relaxed max-w-md text-sm sm:text-base text-center sm:text-left">
              Frontend Engineer specializing in React, Node.js, and AWS. 
              Building scalable web platforms and production systems.
            </p>
            <div className="text-sm text-gray-500 font-light text-center sm:text-left">
              Metaverse
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-medium text-white mb-4 sm:mb-6">Quick Links</h3>
            <div className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-medium text-white mb-4 sm:mb-6">Connect</h3>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:ejoel00@gmail.com"
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light"
              >
                ejoel00@gmail.com
              </a>
              <a
                href="tel:+2347069763692"
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light"
              >
                +234 706 976 3692
              </a>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-8 sm:mt-12 mb-8 sm:mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
          >
            Get in touch
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-light text-center sm:text-left">
            © {new Date().getFullYear()} Joel Emmanuel. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors duration-200 font-light">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors duration-200 font-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}