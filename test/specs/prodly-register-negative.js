const { convertPackageHashToObject } = require("@wdio/cli/build/utils");
const assert = require("assert");

function randomNumber(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const number = randomNumber(10)

describe ('prodly register test', function () {
    it ('should check if the number already using. test should fail', async () => {
        await browser.url('https://stage.prodly.ru/')
        const loginButton = $('body > div.fixed-wrap > div > div.top > a');
        await loginButton.waitForDisplayed({ timeout: 3000 }); 
        await loginButton.click();
        const register = $('#main-form > div.top > a');
        await register.click();
        const nameInput = $('#main-form > div.info-inputs > div:nth-child(1) > input[type=text]');
        await nameInput.waitForDisplayed();
        const name = 'Иван';
        await nameInput.setValue(name);
        const phoneInput = $('#main-form > div.info-inputs > div:nth-child(2) > input');
        await phoneInput.setValue(number);
        const passwordInput = $('#main-form > div.info-inputs > div.input-wrap.password-wrap > input[type=password]');
        await passwordInput.setValue('12345');
        const registerButton = $('#main-form > button');
        await registerButton.click();
        await this.timeout(3000);
        const registrationCompleted = $('#globalDialog > div.dialog-header > div > h3');
        await registrationCompleted.waitForDisplayed();
        await this.timeout(3000);

        const registrationCompletedClose = $('#globalDialog > div.dialog-header > a');
        await registrationCompletedClose.click();
        const personalArea = $('body > div.fixed-wrap > div > div.top > div.links > div > a > span');
        await personalArea.click();
        await this.timeout(3000);
        const quit = $('body > div.fixed-wrap > div > div.top > div.links > div > div > div.right > ul > li:nth-child(6) > a');
        await quit.click();

        const registerAgain = $('#main-form > div.top > a');
        await registerAgain.click();

        await nameInput.waitForDisplayed();
        await nameInput.setValue(name);
        await phoneInput.setValue(number);
        await passwordInput.setValue('12345');
        await registerButton.click();
        await this.timeout(3000);
        await registrationCompleted.waitForDisplayed();

    })
  })