import { lazy, Suspense } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './index.css'

// Lazy load components below the fold for faster initial load
const About = lazy(() => import('./components/About'))
const Tech = lazy(() => import('./components/Tech'))
const Exper = lazy(() => import('./components/Exper'))
const Project = lazy(() => import('./components/Project'))
const Contact = lazy(() => import('./components/Contact'))

// Clean loading skeleton
const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      <span className="text-gray-500 text-sm">Loading...</span>
    </div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-[#050508] text-gray-200 antialiased overflow-x-hidden">
      {/* Simple gradient background - no heavy animations */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0a0a12] to-[#050508]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[80px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
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
