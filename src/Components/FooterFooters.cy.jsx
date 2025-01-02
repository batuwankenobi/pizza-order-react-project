import React from 'react'
import Footers from '../components/Footer'

describe('<Footers />', () => {
  it('renders the footer correctly', () => {
    cy.mount(<Footers />)

    // Check if the footer logo is rendered
    cy.get('img[alt="Footer Logo"]').should('be.visible')

    // Check if the contact info section is rendered (address, email, phone)
    cy.get('.footer-left .info').should('have.length', 3)

    // Check if the Instagram gallery section is rendered
    cy.get('.instagram-gallery').should('be.visible')

    // Check if the social media links are visible
    cy.get('.social-media a').should('have.length', 3)

    // Check if menu items are rendered
    cy.contains('Terminal Pizza').should('be.visible')
    cy.contains('useEffect Tavuklu Pizza').should('be.visible')
  })
})
