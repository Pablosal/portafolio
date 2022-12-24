import Link from 'next/link';
import { motion } from 'framer-motion';
import * as React from 'react';
interface IIconComponent {
  children: any;
  path?: string;
}

const IconContainerComponent = ({ children, path }: IIconComponent) => {
  if (!path)
    return (
      <motion.div
        whileHover={{
          scale: 1.5,
        }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 80,
        }}
        className="rounded-full h-[45px] w-[45px] bg-white center-verticaly cursor-pointer"
      >
        {children}
      </motion.div>
    );
  return (
    <Link href={path}>
      <motion.div
        whileHover={{
          scale: 1.5,
        }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 80,
        }}
        className="rounded-full h-[45px] w-[45px] bg-white center-verticaly"
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default IconContainerComponent;
