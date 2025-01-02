'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Code, TestTube, Rocket } from 'lucide-react'

const workProcessSteps = [
    { icon: <Lightbulb size={40} />, title: 'Ideation', description: 'We brainstorm innovative solutions tailored to your needs.' },
    { icon: <Code size={40} />, title: 'Development', description: 'Our expert team brings ideas to life with cutting-edge tech.' },
    { icon: <TestTube size={40} />, title: 'Testing', description: 'Rigorous quality assurance ensures flawless performance.' },
    { icon: <Rocket size={40} />, title: 'Launch', description: 'We deploy your solution and provide ongoing support.' },
]

const WorkProcessSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-purple-900 to-black">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Our Work Process
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {workProcessSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/30 hover:border-fuchsia-500/30 transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}
                        >
                            <motion.div
                                className="text-cyan-400 mb-4"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                viewport={{ once: true }}
                            >
                                {step.icon}
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">{step.title}</h3>
                            <p className="text-gray-300">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkProcessSection

