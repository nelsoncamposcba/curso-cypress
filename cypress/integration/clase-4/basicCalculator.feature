Feature: TestSuite Basic Calculator

@Add
Scenario: Operación de suma
    Given en la pagina principal Basic Calculator
    When se ingresa los numeros "1" y "2"
    When se selecciona la operacion "Add"
    When presiono en calcular
    Then el resultado es "3"