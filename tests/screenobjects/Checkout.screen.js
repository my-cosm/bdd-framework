const screen = require('./base.screen');


class CheckoutScreen extends screen {

    async clickPaymentMethodButton() {
        const paymentmthd = await $('//android.view.ViewGroup[@content-desc="payment-method-selector-button"]/android.widget.TextView');
        await paymentmthd.waitForDisplayed();
        await paymentmthd.click();
    }

    async clickCompleteOrderButton() {
        const complOrdr = await $('//android.view.ViewGroup[@content-desc="generic-button-wrapper"]/android.view.View');
        await complOrdr.waitForDisplayed();
        await complOrdr.click();
    }


}

module.exports = new CheckoutScreen();
