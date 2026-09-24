const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1032, height: 1376 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const cap = page.locator('#capabilities');
  await cap.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'scratch/cap_1032_after.png', fullPage: false });
  console.log('Saved scratch/cap_1032_after.png');

  await browser.close();
})();
