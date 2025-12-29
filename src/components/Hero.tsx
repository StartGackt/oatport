import profilePic from '../assets/projects/hero.jpg'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiArrowDown, HiOutlineSparkles, HiOutlineLightningBolt } from 'react-icons/hi'
import { FaPlay } from 'react-icons/fa'

const roles = ['Full Stack Developer', 'AI Enthusiast', 'Cloud Architect', 'Problem Solver']

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

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
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative spotlight">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-gray-300">Available for work</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-white">Oat </span>
              <span className="gradient-text">Srichainiwas</span>
            </motion.h1>

            {/* Role with Typewriter */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl sm:text-3xl text-gray-400 mb-6 h-10"
            >
              <span className="text-cyan-400">{displayText}</span>
              <span className="text-cyan-400 animate-pulse">|</span>
            </motion.div>

            {/* AI / Cyber badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-xl glass-card text-sm text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
            >
              <HiOutlineSparkles className="text-cyan-400" />
              AI + Cyber Ready Experiences
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Crafting digital experiences with{' '}
              <span className="text-cyan-400 font-medium">modern technologies</span> and{' '}
              <span className="text-purple-400 font-medium">AI-powered solutions</span>.
              Turning complex problems into elegant, scalable products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold overflow-hidden shadow-lg shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <HiOutlineSparkles />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-2xl border border-gray-700 text-gray-300 font-semibold hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-400 transition-all flex items-center gap-2"
              >
                <FaPlay className="text-sm" />
                Let's Talk
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-8 mt-14 justify-center lg:justify-start"
            >
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Completed' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div 
                className="absolute -inset-8 rounded-full border border-cyan-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-lg shadow-cyan-500/50" />
              </motion.div>
              
              <motion.div 
                className="absolute -inset-16 rounded-full border border-purple-500/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg shadow-purple-500/50" />
              </motion.div>

              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 cyber-card">
                {/* Glow background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-pink-500/30 blur-3xl animate-pulse" />
                
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500">
                  <div className="w-full h-full rounded-full bg-[#0a0a12] p-2">
                    <img
                      src={profilePic}
                      alt="Oat Srichainiwas"
                      loading="eager"
                      decoding="async"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-2 top-1/4 px-4 py-2 rounded-xl glass-card shadow-xl"
                >
                  <span className="text-cyan-400 font-bold flex items-center gap-2">
                    <HiOutlineLightningBolt className="icon-glow" />
                    React
                  </span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -left-4 bottom-1/3 px-4 py-2 rounded-xl glass-card shadow-xl"
                >
                  <span className="text-purple-400 font-bold">.NET</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute right-4 bottom-8 px-4 py-2 rounded-xl glass-card shadow-xl"
                >
                  <span className="text-pink-400 font-bold">AI/ML</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <HiArrowDown className="text-xl" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
