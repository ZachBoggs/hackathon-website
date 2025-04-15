import { motion } from "framer-motion";
import TPCTest from '../images/clubs/TPClogo.png'
import React from 'react'

const AnimationSamples = () => {

  return (
    <div>
      <h1>
        Animation Samples!
      </h1>

      <motion.img
        src={TPCTest}
        alt="sample image"
        style={{
          width: '200px',
          height: 'auto',
          borderRadius: '16px',
          cursor: 'pointer',
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0px 8px 24px rgba(0,0,0,0.2)',
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />

      <footer>End of samples!</footer>
    </div >
  )
};

export default AnimationSamples;