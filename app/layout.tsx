import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'Daniel Folse - Portfolio',
  description: 'Personal portfolio website with AI chatbot',
  keywords: ['portfolio', 'developer', 'AI', 'chatbot', 'personal website'],
  authors: [{ name: 'Daniel Folse' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
             <body className={`${jetbrainsMono.className} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
} 