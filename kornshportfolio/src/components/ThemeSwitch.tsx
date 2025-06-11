"use client";

import React, { useEffect, useState } from 'react';

const ThemeSwitch: React.FC = () => {
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
      className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 transition-colors"
      aria-label="Changer le thème"
      type="button"
    >
      {theme === 'dark' ? '☀️ Clair' : '🌙 Sombre'}
    </button>
  );
};

export default ThemeSwitch;
