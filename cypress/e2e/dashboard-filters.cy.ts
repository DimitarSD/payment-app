describe("Dashboard Filter Test", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/transactions", {
      fixture: "transactions.json",
    }).as("getTransactions");

    cy.visit("/");
    cy.wait("@getTransactions");
  });

  it("should allow adding a filter and update the table results", () => {
    cy.get("select").eq(0).select("status");
    cy.get("select").eq(1).select("contains");
    cy.get('input[type="text"]').type("approved");
    cy.get("button").contains("Add Filter").click();

    cy.get("table tbody tr").then(($rows) => {
      console.log("Number of rows after filter:", $rows.length);
    });

    cy.get("table tbody tr").should("have.length", 1);
  });
});
