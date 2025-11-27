"use client";
// components/ThemeToggle.js
import { useTheme } from '@/../ThemeContext';
import { useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

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
    <div className="flex items-center gap-1 p-2 rounded-lg bg-card border border-border shadow-sm">
      <button
        className={`p-2 rounded-md transition-all duration-300 ${
          buttonTheme === 'light' 
            ? 'bg-primary text-primary-foreground shadow-md' 
            : 'hover:bg-secondary text-foreground hover:text-primary'
        }`}
        onClick={() => handleThemeChange('light')}
        disabled={buttonTheme === 'light'}
        aria-label="Light mode"
      >
        <Sun className="w-4 h-4" />
      </button>
      
      <button
        className={`p-2 rounded-md transition-all duration-300 ${
          buttonTheme === 'dark' 
            ? 'bg-primary text-primary-foreground shadow-md' 
            : 'hover:bg-secondary text-foreground hover:text-primary'
        }`}
        onClick={() => handleThemeChange('dark')}
        disabled={buttonTheme === 'dark'}
        aria-label="Dark mode"
      >
        <Moon className="w-4 h-4" />
      </button>
      
      <button
        className={`p-2 rounded-md transition-all duration-300 ${
          buttonTheme === 'system' 
            ? 'bg-primary text-primary-foreground shadow-md' 
            : 'hover:bg-secondary text-foreground hover:text-primary'
        }`}
        onClick={() => handleThemeChange('system')}
        disabled={buttonTheme === 'system'}
        aria-label="System theme"
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ThemeToggle;
