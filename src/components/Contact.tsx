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

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <HiOutlineSparkles className="text-cyan-400" />
            <span className="text-sm text-gray-400">Contact</span>
          </motion.div>
          
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="flex items-center gap-5 p-5 rounded-2xl glass-card transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg`}>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-6"
            >
              <p className="text-gray-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    <social.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="w-full p-10 rounded-3xl glass-card relative overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10" />
              
              <div className="relative z-10 text-center">
                {/* Animated icon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/30"
                >
                  <FaPaperPlane className="text-4xl text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start?
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Whether you have a project, an idea, or just want to say hi — 
                  I'd love to hear from you. Let's build something amazing together!
                </p>

                {/* CTA Button */}
                <motion.a
                  href="mailto:Thestackdev2001@outlook.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
                >
                  <FaEnvelope />
                  Send me an Email
                </motion.a>

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
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-10 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">O</span>
              </div>
              <span className="text-gray-400 font-medium">oat.dev</span>
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
