

const { Given, When, Then } = require('@cucumber/cucumber');
const {expect} = require("chai")

const campaignPage = require("../pageobjects/campaign.page");
const {withRetry} = require("../utils/elementActions");

Given('I am on campaign page', async function(){
    await campaignPage.navigateToPage();

    expect(await campaignPage.isPageDisplayed()).to.be.true
});

Then('I see side navigation bar is {string}', async function(displayState){
    const isDisplayedExpected = displayState.toLowerCase().includes("not") ? false : true;

    await withRetry(async () => {
        const isDisplayedActual = await campaignPage.isSideNavbarDisplayed();
        expect(isDisplayedActual).to.equal(isDisplayedExpected);
    });
    
});

When('I click hamburger icon in top nav bar', async function(){
    await campaignPage.clickHamburgerIcon();
});

When('I click side menu bar close icon', async function(){
    await campaignPage.clickSideNavCloseIcon();
});

Then('I validate main menu item {string} in side nav bar', async function(menuItem){
    await withRetry(async () => {
        expect(await campaignPage.isSidebarMainMenuItemDisplayed(menuItem)).to.be.true
    });
});


When('I click main menu item {string} in side nav bar', async function (menuItem){
    await campaignPage.clickSidebarMainMenuItem(menuItem);
});

Then('I see sub menu drawer with title {string} is displayed in side nav bar', async function(title){
    expect(await campaignPage.getSubMenuDrawerTitle()).to.include(title);
});

Then('I validate sub menu items {string} in side nav', async function(menuItems){
    const subMenuItems = menuItems.split(',');

    for (let i = 0; i < subMenuItems.length;i++){
        await withRetry(async () => {
            expect(await campaignPage.isSidebarDrawerMainMenuItemDisplayed(subMenuItems[i]), `${subMenuItems[i]} is not found in sub menu `).to.be.true;

        });
    }
});

Then('I see carousel item displayed with model name {string} and recharge type {string}', async function(modelName, rechargeType){
    
    await withRetry(async () => expect(await campaignPage.isModelWithRechargeTypeDisplayed(modelName, rechargeType)).to.be.true);
    
});
 