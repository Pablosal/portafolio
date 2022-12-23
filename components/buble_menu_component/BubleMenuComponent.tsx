import * as React from 'react';
import BubleComponent from '../buble_component/BubleComponent';
import { motion } from 'framer-motion';
import ArticlesIcon from '/public/icons/diary-svgrepo-com.svg';
import AboutMeIcon from '/public/icons/hand-svgrepo-com.svg';
import ProyectsIcon from '/public/icons/screen-svgrepo-com.svg';
import AnimationContext from '../../context/contexts/animationContext';
import useMediaQuery from '../../utils/hooks/useMediaQuery';

const BubleMenuComponent = () => {
  const animationContext = React.useContext(AnimationContext);
  const matches = useMediaQuery('(min-width: 640px)');
  const bubbleSize = matches ? 95 : 65;
  const iconSize = matches ? 55 : 35;
  return (
    <nav className="self-end">
      <motion.div
        className="center-verticaly gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 5, type: 'spring', stiffness: 10 }}
      >
        <BubleComponent
          linkTo="/articulos"
          name="Articulos"
          bubbleSize={bubbleSize}
        >
          <ArticlesIcon style={{ width: iconSize }} />
        </BubleComponent>
        <BubleComponent
          linkTo="/proyectos"
          name="Proyectos"
          bubbleSize={bubbleSize}
        >
          <ProyectsIcon style={{ width: iconSize }} />
        </BubleComponent>
        <BubleComponent linkTo="/" name="Experiencia" bubbleSize={bubbleSize}>
          <AboutMeIcon style={{ width: iconSize }} />
        </BubleComponent>
      </motion.div>
    </nav>
  );
};

export default BubleMenuComponent;
