'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-cyan-400">
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Tech
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-fuchsia-400"
                    >
                        Fusion
                    </motion.span>
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <NavLinks />
                </nav>
                <motion.button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className="md:hidden bg-black/90 backdrop-blur-md py-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <NavLinks mobile />
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
    const linkClass = mobile
        ? 'block py-2 px-4 hover:bg-cyan-900/30 transition duration-300'
        : 'text-gray-300 hover:text-cyan-400 transition duration-300'

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    }

    const links = [
        { href: '#services', text: 'Services' },
        { href: '#team', text: 'Team' },
        { href: '#projects', text: 'Projects' },
        { href: '#skills', text: 'Skills' },
        { href: '#contact', text: 'Contact' },
    ]

    return (
        <>
            {links.map((link, i) => (
                <motion.div
                    key={link.href}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                >
                    <Link href={link.href} className={linkClass}>
                        {link.text}
                    </Link>
                </motion.div>
            ))}
        </>
    )
}

export default Header

