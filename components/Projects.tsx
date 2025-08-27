'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, FolderOpen, Play } from 'lucide-react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Portfolio Chatbot',
      description: 'An intelligent chatbot that answers questions about my professional background using RAG (Retrieval-Augmented Generation) technology.',
      shortDescription: 'AI-powered chatbot using RAG technology for portfolio interactions.',
      image: '/api/placeholder/800/600',
      technologies: ['React', 'TypeScript', 'OpenAI', 'Vector Database', 'Next.js'],
      liveUrl: '#',
      githubUrl: '#',
      googleDriveUrl: '#',
      featured: true,
      longDescription: `This project showcases the integration of modern AI technologies with web development. The chatbot uses Retrieval-Augmented Generation (RAG) to provide accurate, context-aware responses about my professional experience, skills, and projects.

The system maintains conversation context while providing relevant information from my professional background, making it an interactive way for visitors to learn about my expertise. Built with modern React and TypeScript, it demonstrates full-stack development capabilities and AI integration skills.`,
      keyFeatures: [
        'Real-time AI-powered conversations',
        'Context-aware responses using RAG',
        'Modern React/TypeScript architecture',
        'Responsive design with smooth animations',
        'Integration with OpenAI\'s latest models'
      ],
      challenges: 'Implementing real-time conversation flow while maintaining context and ensuring accurate responses from the RAG system.',
      solutions: 'Used a combination of React state management and OpenAI\'s streaming API to create seamless conversations with proper error handling and fallback responses.'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      shortDescription: 'Complete e-commerce platform with payment processing and admin management.',
      image: '/api/placeholder/800/600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      googleDriveUrl: '#',
      featured: true,
      longDescription: `A comprehensive e-commerce solution built from the ground up with modern web technologies. This platform handles the complete customer journey from browsing to checkout, with a robust admin system for inventory and order management.

The platform demonstrates full-stack development skills, database design, API development, and third-party service integration. Built with scalability in mind, it can handle multiple concurrent users and complex product catalogs.`,
      keyFeatures: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Stripe',
        'Admin dashboard for inventory management',
        'Order tracking and customer support'
      ],
      challenges: 'Managing complex state across multiple user sessions and ensuring secure payment processing.',
      solutions: 'Implemented Redux for state management and used Stripe\'s secure payment APIs with proper validation and error handling.'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      shortDescription: 'Real-time collaborative task management with team features.',
      image: '/api/placeholder/800/600',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      googleDriveUrl: '#',
      featured: false,
      longDescription: `A real-time collaborative task management application that enables teams to work together efficiently. Built with Vue.js and Firebase for seamless real-time updates across all team members.

The app provides a comprehensive solution for project management, with features that support both individual productivity and team collaboration.`,
      keyFeatures: [
        'Real-time task updates across all users',
        'Team collaboration and role management',
        'Task assignment and priority levels',
        'Progress tracking and analytics',
        'File sharing and comments'
      ],
      challenges: 'Implementing real-time updates without overwhelming the UI or causing performance issues.',
      solutions: 'Used Firebase\'s real-time database with Vuex for state management, implementing debouncing and optimistic updates for smooth user experience.'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application that provides real-time weather data with beautiful visualizations and forecasts.',
      shortDescription: 'Interactive weather dashboard with data visualization.',
      image: '/api/placeholder/800/600',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS Grid'],
      liveUrl: '#',
      githubUrl: '#',
      googleDriveUrl: '#',
      featured: false,
      longDescription: `A comprehensive weather dashboard that provides current conditions, forecasts, and historical data with beautiful visualizations. Integrates with multiple weather APIs for comprehensive coverage and accurate predictions.

The dashboard showcases API integration, data visualization, and responsive design principles while providing useful weather information to users.`,
      keyFeatures: [
        'Current weather conditions',
        '7-day and hourly forecasts',
        'Historical weather data',
        'Interactive charts and graphs',
        'Location-based weather',
        'Weather alerts and notifications'
      ],
      challenges: 'Integrating multiple weather APIs and creating intuitive data visualizations.',
      solutions: 'Used Chart.js for data visualization and implemented a fallback system for API failures with proper error handling.'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, SEO optimization, and content management system.',
      shortDescription: 'Full-featured blog platform with CMS and SEO.',
      image: '/api/placeholder/800/600',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
      liveUrl: '#',
      githubUrl: '#',
      googleDriveUrl: '#',
      featured: false,
      longDescription: `A full-featured blog platform built with Next.js and modern web technologies. Includes content management, SEO optimization, and a robust backend system for managing multiple authors and content types.

The platform demonstrates modern web development practices, database design, and content management systems while providing excellent performance and SEO capabilities.`,
      keyFeatures: [
        'Markdown editor with live preview',
        'SEO optimization and meta tags',
        'User authentication and roles',
        'Content management system',
        'Search and filtering capabilities',
        'Analytics and insights'
      ],
      challenges: 'Creating an intuitive content management system while maintaining good SEO practices.',
      solutions: 'Built a custom markdown editor with live preview and implemented comprehensive SEO features including dynamic meta tags and structured data.'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'A mobile-first fitness tracking application with workout plans, progress tracking, and social features.',
      shortDescription: 'Mobile fitness app with workout tracking and social features.',
      image: '/api/placeholder/800/600',
      technologies: ['React Native', 'Expo', 'Firebase', 'Native Base'],
      liveUrl: '#',
      githubUrl: '#',
      googleDriveUrl: '#',
      featured: false,
      longDescription: `A comprehensive fitness tracking application designed for mobile users. Combines workout planning, progress tracking, and social features to motivate users and help them achieve their fitness goals.

The app showcases mobile development skills, real-time data management, and user experience design while providing practical value to fitness enthusiasts.`,
      keyFeatures: [
        'Custom workout plans and routines',
        'Progress tracking and analytics',
        'Social features and challenges',
        'Nutrition tracking integration',
        'Wearable device integration',
        'Offline functionality'
      ],
      challenges: 'Managing complex workout data and ensuring smooth performance on mobile devices.',
      solutions: 'Used Firebase for data management with local caching for offline functionality and optimized React Native components for performance.'
    }
  ]

  const openProject = (projectId: number) => {
    setSelectedProject(projectId)
    document.body.style.overflow = 'hidden'
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section 
      id="projects" 
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
            Featured <span className="code-accent">Projects</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
            Click on any project to see detailed information, screenshots, and links to source code or documentation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="terminal-card overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => openProject(project.id)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div 
                  className="w-full h-48 flex items-center justify-center transition-colors duration-300"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)'
                  }}
                >
                  <span className="text-lg font-medium transition-colors duration-300" style={{ color: 'var(--accent-color)' }}>
                    {project.title}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm font-medium">View Details</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold transition-colors duration-200 group-hover:text-blue-600" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span 
                      className="px-2 py-1 text-xs rounded-full transition-colors duration-300"
                      style={{ 
                        backgroundColor: 'var(--accent-color)',
                        color: 'white'
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="mb-4 leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded transition-colors duration-300"
                      style={{ 
                        backgroundColor: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
              onClick={closeProject}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto"
                style={{ backgroundColor: 'var(--bg-primary)' }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors duration-200 hover:bg-gray-200"
                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                >
                  <X className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                </button>

                {(() => {
                  const project = projects.find(p => p.id === selectedProject)
                  if (!project) return null

                  return (
                    <div className="p-8">
                      {/* Project Header */}
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          {project.featured && (
                            <span 
                              className="px-3 py-1 text-sm rounded-full transition-colors duration-300"
                              style={{ 
                                backgroundColor: 'var(--accent-color)',
                                color: 'white'
                              }}
                            >
                              Featured
                            </span>
                          )}
                          <h2 className="text-3xl font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                            {project.title}
                          </h2>
                        </div>
                        <p className="text-lg transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                          {project.description}
                        </p>
                      </div>

                      {/* Project Image */}
                      <div className="mb-8">
                        <div 
                          className="w-full h-96 rounded-lg flex items-center justify-center transition-colors duration-300"
                          style={{ 
                            background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)'
                          }}
                        >
                          <span className="text-2xl font-medium transition-colors duration-300" style={{ color: 'var(--accent-color)' }}>
                            {project.title} Screenshot
                          </span>
                        </div>
                      </div>

                      {/* Project Details Grid */}
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                          {/* Long Description */}
                          <div>
                            <h3 className="text-xl font-semibold mb-3 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                              Project Overview
                            </h3>
                            <p className="leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                              {project.longDescription}
                            </p>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h3 className="text-xl font-semibold mb-3 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                              Key Features
                            </h3>
                            <ul className="space-y-2">
                              {project.keyFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-sm mt-1 transition-colors duration-300" style={{ color: 'var(--accent-color)' }}>•</span>
                                  <span className="transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Challenges & Solutions */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-lg font-semibold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                Challenges
                              </h3>
                              <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                                {project.challenges}
                              </p>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                Solutions
                              </h3>
                              <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                                {project.solutions}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                          {/* Technologies */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-2 text-sm rounded-lg transition-colors duration-300"
                                  style={{ 
                                    backgroundColor: 'var(--bg-tertiary)',
                                    color: 'var(--accent-color)'
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Project Links */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                              Project Links
                            </h3>
                            <div className="space-y-3">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:scale-105"
                                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                                >
                                  <Play className="w-5 h-5" style={{ color: 'var(--accent-color)' }} />
                                  <span className="font-medium transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                    Live Demo
                                  </span>
                                </a>
                              )}
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:scale-105"
                                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                                >
                                  <Github className="w-5 h-5" style={{ color: 'var(--accent-color)' }} />
                                  <span className="font-medium transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                    Source Code
                                  </span>
                                </a>
                              )}
                              {project.googleDriveUrl && (
                                <a
                                  href={project.googleDriveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:scale-105"
                                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                                >
                                  <FolderOpen className="w-5 h-5" style={{ color: 'var(--accent-color)' }} />
                                  <span className="font-medium transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                    Documentation
                                  </span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
} 