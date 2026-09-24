const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1032, height: 1376 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const comm = page.locator('#community');
  await comm.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'scratch/comm_1032.png', fullPage: false });

  console.log('Saved community screenshot');
  await browser.close();
})();
