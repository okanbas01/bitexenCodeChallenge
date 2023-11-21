class LoginPage {
  constructor() {
    this.baseUrl = 'https://www.amazon.com.tr/';
    this.loginContainer = '[data-csa-c-content-id="nav_ya_signin"]';
    this.emailInput = 'input#ap_email';
    this.emailContinue = 'input#continue';
    this.passwordInput = 'input#ap_password';
    this.email = 'testowner@pretreer.com';
    this.password = 'test1234';
    this.submit = 'input#signInSubmit';
    this.loginUserNameArea = '[id="nav-link-accountList-nav-line-1"]';
  }

  login() {
    cy.visit(this.baseUrl);
    cy.wait(1000);
    cy.url().should('eq', this.baseUrl);
    cy.request(this.baseUrl).then((response) => {
      expect(response.status).to.eq(200);
    });

    cy.clickAndWait(this.loginContainer, 1000);
    cy.typeAndWait(this.emailInput, this.email, 500);
    cy.clickAndWait(this.emailContinue, 500);
    cy.typeAndWait(this.passwordInput, this.password, 500);
    cy.clickAndWait(this.submit, 1000);
    cy.get(this.loginUserNameArea).should('contain', 'Test');
  }
}
export default new LoginPage();
