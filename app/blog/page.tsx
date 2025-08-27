'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'software', name: 'Software', count: 6 },
    { id: 'sports', name: 'Sports', count: 3 },
    { id: 'general', name: 'General', count: 3 },
  ]

  const blogPosts = [
    // Software Posts
    {
      id: 1,
      title: 'Building Scalable APIs with Node.js and Express',
      excerpt: 'Learn the best practices for creating robust and scalable REST APIs using Node.js and Express framework.',
      category: 'software',
      tags: ['Node.js', 'Express', 'API Design', 'Backend'],
      readTime: '8 min read',
      date: '2024-01-15',
      featured: true,
      slug: 'building-scalable-apis-nodejs-express'
    },
    {
      id: 2,
      title: 'React Performance Optimization Techniques',
      excerpt: 'Discover advanced techniques to optimize your React applications for better performance and user experience.',
      category: 'software',
      tags: ['React', 'Performance', 'Optimization', 'Frontend'],
      readTime: '12 min read',
      date: '2024-01-10',
      featured: false,
      slug: 'react-performance-optimization-techniques'
    },
    {
      id: 3,
      title: 'Introduction to Docker and Containerization',
      excerpt: 'A comprehensive guide to understanding Docker containers and how they revolutionize software deployment.',
      category: 'software',
      tags: ['Docker', 'DevOps', 'Containerization', 'Deployment'],
      readTime: '10 min read',
      date: '2024-01-05',
      featured: false,
      slug: 'introduction-docker-containerization'
    },
    {
      id: 4,
      title: 'TypeScript Best Practices for Large Projects',
      excerpt: 'Essential TypeScript patterns and practices that help maintain code quality in large-scale applications.',
      category: 'software',
      tags: ['TypeScript', 'Best Practices', 'Code Quality', 'Large Projects'],
      readTime: '15 min read',
      date: '2024-01-01',
      featured: true,
      slug: 'typescript-best-practices-large-projects'
    },
    {
      id: 5,
      title: 'Building AI-Powered Chatbots with OpenAI',
      excerpt: 'Step-by-step guide to creating intelligent chatbots using OpenAI API and modern web technologies.',
      category: 'software',
      tags: ['AI', 'OpenAI', 'Chatbots', 'Machine Learning'],
      readTime: '18 min read',
      date: '2023-12-28',
      featured: false,
      slug: 'building-ai-powered-chatbots-openai'
    },
    {
      id: 6,
      title: 'Modern CSS Grid Layout Techniques',
      excerpt: 'Advanced CSS Grid techniques for creating complex, responsive layouts with minimal code.',
      category: 'software',
      tags: ['CSS', 'Grid', 'Layout', 'Responsive Design'],
      readTime: '9 min read',
      date: '2023-12-25',
      featured: false,
      slug: 'modern-css-grid-layout-techniques'
    },
    // Sports Posts
    {
      id: 7,
      title: 'The Evolution of Basketball Analytics',
      excerpt: 'How data science and analytics are transforming the way we understand and play basketball.',
      category: 'sports',
      tags: ['Basketball', 'Analytics', 'Data Science', 'Sports Tech'],
      readTime: '11 min read',
      date: '2024-01-12',
      featured: true,
      slug: 'evolution-basketball-analytics'
    },
    {
      id: 8,
      title: 'Training Like a Pro: Strength and Conditioning',
      excerpt: 'Professional training methodologies that can be adapted for amateur athletes and fitness enthusiasts.',
      category: 'sports',
      tags: ['Training', 'Strength', 'Conditioning', 'Fitness'],
      readTime: '14 min read',
      date: '2024-01-08',
      featured: false,
      slug: 'training-like-pro-strength-conditioning'
    },
    {
      id: 9,
      title: 'The Mental Game: Sports Psychology',
      excerpt: 'Understanding the psychological aspects of sports performance and how to develop mental toughness.',
      category: 'sports',
      tags: ['Psychology', 'Mental Game', 'Performance', 'Mindset'],
      readTime: '13 min read',
      date: '2024-01-03',
      featured: false,
      slug: 'mental-game-sports-psychology'
    },
    // General Posts
    {
      id: 10,
      title: 'Productivity Hacks for Developers',
      excerpt: 'Practical productivity techniques that can help developers work more efficiently and maintain work-life balance.',
      category: 'general',
      tags: ['Productivity', 'Work-Life Balance', 'Time Management', 'Developer Life'],
      readTime: '7 min read',
      date: '2024-01-14',
      featured: false,
      slug: 'productivity-hacks-developers'
    },
    {
      id: 11,
      title: 'The Future of Remote Work in Tech',
      excerpt: 'Exploring how remote work is shaping the future of the technology industry and what it means for developers.',
      category: 'general',
      tags: ['Remote Work', 'Tech Industry', 'Future of Work', 'Workplace'],
      readTime: '10 min read',
      date: '2024-01-07',
      featured: false,
      slug: 'future-remote-work-tech'
    },
    {
      id: 12,
      title: 'Building a Personal Brand as a Developer',
      excerpt: 'Strategies for developing your personal brand and establishing yourself as a thought leader in the tech community.',
      category: 'general',
      tags: ['Personal Brand', 'Developer Community', 'Thought Leadership', 'Career Growth'],
      readTime: '12 min read',
      date: '2023-12-30',
      featured: true,
      slug: 'building-personal-brand-developer'
    }
  ]

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <div className="py-8 border-b transition-colors duration-300" style={{ borderColor: 'var(--border-color)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-blue-600"
                style={{ color: 'var(--text-secondary)' }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
              <h1 className="text-4xl font-bold mt-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                Blog
              </h1>
              <p className="text-lg mt-2 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                Thoughts on software, sports, and everything in between
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'text-white'
                    : 'hover:scale-105'
                }`}
                style={{
                  backgroundColor: activeCategory === category.id 
                    ? 'var(--accent-color)' 
                    : 'var(--bg-tertiary)',
                  color: activeCategory === category.id 
                    ? 'white' 
                    : 'var(--text-secondary)'
                }}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {activeCategory === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
              Featured <span className="code-accent">Posts</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="terminal-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="px-2 py-1 text-xs rounded-full transition-colors duration-300"
                      style={{ 
                        backgroundColor: 'var(--bg-tertiary)',
                        color: 'var(--accent-color)'
                      }}
                    >
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                    {post.featured && (
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
                  
                  <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    {post.title}
                  </h3>
                  
                  <p className="text-sm mb-4 leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded transition-colors duration-300"
                        style={{ 
                          backgroundColor: 'var(--bg-tertiary)',
                          color: 'var(--text-tertiary)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
            {activeCategory === 'all' ? 'All' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} <span className="code-accent">Posts</span>
          </h2>
          
          <div className="grid gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="terminal-card p-6 hover:scale-102 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span 
                        className="px-2 py-1 text-xs rounded-full transition-colors duration-300"
                        style={{ 
                          backgroundColor: 'var(--bg-tertiary)',
                          color: 'var(--accent-color)'
                        }}
                      >
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                      {post.featured && (
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
                    
                    <h3 className="text-lg font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                      {post.title}
                    </h3>
                    
                    <p className="text-sm mb-3 leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded transition-colors duration-300"
                          style={{ 
                            backgroundColor: 'var(--bg-tertiary)',
                            color: 'var(--text-tertiary)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-4">
                    <ExternalLink className="w-4 h-4 transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
