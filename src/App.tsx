import About from './components/About'
import Contact from './components/Contact'
import Exper from './components/Exper'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Tech from './components/Tech'
import './index.css'

function App() {
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

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(${Math.random() > 0.5 ? '0, 240, 255' : '124, 58, 237'}, ${Math.random() * 0.5 + 0.2})`,
                animation: `particle-float ${15 + Math.random() * 20}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
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
