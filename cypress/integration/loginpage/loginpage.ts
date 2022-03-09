
export class LogInPage {
    login(username: string = 'standard_user', password: string = 'secret_sauce'): void {
        cy.visit('/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    }
    loadNewsFailed(username: string = 'user1', password: string = 'pa55word'): void {
        cy.intercept(
            'GET',
            'https://api.thecatapi.com/v1/images/search?limit=24&size=thumb&api_key=56498775-ea47-419a-b808-891cf4dd579f',
            { forceNetworkError: true }).as('getNetworkFailure')
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(password)
        cy.get('button[id=login_button]').click()
        
        cy.wait('@getNetworkFailure')
    }

}
