/// <reference types="cypress" />

describe("Test 1", () => {
    beforeEach(() => {
        cy.visit("https://ebac-agenda-contatos-tan.vercel.app/")
    })

    it("Inclusion test", () => {
        cy.get(".sc-gLDzan > input[type='text']").type("Guilherme Monteiro Toledo")
        cy.get(".sc-gLDzan > input[type='email']").type("guitoledo13@hotmail.com")
        cy.get(".sc-gLDzan > input[type='tel']").type(159968412321)
        cy.get(".sc-gLDzan > div > button").click()
    })

    it("Change contact test", () => {
        cy.get(".edit").first().click()
        cy.get(".sc-gLDzan > input[type='text']").clear()
        cy.get(".sc-gLDzan > input[type='text']").type("Guilherme Monteiro Toledo")
        cy.get(".sc-gLDzan > input[type='email']").clear()
        cy.get(".sc-gLDzan > input[type='email']").type("guitoledo13@hotmail.com")
        cy.get(".sc-gLDzan > input[type='tel']").clear()
        cy.get(".sc-gLDzan > input[type='tel']").type(159968412321)
        cy.get(".alterar").click()
    })

    it("Delete contact Test", () => {
        cy.get(".delete").first().click()
    })
})