

async function getElement(locator){
    return await locator;
}

async function click(locator){
    const e = await getElement(locator);
    await e.click();
}


async function getText(locator) {
    const e = await getElement(locator);
    return await e.getText();
}

async function withRetry(callback){
    let retryCounter = 0;
    while (retryCounter < 4){
        try{
            return await callback();
        }catch(err){
            console.log("*********** Action not succesful. Retying action");
            // console.log(err.stack);
            retryCounter++;
            await browser.pause(2000);

        }
    }
}

module.exports = { getElement, click, getText, withRetry};

