const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  // Standard desktop PC (no touch)
  const context = await browser.newContext({
    hasTouch: false,
    isMobile: false,
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const getNav = async () => page.evaluate(() => {
    const h = window.getComputedStyle(document.querySelector('header'));
    const n = window.getComputedStyle(document.querySelector('header > nav'));
    return {
      headerPaddingTop: h.paddingTop,
      navMaxWidth: n.maxWidth,
      navBorderRadius: n.borderRadius
    };
  });

  const top = await getNav();
  await page.evaluate(() => window.scrollTo(0, 300));
  await page.waitForTimeout(400);
  const scrolled = await getNav();

  console.log('Desktop 1440x900 Mouse:');
  console.log('Top:     ', top);
  console.log('Scrolled:', scrolled);

  await browser.close();
})();
