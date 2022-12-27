import * as React from 'react';
import { motion } from 'framer-motion';
import ArticlesIcon from '/public/icons/diary-svgrepo-com.svg';
import AboutMeIcon from '/public/icons/hand-svgrepo-com.svg';
import ProjectsIcon from '/public/icons/screen-svgrepo-com.svg';
import dynamic from 'next/dynamic';
const LazyBubleComponent = dynamic(
  () => import('../buble_component/BubleComponent'),
  {
    ssr: false,
  }
);

interface BubleMenuComponentProps {
  openModalToScreen: () => void;
}

const BubleMenuComponent = ({ openModalToScreen }: BubleMenuComponentProps) => {
  return (
    <nav className="self-end sm:self-center">
      <motion.div
        className="center-verticaly gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, type: 'spring', stiffness: 100 }}
      >
        <LazyBubleComponent linkTo="/articulos">
          <ArticlesIcon className="w-[35px] sm:w-[55px]" />
        </LazyBubleComponent>
        <LazyBubleComponent linkTo="/proyectos">
          <ProjectsIcon className="w-[35px] sm:w-[55px] " />
        </LazyBubleComponent>
        <LazyBubleComponent openModalToScreen={openModalToScreen} linkTo="/">
          <AboutMeIcon className="w-[35px] sm:w-[55px]" />
        </LazyBubleComponent>
      </motion.div>
    </nav>
  );
};

export default BubleMenuComponent;
