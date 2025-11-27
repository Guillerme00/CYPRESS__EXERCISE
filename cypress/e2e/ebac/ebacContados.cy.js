/// <reference types="cypress" />

describe("Test 1", () => {
    beforeEach(() => {
        cy.visit("https://ebac-agenda-contatos-tan.vercel.app/")
    })

    it("Inclusion test", () => {
        cy.get(".sc-gLDzan > input[type='text']").type("Guilherme Monteiro Toledo")
        cy.get(".sc-gLDzan > input[type='email']").type("guilhermemonteirotoledo@gmail.com")
        cy.get(".sc-gLDzan > input[type='tel']").type(159968412321)
        cy.get(".sc-gLDzan > div > button").click()

        cy.contains('Guilherme Monteiro Toledo').should('exist');
        cy.contains('guilhermemonteirotoledo@gmail.com').should('exist');
        cy.contains(159968412321).should('exist');
    })

    it("Change contact test", () => {
        cy.get(".edit").first().click()
        cy.get(".sc-gLDzan > input[type='text']").clear()
        cy.get(".sc-gLDzan > input[type='text']").type("Gabriel")
        cy.get(".sc-gLDzan > input[type='email']").clear()
        cy.get(".sc-gLDzan > input[type='email']").type("gabriel@gmail.com")
        cy.get(".sc-gLDzan > input[type='tel']").clear()
        cy.get(".sc-gLDzan > input[type='tel']").type(15123123123)
        cy.get(".alterar").click()

        cy.contains('Gabriel').should('exist');
        cy.contains('gabriel@gmail.com').should('exist');
        cy.contains(15123123123).should('exist');
    })

    it("Delete contact Test", () => {
        cy.get(".delete").first().click()
    })
})