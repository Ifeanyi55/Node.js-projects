import { firefox } from "playwright";

(async () => {
    const browser = await firefox.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://ifeanyi-openalex4gephi.hf.space/'); 
  
    // Click a button with specific text
    await page.click('text="Info"');
  
      
  })();