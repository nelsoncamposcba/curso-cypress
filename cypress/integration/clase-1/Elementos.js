/// <reference types="cypress" />

describe('TestSuite para Utilizar elementos', () => {
    it('Dropdown', () => {
        cy.visit('http://the-internet.herokuapp.com/dropdown')

        cy.get('#dropdown').select('2')

        cy.wait(10000)

        cy.get('#dropdown').select('Option 1')

    })


    it('Textbox and Button and Label', () => {
        cy.visit('http://the-internet.herokuapp.com/login')

        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')

        cy.get('.radius').click()


        cy.get('#flash').should('be.visible').should('contain.text', 'You logged into a secure area!')

        cy.get('.subheader').should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.')

        cy.get('.button').should('be.visible').click()

        cy.get('.radius').should('be.visible')

        cy.get('#flash > a').click({force:true})
    })

})