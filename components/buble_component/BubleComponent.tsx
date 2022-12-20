import Link from 'next/link';
import * as React from 'react';
import { motion } from 'framer-motion';
interface IBubleComponent {
  left: number;
  top: number;
  linkTo: string;
  name: string;
  children: JSX.Element;
  bubbleSize: number;
}

const BubleComponent = ({
  left,
  top,
  linkTo = '/',
  name,
  children,
  bubbleSize,
}: IBubleComponent) => {
  return (
    <Link href={linkTo}>
      <motion.div
        initial={{ boxShadow: 'none' }}
        whileHover={{ boxShadow: '0px 0px 33px -19px rgba(255,241,82,1)' }}
        transition={{ duration: 0 - 5, type: 'spring', stiffness: 100 }}
        className={` rounded-full absolute top-0  bg-blue-800 flex justify-center align-center flex-col`}
        style={{
          top,
          left,
          height: bubbleSize,
          width: bubbleSize,
          // transform: ' rotate(20deg)',
          background:
            'radial-gradient(77.95% 77.95% at 26.67% 10%, rgba(255, 255, 255, 0.42) 0%, rgba(196, 196, 196, 0.06) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(6px)',
        }}
      >
        {children}
        <span>{name}</span>
      </motion.div>
    </Link>
  );
};

export default BubleComponent;
