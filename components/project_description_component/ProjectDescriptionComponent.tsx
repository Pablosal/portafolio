import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { project } from '../../context/types';

const ProjectDescriptionComponent = ({
  proyect_description,
  proyect_image,
  proyect_link,
  proyect_name,
  proyect_technologies_description,
  proyect_technologies,
}: project) => {
  return (
    <div
      style={{ backdropFilter: 'blur(5px)' }}
      className="w-3/4 sm:grid grid-cols-2  backdrop  sm:w-2/5 bg-white bg-opacity-10 rounded p-3 text-white  border-gray-300 shadow-lg"
    >
      <div className="image--container center-verticaly pt-12">
        <Image src={proyect_image} alt="projecto" width={200} height={400}></Image>
      </div>
      <div className="description--container flex flex-col pt-12">
        <div className="description h-full overflow-x-clip my-4">
          <h2 className="text-2xl font-bold h-1/3">{proyect_name}</h2>
          <p>{proyect_description}</p>
        </div>
        <div className="technologies mb-4">
          <h2 className="text-2xl font-bold h-1/3">Tecnologias</h2>
          <p>{proyect_technologies_description}</p>
        </div>
        <div className="button--to h-1/3 flex justify-center align-center flex-col">
          <Link target={"_blank"}
            href={proyect_link}
            className="hover:bg-transparent text-center bg-blue-500 hover:text-blue-700 font-semibold text-white py-2 px-4 border hover:border-blue-500 border-transparent rounded"
          >
            Ver el projecto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptionComponent;
