// const profileImageIcon = '//android.widget.ScrollView[@content-desc="profile-screen-form-scrollview"]/android.view.ViewGroup/android.view.ViewGroup[2]';

class ProfileScreen {

    async profileImageIconIsDisplayed() {
        const profileImg = '//android.widget.ScrollView[@content-desc="profile-screen-form-scrollview"]/android.view.ViewGroup/android.view.ViewGroup[2]';
        return await $(profileImg).waitForDisplayed(3000);
    }
}

module.exports = new ProfileScreen();
