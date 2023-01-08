describe("todo list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("displays the correct heading", () => {
    cy.contains("Ember Phoenix Todo List");
  });

  it("can create a new todo", () => {
    cy.get('input[type="text"]').type("My new todo");
    cy.contains("Create Todo")
      .click()
      .then(($myElement) => {
        cy.get("ul")
          .contains("My new todo")
          .should("exist")
          .then(($myElement) => {
            cy.cleanUpTodo("My new todo");
          });
      });
  });

  it("can toggle whether a todo is completed", () => {
    cy.get('input[type="text"]').type("My todo to complete");
    cy.contains("Create Todo")
      .click()
      .then(($myElement) => {
        cy.contains("My todo to complete")
          .siblings()
          .get('input[type="checkbox"]')
          .check()
          .should("be.checked")
          .then(($myElement) => {
            cy.contains("My todo to complete")
              .siblings()
              .get('input[type="checkbox"]')
              .uncheck()
              .should("not.be.checked");
          })
          .then(($myElement) => {
            cy.cleanUpTodo("My todo to complete");
          });
      });
  });

  it("can delete a todo", () => {
    cy.get('input[type="text"]').type("My todo to destroy");
    cy.contains("Create Todo")
      .click()
      .then(($myElement) => {
        cy.get("ul")
          .contains("My todo to destroy")
          .siblings()
          .contains("Delete")
          .click()
          .then(($myElement) => {
            cy.get("ul").contains("My todo to destroy").should("not.exist");
          });
      });
  });
});

// // Cleanup helper. Todo: clean up the todo without using the UI.
// function cleanUpTodo(todoText) {
//   // cy.wait(500); // Wait to ensure that the todo exists in the DOM.
//   cy.contains(todoText)
//     .siblings()
//     .contains("Delete")
//     .click()
//     .then(($myElement) => {
//       // cy.wait(500);
//       cy.get("ul").contains(todoText).should("not.exist");
//     });
// }
