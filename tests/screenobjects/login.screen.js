const BaseScreen = require('./base.screen');

class LoginScreen extends BaseScreen {

    async sendkeysEmailField(email) {
        const emailField = await $('//android.widget.EditText[@content-desc="login-form-input-email"]');
        await emailField.waitForDisplayed();
        await emailField.setValue(email);
    }

    async sendkeysPasswordField(password) {
        const pwdField = await $('//android.widget.EditText[@content-desc="login-form-input-password"]');
        await pwdField.waitForDisplayed();
        await pwdField.setValue(password);
    }

    async clickSignInButton() {
        const signInBtn = await $('~generic-button-wrapper');
        await signInBtn.waitForDisplayed();
        await signInBtn.click();
    }

    async login(username, password) {
        await this.sendkeysEmailField(username);
        await this.sendkeysPasswordField(password);
    }

    async signBtnIsEnabled() {
        let signInBtn = await $('~generic-button-wrapper');
        let isEnabled = await signInBtn.isEnabled();
        console.log("Sign in button is enabled " + isEnabled)
        return isEnabled;
    }

    async loginErrMsg() {
        let err = await $('~login-error-message');
        let errText = await err.getText();
        console.log("Login Page invalid email passwprd error message is :: " + errText)
        return errText;
    }


}

module.exports = new LoginScreen();
