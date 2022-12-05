import * as React from 'react';

interface TextProps {
  text: string | null;
  background: string | null;
}

const TextComponent = ({
  text = 'Agregue texto',
  background = 'bg-slate-900',
}: TextProps) => {
  return (
    <div
      className={` ${background} w-[300px] border-white h-[50px]   flex items-center justify-items-center absolute bottom-0 z-50`}
    >
      <h1 data-testid="textComponent" className="text-white text-center w-full">
        {text}
      </h1>
    </div>
  );
};

export default TextComponent;
