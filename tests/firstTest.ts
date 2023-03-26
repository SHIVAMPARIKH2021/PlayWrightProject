import  {test , expect} from "@playwright/test";

//PlayWright has four fixtures: (1) browser (2) page 
//when you use {} to wrap up the browser i.e {browser} than playwrihgt will recognise it as a fixture
//ohterwise it will be recognised as a string

test('First PlayWright Test',async ({browser}) => {
    
    //browser.newContext() will create a fresh instance of a browser. Browser will be choosen from playwright.config.ts
    // You can inject cookie as a parameter in this mehtod.
    const browserContext = await browser.newContext();

    //newPage() will open a new page in the browser instance
    const webPage = await browserContext.newPage(); 

    await webPage.goto('https://www.google.com/');
    console.log(webPage.title())
})

test('scond test',async ({page}) =>{

    //here page is fixture which will execute newContext() and newPage() method to launch a browser
    await page.goto('https://www.google.com');
    const title = await page.title();
    await expect(page).toHaveTitle(title);
});