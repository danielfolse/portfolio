'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  const workExperience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led development of scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
      icon: Briefcase,
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup XYZ',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client projects using modern web technologies. Collaborated with design and product teams.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Redis', 'Django'],
      icon: Briefcase,
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: 'Developed responsive websites and web applications. Worked with clients to implement their requirements.',
      technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL', 'WordPress'],
      icon: Briefcase,
    },
  ]

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'University of Technology',
      location: 'Boston, MA',
      period: '2017 - 2019',
      description: 'Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.',
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'State University',
      location: 'Chicago, IL',
      period: '2013 - 2017',
      description: 'Major in Computer Science with minor in Mathematics. Dean\'s List recipient.',
      icon: GraduationCap,
    },
  ]

  return (
    <section 
      id="experience" 
      className="py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
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
            Experience & <span className="code-accent">Education</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 mr-3 transition-colors duration-300" style={{ color: 'var(--accent-color)' }} />
              <h3 className="text-2xl font-semibold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 relative rounded-xl shadow-lg border transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-1 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        {job.title}
                      </h4>
                      <p className="font-medium transition-colors duration-300" style={{ color: 'var(--accent-color)' }}>
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm flex items-center gap-1 transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1 transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </p>
                    </div>
                  </div>
                  
                  <p className="mb-4 leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full transition-colors duration-300"
                        style={{ 
                          backgroundColor: 'var(--bg-tertiary)',
                          color: 'var(--accent-color)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 mr-3 transition-colors duration-300" style={{ color: 'var(--accent-color)' }} />
              <h3 className="text-2xl font-semibold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl shadow-lg border transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-1 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        {edu.degree}
                      </h4>
                      <p className="font-medium transition-colors duration-300" style={{ color: 'var(--accent-color)' }}>
                        {edu.school}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm flex items-center gap-1 transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1 transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </p>
                    </div>
                  </div>
                  
                  <p className="leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h4 className="text-xl font-semibold mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                Certifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div 
                  className="p-4 text-center rounded-xl shadow-lg border transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <h5 className="font-semibold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    AWS Certified Developer
                  </h5>
                  <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
                    Amazon Web Services
                  </p>
                </div>
                <div 
                  className="p-4 text-center rounded-xl shadow-lg border transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <h5 className="font-semibold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    Google Cloud Professional
                  </h5>
                  <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
                    Google Cloud Platform
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 