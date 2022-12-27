import * as React from 'react';
import { motion } from 'framer-motion';
import ArticlesIcon from '/public/icons/diary-svgrepo-com.svg';
import AboutMeIcon from '/public/icons/hand-svgrepo-com.svg';
import ProjectsIcon from '/public/icons/screen-svgrepo-com.svg';
import AnimationContext from '../../context/contexts/animationContext';
import useMediaQuery from '../../utils/hooks/useMediaQuery';
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
  const animationContext = React.useContext(AnimationContext);
  const matches = useMediaQuery('(min-width: 640px)');
  const bubbleSize = matches ? 95 : 65;
  const iconSize = matches ? 55 : 35;
  return (
    <nav className="self-end sm:self-center">
      <motion.div
        className="center-verticaly gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, type: 'spring', stiffness: 100 }}
      >
        <LazyBubleComponent
          linkTo="/articulos"
          bubbleSize={bubbleSize}
        >
          <ArticlesIcon style={{ width: iconSize }} />
        </LazyBubleComponent>
        <LazyBubleComponent
          linkTo="/proyectos"
          bubbleSize={bubbleSize}
        >
          <ProjectsIcon style={{ width: iconSize }} />
        </LazyBubleComponent>
        <LazyBubleComponent
          openModalToScreen={openModalToScreen}
          linkTo="/"
          bubbleSize={bubbleSize}
        >
          <AboutMeIcon style={{ width: iconSize }} />
        </LazyBubleComponent>
      </motion.div>
    </nav>
  );
};

export default BubleMenuComponent;
