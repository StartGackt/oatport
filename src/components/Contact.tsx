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
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <HiOutlineSparkles className="text-cyan-400" />
            </motion.div>
            <span className="text-sm text-gray-400">Contact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-white">Let's Work </span>
            <span className="gradient-text">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Have a project in mind? Let's create something amazing
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{
                  x: 10,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="flex items-center gap-5 p-5 rounded-2xl glass-card transition-all duration-500 ease-out hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 group relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg relative z-10`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <info.icon className="text-white text-xl" />
                    </motion.div>
                    <div className="relative z-10">
                      <p className="text-sm text-gray-500 mb-1 transition-colors duration-300 group-hover:text-gray-400">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-cyan-400 transition-all duration-300">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <motion.div
                    className="flex items-center gap-5 p-5 rounded-2xl glass-card"
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg`}>
                      <info.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="pt-6"
            >
              <motion.p
                className="text-gray-500 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Connect with me
              </motion.p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -8,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-500/30 transition-all duration-500 ease-out relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                    <social.icon className="text-2xl relative z-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center"
          >
            <motion.div
              className="w-full p-10 rounded-3xl glass-card relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10 text-center">
                {/* Animated icon */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/30 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <FaPaperPlane className="text-4xl text-white relative z-10" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl font-bold text-white mb-4"
                >
                  Ready to Start?
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-400 mb-8 leading-relaxed"
                >
                  Whether you have a project, an idea, or just want to say hi —
                  I'd love to hear from you. Let's build something amazing together!
                </motion.p>

                {/* CTA Button */}
                <motion.a
                  href="mailto:Thestackdev2001@outlook.com"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 ease-out relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaEnvelope className="relative z-10" />
                  </motion.div>
                  <span className="relative z-10">Send me an Email</span>
                </motion.a>

                {/* Response time */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2"
                >
                  <motion.span
                    className="w-2 h-2 rounded-full bg-green-400"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  Usually responds within 24 hours
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-32 pt-10 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20"
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                  transition: { duration: 0.5 }
                }}
              >
                <span className="text-white font-bold">O</span>
              </motion.div>
              <span className="text-gray-400 font-medium group-hover:text-cyan-400 transition-colors duration-300">oat.dev</span>
            </motion.div>

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-sm"
            >
              © 2025 Oat Srichainiwas. All rights reserved.
            </motion.p>

            {/* Made with */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-sm flex items-center gap-2"
            >
              Made with{' '}
              <motion.span
                className="text-red-500 inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ❤️
              </motion.span>
              {' '}& <span className="text-cyan-400">Stack</span>
            </motion.p>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}

export default Contact
