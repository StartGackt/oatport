import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import { motion } from 'framer-motion'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
]

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-2xl px-6 py-3">
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

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
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
            <div className="flex items-center gap-3">
              {/* Social Icons */}
              <div className="flex items-center gap-1">
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

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
              >
                <HiOutlineSparkles className="text-lg" />
                Hire Me
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
