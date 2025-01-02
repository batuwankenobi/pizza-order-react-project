import React from "react";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    cy.mount(<App />); // Bileşeni mount ediyoruz

    // Sayfa render edildiğinde kontrol edilecek bazı içerikler
    cy.contains("Home Page Content"); // Ana sayfadaki içerik
    cy.contains("Order Page Content"); // Sipariş sayfasındaki içerik
    cy.contains("Success Page Content"); // Başarılı işlem sayfasındaki içerik
  });

  it("should navigate to the order page", () => {
    cy.mount(<App />); // Bileşeni mount ediyoruz

    // Ana sayfada "Order" sayfasına gitmek için linki tıklıyoruz
    cy.get('a[href="/order"]').click();

    // Sipariş sayfasının düzgün yüklendiğini kontrol ediyoruz
    cy.url().should("include", "/order");
    cy.contains("Order Page Content");
  });

  it("should navigate to the success page after order", () => {
    cy.mount(<App />); // Bileşeni mount ediyoruz

    // Sipariş sayfasına gidiyoruz
    cy.get('a[href="/order"]').click();

    // Sipariş işlemi sonrası başarı sayfasına gitmeyi simüle ediyoruz
    cy.get('a[href="/success"]').click();

    // Başarı sayfasının düzgün yüklendiğini kontrol ediyoruz
    cy.url().should("include", "/success");
    cy.contains("Success Page Content");
  });
});
