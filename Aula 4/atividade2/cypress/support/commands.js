


// -- This will click in Add Skill button--
Cypress.Commands.add('getAddButton', () => {
        return cy.get('#add-button');
})