import { test, expect } from '@playwright/test'

test('@T6 CampaignBanner renders when toggle is true', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  const banner = page.locator('section[aria-label="Campanhas Moisés Nunes Comunicação Visual"]')
  await expect(banner).toBeVisible()
  const img = banner.locator('img')
  await expect(img).toHaveAttribute('alt', 'Campanhas Moisés Nunes Comunicação Visual')
})

test('@T6 CampaignBanner img has correct src from config', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  const img = page.locator('section[aria-label="Campanhas Moisés Nunes Comunicação Visual"] img')
  await expect(img).toHaveAttribute('src', 'https://lh3.googleusercontent.com/d/1UePH9sYu6RP88jlK6XFMjurKBIBbVqDs=w1000?authuser=0')
})
