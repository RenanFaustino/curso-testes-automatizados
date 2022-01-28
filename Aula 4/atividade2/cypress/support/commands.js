


// -- This will click in Add Skill button--
Cypress.Commands.add('clickAddButton', () => {
        return cy.get('#add-button').click();
})