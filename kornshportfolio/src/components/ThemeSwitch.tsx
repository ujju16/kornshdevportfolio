"use client";

import React, { useEffect, useState } from 'react';

const ThemeSwitch: React.FC<{ iconOnly?: boolean }> = ({ iconOnly }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMounted(true);
    // Détection initiale du thème côté client
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    // Synchronise le thème sur toutes les pages via le localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--background', '#0a0a0a');
      document.documentElement.style.setProperty('--foreground', '#ededed');
      document.documentElement.style.setProperty('--card-bg', '#18181b');
      document.documentElement.style.setProperty('--card-border', '#27272a');
      document.documentElement.style.setProperty('--section-bg', '#18181b');
      document.documentElement.style.setProperty('--section-title', '#38bdf8');
    } else {
      document.documentElement.style.setProperty('--background', '#ffffff');
      document.documentElement.style.setProperty('--foreground', '#171717');
      document.documentElement.style.setProperty('--card-bg', '#f9fafb');
      document.documentElement.style.setProperty('--card-border', '#e5e7eb');
      document.documentElement.style.setProperty('--section-bg', '#f3f4f6');
      document.documentElement.style.setProperty('--section-title', '#2563eb');
    }
    localStorage.setItem('theme', theme);
    // Forcer le body à utiliser les variables CSS
    document.body.style.background = 'var(--background)';
    document.body.style.color = 'var(--foreground)';
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={iconOnly ? "ml-2 text-2xl bg-transparent border-none p-0 group" : "ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 transition-colors"}
      aria-label="Changer le thème"
      type="button"
    >
      {theme === 'dark' ? (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-yellow-400 transition-colors"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
      ) : (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-blue-400 transition-colors"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
      )}
    </button>
  );
};

export default ThemeSwitch;
