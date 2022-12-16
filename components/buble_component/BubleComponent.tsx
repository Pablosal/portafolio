import Link from 'next/link';
import * as React from 'react';
import { motion } from 'framer-motion';
interface IBubleComponent {
  left: number;
  top: number;
  linkTo: string;
  name: string;
  children: JSX.Element;
}

const BubleComponent = ({
  left,
  top,
  linkTo = '/',
  name,
  children,
}: IBubleComponent) => {
  return (
    <Link href={linkTo}>
      <motion.div
        initial={{ boxShadow: 'none' }}
        whileHover={{ boxShadow: '0px 0px 33px -19px rgba(255,241,82,1)' }}
        transition={{ duration: 0 - 5, type: 'spring', stiffness: 100 }}
        className={`h-[75px] w-[75px] rounded-full absolute top-0  bg-blue-800 flex justify-center align-center flex-col`}
        style={{
          top,
          left,
          transform: ' rotate(20deg)',
        }}
      >
        {children}
        <span>{name}</span>
      </motion.div>
    </Link>
  );
};

export default BubleComponent;
