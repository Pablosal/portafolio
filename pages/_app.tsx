import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ParticlesComponent from '../components/particles/Particles';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ParticlesComponent backgroundColor="#1A1A1C" particlesColor="#fff" />
      <Component {...pageProps} />
    </>
  );
}
