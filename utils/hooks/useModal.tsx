import dynamic from 'next/dynamic';
import * as React from 'react';
const LazyModal = dynamic(() => import('../../components/Modal/Modal'), {
  ssr: false,
});
const LazyBackdrop = dynamic(
  () => import('../../components/backdrop/Backdrop'),
  {
    ssr: false,
  }
);
const UseModal = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const openModalToScreen = () => setOpenModal(true);
  const closeModalToScreen = () => setOpenModal(false);

  const RenderModalSection = (openModal, render, modalOptions) => {
    return (
      openModal && (
        <>
          <LazyBackdrop closeModalToScreen={closeModalToScreen} />
          <LazyModal
            closeModalToScreen={closeModalToScreen}
            render={render}
            title={modalOptions.title}
            showFooter={modalOptions.showFooter}
          />
        </>
      )
    );
  };

  return [
    openModal,
    RenderModalSection,
    openModalToScreen,
    closeModalToScreen,
  ] as const;
};

export default UseModal;
