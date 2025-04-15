import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import React from 'react'

const HomeButtonAnimated = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    setTimeout(() => {
      navigate('/home');
    }, 200);
  };
  return (
    <motion.button
      style={{ fontSize: '1.6em', fontWeight: 'bold', borderRadius: '.5em', padding: '0.6rem 1.3rem', }}
      whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.05, boxShadow: '0px 8px 24px rgba(0,0,0,0.2)' }}
      whileTap={{ scale: .90 }}
      onClick={goToHome}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      Go to home page!
    </motion.button>
  )
};


export default HomeButtonAnimated;