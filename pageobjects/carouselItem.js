
class CarouselItem{
    constructor(modelName, rechargeType){
        this.carouselContainer = element(by.xpath(`//span[@data-autoid="productListCarouselItem:modelName"  and contains(text(),"${modelName}")]/following-sibling::span[@data-autoid="productListCarouselItem:rechargeType"  and contains(text(),"${rechargeType}")]/ancestor::div[@data-autoid = "springCarouselPane:carouselItem"]`));
    }

    async isDisplayed(){
       
        return await e.isDisplayed();
    }

    async getCategory(){
        const e = await this.carouselContainer;
        const catElement = await e.$('em[data-autoid="productListCarouselItem:category"]')
        return await catElement.getText();
    }

    async getRechargeType() {
        const e = await this.carouselContainer;
        const rechargeTypeElement = await e.$('em[data-autoid="productListCarouselItem:rechargeType"]')
        return await rechargeTypeElement.getText();
    }

    async getImageHref(){
        const e = await this.carouselContainer;
        const picElement = await e.$('picture img')
        return await picElement.getAttribute('href');
    }


}

module.exports = CarouselItem;
