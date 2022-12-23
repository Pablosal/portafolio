import * as React from 'react';
import BubleComponent from '../buble_component/BubleComponent';
import { motion } from 'framer-motion';
import ArticlesIcon from '/public/icons/diary-svgrepo-com.svg';
import AboutMeIcon from '/public/icons/hand-svgrepo-com.svg';
import ProyectsIcon from '/public/icons/screen-svgrepo-com.svg';
import AnimationContext from '../../context/contexts/animationContext';

const BubleMenuComponent = () => {
  const animationContext = React.useContext(AnimationContext);

  return (
    <nav>
      <motion.div
        className="center-verticaly gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 5, type: 'spring', stiffness: 10 }}
      >
        <BubleComponent linkTo="/articulos" name="Articulos" bubbleSize={95}>
          <ArticlesIcon style={{ width: 55 }} />
        </BubleComponent>
        <BubleComponent linkTo="/proyectos" name="Proyectos" bubbleSize={95}>
          <ProyectsIcon style={{ width: 55 }} />
        </BubleComponent>
        <BubleComponent
          linkTo="/experiencia"
          name="Experiencia"
          bubbleSize={95}
        >
          <AboutMeIcon style={{ width: 55 }} />
        </BubleComponent>
      </motion.div>
    </nav>
  );
};

export default BubleMenuComponent;
