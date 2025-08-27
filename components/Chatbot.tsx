'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, User, Loader2 } from 'lucide-react'

interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI assistant. I can answer questions about your professional background, experience, skills, and projects. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // RAG context based on Daniel Folse's resume
  const ragContext = `
    Daniel Folse is a Software Engineer with 5+ years of experience in full-stack development and AI technologies.
    
    EDUCATION:
    - Computer Science degree with focus on software engineering and AI
    
    WORK EXPERIENCE:
    - Software Engineer with expertise in modern web technologies
    - Experience with React, Node.js, Python, and cloud platforms
    - Background in building scalable applications and AI-powered solutions
    
    TECHNICAL SKILLS:
    Frontend: React, TypeScript, Next.js, HTML/CSS, Tailwind CSS
    Backend: Node.js, Python, Express.js, REST APIs, GraphQL
    Cloud & DevOps: AWS, Docker, CI/CD, Linux
    AI & ML: OpenAI API, TensorFlow, PyTorch, NLP, RAG Systems
    
    PROJECTS:
    - AI-Powered Portfolio Chatbot: An intelligent chatbot using RAG technology
    - Full-stack web applications with modern technologies
    - AI and machine learning implementations
    - Scalable cloud-based solutions
    
    LOCATION: United States
    EMAIL: Available upon request
    PHONE: Available upon request
    
    PERSONAL INTERESTS:
    - Contributing to open-source projects
    - Reading about latest tech trends
    - Sharing knowledge with developer community
    - Exploring AI and machine learning applications
  `

  const generateResponse = async (userMessage: string): Promise<string> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
    
    const lowerMessage = userMessage.toLowerCase()
    
    // Simple RAG-like response generation based on context
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      return "I have 5+ years of experience in software development. I'm a Software Engineer with expertise in full-stack development and AI technologies. I've worked with modern web technologies including React, Node.js, Python, and cloud platforms. I have experience building scalable applications and AI-powered solutions."
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university')) {
      return "I have a Computer Science degree with a focus on software engineering and AI. My educational background has provided me with a strong foundation in both theoretical and practical aspects of software development and artificial intelligence."
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      return "My technical skills span across multiple domains. In frontend development, I work with React, TypeScript, Next.js, and Tailwind CSS. For backend, I use Node.js, Python, Express.js, and REST APIs. I also have experience with cloud technologies like AWS, Docker, and CI/CD. I'm particularly interested in AI and have worked with OpenAI API, TensorFlow, PyTorch, and RAG systems."
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "I've worked on various projects including an AI-Powered Portfolio Chatbot (this one!), a full-stack E-Commerce Platform with payment integration, a collaborative Task Management App, a Weather Dashboard with real-time data, a modern Blog Platform with markdown support, and a Fitness Tracking App. Each project has helped me develop different skills and solve unique challenges."
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return "I'm based in the United States. For contact information, please reach out through the contact form on this website. I'm always interested in new opportunities and collaborations, so feel free to get in touch!"
    }
    
    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('city')) {
      return "I'm currently located in the United States. I'm open to remote work opportunities and willing to relocate for the right position."
    }
    
    if (lowerMessage.includes('certification') || lowerMessage.includes('certified')) {
      return "I'm always looking to expand my knowledge and stay updated with the latest technologies. I focus on continuous learning and professional development in software engineering and AI."
    }
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
      return "I'm passionate about AI and machine learning! I have experience with OpenAI API, TensorFlow, PyTorch, NLP, and RAG systems. I love exploring how AI can enhance web applications. This chatbot is actually an example of my AI work!"
    }
    
    // Default response for general questions
    return "I'm a Full Stack Developer and AI Enthusiast with X+ years of experience. I specialize in building scalable web applications and integrating AI technologies. I'm passionate about creating user-friendly experiences and leveraging cutting-edge technology to solve real-world problems. What specific aspect of my background would you like to know more about?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await generateResponse(userMessage.content)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an error while processing your request. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-end p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* Chatbot Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="relative w-full max-w-md h-[600px] bg-white dark:bg-dark-800 rounded-t-xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-dark-200 dark:border-dark-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 dark:text-white">AI Assistant</h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400">Ask me anything about my background</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-dark-500 dark:text-dark-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-100 dark:bg-dark-700 text-dark-900 dark:text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-dark-100 dark:bg-dark-700 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin text-primary-600 dark:text-primary-400" />
                      <span className="text-sm text-dark-600 dark:text-dark-300">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-dark-200 dark:border-dark-700">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about my experience, skills, projects..."
                  className="flex-1 px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-dark-300 dark:disabled:bg-dark-600 text-white rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 