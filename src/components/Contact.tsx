import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa'
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

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      // Using Formspree - replace with your form ID
      const response = await fetch('https://formspree.io/f/xkgwqzqd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

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
          {/* Left - Contact Info & Cards */}
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

          {/* Right - Contact Form */}
          <motion.div {...fadeIn}>
            <div className="p-8 rounded-3xl glass-card relative overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
                <p className="text-gray-400 mb-8">I'll get back to you within 24 hours</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                    className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-xl transition-all duration-300 ${status === 'success'
                        ? 'bg-green-500 text-white shadow-green-500/25'
                        : status === 'error'
                          ? 'bg-red-500 text-white shadow-red-500/25'
                          : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-cyan-500/25 hover:shadow-cyan-500/40'
                      } disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <FaCheck />
                        Message Sent!
                      </>
                    ) : status === 'error' ? (
                      <>
                        <FaExclamationTriangle />
                        Failed - Try Again
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
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
