'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Full Stack Developer', image: '/placeholder.svg?height=200&width=200' },
    { id: 2, name: 'Jane Smith', role: 'UX Designer', image: '/placeholder.svg?height=200&width=200' },
    { id: 3, name: 'Mike Johnson', role: 'Backend Developer', image: '/placeholder.svg?height=200&width=200' },
    { id: 4, name: 'Emily Brown', role: 'Frontend Developer', image: '/placeholder.svg?height=200&width=200' },
]

const TeamSection = () => {
    return (
        <section id="team" className="py-20 bg-gradient-to-b from-purple-900 to-black">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Our Team
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link href={`/team/${member.id}`}>
                                <motion.div
                                    className="bg-black/50 backdrop-blur-md rounded-lg p-6 text-center border border-cyan-500/30 hover:border-fuchsia-500/30 transition duration-300"
                                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}
                                >
                                    <motion.div
                                        className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full"
                                    >
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-300 transform hover:scale-110"
                                        />
                                    </motion.div>
                                    <h3 className="text-xl font-semibold text-cyan-400">{member.name}</h3>
                                    <p className="text-fuchsia-400">{member.role}</p>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSection

