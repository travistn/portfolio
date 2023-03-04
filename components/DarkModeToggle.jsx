'use client';

import { MoonIcon } from '@heroicons/react/24/solid';
import useDarkMode from '@/hooks/useDarkMode';

const DarkModeToggle = () => {
  const [colorTheme, setColorTheme] = useDarkMode();

  return (
    <div
      className={`w-[40px] h-[20px] rounded-[20px] relative flex items-center cursor-pointer bg-gray-300 dark:bg-[#2f363d]
      }`}
      onClick={() => {
        setColorTheme(colorTheme);
      }}>
      <div
        className={`p-[4px] rounded-full absolute transition-all duration-500 ease-in bg-black dark:bg-white dark:translate-x-3/4
        }`}>
        <MoonIcon
          className={`w-[16px] h-[16px] rotate-[15deg] transition-colors duration-1000 ease-in-out fill-yellow-400 dark:fill-black
          }`}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
