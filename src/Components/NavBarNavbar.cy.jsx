import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  it('renders and contains the expected categories with icons', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );

    // Navbar'ın render edildiğinden emin olalım
    cy.get('.wrapper').should('exist');
    cy.get('.category-block').should('exist');
    
    // Kategorilerin doğru şekilde render edildiğini kontrol edelim
    cy.get('.block-item').should('have.length', 6); // 6 kategori öğesi olmalı
    
    // Her kategori öğesinde simge ve metin olup olmadığını kontrol edelim
    cy.get('.block-item').eq(0).find('img').should('be.visible'); // İlk kategori simgesi
    cy.get('.block-item').eq(0).find('p').should('contain', 'YENİ! Kore');
    
    cy.get('.block-item').eq(1).find('img').should('be.visible'); // Pizza simgesi
    cy.get('.block-item').eq(1).find('p').should('contain', 'Pizza');
    
    cy.get('.block-item').eq(2).find('img').should('be.visible'); // Burger simgesi
    cy.get('.block-item').eq(2).find('p').should('contain', 'Burger');
    
    cy.get('.block-item').eq(3).find('img').should('be.visible'); // Kızartmalar simgesi
    cy.get('.block-item').eq(3).find('p').should('contain', 'Kızartmalar');
    
    cy.get('.block-item').eq(4).find('img').should('be.visible'); // Fast food simgesi
    cy.get('.block-item').eq(4).find('p').should('contain', 'Fast food');
    
    cy.get('.block-item').eq(5).find('img').should('be.visible'); // Gazlı içecek simgesi
    cy.get('.block-item').eq(5).find('p').should('contain', 'Gazlı İçecek');
  });
});
