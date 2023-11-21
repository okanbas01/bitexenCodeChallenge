/// <reference types="cypress" />
import LoginPage from '../page-objects.js/LoginPage';
import ProductPurchase from '../page-objects.js/ProductPurchasePage';
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Favorite Product Tests', () => {
  beforeEach(() => {
    LoginPage.login();
  });

  it('Amazon Product Purchase Flow', () => {
    ProductPurchase.searchCheck();
    ProductPurchase.addProductToBasket();
  });
});
