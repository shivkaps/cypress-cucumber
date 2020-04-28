import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from './loginPage'

Given('I open the login Page', () => {
	loginPage.visitLoginPage()
})

When('I enter a username {string}', username => {
	loginPage.fillUsername(username)
})

And('I enter a password {string}', password => {
	loginPage.fillPassword(password)
})

And('I click the sign-in button', () => {
	loginPage.submitLoginDetails()
})

Then('I should not be able to login', () => {
	loginPage.checkLoginFailure()
})

Then('I should be able to login', () => {
	loginPage.checkLoginSuccess()
})
