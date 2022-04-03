class LoginPage {

    elementos = {
            txt_userName : () => cy.get('#txtUsername'),
            txt_password: () => cy.get('#txtPassword'),
            btn_login: () => cy.get('#btnLogin'),
            lbl_user: () => cy.get('#welcome'),
            lbl_message: () => cy.get('#spanMessage')
        }
        
        type_username(name){
            this.elementos.txt_userName().type(name)
        }
        type_password(pass){
            this.elementos.txt_password().type(pass)
        }
        
        click_login(){
            this.elementos.btn_login().click()
        }

}

module.exports = new LoginPage();