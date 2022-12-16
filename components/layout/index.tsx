import { motion } from 'framer-motion';
import React from 'react';
import ParticlesComponent from '../particles/Particles';

const Layout = ({ children }: React.PropsWithChildren) => (
  <motion.div
    initial={{ y: 500 }}
    animate={{ y: 0 }}
    exit={{ y: 500 }}
    transition={{
      duration: 4,
      type: 'spring',
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;
