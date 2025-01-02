import React from 'react';
import Head from './Head';

describe('<Head />', () => {
  it('renders the logo', () => {
    // Mount the component
    cy.mount(<Head />);

    // Check if the image is in the DOM
    cy.get('img.teknyemekler')
      .should('exist')
      .and('have.attr', 'src')
      .should('include', 'logo.svg');  // Ensure the logo's src is correct
  });

  it('has the correct styles', () => {
    cy.mount(<Head />);

    // Check the background color of the head container
    cy.get('.head').should('have.css', 'background-color', 'rgb(206, 40, 41)');  // Matches the #CE2829 color
  });
});
