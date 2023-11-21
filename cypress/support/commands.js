// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickAndWait', (locator, timeout) => {
  cy.get(locator).click({ force: true });
  cy.wait(timeout);
});

Cypress.Commands.add('typeAndWait', (locator, text, timeout) => {
  cy.get(locator).type(text, { force: true });
  cy.wait(timeout);
});
Cypress.Commands.add('statusCheck', (urlName) => {
  cy.request(urlName).then((response) => {
    expect(response.status).to.eq(200);
  });
});
