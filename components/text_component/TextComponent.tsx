import * as React from 'react';

interface TextProps {
  text: string | null;
  background: string | null;
}

const TextComponent = ({
  text = 'Agregue texto',
  background = 'bg-slate-200',
}: TextProps) => {
  return (
    <div
      className={` ${background} w-[300px] border-white h-[50px] rounded-xl text-center flex items-center justify-items-center`}
    >
      <h1 data-testid="textComponent" className="">
        {text}
      </h1>
    </div>
  );
};

export default TextComponent;
