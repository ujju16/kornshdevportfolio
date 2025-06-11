import Image from 'next/image';

// Composant Footer pour le bas de page
const Footer = () => (
  <footer className="w-full bg-black/90 dark:bg-black/95 text-white py-4 px-8 flex items-center justify-between fixed bottom-0 left-0 z-40 border-t border-gray-800 mt-8">
    <div className="flex items-center gap-2">
      <Image src="/logo.jpeg" alt="Logo Kornshdev" width={28} height={28} className="rounded-full" />
      <span className="font-semibold">Kornshdev</span>
    </div>
    <span className="text-xs opacity-70">&copy; {new Date().getFullYear()} Kornshdev. Tous droits réservés.</span>
  </footer>
);

export default Footer;
