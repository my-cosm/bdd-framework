const screen = require('./base.screen');


class PaymentCardBottomSheet extends screen {

    async selectSecondCard() {
        const gettickt = await $('//android.view.ViewGroup[contains(@content-desc,"VISA 1111")]');
        await gettickt.waitForDisplayed();
        await gettickt.click();
    }

}

module.exports = new PaymentCardBottomSheet();
