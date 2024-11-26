class VtaDespCedisPage {
    elements = {
        vtaDespachoBtn: () => cy.xpath("//h3[contains(.,'Gestión Venta con Despacho en CEDIS')]"),
        crearSolBtn: () => cy.xpath("//h3[contains(.,'Crear solicitud')]"),
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
        cedulaIdInput: () => cy.xpath("//input[contains(@id,'cedula')]"),
        cargarBtn: () => cy.xpath("//button[contains(.,'Cargar')]"),
        finalizarBtn: () => cy.xpath("//button[contains(.,'Finalizar')]"),
        facturaInput: () => cy.xpath("//input[@id='nro_factura']"),
        provinciaBtn: () => cy.xpath("(//input[@role='combobox'])[5]"),
        herreraBtn: () => cy.xpath("//span[contains(.,'Herrera')]"),
        corregimientoBtn: () => cy.xpath("(//input[@role='combobox'])[6]"),
        chitreCoBtn: () => cy.xpath("//span[contains(.,'Chitré - Chitré')]"),
        direccionInput: () => cy.xpath("//input[@id='cliente_direccion']"),
        calendarioBtn: () => cy.xpath("//input[@tabindex='0']"),
        fechabtn: () => cy.xpath("//span[@class='flatpickr-day'][contains(.,'29')]"),
        observacionInput: () => cy.xpath("//textarea[@id='observacion']"),
        clienteRecibeInput: () => cy.xpath("//input[@id='cliente_recibe']"),
        Guardar2Btn: () => cy.xpath("(//button[contains(.,'Guardar')])[2]"),
        continuarBtn: () => cy.xpath("//button[contains(.,'Continuar')]")
    }

    selectDelivery(delivery) {
        this.elements.selectDelivery().should("be.visible").select(delivery)
    }
    inputObservacion(observacion) {
        this.elements.observacionInput().click({ force: true }).type(observacion)
    }

    clickElement(element) {
        this.elements[element]().scrollIntoView().should("be.visible").click()
    }

    inputText(element, text) {
        this.elements[element]().should("be.visible").type(text).type("{enter}").click()
    }

    submitVtaDespacho(data) {
        this.clickElement('vtaDespachoBtn')
        this.clickElement('crearSolBtn')
        this.clickElement('buscarMatBtn')
        this.inputText('eanInput', data.ean)
        this.clickElement('buscarIconBtn')
        this.clickElement('agregarMatBtn')
        this.clickElement('carritoIconBtn')
        this.clickElement('almacenBtn')
        this.clickElement('cedisBtn')
        this.inputText('cantidadInput', data.cantidad)
        this.clickElement('guardarBtn')
        this.clickElement('opcionBtn')
        this.clickElement('imprimirProfBtn')
        this.inputText('cedulaInput', data.cedula)
        this.inputText('nombreInput', data.nombre)
        this.inputText('telefonoInput', data.telefono)
        this.clickElement('GuardarBtn')
        this.inputText('cedulaIdInput', data.cedulaId)
        this.clickElement('cargarBtn')
        this.clickElement('finalizarBtn')
        this.inputText('facturaInput', data.factura)
        this.clickElement('provinciaBtn')
        this.clickElement('herreraBtn')
        this.clickElement('corregimientoBtn')
        this.clickElement('chitreCoBtn')
        this.inputText('direccionInput', data.direccion)
        this.clickElement('calendarioBtn')
        this.clickElement('fechabtn')
        this.inputText('clienteRecibeInput', data.clienteRecibe)
        this.clickElement('Guardar2Btn')
        this.clickElement('continuarBtn')
        this.elements.selectDelivery().select(delivery)
        this.elements.observacionInput().type(observacion)
    }
}
export const vtaDespCedisPage = new VtaDespCedisPage()