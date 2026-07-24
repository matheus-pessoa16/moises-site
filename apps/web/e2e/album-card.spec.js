import { test, expect } from '@playwright/test'

test('@T8 AlbumCard renders cover image without crop', async ({ page }) => {
  await page.goto('/galeria')
  const card = page.locator('.album-card').first()
  await expect(card).toBeVisible()
  const img = card.locator('img')
  await expect(img).toHaveClass(/object-contain/)
})

test('@T8 AlbumCard caption is below image', async ({ page }) => {
  await page.goto('/galeria')
  const card = page.locator('.album-card').first()
  const img = card.locator('img')
  const caption = card.locator('h3')
  const imgBox = await img.boundingBox()
  const captionBox = await caption.boundingBox()
  expect(captionBox.y).toBeGreaterThan(imgBox.y)
})

test('@T8 AlbumCard click triggers onClick', async ({ page }) => {
  await page.goto('/galeria')
  const card = page.locator('.album-card').first()
  await card.click()
  const modal = page.locator('[role="dialog"]')
  await expect(modal).toBeVisible()
})
