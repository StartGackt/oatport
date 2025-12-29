import { motion } from 'framer-motion'
import { HiOutlineSparkles, HiOutlineAcademicCap, HiOutlineGlobe, HiOutlineLightBulb } from 'react-icons/hi'
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa'

const certificates = [
    {
        title: 'JENESYS 2023',
        organization: 'JICE - Japan International Cooperation Center',
        year: '2023',
        description: 'Selected as a representative of Thailand to participate in the ASEAN-Japan Students Conference focusing on AI innovation. Exchanged knowledge and insights on artificial intelligence with students from Japan and all 10 ASEAN member countries.',
        icon: HiOutlineGlobe,
        color: 'from-red-400 to-rose-600',
        shadowColor: 'shadow-red-500/20',
        location: 'Tokyo, Japan',
        badge: 'International',
        highlights: [
            'AI Innovation & Technology Exchange',
            'Cross-cultural collaboration',
            'International networking'
        ]
    },
    {
        title: 'ASEAN Data Science Explorers',
        organization: 'ASEAN Foundation',
        year: '2024',
        description: 'Developed a blockchain-based solution to combat misinformation and fake news. Designed data-driven framework for sustainable city development aligned with SDG Goal 11.',
        icon: HiOutlineLightBulb,
        color: 'from-blue-400 to-indigo-600',
        shadowColor: 'shadow-blue-500/20',
        location: 'Southeast Asia',
        badge: 'Regional',
        highlights: [
            'Blockchain for fake news verification',
            'SDG Goal 11 Innovation',
            'Data-driven solutions'
        ],
        link: 'https://www.canva.com/design/DAGFG6mS74o/ex8hYsntXtXVhITib-Airw/edit'
    },
    {
        title: 'Computer Science Degree',
        organization: '',
        year: '2025',
        description: 'Bachelor of Science in Computer Science. Focused on software development, AI/ML, and cloud computing. Active participation in various tech communities and competitions.',
        icon: HiOutlineAcademicCap,
        color: 'from-purple-400 to-violet-600',
        shadowColor: 'shadow-purple-500/20',
        location: 'Bangkok, Thailand',
        badge: 'Education',
        highlights: [
            'Software Development',
            'AI & Machine Learning',
            'Cloud Computing'
        ]
    }
]

const Certificates = () => {
    return (
        <section id="certificates" className="py-32 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
            <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />

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
                        <span className="text-sm text-gray-400">Achievements</span>
                    </motion.div>

                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Certificates & </span>
                        <span className="gradient-text">Awards</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Recognition of excellence and continuous learning
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="group relative"
                        >
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`h-full p-6 rounded-2xl glass-card ${cert.shadowColor} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                {/* Badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                        <cert.icon className="text-white text-2xl" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                                            {cert.badge}
                                        </span>
                                        {cert.link && (
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                                            >
                                                <FaExternalLinkAlt className="text-xs" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FaAward className={`text-sm bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`} style={{ color: cert.color.includes('red') ? '#f87171' : cert.color.includes('blue') ? '#60a5fa' : '#a78bfa' }} />
                                        <span className="text-sm text-gray-500">{cert.year}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-colors">
                                        {cert.title}
                                    </h3>

                                    <p className="text-cyan-400 text-sm font-medium mb-1">
                                        {cert.organization}
                                    </p>

                                    <p className="text-gray-500 text-xs mb-4 flex items-center gap-1">
                                        <HiOutlineGlobe className="text-xs" />
                                        {cert.location}
                                    </p>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                        {cert.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="space-y-2">
                                        {cert.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cert.color}`} />
                                                <span className="text-gray-500">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative corner */}
                                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r ${cert.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl glass-card">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                                <HiOutlineAcademicCap className="text-white text-xl" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">Continuous Learning</p>
                                <p className="text-white font-medium">Always exploring new technologies</p>
                            </div>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-gray-700" />
                        <p className="text-gray-400 text-sm max-w-md">
                            I believe in lifelong learning and constantly expanding my knowledge through courses, conferences, and hands-on projects.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Certificates

