'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { motion, useScroll } from 'framer-motion';

import useParallax from '@/hooks/useParallax';

const ProjectContainer = ({ project, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <article className='relative grid lg:grid-cols-11'>
      <div
        ref={ref}
        className={`max-w-[320px] relative justify-self-center z-[-2] lg:row-span-full lg:max-w-[440px] xl:max-w-[480px] ${
          index % 2 === 0
            ? 'lg:col-start-1 lg:col-span-6 lg:justify-self-auto'
            : 'lg:col-start-7 lg:col-span-6 lg:justify-self-end'
        }`}>
        <Image
          src={project.image}
          alt='website'
          width={500}
          height={500}
          className='brightness-[0.7]'
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
        <div className='flex flex-row justify-between mt-4 text-[18px] font-medium lg:text-[19px] lg:justify-end lg:gap-6'>
          <Link href={project.liveUrl} target='_blank' className='flex flex-row items-center gap-2'>
            Live Site
            <ArrowUpRightIcon className='w-[19px] h-[19px] stroke-2 transition-transform duration-200 ease-in hover:rotate-45' />
          </Link>
          <Link
            href={project.githubUrl}
            target='_blank'
            className='flex flex-row items-center gap-2'>
            Github
            <ArrowUpRightIcon className='w-[19px] h-[19px] stroke-2 transition-transform duration-200 ease-in hover:rotate-45' />
          </Link>
        </div>
      </motion.div>
    </article>
  );
};

export default ProjectContainer;
