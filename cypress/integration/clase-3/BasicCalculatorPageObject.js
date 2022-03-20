/// <reference types="cypress" />

import basicCalculator from '../../support/pageobject/basicCalculator/calculatorPage'

describe('TestSuite para Basic Calculator', () => {

    beforeEach(() => {
        basicCalculator.visit()
    })

    it('Realizar la suma entre dos numeros', () => {
        //basicCalculator.visit()

        basicCalculator.type_number_one('1')
        basicCalculator.type_number_two('1')

        basicCalculator.select_operation('Add')

        basicCalculator.click_calculate()
        
        basicCalculator.elementos.txt_result().should('contain.value', '2')
    })

    it('Realizar la resta entre dos numeros', () => {
        basicCalculator.type_number_one('1')
        basicCalculator.type_number_two('1')

        basicCalculator.select_operation('1')

        basicCalculator.click_calculate()
        
        basicCalculator.elementos.txt_result().should('have.value', '0')

    })

    it('Realizar la multiplicacion entre dos numeros', () => {
        basicCalculator.type_number_one('1')
        basicCalculator.type_number_two('1')

        basicCalculator.select_operation('Multiply')

        basicCalculator.click_calculate()
        
        basicCalculator.elementos.txt_result().should('contain.value', '1')
    })

    it('Realizar la division entre dos numeros', () => {
        basicCalculator.type_number_one('1')
        basicCalculator.type_number_two('1')

        basicCalculator.select_operation('3')

        basicCalculator.click_calculate()
        
        basicCalculator.elementos.txt_result().should('contain.value', '1')
    })

    it('Realizar la concatenacion entre dos numeros', () => {
        basicCalculator.type_number_one('1')
        basicCalculator.type_number_two('1')

        basicCalculator.select_operation('Concatenate')

        basicCalculator.click_calculate()
        
        basicCalculator.elementos.txt_result().should('contain.value', '11')
    })

})