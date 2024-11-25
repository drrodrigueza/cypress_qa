class MermaPage {
    elements={
        colectorBtn: () => cy.xpath("//div[@class='card-menu '][contains(.,'Colector')]").should("be.visible"),
        crearMermaBtn: () => cy.xpath("//div[@class='card-menu '][contains(.,'Crear Merma')]").should("be.visible"),
        selectArea: () => cy.xpath("//select[@id='area']").should("be.visible"),
        materialInput: () => cy.xpath("//input[@id='Material']").should("be.visible"),
        cantidadInput: () => cy.xpath("//input[@formcontrolname='cantidad']").should("be.visible"),
        agregarBtn: () => cy.xpath("//button[contains(.,'Agregar material')]").should("be.visible"),
        guardarBtn: () => cy.xpath("//button[contains(.,'Guardar')]").scrollIntoView().should("be.visible"),
        selectImpresora: () => cy.xpath("//input[contains(@role,'combobox')]").should("be.visible"),
        aceptarBtn: () => cy.xpath("//button[contains(.,'Aceptar')]").should("be.visible"),
        errorMessage: () => cy.xpath("//div[contains(@aria-live,'polite')]").should("be.visible"),
        auditoriaBtn: () => cy.xpath("//div[@class='card-menu '][contains(.,'Gestión de Auditoría')]").should("be.visible"),
        listadoMermaBtn: () => cy.xpath("//div[@class='card-menu '][contains(.,'Listado de Merma')]").scrollIntoView().should("be.visible"),
        selectEstatus: () => cy.xpath("//select[@name='search-estado_str']").should("be.visible"),
        idMermaBtn: () => cy.xpath("(//a[@class='ng-star-inserted'])[1]").should("be.visible"),
        checkBoxInput: () => cy.xpath("//input[@name='cbColumn']").should("be.visible"),
        aprobarBtn: () => cy.xpath("//button[contains(.,'Aprobar')]").should("be.visible"),
        rechazarMermaBtn: () => cy.xpath("//button[contains(.,'Rechazar')]").should("be.visible"),
        anularMermaBtn: () => cy.xpath("//button[contains(.,'Anular')]").should("be.visible"),
        anularConfirmBtn: () => cy.xpath("//button[@class='btn btn-danger'][contains(.,'Anular')]"),

    }

    clickColector() {
        this.elements.colectorBtn().should("be.visible").click()
    }
    clickCrearMerma() {
        this.elements.crearMermaBtn().should("be.visible").click()
    }
    selectArea(area) {
        this.elements.selectArea().select(area)
    }
    inputMaterial(material) {
        this.elements.materialInput().should("be.visible").type(material).type("{enter}")
    }
    inputCantidad(cantidad) {
        this.elements.cantidadInput().should("be.visible").type(cantidad).type("{enter}")
    }
    clickAgregarMaterial() {
        this.elements.agregarBtn().should("be.visible").click()
    }
    clickGuardar() {
        this.elements.guardarBtn().should("be.visible").click()
    }
    inputImpresora(impresora) {
        this.elements.selectImpresora().type(impresora).type("{enter}")
    }
    clickAceptar() {
        this.elements.aceptarBtn().should("be.visible").click()
    }
    clickAuditoria() {
        this.elements.auditoriaBtn().should("be.visible").click()
    }
    clickListadoMerma() {
        this.elements.listadoMermaBtn().should("be.visible").click()
    }
    selectEstatus(estatus) {
        this.elements.selectEstatus().should("be.visible").select(estatus)
    }
    clickIdMerma() {
        this.elements.idMermaBtn().should("be.visible").click()
    }
    clickCheckBox() {
        this.elements.checkBoxInput().should("be.visible").click()
    }
    clickAprobar() {
        this.elements.aprobarBtn().should("be.visible").click()
    }
    clickRechazarMerma() {
        this.elements.rechazarMermaBtn().should("be.visible").click()
    }
    clickAnularMerma() {
        this.elements.anularMermaBtn().should("be.visible").click()
    }
    clickAnularConfirm() {
        this.elements.anularConfirmBtn().should("be.visible").click()
    }

submitMerma(area,material,cantidad,impresora,estatus) {
    this.elements.loginBtn().click()
    this.elements.colectorBtn().click()
    this.elements.crearMermaBtn().click()
    this.elements.selectArea().select(area)
    this.elements.materialInput().type(material)
    this.elements.cantidadInput().type(cantidad)
    this.elements.agregarBtn().click()
    this.elements.guardarBtn().click()
    this.elements.selectImpresora().type(impresora)
    this.elements.aceptarBtn().click()
    this.elements.auditoriaBtn().click()
    this.elements.listadoMermaBtn().click()
    this.elements.selectEstatus(estatus)
    this.elements.idMermaBtn().click()
    this.elements.checkBoxInput().click()
    this.elements.aprobarBtn().click()
    this.elements.chitreBtn().click()
    this.elements.rechazarMermaBtn().click()
    this.elements.anularMermaBtn().click()
    this.elements.anularConfirmBtn().click()
}
}

export const mermaPage = new MermaPage()