'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const wishText = `
Ammu...

On this special day, I want to express how much you truly mean to me. 💖 You bring a kind of magic into my life that I never knew existed. Every moment spent with you makes everything seem brighter, and every smile of yours makes the world feel a little more beautiful. ✨

From the very first time we crossed paths, I felt a connection with you that I couldn't explain. Your laughter is like music to my ears, and the warmth you radiate makes everything around you better. Your strength and grace inspire me to be the best version of myself, every single day. 💪

Even though I am not special to you yet, you are the most special person in my life after my mother.

Your eyes, with their sparkle, and the way your smile lights up even the darkest of moments – it’s something I can never get enough of. The way you make everything feel so light and joyful is something truly extraordinary. 🌹

I’ll always respect what you say, and you are the most important person to me. Your thoughts and your feelings matter more than anything, and I am grateful for everything you bring into my life. 💖

As we celebrate your special day, I want you to know how much I cherish your presence in my life. You have become my source of happiness, my strength, and my reason to smile. Every moment with you is precious, and I will cherish it forever. 💖

Happy birthday, Ammu 💗. 🎂 Here’s to many more years of joy, laughter, and creating memories that will stay with us forever. 🥳

With all my heart, 💕
Eshwar 💕


`

export default function WishPage() {
  const [visibleText, setVisibleText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < wishText.length) {
        setVisibleText(prevText => prevText + wishText[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="stars absolute inset-0"></div>
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-12 text-center z-10"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        A Special Note for You 💌
      </motion.h1>
      <motion.div
        className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg max-w-2xl w-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="text-lg whitespace-pre-line">{visibleText}</p>
      </motion.div>
      <motion.div
        className="mt-12 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link href="/gift">
          <button className="px-8 py-4 bg-pink-500 text-white rounded-full text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
            Let&apos;s Play 🎮
          </button>
        </Link>
      </motion.div>
    </main>
  )
}

