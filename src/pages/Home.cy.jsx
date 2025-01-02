/// <reference types="cypress" />
import React from 'react'
import Home from './Home'

describe('<Home />', () => {
  it('renders', () => {
    cy.mount(<Home />)
    // Home bileşeninin render edilip edilmediğini kontrol et
    cy.get('body').should('be.visible')
  })

  it('renders Header component', () => {
    cy.mount(<Home />)
    // Header bileşeninin doğru şekilde render edildiğini kontrol et
    cy.get('header').should('exist')
  })

  it('renders Navbar component', () => {
    cy.mount(<Home />)
    // Navbar bileşeninin doğru şekilde render edildiğini kontrol et
    cy.get('nav').should('exist')
  })

  it('renders Content component', () => {
    cy.mount(<Home />)
    // Content bileşeninin doğru şekilde render edildiğini kontrol et
    cy.get('.content').should('exist')
  })

  it('renders Footer component', () => {
    cy.mount(<Home />)
    // Footer bileşeninin doğru şekilde render edildiğini kontrol et
    cy.get('footer').should('exist')
  })
  
  it('has correct page title', () => {
    cy.mount(<Home />)
    // Sayfa başlığının doğru olduğunu kontrol et
    cy.title().should('include', 'Expected title for Home page')
  })
})
