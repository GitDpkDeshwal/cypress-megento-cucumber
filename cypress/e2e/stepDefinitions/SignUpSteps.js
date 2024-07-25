import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupPage from "../pages/SignupPage";


const signUpPageObj = new SignupPage(); // Creating object of Signup page class

When('User navigates to the baseurl', () => {
    signUpPageObj.launchBaseUrl();
});

When('Click on Create an Account link', () => {
    signUpPageObj.clickOnCreateAnAccountTab();
});

Then('Verify {string} customer create account page', (createAccountPageUrl) => {
    cy.url().should('include', createAccountPageUrl);
});

When('User enters the Personal Details fields:', () => {
    signUpPageObj.enterSignupDetails();
});

Then('Verify {string} message is displayed', (successMessage) => {
    signUpPageObj.verifySuccessfulRegistrationMsg(successMessage);
});

Then('User navigates to {string} page', (customerCreatePageUrl) => {
    cy.url().should('include', customerCreatePageUrl);
});