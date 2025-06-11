// Composant Navbar pour la navigation principale du portfolio
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const navLinks = [
  { href: '/', label: 'Accueil', icon: '🏠' },
  { href: '/projects', label: 'Projets', icon: '💻' },
  { href: '/skills', label: 'Skills', icon: '🛠️' },
  { href: '/contact', label: 'Contact', icon: '✉️' },
];

const Navbar = () => (
  <nav className="w-full flex justify-between items-center py-4 px-8 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
    <div className="font-bold text-xl" style={{ color: 'var(--section-title)' }}>Kornshdev</div>
    <ul className="flex gap-6 text-md font-medium">
      {navLinks.map(({ href, label, icon }) => (
        <li key={href}>
          <Link
            href={href}
            className="flex items-center gap-2 px-3 py-1 rounded transition-colors duration-200 nav-link"
            style={{ color: 'var(--foreground)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--section-title)';
              (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--foreground)';
            }}
          >
            <span>{icon}</span>
            {label}
          </Link>
        </li>
      ))}
    </ul>
    <ThemeSwitch />
  </nav>
);

export default Navbar;
