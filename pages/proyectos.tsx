import Image from 'next/image';
import * as React from 'react';
import ProyectDescriptionComponent from '../components/proyect_description_component/ProyectDescriptionComponent';
import { motion,AnimatePresence } from 'framer-motion';
const Proyectos = () => {
  return (
    <>
      <h2>Proyectos</h2>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // exit={{ y: 0 }}
          transition={{
            type: 'spring',
            duration: 2,
            delay: 0.5,
          }}
        >
          <ProyectDescriptionComponent />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Proyectos;
