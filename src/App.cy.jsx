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
    cy.contains('pages/Home.jsx'); // Home bileşenindeki metni doğrula
  });

  it('renders the order page when /order is visited', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/order']}>
        <App />
      </MemoryRouter>
    );
    cy.contains('pages/Order.jsx'); // Order bileşenindeki metni doğrula
  });

  it('renders the success page when /success is visited', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/success']}>
        <App />
      </MemoryRouter>
    );
    cy.contains('pages/Assent.jsx'); // Assent bileşenindeki metni doğrula
  });
});
