"use client";

// Composant Navbar pour la navigation principale du portfolio
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Accueil', icon: '🏠' },
  { href: '/projects', label: 'Projets', icon: '💻' },
  { href: '/skills', label: 'Skills', icon: '🛠️' },
  { href: '/contact', label: 'Contact', icon: '✉️' },
];

const Navbar = ({ onMenuToggle }: { onMenuToggle?: (open: boolean) => void }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (onMenuToggle) onMenuToggle(open);
  }, [open, onMenuToggle]);

  return (
    <nav className="w-full flex justify-between items-center py-4 px-4 sm:px-8 bg-black/90 dark:bg-black/95 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50 border-b border-gray-800">
      <div className="flex items-center gap-2 min-w-0">
        <Image src="/logo.jpeg" alt="Logo Kornshdev" width={36} height={36} className="rounded-full shrink-0" />
        <span className="font-bold text-xl text-white truncate">Kornshdev</span>
      </div>
      <button
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10 ml-2 text-white focus:outline-none"
        aria-label="Ouvrir le menu navigation"
        onClick={() => setOpen(!open)}
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      <ul className="hidden sm:flex gap-4 md:gap-6 text-md font-medium">
        {navLinks.map((nav) => (
          <li key={nav.href}>
            <Link
              href={nav.href}
              className="flex items-center gap-2 px-3 py-1 rounded transition-colors duration-200 nav-link text-white hover:bg-gray-800"
              style={{ color: 'white' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--section-title)';
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = 'white';
              }}
            >
              <span>{nav.icon}</span>
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Switch dark/light mode avec icônes seulement */}
      <ThemeSwitch iconOnly />
      {/* Menu latéral mobile */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black flex">
          <div className="w-64 bg-black h-full p-6 flex flex-col gap-6 animate-slide-in shadow-lg">
            <button
              className="self-end mb-4 text-white text-2xl"
              aria-label="Fermer le menu navigation"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <ul className="flex flex-col gap-4 text-lg font-medium text-white">
              {navLinks.map((nav) => (
                <li key={nav.href}>
                  <Link
                    href={nav.href}
                    className="flex items-center gap-2 px-3 py-2 rounded transition-colors duration-200 nav-link text-white hover:bg-gray-800"
                    onClick={() => setOpen(false)}
                  >
                    <span>{nav.icon}</span>
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
