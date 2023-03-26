import test from "@playwright/test";

//when you use {} to wrap up the browser i.e {browser} than playwrihgt will recognise it as a fixture
//ohterwise it will be recognised as a string

test('First PlayWright Test',async ({browser}) => {
    
    //browser.newContext() will create a fresh instance of a browser. You can inject cookie as a parameter in this mehtod.
    const browserContext = browser.newContext(); 
})