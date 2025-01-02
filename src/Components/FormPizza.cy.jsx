import React from 'react'
import FormPizza from './FormPizza'

describe('<FormPizza />', () => {
  it('renders', () => {
    // Mount the FormPizza component
    cy.mount(<FormPizza />)

    // Ensure the form and required fields are rendered
    cy.get('form.form-pizza').should('exist');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="size"]').should('exist');
    cy.get('input[name="ingredients"]').should('exist');
    cy.get('textarea[name="note"]').should('exist');
  });

  it('validates form fields', () => {
    cy.mount(<FormPizza />);

    // Try submitting the form with empty fields (should show validation errors)
    cy.get('button[type="submit"]').click();
    cy.get('.error-name').should('contain', 'İsim 3 karakterden az olamaz.');
    cy.get('.error-size').should('contain', 'Lütfen boyut seçiniz.');
    cy.get('.error-dough').should('contain', 'Lütfen hamur kalınlığını seçiniz.');
  });

  it('submits the form correctly', () => {
    cy.mount(<FormPizza />);

    // Mock the showHappyToast function to prevent the ReferenceError
    cy.stub(window, 'showHappyToast').callsFake(() => {});

    // Fill the form fields to enable the submit button
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="size"]').check('M'); // Assuming 'M' is a valid size option
    cy.get('input[name="dough"]').check('thin'); // Assuming 'thin' is a valid dough option
    cy.get('input[name="ingredients"]').check('cheese'); // Assuming 'cheese' is a valid ingredient option
    cy.get('textarea[name="note"]').type('Extra spicy');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Check if the form submission was successful
    cy.get('.success-message').should('contain', 'Siparişiniz başarıyla gönderildi');
  });

  it('handles quantity changes correctly', () => {
    cy.mount(<FormPizza />);

    // Interact with the quantity field (assuming there's a quantity input in the form)
    cy.get('input[name="quantity"]').clear().type('2');

    // Check if the quantity is updated
    cy.get('input[name="quantity"]').should('have.value', '2');
  });
});
