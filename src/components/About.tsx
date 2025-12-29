import { motion } from 'framer-motion'
import { HiOutlineCode, HiOutlineDatabase, HiOutlineCloud, HiOutlineSparkles } from 'react-icons/hi'
import { FaBrain } from 'react-icons/fa'

const skills = [
  {
    icon: HiOutlineCode,
    title: 'Frontend',
    description: 'React, Angular, Next.js, TypeScript',
    level: 95,
    color: 'from-cyan-400 to-cyan-600',
    shadowColor: 'shadow-cyan-500/20',
  },
  {
    icon: HiOutlineDatabase,
    title: 'Backend',
    description: '.NET, Node.js, SQL, APIs',
    level: 90,
    color: 'from-purple-400 to-purple-600',
    shadowColor: 'shadow-purple-500/20',
  },
  {
    icon: HiOutlineCloud,
    title: 'Cloud & DevOps',
    description: 'Azure, CI/CD, Docker',
    level: 85,
    color: 'from-blue-400 to-blue-600',
    shadowColor: 'shadow-blue-500/20',
  },
  {
    icon: FaBrain,
    title: 'AI & ML',
    description: 'TensorFlow, ML Kit, AI APIs',
    level: 80,
    color: 'from-pink-400 to-pink-600',
    shadowColor: 'shadow-pink-500/20',
  },
]

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
            <span className="text-sm text-gray-400">About Me</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Passionate </span>
            <span className="gradient-text">Developer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Building digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="code-block rounded-3xl overflow-hidden">
              {/* Window header */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-4 text-sm text-gray-500 mono">developer.json</span>
              </div>
              
              {/* Code content */}
              <div className="p-6 mono text-sm leading-relaxed">
                <div className="text-gray-500">{'{'}</div>
                <div className="ml-4">
                  <span className="text-purple-400">"name"</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-green-400">"Oat Srichainiwas"</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">"title"</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-green-400">"Full Stack Developer"</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">"location"</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-green-400">"Bangkok, Thailand 🇹🇭"</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">"focus"</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-green-400">"AI-Powered Solutions"</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">"passion"</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-cyan-400">[</span>
                </div>
                <div className="ml-8">
                  <span className="text-yellow-400">"Clean Code"</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="ml-8">
                  <span className="text-yellow-400">"User Experience"</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="ml-8">
                  <span className="text-yellow-400">"Innovation"</span>
                </div>
                <div className="ml-4">
                  <span className="text-cyan-400">]</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">"available"</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-cyan-400">true</span>
                </div>
                <div className="text-gray-500">{'}'}</div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`card-3d glass-card p-6 rounded-2xl ${skill.shadowColor} hover:shadow-xl transition-all duration-300`}
              >
                {/* Icon & Level */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg`}>
                    <skill.icon className="text-white text-xl" />
                  </div>
                  <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white mb-1">{skill.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{skill.description}</p>

                {/* Progress Bar */}
                <div className="h-1.5 rounded-full bg-gray-800 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to know more? Let's connect and build something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all group"
          >
            Get in Touch
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
