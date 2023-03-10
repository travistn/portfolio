'use client';

import { motion } from 'framer-motion';

import DarkModeToggle from './DarkModeToggle';
import { navTransition } from '@/utils/motion';

const Navbar = () => {
  return (
    <motion.nav
      className='flex flex-row justify-between items-center px-6 py-4 mx-auto lg:w-[90%] xl:w-[75%] 2xl:w-[65%]'
      variants={navTransition}
      initial='hidden'
      animate='show'>
      <h1 className='text-[26px] tracking-[-1px] font-extrabold lg:text-[30px] dark:text-white'>
        Travistn<span className='text-blue-500'>.</span>dev
      </h1>
      <DarkModeToggle />
    </motion.nav>
  );
};

export default Navbar;
