"use client";

// Composant Navbar pour la navigation principale du portfolio
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Accueil', icon: '🏠' },
  { href: '/projects', label: 'Projets', icon: '💻' },
  { href: '/skills', label: 'Skills', icon: '🛠️' },
  { href: '/contact', label: 'Contact', icon: '✉️' },
];

const Navbar = () => (
  <nav className="w-full flex justify-between items-center py-4 px-8 bg-black/90 dark:bg-black/95 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50 border-b border-gray-800">
    <div className="flex items-center gap-2">
      <Image src="/logo.jpeg" alt="Logo Kornshdev" width={36} height={36} className="rounded-full" />
      <span className="font-bold text-xl text-white">Kornshdev</span>
    </div>
    <ul className="flex gap-6 text-md font-medium">
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
    <ThemeSwitch />
  </nav>
);

export default Navbar;
