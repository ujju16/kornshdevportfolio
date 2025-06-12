/// <reference types="cypress" />

describe('Navbar E2E', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.screenshot('apres-visit'); // capture d'écran après chargement de la page
    cy.get('nav[role="navigation"]', { timeout: 10000 }).should('exist'); // attendre explicitement la navbar
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
      // Simuler shift+tab manuellement (fallback si cy.tab ne fonctionne pas)
      cy.focused().trigger('keydown', { key: 'Tab', shiftKey: true });
      // Vérifier que le focus revient sur le dernier élément focusable (dernier lien Contact)
      cy.get('a').last().should('contain', 'Contact').then($el => {
        expect(Cypress.dom.isFocused($el[0])).to.be.true;
      });
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
