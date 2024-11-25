const { After } = require('@cucumber/cucumber')
const loginPageWMS = require('../pages/loginPageWMS')

After(() => {
    // Código que deseas ejecutar al final de cada escenario
    loginPageWMS.clickInicio()
    //cy.inicio(1500)
})