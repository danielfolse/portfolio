'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, GraduationCap } from 'lucide-react'

export default function About() {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Daniel Folse' },
    { icon: MapPin, label: 'Location', value: 'United States' },
    { icon: Calendar, label: 'Experience', value: '5+ Years' },
    { icon: GraduationCap, label: 'Education', value: 'Computer Science' },
  ]

  return (
    <section 
      id="about" 
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
            About <span className="code-accent">Me</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
            Get to know me better and understand my journey in technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
              Personal Information
            </h3>
            
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: 'var(--bg-tertiary)' }}
                  >
                    <info.icon className="w-5 h-5 transition-colors duration-300" style={{ color: 'var(--accent-color)' }} />
                  </div>
                  <div>
                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>{info.label}</p>
                    <p className="font-medium transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="/resources/DanielFolseResume_July2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
                         <div className="p-8 terminal-card transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                My Story
              </h3>
              <p className="leading-relaxed mb-4 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                I'm a passionate software engineer with expertise in full-stack development and AI technologies. 
                My journey in software development spans over 5 years, and I've been constantly 
                learning and adapting to new technologies and methodologies.
              </p>
              <p className="leading-relaxed mb-4 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                I specialize in building scalable web applications, working with modern frameworks like React, 
                Node.js, and Python. I'm particularly interested in AI and machine learning, and I love 
                exploring how these technologies can be integrated into web applications to create more 
                intelligent and user-friendly experiences.
              </p>
              <p className="leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                When I'm not coding, you can find me contributing to open-source projects, reading about 
                the latest tech trends, or sharing knowledge with the developer community.
              </p>
            </div>

                         <div className="p-8 terminal-card transition-colors duration-300">
               <h3 className="text-xl font-semibold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                 What I Do
               </h3>
               <div className="grid grid-cols-2 gap-4">
                 <div 
                   className="text-center p-4 rounded-lg transition-colors duration-300"
                   style={{ backgroundColor: 'var(--bg-tertiary)' }}
                 >
                   <h4 className="font-semibold mb-2 transition-colors duration-300" style={{ color: 'var(--accent-color)' }}>
                     Web Development
                   </h4>
                   <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                     Full-stack applications with modern frameworks
                   </p>
                 </div>
                 <div 
                   className="text-center p-4 rounded-lg transition-colors duration-300"
                   style={{ backgroundColor: 'var(--bg-tertiary)' }}
                 >
                   <h4 className="font-semibold mb-2 transition-colors duration-300" style={{ color: 'var(--accent-color)' }}>
                     AI Integration
                   </h4>
                   <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                     Machine learning and AI-powered features
                   </p>
                 </div>
                 <div 
                   className="text-center p-4 rounded-lg transition-colors duration-300"
                   style={{ backgroundColor: 'var(--bg-tertiary)' }}
                 >
                   <h4 className="font-semibold mb-2 transition-colors duration-300" style={{ color: 'var(--accent-color)' }}>
                     UI/UX Design
                   </h4>
                   <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                     User-centered design and prototyping
                   </p>
                 </div>
                 <div 
                   className="text-center p-4 rounded-lg transition-colors duration-300"
                   style={{ backgroundColor: 'var(--bg-tertiary)' }}
                 >
                   <h4 className="font-semibold mb-2 transition-colors duration-300" style={{ color: 'var(--accent-color)' }}>
                     DevOps
                   </h4>
                   <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                     CI/CD, cloud deployment, and automation
                   </p>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 