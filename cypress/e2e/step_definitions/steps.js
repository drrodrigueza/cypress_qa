import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import {mermaPage} from "@pages/mermaPage"
import {loginPageWMS} from "@pages/loginPageWMS"
import {devolucionPage} from "@pages/dev_proveedoresPage"
import {centrosPage} from "@pages/centrosPage"
import {vtaDespCedisPage} from "@pages/vtaDespCedisPage"


//### step para iniciar sesión en el WMS ###
Given("Entramos al WMS", () => {
    cy.visit("/")
    cy.fixture('datos.json').then((datos) => {
            this.datos = datos
            loginPageWMS.typeUsername(this.datos.usuario)
            loginPageWMS.typePassword(this.datos.clave)
            loginPageWMS.clickLogin()
            cy.wait(3000)
        })
  })
//#################################################
Then('Volvemos al inicio',()=>{
    cy.wait(2000)
    loginPageWMS.clickInicio()
    cy.wait(2000)
})
//########### Fin login #############################

//steps para seleccionar la modal Almacén - Tiendas

Then("Seleccionamos {string}", (centro) => {
    try {
        const centros = {
            CEDIS: centrosPage.clickCedis.bind(centrosPage),
            Colon: centrosPage.clickColon.bind(centrosPage),
            Albrook: centrosPage.clickAlbrook.bind(centrosPage),
            Andes: centrosPage.clickAndes.bind(centrosPage),
            Calidonia: centrosPage.clickCalidonia.bind(centrosPage),
            Metromall: centrosPage.clickMetromall.bind(centrosPage),
            Pueblos: centrosPage.clickPueblos.bind(centrosPage),
            Westland: centrosPage.clickWestland.bind(centrosPage),
            Federal: centrosPage.clickFederal.bind(centrosPage),
            Marquesa: centrosPage.clickMarquesa.bind(centrosPage),
            La_Doña: centrosPage.clickDona.bind(centrosPage),
            Chitre: centrosPage.clickChitre.bind(centrosPage)
        }

        const clickCentro = centros[centro.trim()]
        if (clickCentro) {
            clickCentro()
            cy.wait(2000)
        } else {
            throw new Error(`Centro "${centro}" no reconocido.`)
        }
    } catch (error) {
        console.error("Error al seleccionar el centro:", error)
        throw error; // Vuelve a lanzar el error después de registrarlo
    }
})

//########### Fin CENTROS #############################

//### steps Módulo de MERMA ###

When("Entramos en Colector", () => {
    mermaPage.clickColector()
})
Then("Entramos en Crear Merma", () => {
    mermaPage.clickCrearMerma()
    cy.wait(1000)
})
Then("Seleccionamos area" , (table) => {
    table.hashes().forEach((row) => {
        mermaPage.selectArea(row.area)
        cy.wait(1000)
    })
})
Then("Escaneamos el Material", (table) => {
    table.hashes().forEach((row) => {
        mermaPage.inputMaterial(row.material)
        cy.wait(1000)
    })
})
Then("Ingresamos la Cantidad", (table) => {
    table.hashes().forEach((row) => {
        mermaPage.inputCantidad(row.cantidad)
        cy.wait(1000)
    })
})
Then("Le doy click en Agregar material",()=> {
    mermaPage.clickAgregarMaterial()
    cy.wait(1000)
})
Then("Le doy click en Guardar",()=> {
    mermaPage.clickGuardar()
    cy.wait(1000)
})
Then ("Seleccionamos impresora",(table)=> {
    table.hashes().forEach((row) => {
        mermaPage.inputImpresora(row.impresora)
        cy.wait(1000)
    })
})
Then("Le doy click en Aceptar",()=> {
    mermaPage.clickAceptar()
    cy.wait(1000)
})
Then("Mensaje de error mostrado {string}",(errorMessage)=> {
    mermaPage.elements.errorMessage().should("have.text", errorMessage);
    cy.log("######################")
    cy.log(errorMessage)
    cy.log("######################")
    cy.log("Material de Tech2Go")
    cy.log("######################")
})
Then('Escaneamos {float}',(material) => {
    mermaPage.inputMaterial(material)
})
Then('Agregamos {float}',(cantidad) => {
    mermaPage.inputCantidad(cantidad)
})
Then("Se escanea el Material", (table) => {
    table.hashes().forEach((row) => {
        mermaPage.inputMaterial(row.material)
        mermaPage.inputCantidad(row.cantidad)
        mermaPage.clickAgregarMaterial()
        cy.wait(2000)
    })
})
When("Entramos en Gestión de Auditoría",()=> {
    mermaPage.clickAuditoria()
    cy.wait(1000)
})
Then("Entramos en Listado de Merma",()=> {
    mermaPage.clickListadoMerma()
    cy.wait(2000)
})
Then("Se filtra por Estatus" , (table) => {
    table.hashes().forEach((row) => {
        cy.wait(2000)
        mermaPage.selectEstatus(row.estatus)
        cy.wait(1000)
    })
})
Then ("Entramos en el detalle de la Merma",()=> {
    mermaPage.clickIdMerma()
    cy.wait(1500)
})
Then("Le doy click en Seleccionar materiales",()=> {
    mermaPage.clickCheckBox()
    cy.wait(1500)
})
Then("Le doy click en Aprobar",()=> {
    mermaPage.clickAprobar()
    cy.wait(1500)
})
Then("Le doy click en Rechazar",()=> {
    mermaPage.clickRechazarMerma()
    cy.wait(1500)
    cy.reload()
    cy.wait(2000)
})
Then("Le doy click en Anular Merma",()=> {
    mermaPage.clickAnularMerma()
    cy.wait(1500)
    mermaPage.clickAnularConfirm()
    cy.reload()
    cy.wait(2000)
})
//########### Fin MERMA #############################

// ### steps Módulo de DEVOLUCIÓN A PROVEEDORES ###

Then("Entramos en Devolución a Proveedor",()=> {
    devolucionPage.clickDevProveedor()
    cy.wait(1000)
})
Then("Le doy click en Finalizar", ()=> {
    devolucionPage.clickFinalizar()
    cy.wait(1000)
})
Then("Escaneamos el bulto", (table) => {
    table.hashes().forEach((row) => {
        devolucionPage.inputBulto(row.bulto)
        cy.wait(1000)
    })
})
When("Entramos en Gestión de Inventario",()=> {
    devolucionPage.clickGestionInv()
    cy.wait(1000)
})
Then ("Entramos en Listado Devolución a Proveedores",()=> {
    devolucionPage.clickListadoDev()
    cy.wait(2000)
})
Then("Filtramos por Estatus" , (table) => {
    table.hashes().forEach((row) => {
        cy.wait(2000)
        devolucionPage.selectEstatus(row.estatus)
        cy.wait(1000)
    })
})
Then("Entramos al detalle de la Devolución",()=> {
    devolucionPage.clickIdDev()
    cy.wait(1500)
})
Then("le doy click en Anular Devolución",()=> {
    devolucionPage.clickAnularDev()
    cy.wait(1500)
})
Then("le doy click en Anular",()=> {
    devolucionPage.clickAnular()
    cy.wait(2000)
    cy.reload()
    cy.wait(2000)
})
Then("Entramos en Aduana Devolución a Proveedor",()=> {
    devolucionPage.clickAduanaDev()
    cy.wait(1000)
})
When('Buscamos el bulto Devolución',()=>{
    cy.buscar_bulto_dev(1500)
})
Then("Escaneamos el bulto Devolución",()=> {
    const bultoDev = Cypress.env("bultoDev")||[]
    expect(bultoDev).to.include(bultoDev[0])
    cy.log("### Bulto a escanear: "+bultoDev[0])
    devolucionPage.typeBultoDev(bultoDev[0])
    cy.wait(1000)
})

//########### Fin DEVOLUCION A PROVEEDORES #############################

// ########### steps Módulo de Venta con Despacho desde CEDIS ###########

When("Entramos en la Gestion de Ventas con Despacho desde CEDIS",()=> {
    vtaDespCedisPage.clickVtaDespacho()
    cy.wait(1500)
})
Then ("Entramos en Crear Solicitud",()=> {
    vtaDespCedisPage.clickCrearSol()
    cy.wait(1500)
})
Then("le damos click en {string}", (boton) => {
    try {
        const botones = {
            Buscar_Materiales: vtaDespCedisPage.clickBuscarMat.bind(vtaDespCedisPage),
            la_Lupa: vtaDespCedisPage.clickBuscarIcon.bind(vtaDespCedisPage),
            el_Gancho_verde: vtaDespCedisPage.clickAgregarMat.bind(vtaDespCedisPage),
            el_carrito: vtaDespCedisPage.clickCarritoIcon.bind(vtaDespCedisPage),
            Almacen: vtaDespCedisPage.clickAlmacen.bind(vtaDespCedisPage),
            CEDIS: vtaDespCedisPage.clickCedis.bind(vtaDespCedisPage),
            Guardar: vtaDespCedisPage.clickGuardar.bind(vtaDespCedisPage),
            Delivery: vtaDespCedisPage.clickDelivery.bind(vtaDespCedisPage),
            Opcion: vtaDespCedisPage.clickOpcion.bind(vtaDespCedisPage),
            Imprimir_Proforma: vtaDespCedisPage.clickImprimirProf.bind(vtaDespCedisPage),
            guardar: vtaDespCedisPage.clickGuardarBtn.bind(vtaDespCedisPage)
        }

        const clickBoton = botones[boton.trim()]
        if (clickBoton) {
            clickBoton()
            cy.wait(2000)
        } else {
            throw new Error(`Botón "${boton}" no reconocido.`)
        }
    } catch (error) {
        console.error("Error al seleccionar el botón:", error)
        throw error; // Vuelve a lanzar el error después de registrarlo
    }
})
Then("Ingresamos el código EAN", (table) => {
    table.hashes().forEach((row) => {
        vtaDespCedisPage.inputEan(row.ean)
        cy.wait(1000)
    })
})
Then("Seleccionamos el almacen" , (table) => {
    cy.fixture('datos.json').then((datos) => {
        this.datos = datos
        vtaDespCedisPage.selectAlmacen(this.datos.almacen)
    })
})
Then("Se ingresa la Cantidad", (table) => {
    table.hashes().forEach((row) => {
        vtaDespCedisPage.inputCantidad(row.cantidad)
        cy.wait(1000)
    })
})
Then("Seleccionamos el Delivery" , (table) => {
    table.hashes().forEach((row) => {
        vtaDespCedisPage.selectDelivery(row.delivery)
        cy.wait(1000)
    })
})
Then("Se realiza el Registro del Cliente", (table)=>{
    table.hashes().forEach((row) => {
        vtaDespCedisPage.inputCedula(row.cedula)
        vtaDespCedisPage.inputNombre(row.nombre)
        vtaDespCedisPage.inputTelefono(row.telefono)
        cy.wait(1500)
    })
})
// ########### Fin DEVOLUCION A PROVEEDORES #############################
