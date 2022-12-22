import * as React from 'react';
import TextComponent from '../text_component/TextComponent';
import { motion } from 'framer-motion';
import CircleBackground from '../../utils/svg/CircleBackground';

import BubleMenuComponent from '../buble_menu_component/BubleMenuComponent';
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
      opacity: 0.1,
      scale: 0.1,
    },
    coolAppear: { opacity: 1, scale: 1.8 },
  };
  return (
    <motion.div
      variants={centralVariants}
      initial={CentralMotionStates.hidden}
      animate={CentralMotionStates.coolAppear}
      transition={{ delay: 0.8, duration: 0.9, type: 'spring'}}
      className={`rounded-full bg-red-500  flex justify-center items-center flex-col `}
      style={{
        position:"absolute",
        height: size,
        width: size,
        background:
          'linear-gradient(140.36deg, rgba(1, 255, 72, 0.15) 14.9%, #FF0101 88.91%)',
      }}
    >
      <CircleBackground />
    </motion.div>
  );
};

export default CentralHeroComponent;
