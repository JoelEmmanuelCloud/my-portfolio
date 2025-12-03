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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Logo and Description */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center justify-center sm:justify-start gap-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 relative">
                <Image
                  src="/logos/logo.svg"
                  alt="Joel Emmanuel Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white leading-relaxed max-w-md text-sm sm:text-base text-center sm:text-left">
              Software Engineer specializing in React, Node.js, and AWS. 
              Building scalable web platforms and production systems.
            </p>
            <div className="text-sm sm:text-base text-white font-medium text-center sm:text-left">
              Metaverse
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Quick Links</h3>
            <div className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm sm:text-base text-white hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Connect</h3>
            <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm sm:text-base text-white hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="space-y-2 sm:space-y-2.5">
              <a
                href="mailto:ejoel00@gmail.com"
                className="block text-sm sm:text-base text-white hover:text-blue-400 transition-colors duration-200 break-all sm:break-normal"
              >
                ejoel00@gmail.com
              </a>
              <a
                href="tel:+2347069763692"
                className="block text-sm sm:text-base text-white hover:text-blue-400 transition-colors duration-200"
              >
                +234 706 976 3692
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Legal</h3>
            <div className="space-y-2 sm:space-y-2.5">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm sm:text-base text-white hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-14 mb-10 sm:mb-12 lg:mb-14">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl"
          >
            Get in touch
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-white text-center sm:text-left">
            © {new Date().getFullYear()} Joel Emmanuel. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link 
              href="/privacy" 
              className="text-xs sm:text-sm text-white hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-xs sm:text-sm text-white hover:text-blue-400 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}