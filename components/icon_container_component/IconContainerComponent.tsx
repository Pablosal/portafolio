import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as React from 'react';
interface IIconComponent {
  children: any;
  path: string;
}

const IconContainerComponent = ({ children, path }: IIconComponent) => {
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
        className="rounded-full h-[45px] w-[45px] "
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default IconContainerComponent;
