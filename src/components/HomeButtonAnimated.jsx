import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: .9 }}
      onClick={goToHome}
    >
      Go to home page!
    </motion.button>
  )
};

export default HomeButtonAnimated;