// Visual QA helper. Drives the system Chrome via Playwright (no browser
// download), scrolls so scroll-reveal sections actually animate in, and
// writes one screenshot per section in both light and dark themes.
//
//   node scripts/shoot.mjs [baseUrl] [outDir]
//
// Defaults: http://localhost:4319  ->  /tmp/npp-shots

import { chromium } from 'playwright'

const baseUrl = process.argv[2] || 'http://localhost:4319'
const outDir = process.argv[3] || '/tmp/npp-shots'

const sections = [
  { name: 'hero', selector: '#top' },
  { name: 'work', selector: '#work' },
  { name: 'about', selector: '#about' },
  { name: 'footer', selector: 'footer' },
]

const browser = await chromium.launch({ channel: 'chrome' })

for (const theme of ['light', 'dark']) {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: theme,
    deviceScaleFactor: 2,
  })
  const page = await ctx.newPage()
  await page.goto(baseUrl, { waitUntil: 'networkidle' })
  // Let the hero intro + fonts settle.
  await page.waitForTimeout(3000)

  for (const s of sections) {
    await page.locator(s.selector).first().scrollIntoViewIfNeeded()
    await page.waitForTimeout(1200) // allow whileInView reveals to finish
    await page.screenshot({ path: `${outDir}/${theme}-${s.name}.png` })
    console.log(`wrote ${outDir}/${theme}-${s.name}.png`)
  }
  await ctx.close()
}

await browser.close()
