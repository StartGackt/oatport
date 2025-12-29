import { useMemo } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Exper from './components/Exper'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Tech from './components/Tech'
import './index.css'

function App() {
  // Pre-generate light particles once to avoid re-renders and random layout shifts
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, () => ({
        size: Math.random() * 2 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        color: Math.random() > 0.5 ? '0, 240, 255' : '124, 58, 237',
        opacity: Math.random() * 0.4 + 0.2,
        duration: 16 + Math.random() * 14,
        delay: Math.random() * 10,
      })),
    []
  )

  return (
    <div className="min-h-screen bg-[#050508] text-gray-200 antialiased overflow-x-hidden noise">
      {/* Beautiful Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0a0a12] to-[#050508]" />

        {/* Aurora blobs */}
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] rounded-full morph-blob bg-gradient-to-r from-cyan-500/10 via-transparent to-transparent blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] rounded-full morph-blob bg-gradient-to-r from-purple-500/10 via-transparent to-transparent blur-[100px]" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full morph-blob bg-gradient-to-r from-pink-500/5 via-transparent to-transparent blur-[80px]" style={{ animationDelay: '-2s' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 cyber-dots" />
        <div className="absolute inset-0 cyber-scanlines" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full will-change-transform"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                background: `rgba(${particle.color}, ${particle.opacity})`,
                animation: `particle-float ${particle.duration}s linear infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Tech />
        <Exper />
        <Project />
        <Contact />
      </main>
    </div>
  )
}

export default App
