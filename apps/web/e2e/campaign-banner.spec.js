import { test, expect } from '@playwright/test'

// Banner visibility depends on the SHOW_CAMPAIGN_BANNER toggle in src/config/site.js
// (currently `false` — the old SVG was a developer-branded placeholder). When the
// stakeholder provides the final SVG, set the toggle to `true` and restore the
// visibility/src assertions.
test('@T6 CampaignBanner is not rendered while toggle is false', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  await expect(
    page.locator('section[aria-label="Campanhas Moisés Nunes Comunicação Visual"]')
  ).toHaveCount(0)
})
