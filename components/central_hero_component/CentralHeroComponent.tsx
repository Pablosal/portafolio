import * as React from 'react';
import TextComponent from '../text_component/TextComponent';
import { motion } from 'framer-motion';
interface CentralHeroComponentProps {
  size: number;
}
enum CentralMotionStates {
  hidden = 'hidden',
  coolAppear = 'coolAppear',
}
const CentralHeroComponent = ({ size }: CentralHeroComponentProps) => {
  const centralVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    coolAppear: { opacity: 1, scale: 2 },
  };
  return (
    <motion.div
      variants={centralVariants}
      initial={CentralMotionStates.hidden}
      animate={CentralMotionStates.coolAppear}
      transition={{ delay: 0.2, duration: 1.2, type: 'spring', stiffness: 80 }}
      className={` rounded-full bg-red-500 relative`}
      style={{ height: size, width: size }}
    >
      <TextComponent background="bg-slate-900" text="Desarrollador Fullstack" />
      <TextComponent
        background="bg-slate-900"
        text="Copy a generar que ira de la misma manera en Linkedin"
      />
    </motion.div>
  );
};

export default CentralHeroComponent;
