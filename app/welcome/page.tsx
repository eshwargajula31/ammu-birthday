'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FloatingHearts from '../../components/FloatingHearts'
import Fireworks from '../../components/Fireworks'

export default function WelcomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const title = "Happy Birthday, Ammu!"
  const subtitle = "Your Special Day is Here!"

  if (!mounted) return null

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200">
      <FloatingHearts />
      <Fireworks />
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-8 text-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {title.split('').map((char, index) => (
          <motion.span key={`${char}-${index}`} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-3xl mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {subtitle}
      </motion.h2>
      <Link href="/about">
        <motion.button
          className="px-8 py-4 bg-pink-500 text-white rounded-full text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 182, 193, 0.7)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Start the Journey
        </motion.button>
      </Link>
    </main>
  )
}

