'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300"
            style={{ color: 'var(--text-primary)' }}
          >
            <span className="code-accent">name: Daniel Folse</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl mb-8 transition-colors duration-300"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span className="code-accent">role: Software Engineer</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed transition-colors duration-300"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Nearly 3 years of professional software development experience across Embedded, DevSecOps, Test, and Full Stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="terminal-card flex items-center gap-2 px-8 py-3 text-lg font-mono hover:scale-105 transition-all duration-300"
              style={{ color: 'var(--accent-color)' }}
            >
              <Mail className="w-5 h-5" />
              contact()
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="terminal-card flex items-center gap-2 px-8 py-3 text-lg font-mono hover:scale-105 transition-all duration-300"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Download className="w-5 h-5" />
              viewProjects()
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center transition-colors duration-300 hover:text-blue-600"
              style={{ color: 'var(--text-tertiary)' }}
            >
              <span className="text-sm mb-2 font-mono">scrollDown()</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 