import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I will run before all the scenarios', url => {
	cy.log('I am testing BDD style using Cypress')
})

defineStep('the correct url {string} is loaded', url => {
	cy.url().should('include', url)
})

defineStep('the login page has loaded properly', () => {
	cy.get('h3').contains('Log in to ZeroBank')
})
