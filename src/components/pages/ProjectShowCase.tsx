'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        title: 'Quantum E-commerce Platform',
        description: 'A next-gen e-commerce solution with AI-powered recommendations',
        image: '/placeholder.svg?height=300&width=400',
        liveLink: 'https://example.com',
        githubLink: 'https://github.com',
    },
    {
        title: 'Neural Task Management',
        description: 'An AI-driven task management app with predictive scheduling',
        image: '/placeholder.svg?height=300&width=400',
        liveLink: 'https://example.com',
        githubLink: 'https://github.com',
    },
    {
        title: 'Holographic Data Visualization',
        description: 'An immersive 3D data visualization platform using WebGL',
        image: '/placeholder.svg?height=300&width=400',
        liveLink: 'https://example.com',
        githubLink: 'https://github.com',
    },
]

const ProjectsShowcase = () => {
    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-black to-purple-900">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Our Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-black/50 backdrop-blur-md rounded-lg overflow-hidden border border-cyan-500/30 hover:border-fuchsia-500/30 transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}
                        >
                            <div className="relative h-48">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 transform hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex justify-between">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition duration-300"
                                    >
                                        <ExternalLink size={16} className="mr-1" /> Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-400 hover:text-gray-300 transition duration-300"
                                    >
                                        <Github size={16} className="mr-1" /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsShowcase

