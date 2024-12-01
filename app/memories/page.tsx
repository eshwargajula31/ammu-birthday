'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import MediaModal from '../../components/MediaModal'

const memories = [
  { 
    type: 'image', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cute...jpg-n2Xx29fzdzJU8hwLPvVRDR0pWO8XMR.jpeg', 
    alt: 'Baby in Pink Traditional Dress',
    caption: 'Cute Papa😚💗'
  },
  { 
    type: 'video', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blue-zn0Pel9lKG2MYaTY599N9OsBoPpAZp.mp4', 
    thumbnail: '/placeholder.svg?height=300&width=300',
    alt: 'Video Memory 1',
    caption: 'Blue 💙'
  },
  { 
    type: 'image', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/retro.jpg-zjD49SKtWvl2PtJFnJwHdydXdVCgEp.jpeg', 
    alt: 'Elegant Saree Look',
    caption: '🫠🩷'
  },
  { 
    type: 'image', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chinnapapa.jpg-qoh9xxUjJKws5rfcBBHtj6wHR8oOV0.jpeg', 
    alt: 'Young Child in Blue',
    caption: '👑'
  },
  { 
    type: 'video', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_nikithaaa.__-20230103-0001-QxETtIxXe2LF5gg1NqixrmeIYAZQoq.mp4', 
    thumbnail: '/placeholder.svg?height=300&width=300',
    alt: 'Video Memory 2',
    caption: 'Your eyes and Smile makes me 🫠'
  },
  { 
    type: 'image', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edited.jpg-iBKK41Wfbw355Itf151wIyiaVI1r0A.jpeg', 
    alt: 'Elegant Traditional Outfit',
    caption: 'Beautiful in this ❤'
  },
  { 
    type: 'video', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/your%20eyes-X88vYjhYum5eW2fOgEpyFuolDNTIf6.mp4', 
    thumbnail: '/placeholder.svg?height=300&width=300',
    alt: 'Video Memory 3',
    caption: 'Black 🖤'
  },
  { 
    type: 'image', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dada.jpg-IawNnfP6yagZGqIn02rwrIirRbVFW3.jpeg', 
    alt: 'Family Photo',
    caption: 'Family Love ❤'
  }
]

export default function MemoriesPage() {
  const [selectedMedia, setSelectedMedia] = useState<{ src: string; type: 'image' | 'video'; caption: string } | null>(null)

  return (
    <main className="min-h-screen p-8 relative overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Beautiful Memories
      </motion.h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            onClick={() => setSelectedMedia({ 
              src: memory.src, 
              type: memory.type as 'image' | 'video',
              caption: memory.caption 
            })}
          >
            {memory.type === 'image' ? (
              <>
                <Image
                  src={memory.src}
                  alt={memory.alt}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg" // Added `rounded-lg` class for curved edges
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                  <p className="text-white text-center absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {memory.caption}
                  </p>
                </div>
              </>
            ) : (
              <div className="relative w-full h-64">
                {memory.thumbnail ? (
                  <Image
                    src={memory.thumbnail}
                    alt={memory.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-lg">
                    <p className="text-gray-600">No Thumbnail Available</p>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300">
                  <svg className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                  <p className="text-white text-center absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {memory.caption}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <MediaModal
        isOpen={!!selectedMedia}
        onClose={() => setSelectedMedia(null)}
        src={selectedMedia?.src || ''}
        type={selectedMedia?.type || 'image'}
        caption={selectedMedia?.caption || ''}
      />
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link href="/wish">
          <button className="px-8 py-4 bg-pink-500 text-white rounded-full text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
            Read My Note
          </button>
        </Link>
      </motion.div>
    </main>
  )
}
