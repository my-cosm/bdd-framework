const screen = require('./base.screen');


class AddNewCardScreen extends screen {

    async clickAddNewCardButton() {
        const addNewCardButton = await $('//android.view.ViewGroup[@content-desc="bottom-sheet-payment-add-card"]/android.view.View');
        await addNewCardButton.waitForDisplayed();
        await addNewCardButton.click();
    }

    async enterCardNumber() {
        const addNewCardButton = await $('com.cosm.cosmvenueapp:id/card_number');
        await addNewCardButton.waitForDisplayed();
        await addNewCardButton.setValue("4111111111111111");
    }

    // async enterExpirydate() {
    //     const expydate = await $('com.cosm.cosmvenueapp:id/month_year');
    //     await expydate.waitForDisplayed();
    //     await expydate.setValue('11/26');
    // }


    // async enterCardNumber() {
    //     const addNewCardButton = await $('//android.view.ViewGroup[@content-desc="bottom-sheet-payment-add-card"]/android.view.View');
    //     await addNewCardButton.waitForDisplayed();
    //     await addNewCardButton.click();
    // }


    // async enterCardNumber() {
    //     const addNewCardButton = await $('//android.view.ViewGroup[@content-desc="bottom-sheet-payment-add-card"]/android.view.View');
    //     await addNewCardButton.waitForDisplayed();
    //     await addNewCardButton.click();
    // }


}

module.exports = new AddNewCardScreen();
