const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Extra large portrait device (e.g., high-res large tablet or vertical monitor)
  await page.setViewportSize({ width: 1200, height: 1600 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const getMetrics = async () => page.evaluate(() => {
    const h = window.getComputedStyle(document.querySelector('header'));
    const n = window.getComputedStyle(document.querySelector('header > nav'));
    const capSection = document.querySelector('#capabilities section');
    const capCards = document.querySelectorAll('#capabilities section > div > div > div');
    const ade = document.querySelector('#ade-preview > div:last-child');
    return {
      navMaxWidth: n.maxWidth,
      navBorderRadius: n.borderRadius,
      headerPaddingTop: h.paddingTop,
      capIsAuto: capSection.className.includes('h-auto'),
      cardsCount: capCards.length,
      card0Position: window.getComputedStyle(capCards[0]).position,
      adeMaxWidth: window.getComputedStyle(ade).maxWidth
    };
  });

  const top = await getMetrics();
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(400);
  const scrolled = await getMetrics();

  console.log('Extra Large Portrait 1200x1600:');
  console.log('Top:     ', top);
  console.log('Scrolled:', scrolled);

  await browser.close();
})();
