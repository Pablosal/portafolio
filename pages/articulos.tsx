import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import Layout from '../components/layout';
import Loading from '../components/loading/LoadingComponent';
import ParticlesComponent from '../components/particles/Particles';
import { Article } from '../context/types';
import useArticles from '../utils/hooks/useArticles';
import { AnimatePresence, motion } from 'framer-motion';
import articulos from '../data.json';
const Articulos = () => {
  // const [articulos, loading] = useArticles<Article[] | []>([]);
  // console.log(loading);

  // if (loading)
  //   return (
  //     <div className="w-screen h-screen flex justify-center items-center">
  //       <Loading />
  //     </div>
  //   );

  return (
    <>
      {/* <ParticlesComponent backgroundColor="#91A6FF" particlesColor="#2F3061" /> */}
      {/* <Layout> */}
      <h2 className="text-2xl font-bold">Articulos</h2>
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: ' repeat(auto-fill,minMax(420px,1fr))',
        }}
      >
        {articulos.map((art: Article, idx) => (
          <AnimatePresence key={art.title}>
            <motion.div
              initial={{ y: 1500 }}
              animate={{ y: 20 }}
              // exit={{ y: 0 }}
              transition={{
                type: 'spring',
                duration: idx +1,
                delay: 0.3,
              }}
            >
              <Link
                href={art.link}
                key={art.title}
                className="border-black border-solid border-2 flex flex-col items-center justify-center w-[500px] h-[300px]"
              >
                <Image
                  src={art.image}
                  alt={art.title}
                  width={300}
                  height={400}
                ></Image>
                <h2 className="text-center">{art.title}</h2>
              </Link>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      {/* </Layout> */}
    </>
  );
};

export default Articulos;
