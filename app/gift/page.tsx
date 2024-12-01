'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GiftPage() {
  const [isOpen, setIsOpen] = useState(false)

  const boxVariants = {
    closed: { rotateY: 0, scale: 1},
    open: { rotateY: 110, scale: 0 } // Enlarge the box when open
  }

  const giftVariants = {
    hidden: { opacity: 0, scale: 1.0 },
    visible: { opacity: 1, scale: 1.0 }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 relative overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-12 text-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Surprise Gift
      </motion.h1>
      <motion.div
        className="relative w-64 h-64 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <motion.div
          className="absolute inset-0 bg-pink-500 rounded-lg"
          variants={boxVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={giftVariants}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-2xl font-semibold text-white text-center mb-12 max-w-5xl " style={{ fontFamily: "'Dancing Script', cursive" }}>
            Ippati varaku English lo Matladindhi Ekkuva Aindhi ankunta 😅.. <br />
            <i style={{ color: "black" }}>Gift neku Jan 03 2026 ki Istha, wait Maa..🙃 appativaraku</i>
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link href="/thank-you">
          <button className="px-8 py-4 bg-pink-500 text-white rounded-full text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
            Final Message
          </button>
        </Link>
      </motion.div>
    </main>
  )
}

