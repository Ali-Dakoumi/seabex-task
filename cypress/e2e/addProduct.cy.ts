describe("add product to cart", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/products");
    cy.get("[data-testId=productCart-1]").trigger("mouseover");
    cy.get("[data-testId=addToCart-1]").click({ force: true });
    cy.get("[data-testId=totalItems]").should("contain", "1");
    cy.get("[data-testId=cart]").click();
    cy.get("[data-testId=product-title]").should(
      "contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get("[data-testId=total]").should("contain", "$129.95");
    cy.get("[data-testId=checkout]").click();
    cy.get("[data-testId=modal-title]").should("contain", "Checkout");
  });
});
