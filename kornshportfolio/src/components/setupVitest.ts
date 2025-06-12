import '@testing-library/jest-dom';

// Mock window.matchMedia pour jsdom (Vitest)
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = function(query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    } as MediaQueryList;
  };
}

// Ce fichier sert uniquement au setup global pour Vitest, il ne doit pas être détecté comme un test.
