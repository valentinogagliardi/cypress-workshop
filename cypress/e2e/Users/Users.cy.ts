context("Application", () => {
  describe("User list", () => {
    it("[Insert persona here] can access the user list", () => {
      cy.visit("/users");
      cy.contains(/leanne graham/i);
    });
  });
});
