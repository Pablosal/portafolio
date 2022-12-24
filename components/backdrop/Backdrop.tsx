'use client';
import * as React from 'react';
import ReactDOM from 'react-dom';

interface IBackdrop {
  closeModalToScreen: () => void;
}

const Backdrop = ({ closeModalToScreen }: IBackdrop) => {
  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser) {
    return ReactDOM.createPortal(
      <div
        onClick={closeModalToScreen}
        className="w-screen h-screen absolute top-0 left-0 right-0 bottom-0 z-40"
        style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
      ></div>,
      document.getElementById('backdrop-root')
    );
  } else {
    return null;
  }
};

export default Backdrop;
