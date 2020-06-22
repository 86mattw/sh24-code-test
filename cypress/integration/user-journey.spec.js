/// <reference types="cypress" />

context('User Journey', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.begin').click();
  });

  it('can complete a full user journey', () => {
    cy.get('#name').type('test name');

    cy.contains('Next').click();

    cy.get('#email-address').type('test@test.com');

    cy.contains('Next').click();

    cy.contains('STI Testing').click();

    cy.contains('Next').click();

    cy.contains('test name').should('be.visible');
    cy.contains('test@test.com').should('be.visible');
    cy.contains('STI Testing').should('be.visible');
  });

  it('cannot proceed to question 2 without entering a valid name', () => {
    cy.contains('Next').should('not.exist');

    cy.get('#name').type('a');

    cy.contains('Next').should('not.exist');

    cy.get('#name').type('aaaaaaaaaaaaaaaaaaaaaaaaaa');

    cy.contains('Next').should('not.exist');
  });

  it('can navigate back to question 1 from question 2', () => {
    cy.visit('/question-2');

    cy.contains('Back').should('exist');
    cy.contains('Back').click();

    cy.location('pathname').should('include', 'question-1');
  });

  it('cannot proceed to question 3 without entering a valid email', () => {
    cy.visit('/question-2');

    cy.contains('Next').should('not.exist');

    cy.get('#email-address').type('aaaa');

    cy.contains('Next').should('not.exist');
  });

  it('can navigate back to question 2 from question 3', () => {
    cy.visit('/question-3');

    cy.contains('Back').should('exist');
    cy.contains('Back').click();

    cy.location('pathname').should('include', 'question-2');
  });

  it('can navigate back to question 3 from the review page', () => {
    cy.visit('/review');

    cy.contains('Back').should('exist');
    cy.contains('Back').click();

    cy.location('pathname').should('include', 'question-3');
  });
});
