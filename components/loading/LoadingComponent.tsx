import * as React from 'react';
import { motion } from 'framer-motion';
const loaderVariants = {
  animationOne: {
    x: [20, 40],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
      },
    },
  },
  animationTwo: {
    x: [-20,40],
    y: [-30,0],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
      },
    },
  }
};

const Loading = () => {
  return (
    <>
      <motion.div
        className="rounded h-5 w-5 bg-red-400"
        variants={loaderVariants}
        animate={'animationOne'}
      ></motion.div>
      <motion.div
        className="rounded h-5 w-5 bg-lime-600"
        variants={loaderVariants}
        animate={'animationTwo'}
      ></motion.div>

    </>
  );
};

export default Loading;
