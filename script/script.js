const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.google.com');
  await page.screenshot({ path: 'google.png' });

  // Pausa a execução para que você possa ver o que está acontecendo
  // Remova ou ajuste conforme necessário
  await new Promise(resolve => setTimeout(resolve, 5000));

  await browser.close();
})();