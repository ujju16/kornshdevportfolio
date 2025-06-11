// Composant Footer pour le bas de page
const Footer: React.FC = () => (
  <footer className="w-full py-6 mt-8 text-center" style={{ background: 'var(--section-bg)', color: 'var(--foreground)' }}>
    <span className="opacity-80">© {new Date().getFullYear()} Kornshdev. Tous droits réservés.</span>
  </footer>
);

export default Footer;
