'use client';

import { motion } from 'framer-motion';

import ProjectContainer from '@/components/ProjectContainer';
import { projects } from '@/constants';
import { projectsTransition } from '@/utils/motion';

const Projects = () => {
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
        {projects.map((project, index) => (
          <ProjectContainer key={index} project={project} index={index} />
        ))}
      </div>
      <div className='w-full h-[1px] bg-black opacity-30 lg:mt-[6rem] dark:bg-white dark:opacity-60' />
    </motion.section>
  );
};

export default Projects;
