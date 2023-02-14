// const {Given, When, Then} = require('@wdio/cucumber-framework');
// import {assert} from 'chai';
// const homeScreen = require('../screenobjects/home.screen');
// const loginScreen = require('../screenobjects/login.screen');
// const profileScreen = require('../screenobjects/Profile.screen');
// const tabNav = require('../screenobjects/tabNav');

const {Given, When, Then} = require("@wdio/cucumber-framework");
const homeScreen = require("../screenobjects/home.screen");
const loginScreen = require("../screenobjects/login.screen");
const ProfileScreen = require("../screenobjects/Profile.screen");
const tabNav = require("../screenobjects/tabNav");
import {expect as expectChai} from 'chai'


Given(/^I am on the welcome screen$/, async () => {
    console.log("waiiiiiiitttttttttttttttttttttt")
    await browser.pause(10000);
    console.log("waiiiiiiitttttttttttttttttttttt")
    await homeScreen.clickExploreButton();
    console.log("waiiiiiiitttttttttttttttttttttt")
    await browser.pause(5000);
    await tabNav.clickProfileIcon();
    await browser.pause(5000);
});


When(/^user enters the '(.*)' and '(.*)'$/, async (email, pwd) => {
    await browser.pause(10000);
    await loginScreen.login(email, pwd);
});

When(/^click on sign in button$/, async () => {
    await browser.pause(5000);
    await loginScreen.clickSignInButton();
});


Then(/^user should be logged in and on user profile page is shown$/, async () => {
    await browser.pause(5000);
    let val = await ProfileScreen.profileImageIconIsDisplayed();
    expectChai(val).to.equal(true);

});


Then(/^sign in should be disabled$/, async () => {
    let val = await loginScreen.signBtnIsEnabled();
    expectChai(val).to.equal(false);

});


Then(/^a login page email error message '(.*)' should be shown$/, async (errorMessage) => {
    let ertxt = await loginScreen.loginErrMsg();
    expectChai(ertxt).to.equal(errorMessage);
});


// afterEach(() => {
//     console.log("iam after")
// })

// Then(/^user should be shown an '(.*)'$/, async (errorMessage) => {
//     await browser.pause(5000);
//     const txt = await loginScreen.getEmailErrorMessageText();
//     console.log('=============================')
//     console.log('=============================')
//     console.log(txt)
//     console.log('=============================')
//     console.log('=============================')
// });
