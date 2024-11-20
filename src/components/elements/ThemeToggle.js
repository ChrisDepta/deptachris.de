"use client";
// components/ThemeToggle.js
import { useTheme } from '@/../ThemeContext';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import system from "@/../public/system.png";
import dunkel from "@/../public/dunkel.png";
import hell from "@/../public/hell.png";

const ThemeToggle = () => {
  const { theme, changeTheme } = useTheme(); // theme z kontekstu i funkcja do zmiany motywu
  const [buttonTheme, setButtonTheme] = useState(theme); // Lokalny stan dla przycisków (do stylowania)

  // Zaaktualizuj lokalny stan, kiedy theme z kontekstu się zmieni
  // useEffect(() => {
  //   setButtonTheme(theme); // Synchronizuj stan lokalny z kontekstem
  // }, [theme]); // Zmiana lokalnego stanu przy zmianie motywu z kontekstu

  // Funkcja zmieniająca motyw i przekazująca nowy motyw do kontekstu
  const handleThemeChange = (newTheme) => {
    setButtonTheme(newTheme); // Zaktualizuj stan przycisku
    changeTheme(newTheme); // Zaktualizuj motyw w kontekście
  };

  return (
    <div className="align-center z-10 flex shadow-lg shadow-[rgb(var(--shadow-rgb))] p-2 rounded-md border-t border-[rgb(var(--border-rgb))]">
      <button
        className={`bg-[rgb(var(--accent-light-rgb))] flex items-center justify-center transition-all duration-300 ${
          buttonTheme === 'light' ? 'scale-125' : 'hover:scale-125'
        }`}
        onClick={() => handleThemeChange('light')}
        disabled={buttonTheme === 'light'}
      >
        <Image src={hell} alt="light mode" />
      </button>
      <button
        className={`bg-[rgb(var(--accent-light-rgb))] flex items-center justify-center mx-2 transition-all duration-300 ${
          buttonTheme === 'dark' ? 'scale-125' : 'hover:scale-125'
        }`}
        onClick={() => handleThemeChange('dark')}
        disabled={buttonTheme === 'dark'}
      >
        <Image src={dunkel} alt="dark mode" />
      </button>
      <button
        className={`bg-[rgb(var(--accent-light-rgb))] flex items-center justify-center transition-all duration-300 ${
          buttonTheme === 'system' ? 'scale-125' : 'hover:scale-125'
        }`}
        onClick={() => handleThemeChange('system')}
        disabled={buttonTheme === 'system'}
      >
        <Image src={system} alt="system theme" />
      </button>
    </div>
  );
};

export default ThemeToggle;
