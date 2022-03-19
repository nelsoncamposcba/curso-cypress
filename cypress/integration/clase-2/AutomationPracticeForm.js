/// <reference types="cypress" />

describe('TestSuite para Automation Practice Form', () => {
    it('Registro de Estudiante correcto', () => {
        cy.visit('https://demoqa.com/automation-practice-form')

        cy.get('#firstName').type('Nelson')
        cy.get('#lastName').type('Campos')
        cy.get('#userEmail').type('nelsoncampos@ggmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('3518103809')
        //cy.get('#dateOfBirthInput').type('11 Aug 1992')
        //cy.get('#dateOfBirthInput').clear()
        cy.get('#submit').click({force:true})

        cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form')

        cy.wait(5000)

        cy.get('#closeLargeModal').click({force:true})
    })
})