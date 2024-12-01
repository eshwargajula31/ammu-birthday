'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Star, Smile, Shield, FlameIcon as Fire, Users } from 'lucide-react'

const qualities = [
  { 
    text: 'Kind', 
    icon: Heart, 
    description: 'Your compassion knows no bounds. You always put others first and your kindness lights up the world around you.'
  },
  { 
    text: 'Brilliant', 
    icon: Star, 
    description: 'Your intelligence and creativity never cease to amaze. You approach problems with unique solutions that inspire everyone around you.'
  },
  { 
    text: 'Funny', 
    icon: Smile, 
    description: 'Your sense of humor is contagious. You have the incredible ability to brighten anyone\'s day with your wit and laughter.'
  },
  { 
    text: 'Resilient', 
    icon: Shield, 
    description: 'Your strength in the face of challenges is admirable. You never give up and always come out stronger on the other side.'
  },
  { 
    text: 'Passionate', 
    icon: Fire, 
    description: 'Your enthusiasm for life and the things you love is inspiring. You pursue your goals with unwavering dedication.'
  },
  { 
    text: 'Caring', 
    icon: Users, 
    description: 'Your empathy and nurturing nature make everyone feel valued and supported. You\'re always there for those who need you.'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 relative overflow-hidden bg-gradient-to-br from-lavender-200 to-peach-200">
      <div className="w-full max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-12 text-center"
          style={{ fontFamily: "'Dancing Script', cursive" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why You&apos;re Amazing
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.text}
              className="flex flex-col items-center bg-white bg-opacity-50 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <quality.icon className="w-16 h-16 mb-4 text-pink-500" />
              <h2 className="text-2xl font-semibold mb-2">{quality.text}</h2>
              <p className="text-center text-gray-700">{quality.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="/memories">
            <button className="px-8 py-4 bg-pink-500 text-white rounded-full text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
              See Our Memories
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

