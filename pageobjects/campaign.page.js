const BasePage = require("./base.page");
const CarouselItem = require("./carouselItem");

class CampaignPage extends BasePage {

    constructor() {
        super();
        this.productListContainer = $('div[data-component= "ProductListCarousel"]');
        this.carouselItems = $$('div[data-autoid="springCarouselPane:carouselItem"]');

    }


    async isPageDisplayed() {
        const e = await await this.productListContainer;
        await e.waitForExist({timeout: 5000});
        return await e.isDisplayed();
    }

    async isModelWithRechargeTypeDisplayed(modelName, rechargeType) {
        const carouselItem = new CarouselItem(modelName, rechargeType);
        return await carouselItem.isDisplayed();
    }

    async getImageHrefOfModelWithRechargeType(modelName, rechargeType) {
        const carouselItem = new CarouselItem(modelName, rechargeType);
        return await carouselItem.getImageHref();
    }


}

module.exports = new CampaignPage();
