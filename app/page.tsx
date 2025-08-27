'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Chatbot from '@/components/Chatbot'
import Footer from '@/components/Footer'

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <main 
      className="min-h-screen transition-colors duration-300"
      style={{ 
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%)'
      }}
    >
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
      {/* Chatbot */}
      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
      
             {/* Chatbot Toggle Button */}
       <button
         onClick={() => setIsChatbotOpen(true)}
         className="fixed bottom-6 right-6 z-50 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
         style={{ backgroundColor: 'var(--accent-color)' }}
         aria-label="Open AI Chatbot"
       >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
    </main>
  )
} 