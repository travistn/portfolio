'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

import useParallax from '@/hooks/useParallax';
import ProjectLink from './ProjectLink';

const ProjectContainer = ({ project, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);
  const borderScroll = useParallax(scrollYProgress, -25);

  return (
    <article className='relative grid lg:grid-cols-11'>
      <div
        ref={ref}
        className={`max-w-[320px] relative justify-self-center z-[-2] lg:row-span-full lg:max-w-[440px] xl:max-w-[480px] ${
          index % 2 === 0
            ? 'lg:col-start-1 lg:col-span-6 lg:justify-self-auto'
            : 'lg:col-start-7 lg:col-span-6 lg:justify-self-end'
        }`}>
        <img src={project.image.url} alt='app-screenshot' className='brightness-[0.7]' />
        <motion.div
          className={`absolute w-full h-full border-[1px] border-black opacity-30 dark:border-white -z-10 dark:opacity-40 bottom-0 ${
            index % 2 === 0 ? 'left-6' : 'right-6'
          }`}
          style={{ y: borderScroll }}
        />
      </div>
      <motion.div
        className={`flex flex-col gap-4 p-8 bg-white relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:row-span-full lg:self-center ${
          index % 2 === 0 ? 'lg:col-start-5 lg:col-end-12' : 'lg:col-start-1 lg:col-end-8'
        } `}
        style={{ y }}>
        <h4 className='bg-[#f9f366] py-2 px-8 text-center relative top-[-4.5rem] z-[-1] font-semibold text-[20px] lg:max-w-max even:lg:col-start-1 even:lg:col-span-6 '>
          {project.name}
        </h4>
        <p className='mt-[-4.5rem] font-medium text-[17px]'>{project.description1}</p>
        <p className='border-b-[1px] border-black border-opacity-30 pb-6 font-medium text-[17px] '>
          {project.description2}
        </p>
        <p className='italic text-[17px] font-medium'>{`Built using ${project.technologies}`}</p>
        <div
          className={`flex flex-row  mt-4 text-[18px] font-medium lg:text-[19px] lg:justify-end lg:gap-6 ${
            project.liveSiteUrl !== null ? 'justify-between' : 'justify-end'
          }`}>
          {project.liveSiteUrl !== null && (
            <ProjectLink link={project.liveSiteUrl} linkName='Live Site' />
          )}
          <ProjectLink link={project.githubUrl} linkName='Github' />
        </div>
      </motion.div>
    </article>
  );
};

export default ProjectContainer;
