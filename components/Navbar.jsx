import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center px-6 py-4 mx-auto lg:w-[60%]'>
      <h1 className='text-[26px] tracking-[-1px] font-extrabold lg:text-[30px] dark:text-white'>
        Travistn<span className='text-blue-500'>.</span>dev
      </h1>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
