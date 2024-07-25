import { faker } from '@faker-js/faker';

// Generating random data for user to Register
const fName = faker.person.firstName();
const lName = faker.person.lastName();
const email = faker.internet.email();
const pswd = faker.internet.password();

class SignupPage {
    /*
        * List of Selectors to intract the DOM elements
     */
        createAnAccountTab = "//a[contains(text(),'Create an Account')]";
        firstNameField = "input#firstname";
        lastNameField = "input#lastname";
        emailField = "//input[@type='email' and @name = 'email']";
        passwordField = "input#password"
        confirmPasswordField = "input#password-confirmation";
        createAnAccountBtn = "//button[@type='submit' and @title='Create an Account']/.."

    // Launch the baseUrl....
    launchBaseUrl(){
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.viewport(1920, 1080);
    }

    // Click on Create An Account button....
    clickOnCreateAnAccountTab(){
        cy.xpath(this.createAnAccountTab).first().click();
    }

    // Entering the user details for SignUp...
     enterSignupDetails() {
        cy.get(this.firstNameField).type(fName);
        cy.get(this.lastNameField).type(lName);
        cy.xpath(this.emailField).type(email);
        cy.get(this.passwordField).type(pswd);
        cy.get(this.confirmPasswordField).type(pswd);
        cy.xpath(this.createAnAccountBtn).click();
    }

    // Verify Successfully created a new user message is displayed
    verifySuccessfulRegistrationMsg(successMessage){
        cy.contains(successMessage).should('be.visible');
    }

    // Verify 'create/customer' page URL 
    verifyCreateCustomerPageUrl(customerCreatePageUrl){
        cy.url().should('include',customerCreatePageUrl);
    }
}

export default SignupPage;