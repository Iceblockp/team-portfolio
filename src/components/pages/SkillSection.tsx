'use client'

import { motion } from 'framer-motion'

const skills = [
    'Quantum Computing', 'AI/ML', 'Blockchain', 'IoT',
    'AR/VR', 'Cybersecurity', 'Cloud Computing', 'Edge Computing',
    '5G Networks', 'Robotics', 'Bioinformatics', 'Nanotechnology'
]

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-gradient-to-b from-purple-900 to-black">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Our Expertise
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <motion.span
                            key={index}
                            className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)' }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection

