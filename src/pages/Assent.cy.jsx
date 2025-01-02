import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Assent from './Assent';

describe('<Assent />', () => {
  it('renders with mock order data and calculates totals correctly', () => {
    const mockLocationState = {
      orderData: {
        orderId: '12345',
        pizzaName: 'Position Absolute Acı Pizza',
      },
      formData: {
        name: 'Batuhan Bebek',
        size: { value: 'Orta' },
        dough: { value: 'İnce' },
        ingredients: { value: ['Zeytin', 'Sucuk', 'Mantar'] },
        note: 'Lütfen çok acı olsun.',
        quantity: 2,
      },
    };

    cy.mount(
      <MemoryRouter initialEntries={['/assent']} initialIndex={0}>
        <Assent location={{ state: mockLocationState }} />
      </MemoryRouter>
    );

    // Sipariş başlıklarını ve bilgilerini kontrol ediyoruz.
    cy.contains('lezzetin yolda');
    cy.contains('SİPARİŞİNİZ ALINDI');
    cy.contains('Position Absolute Acı Pizza');
    cy.contains('Ad-Soyad: Batuhan Bebek');
    cy.contains('Boyut: Orta');
    cy.contains('Hamur: İnce');
    cy.contains('Malzemeler: Zeytin, Sucuk, Mantar');
    cy.contains('Not: Lütfen çok acı olsun.');
    cy.contains('Adet: 2');

    // Hesaplama verilerini kontrol ediyoruz.
    const choose = (mockLocationState.formData.ingredients.value.length * 5) * mockLocationState.formData.quantity; // Malzeme başına ek ücret
    const total = mockLocationState.formData.quantity * 85.50 + choose; // Toplam fiyat (pizza başına 85.50₺ ve seçim ücreti)

    cy.contains(`Seçimler: ${choose} ₺`);
    cy.contains(`Toplam: ${total} ₺`);
  });
});
