/// <reference types="Cypress" />

describe("HomePage Body Notes renders", () => {
    beforeEach(() => {
        cy.visit("/");

    })

    it("the answer to the question of how many titles are 5 ?", () => {
        cy.get(".home-body-part")
            .find("li").should("have.length", 5)
    });

    it("react notları link is working?", () => {
        cy.get(".home-body-part")
            .find("li")
            .contains("React Notları")
            .click()
        
        cy.url().should("equal","https://alitahayurdakul.github.io/my-blog-website/#/react")
    });

    it("Others notes link is working?", () => {
        cy.get(".home-body-part")
            .find("li")
            .contains("Diğer Notlar")
            .click()
        
        cy.url().should("equal","https://alitahayurdakul.github.io/my-blog-website/#/others")
    });
});