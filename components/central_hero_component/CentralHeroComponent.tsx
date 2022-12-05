import * as React from 'react';
import BubleMenuComponent from '../buble_menu_component/BubleMenuComponent';
import TextComponent from '../text_component/TextComponent';
interface CentralHeroComponentProps {
  size: number;
  angle: number;
}

const CentralHeroComponent = ({ size, angle }: CentralHeroComponentProps) => {
  return (
    <div
      className={` rounded-full bg-red-500 relative`}
      style={{ height: size, width: size }}
    >
      <BubleMenuComponent angle={30} size={size} />
      <TextComponent background="bg-slate-900" text="Desarrollador Fullstack" />
      <TextComponent
        background="bg-slate-900"
        text="Copy a generar que ira de la misma manera en Linkedin"
      />
    </div>
  );
};

export default CentralHeroComponent;
