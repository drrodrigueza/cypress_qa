class Dev_proveedoresPage {
    elements={
        colectorBtn: () => cy.xpath("//div[@class='card-menu '][contains(.,'Colector')]"),
        devProveedorBtn: () => cy.xpath("(//h3[contains(.,'Devolución a Proveedor')])[1]"),
        selectArea: () => cy.xpath("//select[@id='area']"),
        materialInput: () => cy.xpath("//input[@id='Material']"),
        cantidadInput: () => cy.xpath("//input[@formcontrolname='cantidad']"),
        agregarBtn: () => cy.xpath("//button[contains(.,'Agregar material')]"),
        guardarBtn: () => cy.xpath("//button[contains(.,'Guardar')]"),
        finalizarBtn: () => cy.xpath("//button[@class='btn  btn btn-danger'][contains(.,'Finalizar')]"),
        selectImpresora: () => cy.xpath("//input[contains(@role,'combobox')]"),
        aceptarBtn: () => cy.xpath("//button[contains(.,'Aceptar')]"),
        errorMessage: () => cy.xpath("//div[contains(@aria-live,'polite')]"),
        bultoInput: () => cy.xpath("//input[@id='Bulto']"),
        gestionInvBtn: () => cy.xpath("//div[@class='card-menu '][contains(.,'Gestión de Inventario')]"),
        listadoDevBtn: () => cy.xpath("//div[@class='card-menu '][contains(.,'Listado Devolución a Proveedores')]"),
        selectEstatus: () => cy.xpath("(//select[contains(@name,'search-estado_str')])"),
        idDevBtn: () => cy.xpath("/html/body/app-root/block-ui/main/div[3]/div/app-listado-devolucion-proveedor/div/div/div/div/div/app-generic-datatable/div/div/div[2]/div/table/tbody/tr[1]/td[2]/a"),
        anularDevBtn: () => cy.xpath("//button[@class='btn btn-danger'][contains(.,'Anular Devolución')]"),
        anularBtn: () => cy.xpath("(//button[@class='btn btn-danger'])[2]"),
        aduanaDevBtn: () => cy.xpath("//div[@class='card-menu '][contains(.,'Aduana Devolución a Proveedor')]"),
        bultoDevInput: () => cy.xpath("//input[contains(@id,'paleta/bulto')]"),
        idBultoDevBtn: () => cy.xpath("//a[contains(text(),'6000')]")

    }

    clickColector() {
        this.elements.colectorBtn().should("be.visible").click()
    }
    clickDevProveedor() {
        this.elements.devProveedorBtn().should("be.visible").click()
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
    clickFinalizar() {
        this.elements.finalizarBtn().should("be.visible").click()
    }
    inputImpresora(impresora) {
        this.elements.selectImpresora().type(impresora).type("{enter}")
    }
    clickAceptar() {
        this.elements.aceptarBtn().should("be.visible").click()
    }
    inputBulto(bulto) {
        this.elements.bultoInput().should("be.visible").type(bulto).type("{enter}")
    }
    clickGestionInv() {
        this.elements.gestionInvBtn().should("be.visible").click()
    }
    clickListadoDev() {
        this.elements.listadoDevBtn().should("be.visible").click()
    }
    selectEstatus(estatus) {
        this.elements.selectEstatus().should("be.visible").select(estatus)
    }
    clickIdDev() {
        this.elements.idDevBtn().should("be.visible").click()
    }
    clickAnularDev() {
        this.elements.anularDevBtn().should("be.visible").click()
    }
    clickAnular() {
        this.elements.anularBtn().should("be.visible").click()
    }
    clickAduanaDev() {
        this.elements.aduanaDevBtn().should("be.visible").click()
    }
    typeBultoDev(bultoD) {
        this.elements.bultoDevInput().should("be.visible").type(bultoD).type("{enter}")
    }
    clickIdBultoDev() {
        this.elements.idBultoDevBtn().should("be.visible").click()
    }
submitDevolucion(area,material,cantidad,impresora,bulto,estatus,bultoD) {
    this.elements.loginBtn().click()
    this.elements.colectorBtn().click()
    this.elements.crearMermaBtn().click()
    this.elements.selectArea().select(area)
    this.elements.materialInput().type(material)
    this.elements.cantidadInput().type(cantidad)
    this.elements.agregarBtn().click()
    this.elements.guardarBtn().click()
    this.elements.finalizarBtn().click()
    this.elements.selectImpresora().type(impresora)
    this.elements.aceptarBtn().click()
    this.elements.bultoInput().type(bulto)
    this.elements.finalizarBtn().click()
    this.elements.gestionInvBtn().click()
    this.elements.listadoDevBtn().click()
    this.elements.selectEstatus(estatus)
    this.elements.idDevBtn().click()
    this.elements.anularDevBtn().click()
    this.elements.anularBtn().click()
    this.elements.bultoDevInput(bultoD)
}
}

export const devolucionPage = new Dev_proveedoresPage()