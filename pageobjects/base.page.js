
const {click,getElement,getText,withRetry} = require("../utils/elementActions")

class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    constructor(){
        this.sideNavBar = $('nav[id = "nav:sideNavigation"]>div');
        this.sideNavigationContainer = $('div[data-autoid="nav:sideNavigationContainer"]');
        this.sideNavCloseIcon = $('button[data-autoid="nav:siteNavCloseIcon"]');

        this.sideNavMainMenus = $$('div[data-autoid="nav:sideNavLinksMenu"] em');
        this.sideNavDrawerMenu = $$('div[data-autoid="nav:sideNavLinksMenuDraw"] em');
        this.sideNavGoBackToMainMenuIcon = $('button[aria-label="Go back in Site Navigation"]');
        this.sideNavTitle = $('p[data-autoid="nav:sideNavTitle"]');

        this.topNavBar = $('div#site-nav-topbar-wrapper nav');
        this.siteLogo = $('div#site-nav-topbar-wrapper nav a[data-autoid="nav:siteNavLogoSmall"]');
        this.hamburgerIcon = $('button[data-autoid="nav:siteNavHamburgerIcon"]');

        this.acceptAllCookiesBtn = $('.optanon-allow-all.accept-cookies-button');
    }



    async navigateToPage() {
        await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        await withRetry(async () => {
            await this.acceptCookiesInAlert()
        });
        
       

    }

    async acceptCookiesInAlert() {
        const e = await this.acceptAllCookiesBtn;
        await e.waitForClickable({timeout:5000});
        await e.click();
        // await e.waitForExist({ timeout: 5000,reverse:true });

    }



    async isSideNavbarDisplayed(){
        const e = await this.sideNavBar;
        await e.waitForExist({timeout:5000});
        return await e.isDisplayed();
    }

    async clickHamburgerIcon(){
        await click(this.hamburgerIcon);
    }

    async clickSideNavCloseIcon(){
        await click(this.sideNavCloseIcon);

    }

    async isSidebarMainMenuItemDisplayed(menuItem){
        const menuItemElement = await this.getSideBarMainMenuItem(menuItem);
        return menuItemElement !== null;
    }

    async clickSidebarMainMenuItem(menuItem) {
        const menuItemElement = await this.getSideBarMainMenuItem(menuItem);
        if(menuItemElement !== null){
            await menuItemElement.click();
        }else{
            throw new Error(`${menuItem} not found in sidebar`);
        }
    }

    async getSideBarMainMenuItem(menuItem){
        let  elementsArr = [];
        let menuItemsCount = 0;
        await withRetry(async () => {
            elementsArr = await $$('div[data-autoid="nav:sideNavLinksMenu"] em');
             menuItemsCount = elementsArr.length;
            if (menuItemsCount === 0){
                throw new Error("No elements found. Retrying again");
            }

        });

        let menuItemElement = null;
        for (let i = 0; i < menuItemsCount; i++){
            const menuItemAtindex = elementsArr[i];
            const menuItemLabelAtIndex = await menuItemAtindex.getText();
            if (menuItemLabelAtIndex.includes(menuItem)){
                menuItemElement =  menuItemAtindex;
                break;
            }
        }
        return menuItemElement;
    }


    async isSidebarDrawerMainMenuItemDisplayed(menuItem) {
        const menuItemElement = await this.getSideBarMainMenuItem(menuItem);
        return menuItemElement !== null;
    }

 

    async getSideBarDrawerMainMenuItem(menuItem) {
        let elementsArr = [];
        let menuItemsCount = 0;
        await withRetry(async () => {
            elementsArr = await $$('div[data-autoid="nav:sideNavLinksMenuDraw"] em');
            menuItemsCount = elementsArr.length;
            if (menuItemsCount === 0) {
                throw new Error("No elements found. Retrying again");
            }

        });
        let menuItemElement = null;
        for (let i = 0; i < menuItemsCount; i++) {
            const menuItemAtindex = elementsArr[i];
            const menuItemLabelAtIndex = await menuItemAtindex.getText();
            if (menuItemLabelAtIndex.includes(menuItem)) {
                menuItemElement = menuItemAtindex;
                break;
            }
        }
        return menuItemElement;
    }

    async getSubMenuDrawerTitle(){
        return await getText(this.sideNavTitle);
    }

    open (path) {
        return browser.url(`https://www.volvocars.com/intl/v/car-safety/${path}`)
    }
}

module.exports = BasePage
