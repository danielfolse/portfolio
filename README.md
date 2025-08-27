# Personal Portfolio Website with AI Chatbot

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring an AI-powered chatbot that can answer questions about your professional background using RAG (Retrieval-Augmented Generation) technology.

## ✨ Features

- **Modern Design**: Clean, responsive design with dark/light mode support
- **AI Chatbot**: Intelligent chatbot that answers questions about your background
- **RAG Integration**: Retrieval-Augmented Generation for context-aware responses
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Built with Next.js for excellent SEO performance

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **AI**: Custom RAG implementation (can be extended with OpenAI API)

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and background story
3. **Experience**: Work history and education timeline
4. **Projects**: Showcase of featured projects with technologies used
5. **Skills**: Technical skills with proficiency levels
6. **Contact**: Contact form and social media links
7. **AI Chatbot**: Interactive chatbot for answering questions about your background

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **`app/layout.tsx`**: Update metadata (title, description, keywords)
2. **`components/Header.tsx`**: Change "Your Name" to your actual name
3. **`components/Hero.tsx`**: Update name, title, and description
4. **`components/About.tsx`**: Update personal information and story
5. **`components/Experience.tsx`**: Add your work experience and education
6. **`components/Projects.tsx`**: Add your actual projects
7. **`components/Skills.tsx`**: Update skills and proficiency levels
8. **`components/Contact.tsx`**: Update contact information and social links
9. **`components/Chatbot.tsx`**: Update the RAG context with your actual information

### Chatbot RAG Context

The chatbot uses a simple RAG-like system. To enhance it:

1. **Replace the sample context** in `components/Chatbot.tsx` with your actual resume and professional information
2. **Add more response patterns** to handle different types of questions
3. **Integrate with OpenAI API** for more sophisticated responses:

```typescript
// Example OpenAI integration
const generateResponse = async (userMessage: string): Promise<string> => {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userMessage, context: ragContext })
  })
  const data = await response.json()
  return data.response
}
```

### Styling

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Animations**: Modify animations in `app/globals.css`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## 📱 Mobile Optimization

The website is fully responsive and optimized for mobile devices. The chatbot works seamlessly on mobile with touch-friendly interactions.

## 🔧 Advanced Features

### Enhanced RAG Implementation

For a more sophisticated RAG system:

1. **Vector Database**: Use Pinecone, Weaviate, or similar
2. **Embeddings**: Use OpenAI embeddings or sentence-transformers
3. **Chunking**: Implement proper text chunking for better retrieval
4. **Caching**: Add response caching for better performance

### API Integration

Create API routes for the chatbot:

```typescript
// app/api/chat/route.ts
export async function POST(request: Request) {
  const { message, context } = await request.json()
  
  // Implement your RAG logic here
  const response = await generateRAGResponse(message, context)
  
  return Response.json({ response })
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy coding! 🚀** 