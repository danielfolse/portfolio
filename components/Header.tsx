'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark') // Default to dark

  useEffect(() => {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme)
    
    // Apply to document
    document.documentElement.setAttribute('data-theme', newTheme)
  }

      const navItems = [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
      { name: 'Blog', href: '/blog' },
    ]

     return (
     <header 
       className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300"
       style={{ 
         backgroundColor: 'var(--bg-primary)',
         borderColor: 'var(--border-color)'
       }}
     >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center h-16">
           {/* Logo */}
           <div className="flex-shrink-0">
             <a href="#home" className="text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>
               Daniel Folse
             </a>
           </div>

           {/* Desktop Navigation */}
           <nav className="hidden md:flex space-x-8">
             {navItems.map((item) => (
               <a
                 key={item.name}
                 href={item.href}
                 className="transition-colors duration-200 hover:text-blue-600"
                 style={{ color: 'var(--text-secondary)' }}
               >
                 {item.name}
               </a>
             ))}
           </nav>

                     {/* Theme Toggle & Mobile Menu Button */}
           <div className="flex items-center space-x-4">
             <button
               onClick={toggleTheme}
               className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
               style={{ backgroundColor: 'var(--bg-tertiary)' }}
               aria-label="Toggle theme"
             >
               {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
             </button>

                         {/* Mobile menu button */}
             <button
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="md:hidden p-2 rounded-lg transition-colors duration-200"
               style={{ backgroundColor: 'var(--bg-tertiary)' }}
               aria-label="Toggle mobile menu"
             >
               {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </button>
           </div>
         </div>

         {/* Mobile Navigation */}
         {isMenuOpen && (
           <div className="md:hidden">
             <div 
               className="px-2 pt-2 pb-3 space-y-1 border-t transition-colors duration-300"
               style={{ 
                 backgroundColor: 'var(--bg-primary)',
                 borderColor: 'var(--border-color)'
               }}
             >
               {navItems.map((item) => (
                 <a
                   key={item.name}
                   href={item.href}
                   className="block px-3 py-2 transition-colors duration-200 hover:text-blue-600"
                   style={{ color: 'var(--text-secondary)' }}
                   onClick={() => setIsMenuOpen(false)}
                 >
                   {item.name}
                 </a>
               ))}
             </div>
           </div>
         )}
      </div>
    </header>
  )
} 