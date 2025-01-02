import React from 'react'
import Content from './Content'

describe('<Content />', () => {
  it('renders correctly', () => {
    // React bileşenini render et
    cy.mount(<Content />)
    
    // Ana başlıkların render edildiğini kontrol et
    cy.get('h1').contains('Özel Lezzetus')
    cy.get('h2').contains('Position:Absolute Acı Burger')

    // Diğer kart başlıklarını kontrol et
    cy.get('.box2 h2').contains('Hackathlon')
    cy.get('.box3 h2').contains('Çoooook hızlı')

    // Menü seçeneklerinin render edildiğini kontrol et
    cy.get('.button-container .btn-card').should('have.length', 6)  // Menü butonlarını kontrol et

    // Favori ürünlerin doğru şekilde render edilip edilmediğini kontrol et
    cy.get('.favorite').should('have.length', 3)
    cy.get('.favorite-text h5').eq(0).should('contain.text', 'Terminal Pizza')
    cy.get('.favorite-text h5').eq(1).should('contain.text', 'Position Absolute Acı Pizza')
    cy.get('.favorite-text h5').eq(2).should('contain.text', 'useEffect Tavuklu Burger')
  })
})
