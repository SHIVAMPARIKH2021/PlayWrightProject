import {test,  expect, Locator } from "@playwright/test";

test('Login Test',async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@name='username']").type('Admin');
    await page.locator("//input[@name='password']").type('admin123');
    await page.locator("//button[text()=' Login ' and @class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
    expect(await page.title()).toEqual("OrangeHRM");
})