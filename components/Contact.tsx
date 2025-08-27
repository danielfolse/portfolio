'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/yourusername',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/yourusername',
      color: 'hover:text-pink-600',
    },
  ]

  return (
    <section 
      id="contact" 
      className="py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
            Get In <span className="code-accent">Touch</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together or just say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200 hover:bg-gray-100"
                  style={{ backgroundColor: 'var(--bg-secondary)' }}
                >
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: 'var(--bg-tertiary)' }}
                  >
                    <info.icon className="w-6 h-6 transition-colors duration-300" style={{ color: 'var(--accent-color)' }} />
                  </div>
                  <div>
                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>{info.label}</p>
                    <p className="font-medium transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
                          <h4 className="text-lg font-semibold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
              Follow Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                >
                  <social.icon className="w-8 h-8 transition-colors duration-300" style={{ color: 'var(--accent-color)' }} />
                </motion.a>
              ))}
            </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="terminal-card p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
              Send Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-300"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-300"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Tell me more about your project or inquiry..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--accent-color)',
                  color: 'white'
                }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 