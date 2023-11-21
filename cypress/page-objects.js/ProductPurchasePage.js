import { expect } from 'chai';
class ProductPurchase {
  constructor() {
    this.searchInput = 'input#twotabsearchtextbox';
    this.productName = 'iPhone';
    this.searchSubmitButton = 'input#nav-search-submit-button';
    this.firstProduct =
      '[data-index="3"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image';
    this.firstProductTitle = '[data-csa-c-pos="1"] .a-size-base-plus';
    this.detailProductTitle = '#productTitle';
    this.detailProductCost =
      '.a-spacing-none > .a-price > [aria-hidden="true"]';
    this.addToBasketButton = 'input#add-to-cart-button';
    this.goToBasketButton = 'span#sw-gtc  .a-button-text';
    this.basketProductCost = '.sc-product-price';
  }

  searchCheck() {
    cy.typeAndWait(this.searchInput, this.productName, 500);
    cy.clickAndWait(this.searchSubmitButton, 500);

    cy.get(this.firstProductTitle)
      .invoke('text')
      .then((firstProductText) => {
        cy.clickAndWait(this.firstProductTitle, 500);

        cy.get(this.detailProductTitle)
          .invoke('text')
          .then((detailProductText) => {
            cy.wrap(firstProductText.trim()).should(
              'eq',
              detailProductText.trim(),
            );
          });
      });
  }
  addProductToBasket() {
    cy.get(this.detailProductCost).then((detailProductCost) => {
      const detailProductCostText = detailProductCost.text();
      cy.log('detailProductCostText', detailProductCostText);
      const cleanedDetailProductCostText = cleanText(detailProductCostText);

      cy.clickAndWait(this.addToBasketButton, 500);
      cy.clickAndWait(this.goToBasketButton, 500);

      cy.get(this.basketProductCost).then((basketProductCost) => {
        const basketProductCostText = basketProductCost.text();
        cy.log('basketProductCostText', basketProductCostText);
        const cleanedBasketProductCost = cleanText(basketProductCostText);

        if (cleanedDetailProductCostText === cleanedBasketProductCost) {
          // Success scenario
          cy.log(
            'Success: Product cost in the basket is equal to the added product cost.',
          );
        } else {
          // Failure scenario
          throw new Error(
            'Failure: Product cost in the basket is NOT equal to the added product cost.',
          );
        }
      });
    });
    // Metni temizlemek için yardımcı fonksiyon
    function cleanText(text) {
      return text.replace(/\s/g, '').replace(/,00TL/g, '').trim();
    }
  }
}
export default new ProductPurchase();
