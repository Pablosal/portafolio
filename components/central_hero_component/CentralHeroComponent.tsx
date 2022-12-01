import * as React from 'react';

interface CentralHeroComponentProps {
  size: string;
}

const CentralHeroComponent = ({ size }: CentralHeroComponentProps) => {
  console.log(`h-[${size}] w-[${size}] rounded-full bg-red-500`);

  return (
    <div className={`h-[550px] w-[550px] rounded-full bg-red-500`}>
      <h2>Centrado</h2>
    </div>
  );
};

export default CentralHeroComponent;
