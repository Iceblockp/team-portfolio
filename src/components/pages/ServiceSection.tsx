'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Globe, Database, PenTool, BarChart } from 'lucide-react'

const services = [
    { icon: <Code size={40} />, title: 'Web Development', description: 'Cutting-edge web applications tailored to your business needs.' },
    { icon: <Smartphone size={40} />, title: 'Mobile App Development', description: 'Next-gen mobile apps for iOS and Android platforms.' },
    { icon: <Globe size={40} />, title: 'E-commerce Solutions', description: 'Scalable and secure online stores with advanced features.' },
    { icon: <Database size={40} />, title: 'Database Design', description: 'Efficient and future-proof database solutions for your data.' },
    { icon: <PenTool size={40} />, title: 'UI/UX Design', description: 'Innovative designs that push the boundaries of user experience.' },
    { icon: <BarChart size={40} />, title: 'Data Analytics', description: 'Advanced analytics solutions to drive business growth.' },
]

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 bg-gradient-to-b from-black to-purple-900">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Our Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
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
                                {service.icon}
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection

