import * as React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
interface IModal {
  closeModalToScreen: () => void;
  render: () => any;
  title: string;
  showFooter: Boolean;
}

const Modal = ({ closeModalToScreen, render, title, showFooter }: IModal) => {
  const [isBrowser, setIsBrowser] = React.useState(false);
  const modalVariants = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  React.useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser) {
    return ReactDOM.createPortal(
      <motion.div
        variants={modalVariants}
        initial={'initial'}
        animate={'animate'}
        id="defaultModal"
        aria-hidden="true"
        className=" absolute top-0 left-0 right-0 bottom-0 bg-white m-auto z-50 sm:h-[600px] w-[750px]  max-w-2xl rounded-2xl "
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full flex flex-col ">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={closeModalToScreen}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6 overflow-hidden overflow-y-scroll">
            {render()}
          </div>
          {showFooter && (
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <a
                href=" https://drive.google.com/uc?export=download&id=1Go7ZFQ0J3fsjrJ-aR3nARZZRdSiaTE4_"
                download
                data-modal-toggle="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Descargar CV
              </a>
              <button
                onClick={closeModalToScreen}
                data-modal-toggle="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </motion.div>,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
