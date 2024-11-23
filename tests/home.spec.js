const {chromium,test,expect} = require('@playwright/test');

test('Locators', async()=>{
 const browser = await chromium.launch(
    {
        headless: false,
    }
 );
 const page = await browser.newPage();
 await page.goto('https://www.kohls.com/');
 const pageTitle = await  page.title();
 await expect(page).toHaveTitle(pageTitle);
 console.log(pageTitle);
 const pagetUrl = await page.url();
 await expect(page).toHaveURL(pagetUrl);
 console.log(pagetUrl);

 const signin = await page.locator('a[title="Account"]');
 await expect(signin).toBeVisible();
 await signin.click();

 await page.goto('https://www.kohls.com/myaccount/signin.jsp');
 const pageSignin = await  page.title();
 await expect(page).toHaveTitle(pageSignin);
 console.log(pageSignin);
 const pagetsignUrl = await page.url();
 await expect(page).toHaveURL(pagetsignUrl);
 console.log(pagetsignUrl);
 
 const username = await page.locator('#signin-email');
 await expect(page).toHaveURL(pagetsignUrl)
 await username.fill('Trends');
//  await expect(signin).toBeVisible()
// await page.waitForNavigation();

});