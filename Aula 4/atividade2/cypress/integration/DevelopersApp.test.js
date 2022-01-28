import Developers from '../components/DevelopersApp.js';

describe('Test App Developers Skills', () => {

    const data = require('../fixtures/developers.json');
    const allValues =  data.SkillName + data.Developers + data.Technologies + data.Roles;
    

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

  describe('Validate Form', () => {


        it('should validate the fields on header', () => {
            //validate header
            Developers.validateHeader('Developers App')

            //validate input fields labels
            Developers.validateAllFieldsLabel(data.Labels);
            
            //validate Add Skill button
            Developers.getAddButton().should('be.visible');
        });

        it('should load skills list as the button is clicked', () => {
            Developers.getAddButton().click();

            //validate if this list of skill is visible
            Developers.getSkillList().should('be.visible');
        });
    });
});