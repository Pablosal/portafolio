import Link from 'next/link';
import * as React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';

const BackButton = () => {
  return (
    <Link
      href={'/'}
      className="z-10 rounded-full h-20 w-20 bg-red-500 absolute top-0 left-0 m-8 center-verticaly"
    >
      <IoMdArrowRoundBack className="z-20 text-white text-5xl"></IoMdArrowRoundBack>
    </Link>
  );
};

export default BackButton;
