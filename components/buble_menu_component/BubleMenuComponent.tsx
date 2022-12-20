import * as React from 'react';
import BubleComponent from '../buble_component/BubleComponent';
import { motion } from 'framer-motion';
import ArticlesIcon from '/public/icons/diary-svgrepo-com.svg';
import AboutMeIcon from '/public/icons/hand-svgrepo-com.svg';
import ProyectsIcon from '/public/icons/screen-svgrepo-com.svg';
import AnimationContext from '../../context/contexts/animationContext';
import undrawMe from '/public/images/undraw_me.svg';

import Image from 'next/image';
import CircleBackground from '../../utils/svg/CircleBackground';
interface IBubleMenuComponent {
  size: number;
}

const BubleMenuComponent = ({ size }: IBubleMenuComponent) => {
  const animationContext = React.useContext(AnimationContext);

  return (
    <motion.nav
      className="absolute top-[0px] rounded-full rounded-full "
      style={{ height: size, width: size }}
      // initial={{ rotate: 0 }}
      // viewport={{ once: true }}
      // animate={{ rotate: 340 }}
      // transition={{ duration: 0.5, type: 'spring', stiffness: 5 }}
    >
      <CircleBackground />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 5, type: 'spring', stiffness: 10 }}
      >
        <BubleComponent
          linkTo="/articulos"
          left={524}
          top={176}
          name="Articulos"
          bubbleSize={110}
        >
          <ArticlesIcon />
        </BubleComponent>
        <BubleComponent
          linkTo="/proyectos"
          left={511}
          top={299}
          name="Proyectos"
          bubbleSize={95}
        >
          <ProyectsIcon />
        </BubleComponent>
        <BubleComponent
          linkTo="/experiencia"
          left={440}
          top={391}
          name="Experiencia"
          bubbleSize={85}
        >
          <AboutMeIcon />
        </BubleComponent>
      </motion.div>
    </motion.nav>
  );
};

export default BubleMenuComponent;
