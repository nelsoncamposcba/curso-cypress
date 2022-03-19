/// <reference types="cypress" />

require('cypress-xpath')



describe('TestSuite Facebook', () => {
    it('Navegacion', () => {
        cy.visit('https://facebook.com')

        cy.get('[data-testid="open-registration-form-button"]').click()


        cy.xpath('//input[@name="firstname"]').should('be.visible').type('Nelson')
        cy.xpath('//input[@name="lastname"]').should('be.visible').type('Campos')

        cy.xpath('//button[@name="websubmit"]').should('be.visible').click()
    })
})