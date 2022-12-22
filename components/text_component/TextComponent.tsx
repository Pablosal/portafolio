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
      y: 0,
    },
  };
  return (
    <motion.div
      style={{ top, backgroundColor: '#1A1A1C' }}
      className={` mt-6 border-white h-[260px] w-[100%] rounded-md  center-verticaly  z-50 absolute`}
    >
      <motion.h1
        variants={textAppear}
        initial="hidden"
        animate="visible"
        data-testid="textComponent"
        className="text-white text-center w-full"
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};

export default TextComponent;
