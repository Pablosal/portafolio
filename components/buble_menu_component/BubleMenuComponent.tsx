import * as React from 'react';
import BubleComponent from '../buble_component/BubleComponent';

interface IBubleMenuComponent {
  angle: number;
  size: number;
}

const BubleMenuComponent = ({ angle, size }: IBubleMenuComponent) => {
  return (
    <nav
      className="absolute top-[0px] rounded-full border-8 border-black border-solid  rounded-full "
      style={{ transform: `rotate(${angle}deg)`, height: size, width: size }}
    >
      <BubleComponent linkTo='/' left={398} top={0} />
      <BubleComponent linkTo='/' left={472} top={199} />
      <BubleComponent linkTo='/' left={387} top={396} />
    </nav>
  );
};

export default BubleMenuComponent;
