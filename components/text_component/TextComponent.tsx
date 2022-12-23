import * as React from 'react';
import { motion } from 'framer-motion';
interface TextProps {
  text: string | null;
  top: number;
}

const TextComponent = ({ text = 'Agregue texto', top }: TextProps) => {
  const textAppear = {
    hidden: { oppacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: -600,
    },
  };
  return (
    <motion.div
      variants={textAppear}
      initial="hidden"
      animate="visible"
      style={{ top, backgroundColor: '#1A1A1C' }}
      className="sm:mt-6 border-white max-h-[260px] sm:h-[260px] w-screen rounded-md  center-verticaly  z-20 absolute "
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
