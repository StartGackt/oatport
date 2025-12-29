import { motion } from 'framer-motion'
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineSparkles, HiOutlineLocationMarker } from 'react-icons/hi'

const experiences = [
  {
    year: "2025 - Present",
    role: "Software Engineer",
    company: "Knightclub",
    location: "Thailand",
    description: "AI system architecture design, building intelligent features with Next.js and modern tech stack.",
    technologies: ["AI", "Next.js", "TypeScript"],
    type: "work",
    current: true,
  },
  {
    year: "2025",
    role: "AI Architecture & Engineering",
    company: "Annatasia",
    location: "London, UK (Remote)",
    description: "Deep Learning systems, AI model integration, and intelligent automation solutions.",
    technologies: ["AI/ML", "Deep Learning", "Python"],
    type: "work",
  },
  {
    year: "2024 - 2025",
    role: "Software Intern",
    company: "Gofive",
    location: "Bangkok",
    description: "Microservices with Azure Pipeline, Angular micro frontends, .NET gRPC implementation.",
    technologies: ["Angular", "Azure", ".NET", "gRPC"],
    type: "work",
  },
  {
    year: "2024",
    role: "ASEAN Data Science Explorers",
    company: "ASEAN Foundation",
    location: "Southeast Asia",
    description: "Blockchain solution for combating fake news - SDG Goal 11 Innovation.",
    technologies: ["Blockchain", "Data Science"],
    type: "achievement",
  },
  {
    year: "2023",
    role: "JENESYS 2023",
    company: "JICE Japan",
    location: "Japan",
    description: "ASEAN-Japan AI Innovation Exchange representing Thailand.",
    technologies: ["AI", "International"],
    type: "achievement",
  },
]

const Exper = () => {
  return (
    <section id="experience" className="py-32 relative">
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
            <span className="text-sm text-gray-400">Experience</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional growth and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`relative flex gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div 
                  className={`w-4 h-4 rounded-full ${
                    exp.current 
                      ? 'bg-gradient-to-r from-cyan-400 to-cyan-600' 
                      : exp.type === 'work' 
                        ? 'bg-gradient-to-r from-purple-400 to-purple-600'
                        : 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                  }`}
                  whileHover={{ scale: 1.5 }}
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-50" />
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`glass-card p-6 rounded-2xl transition-all duration-300 ${
                    exp.current ? 'border-cyan-500/30 shadow-lg shadow-cyan-500/10' : ''
                  }`}
                >
                  {/* Badge & Year */}
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className={`p-2 rounded-lg ${
                      exp.type === 'work' 
                        ? 'bg-cyan-500/10 text-cyan-400' 
                        : 'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {exp.type === 'work' ? <HiOutlineBriefcase /> : <HiOutlineAcademicCap />}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{exp.year}</span>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className={`flex items-center gap-2 mb-4 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="text-cyan-400 font-medium">{exp.company}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-500 flex items-center gap-1">
                      <HiOutlineLocationMarker className="text-xs" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{exp.description}</p>

                  {/* Tech tags */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-gray-800/80 text-gray-400 border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Exper
