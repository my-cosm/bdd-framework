const screen = require('./base.screen');


class UpcomingEventsScreen extends screen {

    async clickFirstEvent() { // for Staging
        const firstEvent = await $('//android.view.ViewGroup[@content-desc="events-event-list-item-$oid:63bcaa71494967f3d218158c_$oid:63e56703c6c6990a9f771e48"]/android.widget.TextView[1]');
        // For QA
        // const firstEvent = await $('~events-event-list-item-$oid:63e13dc5fcf1d1c36bfc36d7_$oid:63e13debdd6cbe3a56e02e5b')
        await firstEvent.waitForDisplayed();
        await firstEvent.click();
    }

}

module.exports = new UpcomingEventsScreen();
