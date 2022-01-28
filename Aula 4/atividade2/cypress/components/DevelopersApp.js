class Developers {
    fillAllFields(skillName, developer, technologies, roles){
        cy.get('#skill').click({force: true}).type(skillName);
        cy.get('#developers').click({force: true}).type(developer);
        cy.get('#technologies').click({force: true}).type(technologies);
        cy.get('#roles').click({force: true}).type(roles);
    }

    getAddButton(){
        return cy.get('#add-button');
    };

    getSkillList(){
        return cy.get('[class="container"]').find('[class="grid data"]');
    };

    validateHeader(value){
        return cy.get('[class="App-header"]').contains(value);
    };

    validateFieldLabel(label){
            cy.get('[class="container"]')
            .find('[class="form"]')
            .find('[class="grid"]')
            .should('contains.text', label)
    };

    /**
     * @param {string} labels - string vector
     */
    validateAllFieldsLabel(labels){
        for (let i = 0; i < labels.length; i++) {
            this.validateFieldLabel(labels[i])
        }
    }
}

export default new Developers();
