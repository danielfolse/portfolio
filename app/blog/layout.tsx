import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Daniel Folse',
  description: 'Thoughts on software, sports, and everything in between',
  keywords: ['blog', 'software', 'sports', 'general', 'technology', 'development'],
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
