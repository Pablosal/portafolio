import Image from 'next/image';
import * as React from 'react';
const technologies = [
  'typescript',
  'javascript',
  'react',
  'nodejs',
  'mysql',
  'mongodb',
  'nextjs',
  'sass',
  'css3',
  'html5',
];
const TechnologiesOverlay = () => {
  return (
    <div className="absolute left-[27px] md:left-[91px] top-[106px] md:top-[232px] w-[144px] md:w-[191px] h-[67px] md:h-[104px]">
      <p className="mt-4 md:mt-0 text-sm md:text-xl">Known Technologies</p>
      <div className="mt-1 ml-2 md:mt-4 flex  align-center gap-y-2 md:gap-y-4 flex-wrap">
        {technologies.map((technology) => {
          return (
            <Image
              key={technology}
              className="mr-2"
              width={15}
              height={15}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${technology}/${technology}-original.svg`}
              alt={technology}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechnologiesOverlay;
