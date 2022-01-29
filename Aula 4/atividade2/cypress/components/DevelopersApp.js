class Developers {
    fillAllFields(skillName, developer, technologies, roles){
        cy.get('#skill').click({force: true}).type(skillName);
        cy.get('#developers').click({force: true}).type(developer);
        cy.get('#technologies').click({force: true}).type(technologies);
        cy.get('#roles').click({force: true}).type(roles);
    }

    validateAllInputFields(skillName, developer, technologies, roles){
        cy.get('#skill').should('have.value', skillName);
        cy.get('#developers').should('have.value', developer);
        cy.get('#technologies').should('have.value', technologies);
        cy.get('#roles').should('have.value', roles);
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

    validateFieldLabel(label, index){
            cy.get('[class="container"]')
            .find('th')
            .eq(index)
            .should('have.text', label)
    };

    /**
     * @param {string} labels - string vector
     */
    validateAllFieldsLabel(labels){
        for (let i = 0; i < labels.length; i++) {
            this.validateFieldLabel(labels[i], i)
        }
    }

    getSkillListDataByColumnAndRow(column, rowindex){
        return cy.get('[class="grid data"]').eq(column).find('div').eq(rowindex);
    };
}

export default new Developers();
