import { LogInPage } from "./loginpage/loginpage"

const logInPage = new LogInPage()

// As a user I want to log in to the web site
describe('Logout test suite', () => {
    beforeEach(function () {
        logInPage.login()
    })
    it('Use standard_user to logout this website', () => {
        cy.get('button[id=react-burger-menu-btn]').click()
        cy.get('#logout_sidebar_link').should('have.text', 'Logout').click()
        cy.url().should('match', /https:\/\/www.saucedemo.com\//)
    })
})