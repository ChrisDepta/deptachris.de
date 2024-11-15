"use client"
// components/ThemeToggle.js
import { useTheme } from '@/../ThemeContext';
import Image from 'next/image';
import system from "@/../public/system.png";
import dunkel from "@/../public/dunkel.png";
import hell from "@/../public/hell.png";

const ThemeToggle = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className='align-center z-10 flex shadow-lg shadow-[rgb(var(--shadow-rgb))] p-2 rounded-md border-t border-[rgb(var(--border-rgb))]'>
      <button
        className={`bg-[rgb(var(--accent-light-rgb))] flex items-center justify-center transition-all duration-300 ${
          theme === 'light' ? 'scale-125' : 'hover:scale-125'
        }`}
        onClick={() => changeTheme('light')}
        disabled={theme === 'light'}
      >
        <Image src={hell} alt='hell' />
      </button>
      <button
        className={`bg-[rgb(var(--accent-light-rgb))] flex items-center justify-center mx-2 transition-all duration-300 ${
          theme === 'dark' ? 'scale-125' : 'hover:scale-125'
        }`}
        onClick={() => changeTheme('dark')}
        disabled={theme === 'dark'}
      >
        <Image src={dunkel} alt='dunkel' />
      </button>
      <button
        className={`bg-[rgb(var(--accent-light-rgb))] flex items-center justify-center transition-all duration-300 ${
          theme === 'system' ? 'scale-125 ' : 'hover:scale-125'
        }`}
        onClick={() => changeTheme('system')}
        disabled={theme === 'system'}
      >
        <Image src={system} alt='system' />
      </button>
    </div>
  );
};

export default ThemeToggle;
