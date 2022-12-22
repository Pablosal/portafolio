import Link from 'next/link';
import * as React from 'react';
import Loading from '../components/loading/LoadingComponent';
import { Article } from '../context/types';
import useArticles from '../utils/hooks/useArticles';
import { AnimatePresence, motion } from 'framer-motion';
import BackButton from '../components/back_button/BackButton';
const Articulos = () => {
  const [articulos, loading] = useArticles();
  const containerVariants = {
    initial: { y: 200 },
    animate: { y: 20 },
    whileHover: { scale: 1.1, zIndex: 100 },
  };
  const onHoverImage = {
    rest: {
      backgroundColor: 'rgba(0,0,0,8)',
    },
    hover: {
      backgroundColor: 'rgba(0,0,0,2)',
    },
  };
  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center z-50">
        <BackButton />
        <Loading />
      </div>
    );

  return (
    <div className="z-50 center-verticaly h-screen">
      <BackButton />
      <h2 className="font-bold text-2xl text-white m-8'">Articulos</h2>
      <div className="flex gap-4">
        {/*  */}
        {articulos.map((art: Article, idx: number) => (
          <AnimatePresence key={art.title}>
            <motion.div
              className="relative rounded-2xl"
              initial={'initial'}
              animate="animate"
              whileHover={'whileHover'}
              variants={containerVariants}
              transition={{
                type: 'spring',
                duration: idx + 1,
                delay: 0.3,
              }}
            >
              <Link
                href={art.link}
                key={art.title}
                style={{
                  background: `url(${art.image}) no-repeat center center fixed`,
                  backgroundSize: 'cover',
                }}
                className="border-black border-solid border-2 flex flex-col items-center justify-center w-[500px] h-[300px] bg-white rounded-2xl"
              >
                <motion.div
                  variants={onHoverImage}
                  whileHover={'hover'}
                  className="backdrop  absolute top-0 bottom-0 left-0 right-0 z-10 rounded-2xl"
                  style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                ></motion.div>

                <h2 className="text-center font-bold text-2xl text-white m-8 z-20">
                  {art.title}
                </h2>
              </Link>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default Articulos;
