/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../../../support/pageobject/orangeHRM/loginPage'

const list_users = require('../../../fixtures/credencialesOrangeHRM.json')
let user

Given("en la pagina {string}", (url) => {
    cy.visit(url)
})

When("ingreso el usuario {string} y password {string}", (user_name, user_password) => {
    loginpage.type_username(user_name)
    loginpage.type_password(user_password)
    loginpage.click_login()
})

Then("visualizo el mensaje {string}", (message) => {
    loginpage.elementos.lbl_user().should('contain.text', message)
})

When("ingreso un usuario {string}", (condicion) => {
    list_users.forEach((user_x) => {
        if(user_x.user_condicion == condicion){
            user = user_x

            loginpage.type_username(user_x.user_name)
            loginpage.type_password(user_x.user_password)
            loginpage.click_login()
        }
    })
})


Then ("visualizo el mensaje de bienvenida para el usuario", () => {
    loginpage.elementos.lbl_user().should('contain.text', user.message)
})


Then("visualizo el mensaje de error {string}", (message) => {
    loginpage.elementos.lbl_message().should('contain.text', message)
})
