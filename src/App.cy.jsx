import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('<App />', () => {
  it('renders the home page by default', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/src/pages/Home.jsx']}>
        <App />
      </MemoryRouter>
    );
    cy.contains('Home'); // Home bileşenindeki metni doğrula
  });

  it('renders the order page when /order is visited', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/order']}>
        <App />
      </MemoryRouter>
    );
    cy.contains('Order'); // Order bileşenindeki metni doğrula
  });

  it('renders the success page when /success is visited', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/success']}>
        <App />
      </MemoryRouter>
    );
    cy.contains('Assent'); // Assent bileşenindeki metni doğrula
  });
});
