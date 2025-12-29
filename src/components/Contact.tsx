import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Bangkok, Thailand',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+66 65 914 3679',
    href: 'tel:+66659143679',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'Thestackdev2001@outlook.com',
    href: 'mailto:Thestackdev2001@outlook.com',
    color: 'from-pink-400 to-pink-600',
  },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/StartGackt', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/oat-srichainiwas-564278279/', label: 'LinkedIn' },
]

// Simple fade animation - minimal for performance
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Background decorations - static for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px]" />
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div {...fadeIn} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <HiOutlineSparkles className="text-cyan-400" />
            <span className="text-sm text-gray-400">Contact</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Let's Work </span>
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's create something amazing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Cards */}
          <motion.div {...fadeIn} className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="flex items-center gap-5 p-5 rounded-2xl glass-card transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30 group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                      <info.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-5 p-5 rounded-2xl glass-card">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg`}>
                      <info.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div {...fadeIn} className="pt-6">
              <p className="text-gray-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
                  >
                    <social.icon className="text-2xl" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            {...fadeIn}
            className="flex items-center"
          >
            <div className="w-full p-10 rounded-3xl glass-card relative overflow-hidden hover:scale-[1.01] transition-transform duration-300">
              {/* Static gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10" />

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/30">
                  <FaPaperPlane className="text-4xl text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start?
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Whether you have a project, an idea, or just want to say hi —
                  I'd love to hear from you. Let's build something amazing together!
                </p>

                {/* CTA Button */}
                <a
                  href="mailto:Thestackdev2001@outlook.com"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                >
                  <FaEnvelope />
                  <span>Send me an Email</span>
                </a>

                {/* Response time */}
                <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Usually responds within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer {...fadeIn} className="mt-32 pt-10 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <span className="text-white font-bold">O</span>
              </div>
              <span className="text-gray-400 font-medium group-hover:text-cyan-400 transition-colors">oat.dev</span>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2025 Oat Srichainiwas. All rights reserved.
            </p>

            {/* Made with */}
            <p className="text-gray-600 text-sm flex items-center gap-2">
              Made with <span className="text-red-500">❤️</span> & <span className="text-cyan-400">Stack</span>
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}

export default Contact
