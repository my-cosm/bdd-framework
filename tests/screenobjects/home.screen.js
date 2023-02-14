const screen = require('./base.screen');


class HomeScreen extends screen {

    async clickExploreButton() {
        const exploreButton = await $('~welcome-screen-explore-button');
        await exploreButton.waitForDisplayed();
        await exploreButton.click();
    }

}

module.exports = new HomeScreen();
