// components/AnimateWrapper.js

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimateWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // When 10% of the component is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;

