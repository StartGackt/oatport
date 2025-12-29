import { motion } from 'framer-motion'
import { RiReactjsFill } from "react-icons/ri"
import { SiAngular, SiDotnet, SiMysql, SiNextdotjs, SiPython, SiTypescript, SiTailwindcss, SiDocker, SiTensorflow, SiKubernetes, SiFirebase, SiPostgresql } from "react-icons/si"
import { HiOutlineSparkles } from 'react-icons/hi'

const technologies = [
  { icon: RiReactjsFill, name: 'React', color: '#61DAFB' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { icon: SiAngular, name: 'Angular', color: '#DD0031' },
  { icon: SiDotnet, name: '.NET', color: '#512BD4' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
  { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
]

const Tech = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />

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
            <span className="text-sm text-gray-400">Tech Stack</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Tools & </span>
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My arsenal of technologies for building modern applications
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.03 * index, type: 'spring', stiffness: 200 }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div 
                className="aspect-square rounded-2xl glass-card p-4 md:p-6 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: `0 0 0 1px ${tech.color}10`,
                }}
              >
                {/* Glow on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)`,
                    boxShadow: `0 0 40px ${tech.color}20`
                  }}
                />

                {/* Icon */}
                <tech.icon 
                  className="text-3xl md:text-4xl lg:text-5xl transition-all duration-300 relative z-10" 
                  style={{ 
                    color: tech.color,
                    filter: `drop-shadow(0 0 10px ${tech.color}50)`
                  }}
                />

                {/* Name */}
                <span className="mt-3 text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors relative z-10 text-center">
                  {tech.name}
                </span>

                {/* Hover border */}
                <div 
                  className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: `${tech.color}40` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 p-6 rounded-2xl glass-card">
            {['Git', 'Azure DevOps', 'Prisma', 'Redis', 'GraphQL', 'REST API', 'gRPC', 'CI/CD', 'Agile'].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + 0.03 * index }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 text-sm rounded-xl bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Tech
