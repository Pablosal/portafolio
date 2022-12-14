import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '../components/back_button/BackButton';
import { project } from '../context/types';
import ProjectDescriptionComponent from '../components/project_description_component/ProjectDescriptionComponent';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.NEXT_PUBLIC_URL_SUPABASE_PROJECT,
  process.env.NEXT_PUBLIC_BD_SUPABASE_SECRET
);
const projectos = ({ projects }) => {
  return (
    <div className="center-verticaly">
      <BackButton />
      <h2 className="font-bold text-2xl text-white m-8">Proyectos</h2>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            duration: 2,
            delay: 0.5,
          }}
        >
          <div className="w-screen center-verticaly gap-5 m-6">
            {projects.map((project: project) => (
              <ProjectDescriptionComponent
                key={project.id}
                proyect_description={project.proyect_description}
                proyect_image={project.proyect_image}
                proyect_name={project.proyect_name}
                proyect_link={project.proyect_link}
                proyect_technologies={project.proyect_technologies}
                proyect_technologies_description={
                  project.proyect_technologies_description
                }
                created_at={project.created_at}
                id={project.id}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export async function getStaticProps(context) {
  const getprojects = async () => {
    const { data: projects, error } = await supabase
      .from('proyects')
      .select('*');
    return projects;
  };
  const proyectos = await getprojects();
  return {
    props: { projects: proyectos }, // will be passed to the page component as props
  };
}
export default projectos;
