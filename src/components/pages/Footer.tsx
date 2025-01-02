'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                            TechFusion
                        </h3>
                        <p className="text-gray-400">
                            Innovating the future of digital experiences with cutting-edge technology solutions.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-semibold mb-4 text-cyan-400">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#services" className="text-gray-400 hover:text-fuchsia-400 transition duration-300">Services</Link></li>
                            <li><Link href="#team" className="text-gray-400 hover:text-fuchsia-400 transition duration-300">Team</Link></li>
                            <li><Link href="#projects" className="text-gray-400 hover:text-fuchsia-400 transition duration-300">Projects</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-fuchsia-400 transition duration-300">Contact</Link></li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-semibold mb-4 text-cyan-400">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fuchsia-400 transition duration-300">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fuchsia-400 transition duration-300">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fuchsia-400 transition duration-300">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className="mt-8 pt-8 border-t border-gray-800 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400">
                        &copy; {currentYear} TechFusion. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer

