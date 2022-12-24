'use client';
import Head from 'next/head';
import BubleMenuComponent from '../components/buble_menu_component/BubleMenuComponent';
import StickyContactComponent from '../components/sticky_contact_component/StickyContactComponent';
import TextComponent from '../components/text_component/TextComponent';
import dynamic from 'next/dynamic';

import ExperienceLayout from '../components/experience_layout/ExperienceLayout';
import UseModal from '../utils/hooks/useModal';

const LazyCentralHeroComponent = dynamic(
  () => import('../components/central_hero_component/CentralHeroComponent'),
  {
    ssr: false,
  }
);
const LazyQueryTitle = dynamic(
  () => import('../components/query_title/QueryTitleComponent'),
  {
    ssr: false,
  }
);

export default function Home() {
  const [openModal, RenderModalSection, openModalToScreen] = UseModal();

  return (
    <div className="h-screen center-verticaly">
      <Head>
        <title>Pablo Salgado Desarrollador Fullstack</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="sm:h-screen sm:grid sm:grid-cols-3 sm:items-center sm:w-full ">
        {RenderModalSection(
          openModal,
          () => (
            <ExperienceLayout />
          ),
          { title: 'Mi experiencia', showFooter: true }
        )}
        <div className=" sm:center-verticaly h-full absolute left-[25px] top-[-25px] flex sm:relative z-50">
          <LazyQueryTitle />
          <BubleMenuComponent
            openModalToScreen={openModalToScreen}
          ></BubleMenuComponent>
        </div>
        <div className="center-verticaly relative ">
          <LazyCentralHeroComponent />
          <TextComponent
            text="My name is Pablo Salgado and I have been working as a Full Stack Developer for the past 2 years. I have a strong passion for building modern and scalable web applications, and I have experience working with a variety of technologies and frameworks."
            top={241}
          />
        </div>

        <aside className="fixed sm:right-0 sm:mr-9 sm:mt-9  sm:z-10 sm:bottom-0 bottom-[48px] right-[18px]">
          <StickyContactComponent />
        </aside>
      </main>
    </div>
  );
}
