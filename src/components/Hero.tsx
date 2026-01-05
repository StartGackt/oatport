import profilePic from '../assets/projects/hero.jpg'
import { HiArrowDown, HiOutlineSparkles } from 'react-icons/hi'
import { SiOpenai, SiLangchain } from 'react-icons/si'
import { BsStars, BsBraces, BsDiagram3 } from 'react-icons/bs'
import { TbBrain } from 'react-icons/tb'
import { FaPlay } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const roles = ['Full Stack Developer', 'AI Enthusiast', 'Cloud Architect', 'Problem Solver']

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Simple fade-in on mount
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`order-2 lg:order-1 text-center lg:text-left transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-gray-300">Available for work</span>
            </div>

            {/* Greeting */}
            <p className="text-gray-400 text-lg mb-4">Hello, I'm</p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-white">Oat </span>
              <span className="gradient-text">Srichainiwas</span>
            </h1>

            {/* Role with Typewriter */}
            <div className="text-2xl sm:text-3xl text-gray-400 mb-6 h-10">
              <span className="text-cyan-400">{displayText}</span>
              <span className="text-cyan-400 animate-pulse">|</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Crafting digital experiences with{' '}
              <span className="text-cyan-400 font-medium">modern technologies</span> and{' '}
              <span className="text-purple-400 font-medium">AI-powered solutions</span>.
              Turning complex problems into elegant, scalable products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold overflow-hidden shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <HiOutlineSparkles />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl border border-gray-700 text-gray-300 font-semibold hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
              >
                <FaPlay className="text-sm" />
                Let's Talk
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-14 justify-center lg:justify-start">
              {[
                { value: '1+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Completed' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Profile */}
          <div
            className={`order-1 lg:order-2 flex justify-center transition-all duration-700 delay-150 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <div className="relative">
              {/* Simplified animated ring - CSS only */}
              <div className="absolute -inset-8 rounded-full border border-cyan-500/20 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-lg shadow-cyan-500/50" />
              </div>

              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Glow background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/15 to-pink-500/20 blur-2xl" />

                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500">
                  <div className="w-full h-full rounded-full bg-[#0a0a12] p-2">
                    <img
                      src={profilePic}
                      alt="Oat Srichainiwas"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Orbiting badges container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Inner orbit ring */}
                  {/* Orbit 1 - OpenAI */}
                  <div className="absolute w-[125%] h-[125%] animate-orbit">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-xl glass-card shadow-2xl border border-cyan-500/30 backdrop-blur-xl animate-counter-rotate">
                      <span className="text-cyan-400 font-bold flex items-center gap-1.5 text-xs whitespace-nowrap">
                        <SiOpenai className="text-base drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        OpenAI
                      </span>
                    </div>
                  </div>

                  {/* Orbit 2 - LangChain */}
                  <div className="absolute w-[125%] h-[125%] animate-orbit-2">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-xl glass-card shadow-2xl border border-emerald-500/30 backdrop-blur-xl animate-counter-rotate-2">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-xs whitespace-nowrap">
                        <SiLangchain className="text-base drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                        LangChain
                      </span>
                    </div>
                  </div>

                  {/* Orbit 3 - LangGraph */}
                  <div className="absolute w-[125%] h-[125%] animate-orbit-3">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-xl glass-card shadow-2xl border border-orange-500/30 backdrop-blur-xl animate-counter-rotate-3">
                      <span className="text-orange-400 font-bold flex items-center gap-1.5 text-xs whitespace-nowrap">
                        <BsDiagram3 className="text-base drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                        LangGraph
                      </span>
                    </div>
                  </div>

                  {/* Outer orbit ring */}
                  {/* Orbit 4 - LlamaIndex */}
                  <div className="absolute w-[160%] h-[160%] animate-orbit-outer">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-xl glass-card shadow-2xl border border-purple-500/30 backdrop-blur-xl animate-counter-rotate-outer">
                      <span className="text-purple-400 font-bold flex items-center gap-1.5 text-xs whitespace-nowrap">
                        <BsBraces className="text-base drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                        LlamaIndex
                      </span>
                    </div>
                  </div>

                  {/* Orbit 5 - Deep Learning */}
                  <div className="absolute w-[160%] h-[160%] animate-orbit-outer-2">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-xl glass-card shadow-2xl border border-pink-500/30 backdrop-blur-xl animate-counter-rotate-outer-2">
                      <span className="text-pink-400 font-bold flex items-center gap-1.5 text-xs whitespace-nowrap">
                        <TbBrain className="text-base drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
                        Deep Learning
                      </span>
                    </div>
                  </div>

                  {/* Orbit 6 - RAG */}
                  <div className="absolute w-[160%] h-[160%] animate-orbit-outer-3">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-xl glass-card shadow-2xl border border-yellow-500/30 backdrop-blur-xl animate-counter-rotate-outer-3">
                      <span className="text-yellow-400 font-bold flex items-center gap-1.5 text-xs whitespace-nowrap">
                        <BsStars className="text-base drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                        RAG
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors animate-bounce-slow"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <HiArrowDown className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
