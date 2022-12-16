import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import AnimationProvider from '../context/providers/animationProvider';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <AnimationProvider>
        <Component {...pageProps} />
      </AnimationProvider>
    </AnimatePresence>
  );
}
