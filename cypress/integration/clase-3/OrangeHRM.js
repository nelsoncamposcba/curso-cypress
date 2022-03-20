/// <reference types="cypress" />

import loginPage from '../../support/pageobject/orangeHRM/loginPage'

describe('TestSuite para Orange HRM', () => {

    it('Login exitoso', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')

        cy.get('#btnLogin').click()

        cy.get('#welcome').should('be.visible').should('contain.text','Welcome Paul')
    })

    it('Login exitoso - Page Object', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginPage.type_username('Admin')
        loginPage.type_password('admin123')

        loginPage.click_login()

        loginPage.elementos.lbl_user().should('contain.text', 'Welcome Paul')
    })

    it('Login exitoso - Fixture', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.fixture('credencialOrangeHRM.json').then(credencial => {
            loginPage.type_username(credencial.user_name)
            loginPage.type_password(credencial.password)
    
            loginPage.click_login()
    
            loginPage.elementos.lbl_user().should('contain.text', 'Welcome Paul')
        })
    })
})