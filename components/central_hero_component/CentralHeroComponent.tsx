import * as React from 'react';
import { motion } from 'framer-motion';
import CircleBackground from '../../utils/svg/CircleBackground';
import mobile_guy from '/public/images/mobile_gou.png';
import useMediaQuery from '../../utils/hooks/useMediaQuery';
import Image from 'next/image';

enum CentralMotionStates {
  hidden = 'hidden',
  coolAppear = 'coolAppear',
}
const CentralHeroComponent = () => {
  const centralVariants = {
    hidden: {
      opacity: 0.1,
      scale: 0.1,
    },
    coolAppear: { opacity: 1, scale: 1.8 },
  };
  const matches = useMediaQuery('(min-width: 640px)');

  return (
    <motion.div
      variants={centralVariants}
      initial={CentralMotionStates.hidden}
      animate={CentralMotionStates.coolAppear}
      transition={{ delay: 0.8, duration: 0.9, type: 'spring' }}
      className={`rounded-full bg-red-500  flex justify-center items-center flex-col `}
      style={{
        position: 'absolute',
        height: matches ? 450 : 240,
        width: matches ? 450 : 240,
        background:
          'linear-gradient(140.36deg, rgba(1, 255, 72, 0.15) 14.9%, #FF0101 88.91%)',
      }}
    >
      {matches ? (
        <CircleBackground />
      ) : (
        <Image src={mobile_guy} alt="heroPart" />
      )}
    </motion.div>
  );
};

export default CentralHeroComponent;
