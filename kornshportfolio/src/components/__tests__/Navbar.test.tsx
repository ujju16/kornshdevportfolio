// Trigger CI/CD: update date
// 2025-06-12

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../Navbar';

// Mock next/image and next/link
vi.mock('next/image', () => {
  return {
    __esModule: true,
    default: (props: { alt: string; src: string; width?: number; height?: number; className?: string; style?: React.CSSProperties; }) => {
      // Simule un <img> classique pour les tests
      // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
      return <img {...props} />;
    },
  };
});
vi.mock('next/link', () => {
  return {
    __esModule: true,
    default: function Link(props: { href: string; children: React.ReactNode }) {
      // Avoid duplicate href in props
      const { href, children, ...rest } = props;
      return React.createElement('a', { href, ...rest }, children);
    }
  };
});

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />);
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Accueil/)).toBeInTheDocument();
    expect(screen.getByText(/Projets/)).toBeInTheDocument();
    expect(screen.getByText(/Skills/)).toBeInTheDocument();
    expect(screen.getByText(/Contact/)).toBeInTheDocument();
  });

  it('shows mobile menu when hamburger is clicked', () => {
    render(<Navbar />);
    const button = screen.getByLabelText(/ouvrir le menu/i);
    fireEvent.click(button);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByLabelText(/fermer le menu/i)).toBeInTheDocument();
  });

  it('closes mobile menu on Esc', () => {
    render(<Navbar />);
    const button = screen.getByLabelText(/ouvrir le menu/i);
    fireEvent.click(button);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('focus trap works in mobile menu', () => {
    render(<Navbar />);
    const button = screen.getByLabelText(/ouvrir le menu/i);
    fireEvent.click(button);
    const closeBtn = screen.getByLabelText(/fermer le menu/i);
    closeBtn.focus();
    // Simuler le Tab arrière (shift+tab) sur le bouton de fermeture
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    // Utiliser getAllByText pour cibler le dernier lien Contact du menu latéral, qui doit être visible
    const allLinks = screen.getAllByText(/Contact/).map(el => el.closest('a')).filter(Boolean);
    // Prendre le dernier lien visible (menu mobile)
    const lastLink = allLinks[allLinks.length - 1];
    expect(document.activeElement).toBe(lastLink);
  });
});
