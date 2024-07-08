import { firefox } from "playwright";

(async () => {
    // launch browser visibly
    const browser = await firefox.launch({ headless: false });

    // open new tab
    const page = await browser.newPage();

    // navigate to webpage
    await page.goto("https://graphic-walker-data-explorer.netlify.app/");

    // wait for the page to load completely
    await page.waitForLoadState('load');

    // take a screenshot of page
    await page.screenshot({ path: "example.png" });

    // close the browser
    await browser.close();

})();