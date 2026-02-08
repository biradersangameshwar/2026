const {test, expect} = require('@playwright/test');

test('Homepage',async ({page})=>{

    await page.goto('https://www.demoblaze.com/');
    const pagetitle = await page.title();
    console.log('pagetitle is: ',pagetitle);
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
   // await page.close();


})