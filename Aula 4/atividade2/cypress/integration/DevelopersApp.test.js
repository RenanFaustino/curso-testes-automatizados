import Developers from '../components/DevelopersApp.js';

describe('Test App Developers Skills', () => {

    const data = require('../fixtures/developers.json');
    
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });


        it('should validate the fields and header', () => {
            //validate header
            Developers.validateHeader('Developers App')

            //validate input fields labels
            Developers.validateAllFieldsLabel(data.Labels);
            
            //validate Add Skill button
            cy.getAddButton().should('be.visible');
        });

        it.skip('should load skills list as the button is clicked', () => {
            //fill all input fields
            Developers.fillAllFields(data.SkillName, data.Developers, data.Technologies, data.Roles);

            //click in te add button
            cy.getAddButton().click();

            //validate if this list of skill is visible
            Developers.getSkillList().should('be.visible');
        });

        it('should be possible to type in all fields', () => {
            //fill all input fields
            Developers.fillAllFields(data.SkillName, data.Developers, data.Technologies, data.Roles);

            //validate if input filds have values
            Developers.validateAllInputFields(data.SkillName, data.Developers, data.Technologies, data.Roles);
        });

        it('verify Skill List data', () => {
            //verify item of list by column and row index
            
        });


        
    
});