import Link from 'next/link';
import * as React from 'react';
import { motion } from 'framer-motion';
interface IBubleComponent {
  linkTo: string;
  name: string;
  children: JSX.Element;
  bubbleSize: number;
}

const BubleComponent = ({
  linkTo = '/',
  name,
  children,
  bubbleSize,
}: IBubleComponent) => {
  return (
    <Link href={linkTo}>
      <motion.div
        data-tooltip-target="tooltip-default"
        initial={{ boxShadow: 'none' }}
        whileHover={{
          background:
            'radial-gradient(100% 77.95% at 55% 10%, #F5EE9E 60%, #F49E4C 100%)',
          backdropFilter: 'blur(6px)',
        }}
        className="rounded-full  top-0  bg-blue-800 flex justify-center align-center flex-col items-center"
        style={{
          height: bubbleSize,
          width: bubbleSize,
          background:
            'radial-gradient(77.95% 77.95% at 26.67% 10%, rgba(255, 255, 255, 0.42) 0%, rgba(196, 196, 196, 0.06) 100%)',
          backdropFilter: 'blur(6px)',
        }}
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default BubleComponent;
