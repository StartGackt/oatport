import { useMemo, lazy, Suspense } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './index.css'

// Lazy load components below the fold for faster initial load
const About = lazy(() => import('./components/About'))
const Tech = lazy(() => import('./components/Tech'))
const Exper = lazy(() => import('./components/Exper'))
const Project = lazy(() => import('./components/Project'))
const Contact = lazy(() => import('./components/Contact'))

// Loading skeleton for lazy components
const SectionLoader = () => (
  <div className="py-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  // Pre-generate minimal particles for performance
  const particles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        size: 2 + (i % 3),
        left: (i * 12.5) % 100,
        top: (i * 15) % 100,
        color: i % 2 === 0 ? '0, 240, 255' : '124, 58, 237',
        opacity: 0.3,
        duration: 20 + i * 2,
        delay: i * 1.5,
      })),
    []
  )

  return (
    <div className="min-h-screen bg-[#050508] text-gray-200 antialiased overflow-x-hidden noise">
      {/* Beautiful Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0a0a12] to-[#050508]" />

        {/* Aurora blobs - simplified for performance */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/8 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[60px]" />

        {/* Grid overlay - single layer for performance */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

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
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Exper />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Project />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  )
}

export default App
