/// <reference types="cypress" />

describe('Navbar E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('affiche la navbar et les liens', () => {
    cy.get('nav[role="navigation"]').should('exist');
    cy.contains('Accueil');
    cy.contains('Projets');
    cy.contains('Skills');
    cy.contains('Contact');
  });

  it('ouvre et ferme le menu mobile', () => {
    cy.viewport('iphone-6');
    cy.get('button[aria-label*="ouvrir le menu"]').click();
    cy.get('[role="dialog"]').should('be.visible');
    cy.get('button[aria-label*="fermer le menu"]').click();
    cy.get('[role="dialog"]').should('not.exist');
  });

  it('ferme le menu mobile avec Esc', () => {
    cy.viewport('iphone-6');
    cy.get('button[aria-label*="ouvrir le menu"]').click();
    cy.get('[role="dialog"]').should('be.visible');
    cy.get('body').type('{esc}');
    cy.get('[role="dialog"]').should('not.exist');
  });

  it('focus trap dans le menu mobile', () => {
    cy.viewport('iphone-6');
    cy.get('button[aria-label*="ouvrir le menu"]').click();
    cy.get('[role="dialog"]').within(() => {
      cy.focused().should('have.attr', 'aria-label', 'Fermer le menu navigation');
      cy.tab({ shift: true });
      cy.focused().should('contain', 'Contact');
    });
  });
});

// Test accessibilité axe-core
import 'cypress-axe';
describe('Navbar a11y', () => {
  it('n’a pas de violation axe', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y('nav[role="navigation"]');
  });
});
