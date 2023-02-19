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
import eventInfoScreen from '../screenobjects/EventInfo.screen';
import paymentCardBottomSheetScreen from '../screenobjects/PaymentCardBottomSheet.screen';
import selectTicketScreen from '../screenobjects/SelectTicket.screen';
import upcomingEventScreen from '../screenobjects/UpcomingEvent.screen';
import orderConfirmationScreen from '../screenobjects/OrderConfirmation.screen';
import checkoutScreen from '../screenobjects/Checkout.screen';


Given(/^I launched the app and on discover events page as a logged in user with '(.*)' and '(.*)'$/, async (email, password) => {

    console.log("waiiiiiiitttttttttttttttttttttt")
    await browser.pause(10000);
    console.log("waiiiiiiitttttttttttttttttttttt")
    await homeScreen.clickExploreButton();
    console.log("waiiiiiiitttttttttttttttttttttt")
    await browser.pause(5000);
    await tabNav.clickProfileIcon();
    await browser.pause(5000);
    await loginScreen.login(email, password)
    await browser.pause(5000);
    await loginScreen.clickSignInButton();

});


When(/^I select an event from the upcoming events list$/, async () => { // click on discover button
    await browser.pause(5000);

    await tabNav.clickDiscoverIcon();
    await browser.pause(5000);

    await upcomingEventScreen.clickFirstEvent();
    await browser.pause(5000);

    await eventInfoScreen.clickGetTicketsButton();
    await browser.pause(5000);

    await selectTicketScreen.clickPlusIconVipZone();
    await browser.pause(5000);

    await selectTicketScreen.clickGetTicketsButton();
    await browser.pause(10000);
    await checkoutScreen.clickPaymentMethodButton();
    await browser.pause(5000);

    await paymentCardBottomSheetScreen.selectSecondCard();
    await browser.pause(5000);

    await checkoutScreen.clickCompleteOrderButton();
    await browser.pause(10000);

    await orderConfirmationScreen.isViewTicketsDisplayed();


});
