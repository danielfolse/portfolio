'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Cpu, Users, ChevronDown, ChevronUp } from 'lucide-react'

export default function Skills() {
  const [showTools, setShowTools] = useState(false)

  const skillCategories = [
    {
      title: 'Software Development',
      icon: Code,
      skills: [
        { name: 'React', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'REST APIs', level: 'Expert' },
        { name: 'HTML/CSS', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'Vue.js', level: 'Intermediate' },
        { name: 'GraphQL', level: 'Intermediate' },
      ],
    },
    {
      title: 'Systems & Infrastructure',
      icon: Cpu,
      skills: [
        { name: 'AWS', level: 'Advanced' },
        { name: 'Docker', level: 'Advanced' },
        { name: 'CI/CD', level: 'Advanced' },
        { name: 'Linux', level: 'Advanced' },
        { name: 'Kubernetes', level: 'Intermediate' },
        { name: 'Terraform', level: 'Intermediate' },
        { name: 'OpenAI API', level: 'Advanced' },
        { name: 'RAG Systems', level: 'Advanced' },
        { name: 'TensorFlow', level: 'Intermediate' },
        { name: 'Microservices', level: 'Intermediate' },
      ],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Problem Solving', level: 'Expert' },
        { name: 'Team Leadership', level: 'Advanced' },
        { name: 'Communication', level: 'Advanced' },
        { name: 'Project Management', level: 'Advanced' },
        { name: 'Mentoring', level: 'Advanced' },
        { name: 'Agile/Scrum', level: 'Advanced' },
        { name: 'User Research', level: 'Intermediate' },
        { name: 'Design Thinking', level: 'Intermediate' },
        { name: 'Public Speaking', level: 'Intermediate' },
        { name: 'Cross-functional Collaboration', level: 'Advanced' },
      ],
    },
  ]

  const toolsAndTechnologies = [
    'Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB', 'PostgreSQL',
    'Redis', 'Jest', 'Cypress', 'Webpack', 'Vite', 'NPM',
    'Yarn', 'ESLint', 'Prettier', 'Storybook', 'Swagger', 'Jira',
    'Figma', 'Adobe XD', 'React Native', 'Expo', 'Firebase',
    'Prisma', 'NextAuth', 'Stripe', 'Chart.js', 'Framer Motion',
    'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Ant Design',
    'Django', 'Express.js', 'FastAPI', 'Laravel', 'Spring Boot',
    'MySQL', 'SQLite', 'Elasticsearch', 'RabbitMQ', 'Apache Kafka',
    'Jenkins', 'GitHub Actions', 'CircleCI', 'Travis CI', 'Heroku',
    'Vercel', 'Netlify', 'DigitalOcean', 'Google Cloud', 'Azure'
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'var(--accent-color)'
      case 'Advanced':
        return '#3b82f6'
      case 'Intermediate':
        return '#8b5cf6'
      default:
        return 'var(--text-tertiary)'
    }
  }



  const toggleTools = () => {
    setShowTools(!showTools)
  }

  return (
    <section 
      id="skills" 
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
            Technical <span className="code-accent">Skills</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
            My expertise spans across software development, systems, and soft skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="terminal-card p-6 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300"
                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                >
                  <category.icon className="w-6 h-6 transition-colors duration-300" style={{ color: 'var(--accent-color)' }} />
                </div>
                <h3 className="text-xl font-semibold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:scale-105"
                    style={{ backgroundColor: 'var(--bg-tertiary)' }}
                  >
                                       <div className="flex items-center gap-3">
                     <span className="font-medium transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                       {skill.name}
                     </span>
                   </div>
                    <span 
                      className="text-sm font-semibold px-2 py-1 rounded-full transition-colors duration-300"
                      style={{ 
                        backgroundColor: getLevelColor(skill.level) + '20',
                        color: getLevelColor(skill.level)
                      }}
                    >
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="terminal-card p-6 transition-colors duration-300">
            <button
              onClick={toggleTools}
              className="flex items-center justify-center gap-3 mx-auto mb-4 p-4 rounded-lg transition-all duration-200 hover:scale-105 w-full max-w-2xl"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              <span className="text-lg font-semibold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                Tools & Technologies
              </span>
              {showTools ? (
                <ChevronUp className="w-5 h-5 transition-colors duration-300" style={{ color: 'var(--accent-color)' }} />
              ) : (
                <ChevronDown className="w-5 h-5 transition-colors duration-300" style={{ color: 'var(--accent-color)' }} />
              )}
            </button>
            
            <AnimatePresence>
              {showTools && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pt-4">
                    <p className="text-sm mb-4 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                      Technologies and tools I've worked with and am familiar with
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {toolsAndTechnologies.map((tool, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.02 }}
                          className="text-center p-2 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer"
                          style={{ backgroundColor: 'var(--bg-tertiary)' }}
                        >
                          <span className="font-medium text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                            {tool}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 