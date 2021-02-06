/// <reference types="cypress"/>

it("Should have newsfeed section selected", () => {
  cy.visit("http://template3.booost.bg/newsfeed");
  cy.get("#navigation-widget-small > .menu > :nth-child(1)").should(
    "have.class",
    "active"
  );
});

it("Should have bolded newsfeed banner font", () => {
  cy.visit("http://template3.booost.bg/newsfeed");
  cy.get(".section-banner-title")
    .should("have.css", "font-weight")
    .then(parseFloat)
    .and("be.greaterThan", 600);
});

it("Should have banner font bigger than it's text's font", () => {
  cy.visit("http://template3.booost.bg/newsfeed");
  cy.get(".section-banner-title")
    .should("have.css", "font-size")
    .then(parseFloat)
    .and("be.greaterThan", 30);
});

it("Should be able to type in the post field", () => {
  cy.visit("http://template3.booost.bg/newsfeed");
  cy.get("[data-cy=quick-post-text]")
    .type("Hello")
    .should("have.value", "Hello");
});

it("Should be able to scroll", () => {
  cy.visit("http://template3.booost.bg/newsfeed")
    .scrollTo("bottom")
    .window()
    .its("scrollY")
    .should("not.equal", 0);
});
