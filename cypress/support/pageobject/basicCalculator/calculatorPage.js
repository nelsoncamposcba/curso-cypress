class CalculatorPage {
    elementos = {
            txt_number_one : () => cy.get('#number1Field'),
            txt_number_two: () => cy.get('#number2Field'),
            dropdown_operation: () => cy.get('#selectOperationDropdown'),
            btn_calculate: () => cy.get('#calculateButton'),
            txt_result: () => cy.get('#numberAnswerField')
        }

        visit(){
            cy.visit('https://testsheepnz.github.io/BasicCalculator.html')
        }

        type_number_one(number){
            this.elementos.txt_number_one().type(number)
        }

        type_number_two(number){
            this.elementos.txt_number_two().type(number)
        }

        select_operation(value){
            this.elementos.dropdown_operation().select(value)
        }

        click_calculate(){
            this.elementos.btn_calculate().click()
        }
}

module.exports = new CalculatorPage()