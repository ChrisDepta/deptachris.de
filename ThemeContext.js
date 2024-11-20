"use client";
// context/ThemeContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Domyślnie 'dark', ale można zmienić na 'light' lub 'system'
  const [resolvedTheme, setResolvedTheme] = useState('dark'); // To przechowuje rzeczywisty aktywny motyw (dark/light)

  useEffect(() => {
    // Zapiszemy temat użytkownika w LocalStorage
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
    
    // Jeśli motyw systemowy jest wybrany, nasłuchujemy zmian
    if (savedTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setResolvedTheme(systemPrefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');

      // Nasłuchuj zmiany systemowego motywu
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = (e) => {
        const prefersDark = e.matches ? 'dark' : 'light';
        setResolvedTheme(prefersDark);
        document.documentElement.setAttribute('data-theme', prefersDark);
      };
      mediaQuery.addEventListener('change', listener);

      // Usuwanie nasłuchiwacza po odmontowaniu komponentu
      return () => mediaQuery.removeEventListener('change', listener);
    } else {
      // Jeśli użytkownik wybrał motyw 'dark' lub 'light', ustawiamy od razu
      document.documentElement.setAttribute('data-theme', savedTheme);
      setResolvedTheme(savedTheme);
    }
  }, [theme]); // Uruchamiaj ponownie, kiedy zmienia się stan 'theme'

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Zapisz wybrany motyw w LocalStorage

    if (newTheme === 'system') {
      // Nasłuchuj zmian w systemowym motywie
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setResolvedTheme(systemPrefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', newTheme);
      setResolvedTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
