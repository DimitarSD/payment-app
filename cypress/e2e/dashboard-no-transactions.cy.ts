describe("Dashboard No Transactions Test", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/transactions", {
      fixture: "no-transactions.json",
    }).as("getNoTransactions");

    cy.visit("/");
    cy.wait("@getNoTransactions");
  });

  it("should show no rows in the table when there are no transactions", () => {
    cy.get("table tbody tr").should("have.length", 0);
  });
});
