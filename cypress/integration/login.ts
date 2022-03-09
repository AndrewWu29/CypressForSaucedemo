import { LogInPage } from "./loginpage/loginpage"

const logInPage = new LogInPage()

// As a user I want to log in to the web site
describe('Login test suite', () => {
    beforeEach(function () {
        logInPage.login()
    })
    it('Use standard_user to log in this website', ()=> {
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')
        cy.get('.inventory_list > :nth-child(1)').should('be.visible')
    })
})