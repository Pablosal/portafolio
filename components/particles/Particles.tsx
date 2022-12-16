import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

interface particleProps {
  backgroundColor: string;
  particlesColor: string;
}

const ParticlesComponent = ({
  backgroundColor,
  particlesColor,
}: particleProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: backgroundColor,
          },
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },

            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            grab: {
              distance: 300,
              line_linked: {
                opacity: .5,
              },
            },
          },
        },
        particles: {
          color: {
            value: particlesColor,
          },
          links: {
            color: particlesColor,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 45,
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: 'square',
          },
          size: {
            value: { min: 4, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
export default ParticlesComponent;
