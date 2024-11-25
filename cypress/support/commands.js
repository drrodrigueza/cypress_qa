// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

 Cypress.Commands.add('Texto_visble', (selector, texto,t) => {
     let tiempo = t
     cy.get(selector).should("be.visible").type(texto)
     cy.wait(tiempo)
 })

Cypress.Commands.add('Click_btn', (selector, t) => {
     let tiempo = t
     cy.get(selector).should("be.visible").click()
     cy.wait(tiempo)
 })

Cypress.Commands.add('Texto_visble_xpath', (selector, texto,t) => {
     let tiempo = t
     cy.xpath(selector).should("be.visible").type(texto)
     cy.wait(tiempo)
 })

Cypress.Commands.add('Click', (selector, t) => {
     let tiempo = t
     cy.xpath(selector).should("be.visible").click()
     cy.wait(tiempo)
 })

Cypress.Commands.add('Click_force', (selector, t) => {
     let tiempo = t
     cy.xpath(selector).should("be.visible").click({force:true})
     cy.wait(tiempo)
 })

Cypress.Commands.add('Validar_campo2', (selector,mensaje,nombre_campo, t) => {
     cy.xpath(selector).should("be.visible").should("contain",mensaje).then((val)=>{
             cy.log("******************************************")
             cy.log("***"+nombre_campo+" no es válido")
             cy.log("******************************************")
     })
 })

//función loggin en QA
Cypress.Commands.add('loggin', (user,pass, t) => {
    let tiempo = t
    cy.visit("https://qa-wms.titan.com.pa/")
    cy.title().should('eq', 'WMS de CEDIS')
    //cy.wait(tiempo)
    cy.get("#nro_personal").should("be.visible").type(user)
    //cy.wait(tiempo)
    cy.get("#password").should("be.visible").should("be.enabled").type(pass)
    //cy.wait(tiempo)
    cy.get(".btn").should("be.visible").click()
    //cy.wait(tiempo)
})

//función buscar bulto devolución
Cypress.Commands.add('buscar_bulto_dev', (t) => {
    let tiempo = t
    let bultoDev
    cy.xpath("//div[@class='card-menu '][contains(.,'Gestión de Inventario')]").should("be.visible").click()
    cy.xpath("//div[@class='card-menu '][contains(.,'Listado Devolución a Proveedores')]").should("be.visible").click()
    cy.xpath("//li[contains(.,'CALIDONIA')]").should("be.visible").click()
    cy.wait(tiempo)
    cy.xpath("//select[contains(@name,'search-estado_str')]").should("be.visible").select("Pendiente por retirar")
    cy.wait(tiempo)
    cy.xpath("//th[@scope='col'][contains(.,'Código Devolución')]").scrollIntoView().should("be.visible").click()
    cy.wait(tiempo)
    cy.xpath("(//a[contains(@class,'ng-star-inserted')])[1]").should("be.visible").click()
    cy.wait(tiempo)
    cy.xpath("/html/body/app-root/block-ui/main/div[3]/div/app-detalle-devolucion-proveedor/div/div/div/div/div[2]/table/tbody/tr[1]/td[1]/a")
        .should("be.visible").click()
    cy.wait(tiempo)
    cy.wait(tiempo)
    cy.xpath("(//div[contains(.,'DV000')])[10]").then(function (texto){
        const nuevoBulto = texto.text().trim()
        const bultoDev= Cypress.env("bultoDev")|| []
        bultoDev.push(nuevoBulto)
        Cypress.env("bultoDev", bultoDev)
        cy.log("### Bulto Guardado: "+bultoDev)
    })
    cy.xpath("//a[@routerlink='/inicio'][contains(.,'WMS de CEDIS')]").should("be.visible").click()
})

Cypress.Commands.add('escanear_bulto',(t)=>{
    let tiempo = t
    const bultoDev = Cypress.env("bultoDev")||[]
    expect(bultoDev).to.include(bultoDev[0])
    cy.wait(tiempo)
})

Cypress.Commands.add('inicio',(t)=>{
    let tiempo = t
    cy.xpath("//a[@routerlink='/inicio'][contains(.,'WMS de CEDIS')]").should("be.visible").click()
    cy.wait(tiempo)
})

