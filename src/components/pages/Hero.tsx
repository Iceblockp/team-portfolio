'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-20"></div>
            </div>
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Innovate. Create. Dominate.
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        We're a team of visionary developers and designers crafting the future of digital experiences.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link
                            href="#contact"
                            className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="#services"
                            className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition duration-300 transform hover:scale-105"
                        >
                            Our Services
                        </Link>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
            >
                <Link href="#services" className="text-cyan-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </Link>
            </motion.div>
        </section>
    )
}

export default Hero

