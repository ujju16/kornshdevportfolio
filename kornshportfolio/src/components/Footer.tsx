import Image from 'next/image';

// Composant Footer pour le bas de page
const Footer = () => (
  <footer className="w-full bg-black/90 dark:bg-black/95 text-white py-3 px-4 sm:py-4 sm:px-8 flex flex-col sm:flex-row items-center sm:justify-between fixed bottom-0 left-0 z-40 border-t border-gray-800 mt-8 gap-2 sm:gap-0">
    <div className="flex items-center gap-2 min-w-0">
      <Image src="/logo.jpeg" alt="Logo Kornshdev" width={28} height={28} className="rounded-full shrink-0" />
      <span className="font-semibold truncate">Kornshdev</span>
    </div>
    <span className="text-xs opacity-70 text-center">&copy; {new Date().getFullYear()} Kornshdev. Tous droits réservés.</span>
  </footer>
);

export default Footer;
