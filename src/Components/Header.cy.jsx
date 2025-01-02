import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('<Header />', () => {
  it('renders and contains the expected elements', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    // Check if the header contains the correct text
    cy.get('h1').contains('KOD ACIKTIRIR');
    cy.get('h1').contains('PIZZA, DOYURUR');

    // Check if the button is rendered and contains correct text
    cy.get('button').contains('ACIKTIM');
  });

  it('navigates to the /order route when the button is clicked', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    // Click the button
    cy.get('button').click();

    // Use cy.visit() to check the actual URL after the navigation
    cy.url().should('include', '/order');
  });
});
