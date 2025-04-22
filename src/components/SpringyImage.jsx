import React from 'react';
import { animate, motion } from 'framer-motion';
import { filter } from 'framer-motion/client';
import { duration } from '@mui/material';


const SpringyImage = ({
  displayClubHook,
  clubName,
  src,
  alt,
  link = '.',
  className = '',
  whileTap = {
    scale: 0.95,
  },
  whileHover = {
    scale: [1, 1.2],
    y: [0, 10],
    transition: {
      duration: .4,
    },
    filter: 'brightness(1.3) drop-shadow(0px -2px 1px rgba(255, 255, 255, 1)) drop-shadow(0px -4px 2px rgba(255, 255, 255, 0.4)) drop-shadow(0px -10px 10px rgba(0, 0, 0, .2))',

  },
  initial = {
    y: 0,
    scale: [1.2, 1],
    transition: {
      duration: .5,
      ease: 'easeInOut'
    },

    filter: 'brightness(1.0) drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.4)) drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.4)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 1))',

  },

}) => {

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`motion-img-springy ${className}`}
      style={{
        borderRadius: '16px',
        padding: '.5em',
      }}
      onTap={() => {
        displayClubHook(clubName);
      }}
      whileHover={whileHover}
      whileTap={whileTap}
      initial={initial}

      whileInView={initial}

    />
  );
};

export default SpringyImage;