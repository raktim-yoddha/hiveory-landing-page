const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const testCases = [
    { name: 'Mobile 390x844', width: 390, height: 844 },
    { name: 'iPad Portrait 768x1024', width: 768, height: 1024 },
    { name: 'iPad Landscape 1024x768', width: 1024, height: 768 },
    { name: 'Big Tablet Portrait 1032x1376', width: 1032, height: 1376 },
    { name: 'Big Tablet Landscape 1376x1032', width: 1376, height: 1032 },
    { name: 'Desktop Landscape 1440x900', width: 1440, height: 900 }
  ];

  for (const tc of testCases) {
    await page.setViewportSize({ width: tc.width, height: tc.height });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    const getNavMetrics = async () => {
      return await page.evaluate(() => {
        const header = document.querySelector('header');
        const nav = document.querySelector('header > nav');
        const dlBtn = document.querySelector('header button.group\\/dlbtn');
        if (!header || !nav) return null;
        const hStyle = window.getComputedStyle(header);
        const nStyle = window.getComputedStyle(nav);
        const dlStyle = dlBtn ? window.getComputedStyle(dlBtn) : null;
        return {
          headerPaddingTop: hStyle.paddingTop,
          headerPaddingLeft: hStyle.paddingLeft,
          headerPaddingRight: hStyle.paddingRight,
          navMaxWidth: nStyle.maxWidth,
          navBorderRadius: nStyle.borderRadius,
          navWidth: Math.round(nav.getBoundingClientRect().width),
          dlBtnVisible: dlStyle ? dlStyle.display !== 'none' : false,
        };
      });
    };

    const getSectionMetrics = async () => {
      return await page.evaluate(() => {
        const capSection = document.querySelector('#capabilities section');
        const capCards = document.querySelectorAll('#capabilities section > div > div > div');
        const adePreview = document.querySelector('#ade-preview > div:last-child');
        return {
          capSectionHeight: capSection ? Math.round(capSection.getBoundingClientRect().height) : null,
          capIsAuto: capSection ? capSection.className.includes('h-auto') : false,
          card0Position: capCards[0] ? window.getComputedStyle(capCards[0]).position : null,
          adePreviewMaxWidth: adePreview ? window.getComputedStyle(adePreview).maxWidth : null
        };
      });
    };

    const navBefore = await getNavMetrics();
    const secBefore = await getSectionMetrics();

    // Scroll down 400px
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(400);

    const navAfter = await getNavMetrics();

    console.log(`\n================== ${tc.name} ==================`);
    console.log('Nav at top:    ', navBefore);
    console.log('Nav scrolled:  ', navAfter);
    console.log('Section status:', secBefore);

    // Save screenshots for visual verification
    const safeName = tc.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
    await page.screenshot({ path: `scratch/viewport_${safeName}.png`, fullPage: false });
  }

  await browser.close();
})();
