import Link from 'next/link';
import * as React from 'react';

interface IBubleComponent {
  left: number;
  top: number;
  linkTo: string;
}

const BubleComponent = ({ left, top, linkTo = '/' }: IBubleComponent) => {
  return (
    <Link href={linkTo}>
      <div
        className={`h-[150px] w-[150px] rounded-full absolute top-0  border-8 border-black border-solid bg-blue-800`}
        style={{
          top,
          left,
        }}
      >
        <h2>Centrado</h2>
      </div>
    </Link>
  );
};

export default BubleComponent;
