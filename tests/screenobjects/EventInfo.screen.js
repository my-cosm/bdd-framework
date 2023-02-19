const screen = require('./base.screen');


class EventInfoScreen extends screen {

    async clickGetTicketsButton() {
        const gettickt = await $('//android.view.ViewGroup[@content-desc="generic-button-wrapper"]/android.widget.TextView');
        await gettickt.waitForDisplayed();
        await gettickt.click();
    }

}

module.exports = new EventInfoScreen();
