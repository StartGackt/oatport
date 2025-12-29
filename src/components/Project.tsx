import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import project1 from "../assets/projects/project-1.jpg"
import project3 from "../assets/projects/project-3.jpg"
import project4 from "../assets/projects/project-4.jpg"
import project5 from "../assets/projects/project-5.png"

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    image: project3,
    description: "Full-featured e-commerce with AI recommendations, shopping cart, and secure authentication.",
    link: "https://cia-app.vercel.app",
    technologies: ["Next.js", "React", "MongoDB", "Prisma"],
    color: "from-cyan-500 to-blue-600",
    featured: true,
  },
  {
    title: "ML Text Scanner",
    image: project4,
    description: "Android app with AI text recognition using Google ML Kit for document processing.",
    link: "https://github.com/StartGackt/tutorial-android",
    technologies: ["Java", "Firebase", "ML Kit"],
    color: "from-purple-500 to-pink-600",
    featured: true,
  },
  {
    title: "E-Shopr Platform",
    image: "/image.png",
    description: "Enterprise e-commerce with product management, analytics, and secure checkout.",
    technologies: ["Next.js", "NestJS", "PostgreSQL"],
    color: "from-green-500 to-teal-600",
    featured: true,
  },
  {
    title: "Portfolio Website",
    image: project1,
    description: "Modern portfolio with animations and futuristic design.",
    technologies: ["React", "TypeScript", "Framer Motion"],
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Blockchain vs Fake News",
    image: project5,
    description: "Research using blockchain for news verification.",
    link: "https://www.canva.com/design/DAGFG6mS74o/ex8hYsntXtXVhITib-Airw/edit",
    technologies: ["Blockchain", "Research"],
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Azure CI/CD Pipeline",
    image: "/image copy 4.png",
    description: "Microservices with automated deployment.",
    technologies: ["Azure", "Docker", "CI/CD"],
    color: "from-blue-500 to-indigo-600",
  },
]

const Project = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured)
  const otherProjects = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" className="py-32 relative">
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
            <span className="text-sm text-gray-400">Portfolio</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my best work and creative solutions
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="h-full rounded-2xl overflow-hidden glass-card cyber-card transition-all duration-500 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
                  
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-xl`}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
                    {project.link?.includes('github') && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-xl bg-gray-800 text-white shadow-xl"
                      >
                        <FaGithub />
                      </motion.a>
                    )}
                  </div>

                  {/* Featured badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-800/80 text-gray-300 border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="h-full p-5 rounded-xl glass-card cyber-card hover:border-gray-700 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                      <span className="text-white text-lg">📁</span>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-cyan-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                  </div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs text-gray-500">
                        {tech}{i < project.technologies.length - 1 && ' •'}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Project
