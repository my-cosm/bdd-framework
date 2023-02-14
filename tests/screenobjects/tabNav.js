class tabNavigation {

    async clickProfileIcon() {
        const profileBtn = await $('//android.view.View[@content-desc="tab-bar-profile-item"]/android.view.ViewGroup');
        await profileBtn.waitForDisplayed();
        await profileBtn.click();
    }

    async clickDiscoverIcon() {
        const profileBtn = await $('~');
        await profileBtn.waitForDisplayed();
        await profileBtn.click();
    }

    async clickTicketsIcon() {
        const profileBtn = await $('~');
        await profileBtn.waitForDisplayed();
        await profileBtn.click();
    }

    async clickFnBIcon() {
        const profileBtn = await $('~');
        await profileBtn.waitForDisplayed();
        await profileBtn.click();
    }

}

module.exports = new tabNavigation();
