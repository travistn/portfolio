'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import ProjectContainer from '@/components/ProjectContainer';
import { projectsTransition } from '@/utils/motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();

        if (isMounted) {
          setProjects(Array.isArray(data?.projects) ? data.projects : []);
        }
      } catch (error) {
        console.error('Failed to load projects.', error);

        if (isMounted) {
          setProjects([]);
        }
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <motion.section
      className='flex flex-col gap-6 px-6 pb-8 lg:mx-auto lg:w-[90%] xl:w-[75%] 2xl:w-[65%] 2xl:mt-[6rem]'
      variants={projectsTransition}
      initial='hidden'
      whileInView='show'>
      <h3 className='font-bold text-[30px] tracking-[-1px] lg:text-[40px] dark:text-white'>
        Featured Projects
      </h3>
      <div className='mt-8 flex flex-col gap-[8rem] lg:gap-[15rem] lg:mt-12'>
        {projects?.map((project, index) => (
          <ProjectContainer key={project.name} project={project} index={index} />
        ))}
      </div>
      <div className='w-full h-[1px] bg-black opacity-30 lg:mt-[6rem] dark:bg-white dark:opacity-60' />
    </motion.section>
  );
};

export default Projects;
