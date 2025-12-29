import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { HiOutlineSparkles, HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Projects', href: '#projects' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${scrolled ? 'py-2' : ''
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className={`glass-card rounded-2xl px-6 py-3 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-cyan-500/10' : ''
            }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.a
                href="#"
                className="group flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <span className="text-white font-bold text-lg">O</span>
                  </div>
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-30 blur-lg transition-opacity" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold">
                    <span className="text-white">Oat</span>
                    <span className="gradient-text">.dev</span>
                  </span>
                </div>
              </motion.a>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 animated-underline"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Social Icons - Hide on mobile */}
                <div className="hidden sm:flex items-center gap-1">
                  <motion.a
                    href="https://github.com/StartGackt"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2.5 rounded-xl text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
                  >
                    <FaGithub className="text-lg" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/oat-srichainiwas-564278279/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2.5 rounded-xl text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
                  >
                    <FaLinkedin className="text-lg" />
                  </motion.a>
                </div>

                {/* CV Download Button */}
                <motion.a
                  href="/OAT SRICHAINIWAS.pdf"
                  download="OAT_SRICHAINIWAS.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-700 text-gray-300 font-medium text-sm hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all"
                >
                  <FaDownload className="text-sm" />
                  <span className="hidden md:inline">CV</span>
                </motion.a>

                {/* Hire Me CTA Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
                >
                  <HiOutlineSparkles className="text-lg" />
                  Hire Me
                </motion.a>

                {/* Mobile Menu Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <HiX className="text-2xl" />
                  ) : (
                    <HiMenuAlt3 className="text-2xl" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#0a0a12]/95 backdrop-blur-xl z-50 lg:hidden border-l border-gray-800/50"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <HiX className="text-2xl" />
                </motion.button>
              </div>

              {/* Menu Content */}
              <div className="px-6 py-4">
                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-4 px-4 py-4 text-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all group"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Divider */}
                <div className="my-8 border-t border-gray-800" />

                {/* Action Buttons */}
                <div className="space-y-4">
                  {/* CV Download */}
                  <motion.a
                    href="/OAT SRICHAINIWAS.pdf"
                    download="OAT_SRICHAINIWAS.pdf"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl border border-gray-700 text-gray-300 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all"
                  >
                    <FaDownload />
                    Download CV
                  </motion.a>

                  {/* Hire Me */}
                  <motion.a
                    href="#contact"
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25"
                  >
                    <HiOutlineSparkles className="text-xl" />
                    Hire Me
                  </motion.a>
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-10"
                >
                  <p className="text-gray-500 text-sm mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/StartGackt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/oat-srichainiwas-564278279/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
