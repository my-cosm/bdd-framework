const BaseScreen = require('./base.screen');

class SignUpScreen extends BaseScreen {

    async clickSignupButton() {
        const signupButton = await $('~Sign up');
        await signupButton.waitForDisplayed();
        await signupButton.click();
    }

    async enterFirstName(firstname) {
        const firstnamefield = await $('~signup-form-input-firstname');
        await firstnamefield.waitForDisplayed();
        await firstnamefield.click();
        await firstnamefield.setValue(firstname);

    }

    async enterLastName(lastname) {
        const lastnamefield = await $('~signup-form-input-lastname');
        await lastnamefield.waitForDisplayed();
        await lastnamefield.click();
        await lastnamefield.setValue(lastname)
    }

    async enterEmailField(email) {
        const emailfield = await $('~signup-form-input-email');
        await emailfield.waitForDisplayed();
        await emailfield.click();
        await emailfield.setValue(email)
    }

    async enterPassword(password) {
        const pwdfield = await $('~signup-form-input-password');
        await pwdfield.waitForDisplayed();
        await pwdfield.click();
        await pwdfield.setValue(password)
    }

    async clickSignInButton() {
        const signInButton = await $('~generic-button-wrapper');
        await signInButton.waitForDisplayed();
        await signInButton.click();
    }

    async verifyLoginErrorMessage() {
        const errMsg = await $('~login-error-message')
        let errdisplayed = await errMsg.isDisplayed();
        console.log("Error message is displayed " + errdisplayed)
        return errdisplayed;
    }

    async verifySignUpMshContainerIsDisplayed() {
        const signupContainer = await $('~sign-up-password-validation-container')
        let errdisplayed = await signupContainer.isDisplayed();
        console.log("Sign up container is displayed " + errdisplayed)
        return errdisplayed;
    }
    // async enterLastName(lastname) {
    //     const lastnamefield = await $('~tab-bar-events-item');
    //     await lastnamefield.waitForDisplayed();
    //     await lastnamefield.click();
    //     await lastnamefield.setValue(lastname)
    // }

}

module.exports = new SignUpScreen();
