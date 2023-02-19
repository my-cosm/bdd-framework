const screen = require('./base.screen');


class OrderConfirmationScreen extends screen {


    async isViewTicketsDisplayed() {
        let signInviewTicketsButtonBtn = await $('//android.view.ViewGroup[@content-desc="generic-button-wrapper"]/android.view.View');
        let isDisplayed = await signInviewTicketsButtonBtn.isDisplayed();
        console.log("Sign in button is enabled " + isDisplayed)
        return isDisplayed;
    }


}

module.exports = new OrderConfirmationScreen();
