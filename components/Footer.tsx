'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer 
      className="py-12 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-tertiary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--accent-color)' }}>
              Daniel Folse
            </h3>
            <p className="mb-4 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
              Full Stack Developer & AI Enthusiast passionate about creating innovative solutions.
            </p>
            <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
              Available for freelance opportunities and full-time positions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' },
                { name: 'Blog', href: '/blog' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 hover:text-blue-600"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Contact</h4>
            <div className="space-y-2 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
              <p>your.email@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <div className="flex items-center space-x-2 mb-4 md:mb-0 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
            <span>© 2024 Daniel Folse. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 transition-colors duration-200 hover:text-blue-600"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </footer>
  )
} 