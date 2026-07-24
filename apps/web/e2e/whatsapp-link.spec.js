import { test, expect } from '@playwright/test'

test('@T10 WhatsAppLink has correct href with encoded message', async ({ page }) => {
  await page.goto('/')
  const link = page.locator('a[href*="wa.me/5584921768017"]').first()
  await expect(link).toBeVisible()
  const href = await link.getAttribute('href')
  expect(href).toContain('wa.me/5584921768017')
  expect(href).toContain('?text=')
})

test('@T10 WhatsAppLink opens in new tab', async ({ page }) => {
  await page.goto('/')
  const link = page.locator('a[href*="wa.me/5584921768017"]').first()
  await expect(link).toHaveAttribute('target', '_blank')
  await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
})
