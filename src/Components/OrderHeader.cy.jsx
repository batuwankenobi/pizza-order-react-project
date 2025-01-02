import React from 'react';
import OrderHeader from './OrderHeader';

describe('<OrderHeader />', () => {
  it('renders and contains the expected elements', () => {
    cy.mount(<OrderHeader />);

    // Header div'inin varlığını kontrol et
    cy.get('.OrderHeader').should('exist');

    // Görselin doğru şekilde yüklendiğini kontrol et
    cy.get('img').should('have.attr', 'src').and('include', 'form-banner.png');

    // Favori pizza başlığının doğru metni içerdiğini kontrol et
    cy.get('.favorite-text h5').should('contain', 'Position Absolute Acı Pizza');

    // Fiyatın doğru olduğunu doğrula
    cy.get('.mini-text .bold').should('contain', '85₺');

    // Puanın doğru olduğunu kontrol et
    cy.get('.mini-text p').eq(1).should('contain', '4.9');

    // Yorum sayısının doğru olduğunu kontrol et
    cy.get('.mini-text p').eq(2).should('contain', '(200)');

    // Pizza açıklamasının doğru olduğunu kontrol et
    cy.get('.favorite p').should('contain', 'Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre.');
  });
});
