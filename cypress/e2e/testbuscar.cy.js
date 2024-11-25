import {loginPageWMS} from "@pages/loginPageWMS";

require('cypress-xpath')
require('cypress-plugin-tab')
// require('../support/hooks')
import 'cypress-file-upload'
import {devolucionPage} from "@pages/dev_proveedoresPage";

describe('hooks', () => {
    let tiempo = 1500
    before(() => {
        cy.loggin("6334", "Shalom2021",tiempo)
    })

    it('Test descripción', () => {
        let tiempo = 1500
        cy.wait(tiempo)
        cy.buscar_bulto_dev( 1500)
        cy.escanear_bulto(1500)
        // After(() => {
        //     cy.log("Test finalizado")
        // })
    })
})