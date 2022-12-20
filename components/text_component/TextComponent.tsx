import * as React from 'react';
import { motion } from 'framer-motion';
interface TextProps {
  text: string | null;
  background: string | null;
  top: number;
  right: number;
}

const TextComponent = ({
  text = 'Agregue texto',
  background = 'bg-slate-900',
  right,
  top,
}: TextProps) => {
  const textAppear = {
    hidden: { oppacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      style={{ top, right }}
      className={` ${background} w-[300px] border-white h-[50px]   flex items-center justify-items-center absolute  z-50 `}
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
