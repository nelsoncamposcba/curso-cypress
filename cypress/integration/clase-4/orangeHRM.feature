Feature: TestSuite Orange HRM

    @Simple
    Scenario: Inicio de sesión exitoso
        Given en la pagina "https://opensource-demo.orangehrmlive.com/"
        When ingreso el usuario "Admin" y password "admin123"
        Then visualizo el mensaje "Welcome Paul"


    Scenario Outline: Inicio de sesión exitoso con ejemplo
        Given en la pagina "<url>"
        When ingreso el usuario "<user_name>" y password "<user_password>"
        Then visualizo el mensaje "<user>"
        Examples:
            | url                                        | user_name | user_password | user         |
            | https://opensource-demo.orangehrmlive.com/ | Admin     | admin123      | Welcome Paul |


    Scenario Outline: Inicio de sesión exitoso condicional
        Given en la pagina "<url>"
        When ingreso un usuario "<condicion>"
        Then visualizo el mensaje de bienvenida para el usuario
        Examples:
            | url                                        | condicion | 
            | https://opensource-demo.orangehrmlive.com/ | valido     | 

    Scenario Outline: Inicio de sesión fallido condicional
        Given en la pagina "<url>"
        When ingreso un usuario "<condicion>"
        Then visualizo el mensaje de error "Invalid credentials"
        Examples:
            | url                                        | condicion | 
            | https://opensource-demo.orangehrmlive.com/ | invalido     | 
