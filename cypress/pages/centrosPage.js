class CentrosPage {
    elements = {
        cedisBtn: () => cy.xpath("(//b[contains(.,'CEDIS')])[2]").should("be.visible"),
        colonBtn: () => cy.xpath("//li[contains(.,'COLÓN')]").should("be.visible"),
        albrookBtn: () => cy.xpath("//b[contains(.,'ALBROOK')]").should("be.visible"),
        andesBtn: () => cy.xpath("//li[contains(.,'ANDES')]").should("be.visible"),
        calidoniaBtn: () => cy.xpath("//li[contains(.,'CALIDONIA')]").should("be.visible"),
        metromallBtn: () => cy.xpath("//b[contains(.,'METROMALL')]").should("be.visible"),
        pueblosBtn:() => cy.xpath("//li[contains(.,'LOS PUEBLOS')]").should("be.visible"),
        westlandBtn:() => cy.xpath("//b[contains(.,'WESTLAND')]").should("be.visible"),
        federalBtn:()=> cy.xpath("//li[contains(.,'FEDERAL')]").scrollIntoView().should("be.visible"),
        marquesaBtn:()=> cy.xpath("//li[contains(.,'MARQUESA')]").scrollIntoView().should("be.visible"),
        donaBtn: () => cy.xpath("//li[contains(.,'LA DOÑA')]").scrollIntoView().should("be.visible"),
        chitreBtn: () => cy.xpath("//li[contains(.,'CHITRE')]").scrollIntoView().should("be.visible"),
        t12Btn: ()=> cy.xpath('(//i[contains(@class,\'pr-2 icon-retail-store\')])[14]').scrollIntoView().should("be.visible"),

    }
    clickCedis() {
        this.elements.cedisBtn().click()
    }
    clickColon() {
        this.elements.colonBtn().click()
    }
    clickAlbrook() {
        this.elements.albrookBtn().click()
    }
    clickAndes() {
        this.elements.andesBtn().click()
    }
    clickCalidonia() {
        this.elements.calidoniaBtn().click()
    }
    clickMetromall() {
        this.elements.metromallBtn().click()
    }
    clickPueblos() {
        this.elements.pueblosBtn().click()
    }
    clickWestland() {
        this.elements.westlandBtn().click()
    }
    clickFederal() {
        this.elements.federalBtn().click()
    }
    clickMarquesa() {
        this.elements.marquesaBtn().click()
    }
    clickDona() {
        this.elements.donaBtn().click()
    }
    clickChitre() {
        this.elements.chitreBtn().click()
    }
    clickT12() {
        this.elements.t12Btn().click()
    }

submitCentros() {
    this.elements.cedisBtn().click()
    this.elements.colonBtn().click()
    this.elements.albrookBtn().click()
    this.elements.andesBtn().click()
    this.elements.calidoniaBtn().click()
    this.elements.metromallBtn().click()
    this.elements.pueblosBtn().click()
    this.elements.westlandBtn().click()
    this.elements.federalBtn().click()
    this.elements.marquesaBtn().click()
    this.elements.donaBtn().click()
    this.elements.chitreBtn().click()
    this.elements.t12Btn().click()
}
}
export const centrosPage = new CentrosPage()