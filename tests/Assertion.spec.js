const{test, expect} = require('@playwright/test')
test('Assertiontest', async({page})=>{

    // open app url
    await page.goto('https://demo.nopcommerce.com/register')
    
    //assertion for comparing url
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //assertion for comparing title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //assertion to check element is visible or not
    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible()





})