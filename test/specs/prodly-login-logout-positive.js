const assert = require("assert");
 
describe("prodly login-logout test", function() {
    it("should open url, enter login and password and logout", async () => {
        browser.url("https://stage.prodly.ru/");   
        const loginButton = $('body > div.fixed-wrap > div > div.top > a');
        await loginButton.waitForDisplayed({ timeout: 3000 });
        await loginButton.click();
        const phoneButtonLogin = $('#loginUsername');
        await phoneButtonLogin.click();
        const phone = '+79854551110';
        await $('#loginUsername').setValue(phone);
        const password = '12345';
        const passwordButton = $('#loginPassword');
        await passwordButton.setValue(password);
        const enterButton = $('#main-form > button');
        await enterButton.click();
        const closeChooseRegionButton = $('#globalDialog > div.dialog-header > a');
        await closeChooseRegionButton.waitForDisplayed();
        await closeChooseRegionButton.click()
        const personalArea = $('body > div.fixed-wrap > div > div.top > div.links > div > a > span');
        await personalArea.click();
        const exitButton = $('body > div.fixed-wrap > div > div.top > div.links > div > div > div.right > ul > li:nth-child(6) > a');
        await exitButton.waitForDisplayed();
        await exitButton.click()
        await this.timeout(3000);
    });
});
