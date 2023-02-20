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
import signupScreen from '../screenobjects/signup.screen';

Given(/^signup - I am on the welcome screen$/, async () => {
    console.log("waiiiiiiitttttttttttttttttttttt")
    await browser.pause(10000);
    console.log("waiiiiiiitttttttttttttttttttttt")
    await homeScreen.clickExploreButton();
    console.log("waiiiiiiitttttttttttttttttttttt")
    await browser.pause(5000);
    await tabNav.clickProfileIcon();
    await browser.pause(5000);

});


When(/^signup - user clicks on sign up button$/, async () => {
    await browser.pause(5000);
    await signupScreen.clickSignupButton();
});


When(/^signup - user enters the '(.*)' , '(.*)', '(.*)' and '(.*)'$/, async (firstname, lastname, email, pwd) => {
    await browser.pause(10000);
    await signupScreen.enterFirstName(firstname);
    await browser.pause(1000);
    await signupScreen.enterLastName(lastname);
    await browser.pause(1000);
    await signupScreen.enterEmailField(email);
    await browser.pause(1000);
    await signupScreen.enterPassword(pwd);


});


When(/^signup - click on sign in button$/, async () => {
    await browser.pause(5000);
    await signupScreen.clickSignInButton();
});


When(/^signup - validate the error message '(.*)'$/, async (errormesaage) => {
    await browser.pause(7000);
    let val = await signupScreen.verifyLoginErrorMessage();
    expectChai(val).to.equal(true);

});


When(/^signup - validate the password validation message conatainer is present$/, async () => {
    await browser.pause(7000);
    let val = await signupScreen.verifySignUpMshContainerIsDisplayed();
    expectChai(val).to.equal(true);
});
