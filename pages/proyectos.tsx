import * as React from 'react';
import ProyectDescriptionComponent from '../components/proyect_description_component/ProyectDescriptionComponent';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '../components/back_button/BackButton';

const Proyectos = () => {
  return (
    <div className="center-verticaly">
      <BackButton />
      <h2 className="font-bold text-2xl text-white m-8">Proyectos</h2>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            duration: 2,
            delay: 0.5,
          }}
        >
          <div className="w-screen center-verticaly gap-5 m-6">
            <ProyectDescriptionComponent />
            <ProyectDescriptionComponent />
            <ProyectDescriptionComponent />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Proyectos;
