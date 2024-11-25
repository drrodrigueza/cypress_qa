class ProyectoUno_PO {

    visitWms() {
        cy.fixture('datos.json').then((datos) => {
            this.datos = datos
            cy.loggin(this.datos.usuario, this.datos.clave, 1500)
        })
    }

    recibo() {
        cy.fixture('datos.json').then((datos) => {
            cy.Click_force(this.datos.recibo, 1500)
        })
    }
}
    export default ProyectoUno_PO

