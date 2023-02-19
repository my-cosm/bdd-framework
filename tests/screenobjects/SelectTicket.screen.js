const screen = require('./base.screen');


class SelectTciketScreen extends screen {

    async clickPlusIconVipZone() {
        const vipZone = await $('(//android.view.ViewGroup[@content-desc="section-seat-selector-plus-button"])[1]/android.view.ViewGroup');
        await vipZone.waitForDisplayed();
        await vipZone.click();
    }

    async clickGetTicketsButton() {
        const gettickt = await $('//android.view.ViewGroup[@content-desc="generic-button-wrapper"]/android.view.View');
        await gettickt.waitForDisplayed();
        await gettickt.click();
    }


}

module.exports = new SelectTciketScreen();
