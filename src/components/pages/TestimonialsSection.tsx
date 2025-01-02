'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechCorp',
        image: '/placeholder.svg?height=100&width=100',
        quote: 'TechFusion delivered an exceptional product that exceeded our expectations. Their innovative approach and attention to detail set them apart.',
    },
    {
        name: 'Michael Chen',
        role: 'CTO, InnovateTech',
        image: '/placeholder.svg?height=100&width=100',
        quote: 'Working with TechFusion was a game-changer for our business. Their expertise in cutting-edge technologies helped us stay ahead of the curve.',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Founder, FutureSoft',
        image: '/placeholder.svg?height=100&width=100',
        quote: 'The team at TechFusion is not just skilled, they are visionaries. They turned our complex ideas into a sleek, user-friendly solution.',
    },
]

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-purple-900">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Client Testimonials
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-cyan-500/30 hover:border-fuchsia-500/30 transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}
                        >
                            <div className="flex items-center mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-cyan-400">{testimonial.name}</h3>
                                    <p className="text-sm text-fuchsia-400">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic">&apos;{testimonial.quote}&apos;</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection

