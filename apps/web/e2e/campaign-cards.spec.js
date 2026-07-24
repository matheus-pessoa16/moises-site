import { test, expect } from '@playwright/test'

test('@T7 CampaignCards renders all campaign cards', async ({ page }) => {
  await page.goto('/')
  const cards = page.locator('[data-testid="campaign-cards"] .campaign-card')
  await expect(cards).toHaveCount(3)
})

test('@T7 CampaignCards card without ctaLink has no link', async ({ page }) => {
  await page.goto('/')
  const cards = page.locator('[data-testid="campaign-cards"] .campaign-card')
  const thirdCard = cards.nth(2)
  await expect(thirdCard.locator('a')).toHaveCount(0)
})

test('@T7 CampaignCards card with ctaLink has clickable button', async ({ page }) => {
  await page.goto('/')
  const cards = page.locator('[data-testid="campaign-cards"] .campaign-card')
  const firstCard = cards.nth(0)
  await expect(firstCard.locator('a')).toBeVisible()
  await expect(firstCard.locator('a')).toHaveText('Ver projeto')
})
