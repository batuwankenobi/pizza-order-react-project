import React from 'react';
import App from './App';

describe('<App />', () => {
  beforeEach(() => {
    // Mount the App component before each test
    cy.mount(<App />);
  });

  it('renders the Home page by default', () => {
    cy.contains('Home').should('be.visible'); // Adjust this based on your Home page content
  });

  it('navigates to the Order page', () => {
    cy.get('a[href="/order"]').click(); // Assuming you have a link or button to navigate
    cy.contains('Order').should('be.visible'); // Adjust this based on your Order page content
  });

  it('navigates to the Success page', () => {
    cy.get('a[href="/success"]').click(); // Assuming you have a link or button to navigate
    cy.contains('Success').should('be.visible'); // Adjust this based on your Success page content
  });

  it('handles invalid routes gracefully', () => {
    cy.visit('/invalid-route', { failOnStatusCode: false });
    cy.contains('404').should('be.visible'); // Replace with your 404 page message if implemented
  });
});