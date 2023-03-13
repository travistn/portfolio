'use client';

import { motion } from 'framer-motion';

import SkillsCarousel from '@/components/SkillsCarousel';
import { staggerContainer, dropUpVariants } from '@/utils/motion';

const About = () => {
  return (
    <motion.section
      className='flex flex-col gap-12 px-6 py-16 lg:mx-auto lg:pt-[6rem] lg:w-[90%] xl:w-[75%] 2xl:w-[65%]'
      variants={staggerContainer}
      initial='hidden'
      animate='show'>
      <motion.h1
        className='text-blue-500 uppercase font-bold text-center lg:text-[20px] dark:text-blue-400'
        variants={dropUpVariants}>
        Travis Nguyen
      </motion.h1>
      <motion.h2
        className='font-extrabold text-[44px] text-center leading-[50px] lg:text-[60px] lg:leading-[90px] dark:text-white'
        variants={dropUpVariants}>
        Frontend Developer
      </motion.h2>
      <motion.p
        className='text-[14px] leading-[28px] px-2 text-center lg:text-[16px] lg:px-[24px] dark:text-white dark:opacity-80'
        variants={dropUpVariants}>
        Hi there, I’m Travis! Being a web developer, I am passionate in creating new experiences,
        implementing eye catching designs, and making websites come to life.
      </motion.p>
      <motion.div className='mt-8 relative' variants={dropUpVariants}>
        <h3 className='text-center mb-6 font-medium lg:text-[20px] dark:text-white'>
          Most Used Tools
        </h3>
        <SkillsCarousel />
      </motion.div>
      <motion.div
        className='w-full h-[1px] bg-black opacity-30 mt-[3rem] dark:bg-white dark:opacity-60'
        variants={dropUpVariants}
      />
    </motion.section>
  );
};

export default About;
