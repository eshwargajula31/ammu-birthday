"use client"; // Add this line to mark the component as a Client Component

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Fireworks = () => {
  const fireworks = Array(20).fill(null);

  // State for storing window dimensions
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Update window dimensions when the component mounts
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize(); // Initial call
    window.addEventListener("resize", updateWindowSize); // Listen to resize

    return () => window.removeEventListener("resize", updateWindowSize); // Cleanup
  }, []);

  return (
    <>
      {fireworks.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * windowSize.width, // Use state values
            y: windowSize.height, // Use state values
            scale: 0,
          }}
          animate={{
            y: Math.random() * windowSize.height, // Use state values
            scale: [0, 4, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};

export default Fireworks;
