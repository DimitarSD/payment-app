describe("Dashboard Sorting Test", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/transactions", {
      fixture: "transactions.json",
    }).as("getTransactions");

    cy.visit("/");
    cy.wait("@getTransactions");
  });

  it('should sort the table by the "Amount" column', () => {
    cy.get("th").contains("Amount").click();

    let previousAmount = 0;
    cy.get("table tbody tr").each(($row) => {
      cy.wrap($row)
        .find("td")
        .eq(7)
        .invoke("text")
        .then((text) => {
          const currentAmount = parseFloat(text.replace(/[^0-9.-]+/g, ""));
          expect(currentAmount).to.be.at.least(previousAmount);
          previousAmount = currentAmount;
        });
    });
  });
});
