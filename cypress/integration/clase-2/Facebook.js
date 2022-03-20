/// <reference types="cypress" />

require('cypress-xpath')



describe('TestSuite Facebook', () => {
    it('Registrar usuario nuevo', () => {
        cy.visit('https://facebook.com')

        cy.get('[data-testid="open-registration-form-button"]').click()

        
        cy.xpath('//input[@name="firstname"]').wait(5000).should('be.visible').type('Nelson')
        cy.xpath('//input[@name="lastname"]').should('be.visible').type('Campos')

        cy.xpath('//input[@aria-label="Número de móvil o correo electrónico"]').should('be.visible').type('nelsoncampos@ggmail.com')
        cy.xpath('//input[@name="reg_email_confirmation__"]').should('be.visible').type('nelsoncampos@ggmail.com')


        cy.xpath('//input[@name="reg_passwd__"]').should('be.visible').type('Granizo2021!')
        cy.xpath('//select[@id="day"]').should('be.visible').select('11')
        cy.xpath('//select[@id="month"]').should('be.visible').select('8')
        cy.xpath('//select[@id="year"]').should('be.visible').select('1992')
        cy.xpath('//input[@value="2"]').should('be.visible').click()


        cy.xpath('//button[@name="websubmit"]').should('be.visible').click()


        cy.get('#reg_error_inner').should('have.text', 'Has introducido un correo electrónico no válido. Comprueba tu dirección de correo electrónico y vuelve a intentarlo.')
    })
})