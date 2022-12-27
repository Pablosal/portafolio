import * as React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../utils/hooks/useMediaQuery';
interface TextProps {
  text: string | null;
  top: number;
}

const TextComponent = ({ text = 'Agregue texto', top }: TextProps) => {
  const matches = useMediaQuery('(min-width: 480px)');

  const textAppear = {
    hidden: { oppacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: matches ? 2 : -600,
    },
  };
  return (
    <motion.div
      variants={textAppear}
      initial="hidden"
      animate="visible"
      style={{ top, backgroundColor: '#1A1A1C' }}
      className="sm:mt-6 border-white max-h-[160px] sm:h-[260px] w-screen sm:w-[745px] rounded-md  center-verticaly  z-20 absolute top-[241px] "
    >
      <motion.h1
        data-testid="textComponent"
        className="text-white text-center w-full"
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};

export default TextComponent;
