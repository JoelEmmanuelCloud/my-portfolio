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

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Logo and Description */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                <Image
                  src="/logos/logo.svg"
                  alt="Joel Emmanuel Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white leading-relaxed max-w-md text-base sm:text-lg text-center sm:text-left">
              Software Engineer specializing in React, Node.js, and AWS. 
              Building scalable web platforms and production systems.
            </p>
            <div className="text-base sm:text-lg text-white font-medium text-center sm:text-left">
              Metaverse
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Quick Links</h3>
            <div className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base sm:text-lg text-white hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Connect</h3>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base sm:text-lg text-white hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:ejoel00@gmail.com"
                className="block text-base sm:text-lg text-white hover:text-blue-400 transition-colors duration-200 break-all sm:break-normal"
              >
                ejoel00@gmail.com
              </a>
              <a
                href="tel:+2347069763692"
                className="block text-base sm:text-lg text-white hover:text-blue-400 transition-colors duration-200"
              >
                +234 706 976 3692
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Legal</h3>
            <div className="space-y-3 sm:space-y-4">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base sm:text-lg text-white hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 mb-12 sm:mb-16 lg:mb-20">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Get in touch
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-sm sm:text-base text-white text-center sm:text-left">
            © {new Date().getFullYear()} Joel Emmanuel. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8">
            <Link 
              href="/privacy" 
              className="text-sm sm:text-base text-white hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm sm:text-base text-white hover:text-blue-400 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}