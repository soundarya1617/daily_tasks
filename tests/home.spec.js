const {chromium,test,expect} = require('@playwright/test');

test('Locators', async()=>{
 const browser = await chromium.launch(
    {
        headless: false,
    }
 );
 const page = await browser.newPage();
 await page.goto('https://www.kohls.com/');
 await Promise.all([])
 const pageTitle = await  page.title();
 await expect(page).toHaveTitle(pageTitle);
 console.log(pageTitle);
 const pagetUrl = await page.url();
 await expect(page).toHaveURL(pagetUrl);
 console.log(pagetUrl);

 const signin = await page.locator('a[title="Account"]');
 await expect(signin).toBeVisible();
 await signin.click();
//  await expect(signin).toBeVisible()
// await page.waitForNavigation();




 
});