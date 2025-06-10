// Composant Navbar pour la navigation principale du portfolio
import Link from 'next/link';

const Navbar = () => (
  <nav className="w-full flex justify-between items-center py-4 px-8 bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
    <div className="font-bold text-xl text-blue-700">Kornshdev</div>
    <ul className="flex gap-6 text-md font-medium">
      <li><Link href="/">Accueil</Link></li>
      <li><Link href="/projects">Projets</Link></li>
      <li><Link href="/skills">Skills</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
