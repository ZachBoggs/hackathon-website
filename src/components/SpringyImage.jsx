import React from 'react';
import { motion } from 'framer-motion';
import { filter } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';


const SpringyImage = ({
  src,
  alt,
  link = '.',
  className = '',
  style = {},

  whileTap = {
    scale: 0.95
  },
  whileHover = {
    filter: 'brightness(1.3) drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.8)) drop-shadow(0px -5px 0px rgba(255, 255, 255, 0.8)) drop-shadow(0px 5px 0px rgba(45, 45, 45, 0.99))',
    scale: 1.05
  },
  initial = {
    filter: 'brightness(1.0) drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.8)) drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.4)) drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.4))',
  },
  transition = { type: 'tween', ease: 'easeInOut', duration: 0.3 }

}) => {
  const navigate = useNavigate();

  const goToRoute = (path) => {
    if (path == '.') {
      return;
    }

    setTimeout(() => {
      navigate(path);
    }, 200);
  };

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`motion-img-springy ${className}`}
      style={{
        borderRadius: '16px',
        padding: '.5em',
      }}
      onTap={() => goToRoute(link)}
      whileHover={whileHover}
      whileTap={whileTap}
      initial={initial}
      animate={initial}
      transition={transition}
    />
  );
};

export default SpringyImage;