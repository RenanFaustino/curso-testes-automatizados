/* eslint-disable testing-library/await-async-utils */
import Developers from '../components/DevelopersApp.js';

describe('Test App Developers Skills', () => {

    const skillName = 0
    const developers = 1
    const technologies = 2
    const roles = 3

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

        it('verify if the Add Skill button is disabled when input fields are empty', () => {
            //verify if the button is disabled
            cy.getAddButton().should('be.disabled')
        });

        it('should load skills list as the button is clicked', () => {
            //fill all input fields
            Developers.fillAllFields(data.SkillName, data.Developers, data.Technologies, data.Roles);

            //click in te add button
            cy.getAddButton().click();

            //wait for the skill list load
            cy.intercept('GET', '**/skill*').as('skillList')
            cy.wait('@skillList')

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
            //fill all input fields
            Developers.fillAllFields(data.SkillName, data.Developers, data.Technologies, data.Roles);

            //click in te add button
            cy.getAddButton().click();

            //wait for the skill list load
            cy.intercept('GET', '**/skill*').as('skillList')
            cy.wait('@skillList')

            //verify item of list by column and row index
            Developers.getSkillList().should('be.visible');
            Developers.validateSkillListDataByColumnAndRow( 0, skillName, data.defaultSkillName)
            Developers.validateSkillListDataByColumnAndRow( 0, developers, data.defaultDevelopers)
            Developers.validateSkillListDataByColumnAndRow( 0, technologies, data.defaultTechnologies)
            Developers.validateSkillListDataByColumnAndRow( 0, roles, data.defaultRoles)
            
        });
});