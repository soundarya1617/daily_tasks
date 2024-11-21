const {chromium,test,expect} = require('@playwright/test');

test('Browser launch Khols', async()=>{
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

});