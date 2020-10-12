let {Builder, By, Key, until} = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
var assert = require('assert');

let options = new chrome.Options();
options.addArguments('user-data-dir=C:\\Users\\imyaman\\AppData\\Local\\Google\\Chrome\\User Data\\Default');
options.addArguments('start-maximized');
// options.setBinary('path');

let driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

let buildDriver = driver;


describe("Login Test" , function() {
  this.timeout(0);
  // adding the before an event that triggers before the rest execution
  beforeEach(function(done) {
    /*
    caps.name = this.currentTest.title;
    driver = buildDriver(caps);
    */
    done();
  });

// defining the test case to be executed
  it('should go to meeting and check the title', async () => {
    await driver.get('https://meeting.kakaowork.com/bra-vog-wak');
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.className('button relative pack has-tooltip button--primary svelte-hd30t3')));
    const title = await driver.getTitle();

    assert(title.match("Kakao Work Meeting") != null);
  });

  it('should have a button', async () => {
    let button = await driver.wait(until.elementLocated(By.className('button relative pack has-tooltip button--primary svelte-hd30t3')));
    const title = await driver.getTitle();
    assert(title.match("Kakao Work Meeting") != null);
  });


  // adding the after event that triggers to check if the test passed or failed
  afterEach(function(done) {
    if (this.currentTest.isPassed) {
      // driver.executeScript("lambda-status=passed");
    } else {
      // driver.executeScript("lambda-status=failed");
    }
  });

});

