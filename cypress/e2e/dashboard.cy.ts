describe("Dashboard Transactions Test", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/transactions", {
      fixture: "transactions.json",
    }).as("getTransactions");

    cy.visit("/");
  });

  it("should display a list of transactions", () => {
    cy.wait("@getTransactions");
    cy.get("table tbody tr").should("have.length.greaterThan", 0);

    cy.get("table tbody tr")
      .first()
      .within(() => {
        cy.get("td").eq(0).should("contain.text", "approved");
        cy.get("td").eq(1).should("contain.text", "23-01-01 02:00");
      });
  });
});
