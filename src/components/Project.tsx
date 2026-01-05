import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaTimes, FaChevronRight, FaLightbulb, FaTools, FaUserTie } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import project1 from "../assets/projects/project-1.jpg"
import project3 from "../assets/projects/project-3.jpg"
import project4 from "../assets/projects/project-4.jpg"
import project5 from "../assets/projects/project-5.png"

interface Project {
  title: string
  image: string
  description: string
  link?: string
  github?: string
  technologies: string[]
  color: string
  featured?: boolean
  // Extended details for modal
  fullDescription?: string
  challenges?: string[]
  solutions?: string[]
  role?: string
  duration?: string
  screenshots?: string[]
}

const PROJECTS: Project[] = [
  {
    title: "Asia Plus Securities E-Service",
    image: "/aisaplus.png",
    description: "Enterprise financial platform featuring secure fund transfers, two-factor authentication, and automated notification system.",
    link: "https://www.asiaplus.co.th",
    technologies: ["Next.js", "OWASP Top 10"],
    color: "from-blue-500 to-cyan-600",
    featured: true,
    fullDescription: "A robust enterprise financial services platform developed for Asia Plus Securities using Next.js with full server-side rendering capabilities. The system provides seamless securities and custodian account transfers supporting both domestic and international transactions. Key implementations include Two-Factor Authentication via Google Authenticator for enhanced security, optimized server-side utilities for cookie management, and dynamic HTML email templates for real-time transaction notifications. Built with OWASP Top 10 security standards to ensure data protection and regulatory compliance.",
    role: "Full Stack Developer",
    duration: "6 months",
    challenges: [
      "Architecting a multi-account transfer system supporting securities and custodian accounts",
      "Integrating Two-Factor Authentication (Google Authenticator) for transaction security",
      "Optimizing server-side utilities by removing client-side dependencies",
      "Developing dynamic email notification templates for various transaction types"
    ],
    solutions: [
      "Built comprehensive transfer APIs with robust validation for account numbers and types",
      "Implemented secure 2FA flow with QR code generation and verification",
      "Refactored cookie utilities for seamless server-side operation",
      "Created reusable server-rendered email templates for domestic and international transfers"
    ]
  },
  {
    title: "E-Commerce Platform",
    image: project3,
    description: "Full-featured e-commerce with AI recommendations, shopping cart, and secure authentication.",
    link: "https://cia-app.vercel.app",
    technologies: ["Next.js", "React", "MongoDB", "Prisma"],
    color: "from-cyan-500 to-blue-600",
    featured: true,
    fullDescription: "A comprehensive e-commerce platform built with modern technologies. Features include AI-powered product recommendations, real-time inventory management, secure payment processing, and a responsive user interface optimized for all devices.",
    role: "Full Stack Developer",
    duration: "3 months",
    challenges: [
      "Implementing real-time inventory updates across multiple users",
      "Building an efficient AI recommendation system",
      "Ensuring secure payment processing and data protection"
    ],
    solutions: [
      "Used WebSocket for real-time synchronization",
      "Implemented collaborative filtering algorithm for recommendations",
      "Integrated Stripe with proper security measures and encryption"
    ]
  },
  {
    title: "ML Text Scanner",
    image: project4,
    description: "Android app with AI text recognition using Google ML Kit for document processing.",
    link: "https://github.com/StartGackt/tutorial-android",
    github: "https://github.com/StartGackt/tutorial-android",
    technologies: ["Java", "Firebase", "ML Kit"],
    color: "from-purple-500 to-pink-600",
    featured: true,
    fullDescription: "A mobile application that leverages Google's ML Kit to provide accurate text recognition from images. The app can scan documents, extract text, and organize information automatically, making document digitization effortless.",
    role: "Mobile Developer",
    duration: "2 months",
    challenges: [
      "Handling various image qualities and lighting conditions",
      "Processing large documents efficiently on mobile devices",
      "Supporting multiple languages and character sets"
    ],
    solutions: [
      "Implemented image preprocessing for quality enhancement",
      "Used background threading and chunked processing",
      "Leveraged ML Kit's multi-language support capabilities"
    ]
  },
  {
    title: "E-Shopr Platform",
    image: "/image.png",
    description: "Enterprise e-commerce with product management, analytics, and secure checkout.",
    technologies: ["Next.js", "NestJS", "PostgreSQL"],
    color: "from-green-500 to-teal-600",
    featured: true,
    fullDescription: "An enterprise-grade e-commerce solution featuring comprehensive product management, real-time analytics dashboard, and a secure multi-step checkout process. Built with scalability in mind to handle high traffic loads.",
    role: "Full Stack Developer",
    duration: "4 months",
    challenges: [
      "Building a scalable architecture for high traffic",
      "Creating an intuitive admin dashboard for analytics",
      "Implementing a smooth multi-step checkout flow"
    ],
    solutions: [
      "Used microservices architecture with NestJS",
      "Built real-time charts with Recharts and WebSocket",
      "Implemented form state management with validation"
    ]
  },
  {
    title: "Portfolio Website",
    image: project1,
    description: "Modern portfolio with animations and futuristic design.",
    technologies: ["React", "TypeScript", "Framer Motion"],
    color: "from-orange-500 to-red-600",
    fullDescription: "A personal portfolio website showcasing my work and skills with a futuristic, cyberpunk-inspired design. Features smooth animations, glass morphism effects, and optimized performance.",
    role: "Frontend Developer",
    duration: "1 month",
    challenges: [
      "Creating smooth animations without performance issues",
      "Building a unique visual identity",
      "Ensuring cross-browser compatibility"
    ],
    solutions: [
      "Used Framer Motion with lazy loading",
      "Designed custom CSS effects and gradients",
      "Tested extensively across browsers and devices"
    ]
  },
  {
    title: "Blockchain vs Fake News",
    image: project5,
    description: "Research using blockchain for news verification.",
    link: "https://www.canva.com/design/DAGFG6mS74o/ex8hYsntXtXVhITib-Airw/edit",
    technologies: ["Blockchain", "Research"],
    color: "from-yellow-500 to-orange-600",
    fullDescription: "A research project exploring the use of blockchain technology to combat misinformation and fake news. Developed as part of the ASEAN Data Science Explorers competition, proposing a decentralized verification system.",
    role: "Researcher & Developer",
    duration: "6 months",
    challenges: [
      "Understanding blockchain fundamentals for non-crypto use",
      "Designing a practical verification workflow",
      "Making the concept accessible to general audience"
    ],
    solutions: [
      "Deep research into permissioned blockchain systems",
      "Created user-friendly verification interface mockups",
      "Developed clear visualizations and documentation"
    ]
  },
  {
    title: "Azure CI/CD Pipeline",
    image: "/image copy 4.png",
    description: "Microservices with automated deployment.",
    technologies: ["Azure", "Docker", "CI/CD"],
    color: "from-blue-500 to-indigo-600",
    fullDescription: "A production-grade CI/CD pipeline implementation using Azure DevOps for a microservices architecture. Includes automated testing, containerization with Docker, and blue-green deployment strategy.",
    role: "DevOps Engineer",
    duration: "2 months",
    challenges: [
      "Setting up reliable automated testing",
      "Managing multiple microservices deployments",
      "Ensuring zero-downtime deployments"
    ],
    solutions: [
      "Implemented comprehensive test suites with coverage",
      "Created unified pipeline templates for all services",
      "Used blue-green deployment with health checks"
    ]
  },
]

// Project Modal Component
const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [project])

  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-xs font-medium rounded-lg bg-gradient-to-r ${project.color} text-white`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Meta Info */}
          <div className="flex flex-wrap gap-6">
            {project.role && (
              <div className="flex items-center gap-2">
                <FaUserTie className="text-cyan-400" />
                <div>
                  <p className="text-xs text-gray-500">Role</p>
                  <p className="text-white font-medium">{project.role}</p>
                </div>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-2">
                <HiOutlineSparkles className="text-purple-400" />
                <div>
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="text-white font-medium">{project.duration}</p>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <FaChevronRight className="text-cyan-400 text-sm" />
              Overview
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <FaLightbulb className="text-yellow-400 text-sm" />
                Challenges
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Solutions */}
          {project.solutions && project.solutions.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <FaTools className="text-green-400 text-sm" />
                Solutions
              </h3>
              <ul className="space-y-2">
                {project.solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.color} text-white font-medium shadow-lg hover:scale-105 transition-transform`}
              >
                <FaExternalLinkAlt />
                View Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-gray-300 font-medium hover:border-gray-600 hover:text-white transition-all"
              >
                <FaGithub />
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
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
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
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
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-xl`}
                    >
                      <FaChevronRight />
                    </motion.button>
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
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-full p-5 rounded-xl glass-card cyber-card hover:border-gray-700 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                      <span className="text-white text-lg">📁</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-500 hover:text-cyan-400 transition-colors"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}
                      <button className="text-gray-500 hover:text-cyan-400 transition-colors">
                        <FaChevronRight className="text-sm" />
                      </button>
                    </div>
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

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Project
