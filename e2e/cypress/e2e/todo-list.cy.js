describe("todo list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("displays the correct heading", () => {
    cy.contains("Ember Phoenix Todo List");
  });

  it("can create a new todo", () => {
    cy.get('input[type="text"]').type("My new todo");
    cy.contains("Create Todo").click();
    cy.get("ul").contains("My new todo").should("exist");

    cleanUpTodo("My new todo");
  });

  it("can toggle whether a todo is completed", () => {
    cy.get('input[type="text"]').type("My todo to complete");
    cy.contains("Create Todo").click();
    cy.contains("My todo to complete")
      .siblings()
      .get('input[type="checkbox"]')
      .check()
      .should("be.checked")
      .uncheck()
      .should("not.be.checked");

    cleanUpTodo("My todo to complete");
  });

  it("can delete a todo", () => {
    cy.get('input[type="text"]').type("My todo to delete");
    cy.contains("Create Todo").click();
    cy.get("ul")
      .contains("My todo to delete")
      .siblings()
      .contains("Delete")
      .click();

    cy.get("ul").contains("My todo to delete").should("not.exist");
  });
});

// Cleanup helper. Todo: clean up the todo without using the UI.
function cleanUpTodo(todoText) {
  cy.wait(500); // Wait to ensure that the todo exists in the DOM.
  cy.contains(todoText).siblings().contains("Delete").click();
  cy.get("ul").contains(todoText).should("not.exist");
}
