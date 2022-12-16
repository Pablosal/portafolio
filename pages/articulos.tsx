import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import Layout from '../components/layout';
import Loading from '../components/loading/LoadingComponent';
import ParticlesComponent from '../components/particles/Particles';
import useArticles from '../utils/hooks/useArticles';

const Articulos = () => {
  const [articulos, loading] = useArticles();
  console.log(loading);

  if (loading)
    return (
      <div className="w-full h-full flex justify-center align-center">
        <Loading />
      </div>
    );

  return (
    <Layout>
      {/* <ParticlesComponent backgroundColor="#91A6FF" particlesColor="#2F3061" /> */}
      <h2 className="text-2xl font-bold">Articulos</h2>
      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: ' repeat(auto-fill,minMax(420px,1fr))' }}
      >
        {articulos.map((art) => (
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
        ))}
      </div>
    </Layout>
  );
};

export default Articulos;
