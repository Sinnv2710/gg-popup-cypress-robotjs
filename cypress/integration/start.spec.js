const baseUrl = Cypress.config().baseUrl;
describe("go to url", () => {
  context("go to url", () => {
    it("go to url", () => {
      cy.visit(baseUrl);
      cy.get('button[type="submit"]').click();
      cy.wait(500).exec("yarn cy:robot")
      cy.wait(14000);
      cy.url().then(($url) => {
        expect($url).includes("dashboard", "login successfully")
      })
    })
  })
})
