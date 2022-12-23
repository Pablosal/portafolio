import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ParticlesComponent from '../components/particles/Particles';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const wrapperVariants = {
    initial: {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      transition: { duration: 0.4 },
    },
    animate: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { duration: 0.4, staggerChildren: 0.1 },
    },
    exit: {
      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      transition: { duration: 0.4 },
    },
  };
  return (
    <AnimatePresence mode="wait">
      <ParticlesComponent backgroundColor="#1A1A1C" particlesColor="#fff" />
      <motion.div
        key={router.route}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
        variants={wrapperVariants}
      >
        <Component {...pageProps} />
      </motion.div>
      ;
    </AnimatePresence>
  );
}
