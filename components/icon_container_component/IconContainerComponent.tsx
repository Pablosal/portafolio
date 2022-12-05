import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
interface IIconComponent {
  children: any;
  path: string;
}

const IconContainerComponent = ({ children, path }: IIconComponent) => {
  return (
    <Link href={path}>
      <div className="rounded-full h-[100px] w-[100px] ">{children}</div>
    </Link>
  );
};

export default IconContainerComponent;
