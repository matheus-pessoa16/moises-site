import { test, expect } from '@playwright/test'

test('@T9 AlbumModal opens with correct album media', async ({ page }) => {
  await page.goto('/galeria')
  const card = page.locator('.album-card').first()
  await card.click()
  const modal = page.locator('[role="dialog"]')
  await expect(modal).toBeVisible()
  const slides = modal.locator('[role="group"][aria-roledescription="slide"]')
  const count = await slides.count()
  expect(count).toBeGreaterThan(0)
})

test('@T9 AlbumModal carousel has next/prev controls for multi-item albums', async ({ page }) => {
  await page.goto('/galeria')
  const cards = page.locator('.album-card')
  const firstCard = cards.first()
  await firstCard.click()
  const modal = page.locator('[role="dialog"]')
  await expect(modal).toBeVisible()
  const slides = modal.locator('[role="group"][aria-roledescription="slide"]')
  const count = await slides.count()
  if (count > 1) {
    await expect(modal.locator('button:has-text("Previous slide")')).toBeVisible()
    await expect(modal.locator('button:has-text("Next slide")')).toBeVisible()
  }
})

test('@T9 AlbumModal renders Google Drive video iframe', async ({ page }) => {
  await page.goto('/galeria')
  const finecapCard = page.locator('.album-card').filter({ hasText: 'Finecap' }).first()
  await finecapCard.click()
  const modal = page.locator('[role="dialog"]')
  await expect(modal).toBeVisible()
  const iframe = modal.locator('iframe[src*="drive.google.com"]')
  await expect(iframe).toBeVisible()
  await expect(iframe).toHaveAttribute('src', /\/file\/d\/1MQchokMrnCJDhla1fOWiZeRVDS0Xneoo\/preview/)
})

test('@T9 AlbumModal video has fallback link to Drive', async ({ page }) => {
  await page.goto('/galeria')
  const finecapCard = page.locator('.album-card').filter({ hasText: 'Finecap' }).first()
  await finecapCard.click()
  const modal = page.locator('[role="dialog"]')
  await expect(modal).toBeVisible()
  const fallbackLink = modal.locator('a[href*="drive.google.com/file/d"]')
  await expect(fallbackLink).toBeVisible()
})
