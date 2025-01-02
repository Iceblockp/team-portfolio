'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData)
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-black to-purple-900">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Contact Us
                </motion.h2>
                <motion.form
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-cyan-400 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-black/50 text-white border border-cyan-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-cyan-400 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-black/50 text-white border border-cyan-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-cyan-400 font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-3 py-2 bg-black/50 text-white border border-cyan-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold py-2 px-4 rounded-md hover:from-cyan-600 hover:to-fuchsia-600 transition duration-300"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    )
}

export default ContactForm

