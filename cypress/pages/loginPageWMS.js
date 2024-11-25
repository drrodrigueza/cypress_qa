
class LoginPageWMS {

    elements = {
      usernameInput: () => cy.get("#nro_personal"),
      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get(".btn"),
      inicioBtn: () => cy.xpath("//a[@routerlink='/inicio'][contains(.,'WMS de CEDIS')]")
  
    }
  
    typeUsername(username) {
      this.elements.usernameInput().should("be.visible").type(username)
    }
  
    typePassword(password) {
      this.elements.passwordInput().should("be.visible").type(password)
    }
  
    clickLogin() {
      this.elements.loginBtn().should("be.visible").click()
    }
    clickInicio() {
      this.elements.inicioBtn().should("be.visible").click()
    }
  
    submitLogin(username,password){
      this.elements.usernameInput().type(username)
      this.elements.passwordInput().type(password)
      this.elements.loginBtn().click()
      this.elements.inicioBtn().click()
    }
  }
  
  export const loginPageWMS = new LoginPageWMS()
  