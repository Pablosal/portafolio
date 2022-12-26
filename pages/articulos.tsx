import Link from 'next/link';
import * as React from 'react';
import { Article } from '../context/types';
import { AnimatePresence, motion } from 'framer-motion';
import BackButton from '../components/back_button/BackButton';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.NEXT_PUBLIC_URL_SUPABASE_PROJECT,
  process.env.NEXT_PUBLIC_BD_SUPABASE_SECRET
);
const Articulos = ({ articles }) => {
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

  return (
    <div className="z-50 center-verticaly min-h-screen">
      <BackButton />
      <h2 className="font-bold text-2xl text-white mt-24'">Articulos</h2>
      <div className="flex gap-4 center-verticaly ">
        {articles.map((art: Article, idx: number) => (
          <AnimatePresence key={art.article_name}>
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
                href={art.article_link}
                key={art.id}
                style={{
                  background: `url(${art.article_image}) no-repeat center center fixed`,
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
                  {art.article_name}
                </h2>
              </Link>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};
export async function getStaticProps(context) {
  const getArticles = async () => {
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*');
    return articles;
  };
  const articulos = await getArticles();

  return {
    props: { articles: articulos }, // will be passed to the page component as props
  };
}
export default Articulos;
