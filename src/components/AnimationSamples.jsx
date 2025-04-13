import { motion } from "framer-motion";

const AnimationSamples = () => {
  return (
    <div>
      <header>
        Animation Samples!
      </header>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: .9 }}
        onClick={() => null}
      >

      </motion.button>

      <footer>End of samples!</footer>
    </div>
  )
};

export default AnimationSamples;