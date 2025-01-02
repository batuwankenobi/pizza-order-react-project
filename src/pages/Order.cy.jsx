import React from 'react';
import Order from './Order';

describe('<Order />', () => {
  it('renders Order component', () => {
    cy.mount(<Order />); // Order bileşeninin doğru şekilde render edilip edilmediğini kontrol et
  });

  it('renders OrderHeader component', () => {
    // OrderHeader bileşeninin doğru şekilde render edilip edilmediğini kontrol et
    cy.mount(<Order />);
    cy.get('header').should('exist');
  });

  it('renders FormPizza component', () => {
    // FormPizza bileşeninin doğru şekilde render edilip edilmediğini kontrol et
    cy.mount(<Order />);
    cy.get('form').should('exist'); // Form elementinin varlığı kontrol edilir
  });

  it('renders Footer component', () => {
    // Footer bileşeninin doğru şekilde render edilip edilmediğini kontrol et
    cy.mount(<Order />);
    cy.get('footer').should('exist');
  });
});
