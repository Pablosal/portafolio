import Link from 'next/link';
import * as React from 'react';
import { motion } from 'framer-motion';
interface IBubleComponent {
  linkTo?: string;
  children: JSX.Element;
  openModalToScreen?: () => void;
}

const BubbleInnerPartComponent = ({ children }: IBubleComponent) => {
  return (
    <motion.div
      data-tooltip-target="tooltip-default"
      initial={{ boxShadow: 'none' }}
      whileHover={{
        background:
          'radial-gradient(100% 77.95% at 55% 10%, #F5EE9E 60%, #F49E4C 100%)',
        backdropFilter: 'blur(6px)',
      }}
      className="rounded-full  top-0  bg-blue-800 center-verticaly items-center w-[65px] sm:w-[95px] h-[65px] sm:h-[95px]"
      style={{
        background:
          'radial-gradient(77.95% 77.95% at 26.67% 10%, rgba(255, 255, 255, 0.42) 0%, rgba(196, 196, 196, 0.06) 100%)',
        backdropFilter: 'blur(6px)',
      }}
    >
      {children}
    </motion.div>
  );
};

const BubleComponent = ({
  linkTo = '/',
  openModalToScreen,
  children,
}: IBubleComponent) => {
  if (typeof openModalToScreen === 'function')
    return (
      <div onClick={openModalToScreen} style={{ cursor: 'pointer' }}>
        <BubbleInnerPartComponent>{children}</BubbleInnerPartComponent>
      </div>
    );
  return (
    <Link aria-label="link externo" href={linkTo}>
      <BubbleInnerPartComponent>{children}</BubbleInnerPartComponent>;
    </Link>
  );
};

export default BubleComponent;
