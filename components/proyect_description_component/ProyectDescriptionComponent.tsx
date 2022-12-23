import Image from 'next/image';
import * as React from 'react';
import cellphoneProyect from '/public/images/proovmobile.jpg';

const ProyectDescriptionComponent = () => {
  return (
    <div
      style={{ backdropFilter: 'blur(5px)' }}
      className="grid grid-cols-2  backdrop  w-2/5 bg-white bg-opacity-10 rounded p-3 text-white  border-gray-300 shadow-lg"
    >
      <div className="image--container">
        <Image src={cellphoneProyect} alt="Proyecto"></Image>
      </div>
      <div className="description--container flex flex-col pt-12">
        <div className="description h-1/3">
          <h2 className="text-2xl font-bold h-1/3">Casa de subastas de Arte</h2>
          <p>
            Aplicacion de subastas donde la persona puede
            añadir,modificar,eliminar y crear subastas de sus productos en
            tiempo real con otros usuarios que esten conectados con sus cuentas
          </p>
        </div>
        <div className="technologies">
          <h2 className="text-2xl font-bold h-1/3">Casa de subastas de Arte</h2>
          <p>
            Aplicacion de subastas donde la persona puede
            añadir,modificar,eliminar y crear subastas de sus productos en
            tiempo real con otros usuarios que esten conectados con sus cuentas
          </p>
        </div>
        <div className="button--to h-1/3 flex justify-center align-center flex-col">
          <button className="hover:bg-transparent bg-blue-500 hover:text-blue-700 font-semibold text-white py-2 px-4 border hover:border-blue-500 border-transparent rounded">
            Ver el Proyecto
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProyectDescriptionComponent;
