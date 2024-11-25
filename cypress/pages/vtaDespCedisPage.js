class VtaDespCedisPage{
    elements ={
        vtaDespachoBtn: () => cy.xpath("//h3[contains(.,'Gestión Venta con Despacho en CEDIS')]"),
        crearSolBtn:()=> cy.xpath("//h3[contains(.,'Crear solicitud')]"),
        buscarMatBtn: () => cy.xpath("//button[contains(.,'Buscar Materiales')]"),
        eanInput: () => cy.xpath("//input[@id='descripcion']"),
        buscarIconBtn: () => cy.xpath("//i[contains(@class,'icon icon-search')]"),
        agregarMatBtn: () => cy.xpath("//i[@class='icon icon-accept']"),
        carritoIconBtn: () => cy.xpath("//i[@class='icon icon-cart']"),
        almacenBtn: () => cy.xpath("(//span[contains(@class,'ng-arrow-wrapper')])[5]"),
        cedisBtn: () => cy.xpath("//b[contains(.,'CEDIS')]"),
        cantidadInput: () => cy.xpath("//input[@type='number']"),
        guardarBtn: () => cy.xpath("//button[contains(.,'Guardar')]"),
        selectDelivery: () => cy.xpath("//tbody/tr[1]/td[4]/select[1]"),
        opcionBtn: () => cy.xpath("//option[contains(., 'Delivery')]"),
        imprimirProfBtn: () => cy.xpath("//button[contains(.,'Imprimir Proforma')]"),
        cedulaInput: () => cy.xpath("//input[contains(@id,'cliente_id')]"),
        nombreInput: () => cy.xpath("//input[contains(@id,'cliente_nombre')]"),
        telefonoInput: () => cy.xpath("//input[contains(@id,'cliente_telefono')]"),
        GuardarBtn: () => cy.xpath("//button[@class='btn btn-safe mr-1'][contains(.,'Guardar')]"),

    }
    clickVtaDespacho() {
        this.elements.vtaDespachoBtn().scrollIntoView().should("be.visible").click()
    }
    clickCrearSol() {
        this.elements.crearSolBtn().should("be.visible").click()
    }
    clickBuscarMat() {
        this.elements.buscarMatBtn().should("be.visible").click()
    }
    inputEan(ean) {
        this.elements.eanInput().should("be.visible").type(ean).type("{enter}")
    }
    clickBuscarIcon() {
        this.elements.buscarIconBtn().should("be.visible").click()
    }
    clickAgregarMat() {
        this.elements.agregarMatBtn().should("be.visible").click()
    }
    clickCarritoIcon() {
        this.elements.carritoIconBtn().should("be.visible").click()
    }
    clickAlmacen() {
        this.elements.almacenBtn().should("be.visible").click()
    }
    clickCedis() {
        this.elements.cedisBtn().should("be.visible").click()
    }
    inputCantidad(cantidad) {
        this.elements.cantidadInput().should("be.visible").type(cantidad)
    }
    clickGuardar() {
        this.elements.guardarBtn().should("be.visible").click()
    }
    clickDelivery() {
        this.elements.deliveryBtn().should("be.visible").click()
    }
    selectDelivery(delivery) {
        this.elements.selectDelivery().should("be.visible").select(delivery)
    }
    clickOpcion() {
        this.elements.opcionBtn().should("be.visible").click()
    }
    clickImprimirProf() {
        this.elements.imprimirProfBtn().should("be.visible").click()
    }
    inputCedula(cedula) {
        this.elements.cedulaInput().should("be.visible").type(cedula)
    }
    inputNombre(nombre) {
        this.elements.nombreInput().should("be.visible").type(nombre)
    }
    inputTelefono(telefono) {
        this.elements.telefonoInput().should("be.visible").type(telefono)
    }
    clickGuardarBtn() {
        this.elements.GuardarBtn().should("be.visible").click()
}
submitVtaDespacho(area,ean,almacen,cantidad,delivery,cedula,nombre,telefono) {
    this.elements.vtaDespachoBtn().click()
    this.elements.crearSolBtn().click()
    this.elements.buscarMatBtn().click()
    this.elements.eanInput().type(ean)
    this.elements.buscarIconBtn().click()
    this.elements.agregarMatBtn().click()
    this.elements.carritoIconBtn().click()
    this.elements.selectAlmacen().select(almacen)
    this.elements.cantidadInput().type(cantidad)
    this.elements.guardarBtn().click()
    this.elements.selectDelivery().select(delivery)
    this.elements.imprimirProfBtn().click()
    this.elements.cedulaInput().type(cedula)
    this.elements.nombreInput().type(nombre)
    this.elements.telefonoInput().type(telefono)
    this.elements.GuardarBtn().click()
}
}
export const vtaDespCedisPage = new VtaDespCedisPage()