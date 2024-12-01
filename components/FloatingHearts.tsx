import { motion } from 'framer-motion'

const FloatingHearts = () => {
  const hearts = Array(40).fill(null)

  return (
    <>
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            transition: {
              repeat: Infinity,
              duration: 3 + Math.random() * 3,
              ease: 'linear',
            },
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          {Math.random() > 0.5 ? '❤️' : '💖'}
        </motion.div>
      ))}
    </>
  )
}

export default FloatingHearts

