import { test, expect } from '@playwright/test'

test('@T11 CareersForm renders all required fields', async ({ page }) => {
  await page.goto('/trabalhe-conosco', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('#careers-name')).toBeVisible()
  await expect(page.locator('#careers-email')).toBeVisible()
  await expect(page.locator('#careers-phone')).toBeVisible()
  await expect(page.locator('#careers-message')).toBeVisible()
  await expect(page.locator('#careers-resume')).toBeVisible()
})

test('@T11 CareersForm shows validation errors for missing fields', async ({ page }) => {
  await page.goto('/trabalhe-conosco', { waitUntil: 'domcontentloaded' })
  await page.locator('[data-testid="submit-careers"]').click()
  await expect(page.locator('[data-testid="error-name"]')).toBeVisible()
  await expect(page.locator('[data-testid="error-email"]')).toBeVisible()
  await expect(page.locator('[data-testid="error-phone"]')).toBeVisible()
  await expect(page.locator('[data-testid="error-message"]')).toBeVisible()
})

test('@T11 CareersForm shows error for invalid email', async ({ page }) => {
  await page.goto('/trabalhe-conosco', { waitUntil: 'domcontentloaded' })
  await page.locator('#careers-name').fill('Test User')
  await page.locator('#careers-email').fill('not-an-email')
  await page.locator('#careers-phone').fill('(84) 99999-9999')
  await page.locator('#careers-message').fill('Test message')
  await page.locator('[data-testid="submit-careers"]').click()
  await expect(page.locator('[data-testid="error-email"]')).toBeVisible({ timeout: 10000 })
  await expect(page.locator('[data-testid="error-email"]')).toHaveText('E-mail inválido')
})

test('@T11 CareersForm prevents submission without file', async ({ page }) => {
  await page.goto('/trabalhe-conosco', { waitUntil: 'domcontentloaded' })
  await page.locator('#careers-name').fill('Test User')
  await page.locator('#careers-email').fill('test@example.com')
  await page.locator('#careers-phone').fill('(84) 99999-9999')
  await page.locator('#careers-message').fill('Test message')
  await page.locator('[data-testid="submit-careers"]').click()
  await expect(page.locator('[data-testid="error-resume"]')).toBeVisible()
  await expect(page.locator('[data-testid="error-resume"]')).toHaveText('Currículo é obrigatório')
})

test('@T11 CareersForm submits successfully with valid data', async ({ page }) => {
  await page.route('**/webhook/moisesNunesAnalise', (route) => {
    route.fulfill({ status: 200, body: '{"success":true}' })
  })
  await page.goto('/trabalhe-conosco', { waitUntil: 'domcontentloaded' })
  await page.locator('#careers-name').fill('Test User')
  await page.locator('#careers-email').fill('test@example.com')
  await page.locator('#careers-phone').fill('(84) 99999-9999')
  await page.locator('#careers-message').fill('Test message')
  await page.setInputFiles('#careers-resume', {
    name: 'resume.pdf',
    mimeType: 'application/pdf',
    buffer: Buffer.from('fake pdf content'),
  })
  await page.locator('[data-testid="submit-careers"]').click()
  await expect(page.locator('text=Candidatura enviada com sucesso')).toBeVisible({ timeout: 10000 })
})

test('@T11 CareersForm shows error on webhook failure and preserves fields', async ({ page }) => {
  await page.route('**/webhook/moisesNunesAnalise', (route) => {
    route.fulfill({ status: 500, body: '{"error":"server error"}' })
  })
  await page.goto('/trabalhe-conosco', { waitUntil: 'domcontentloaded' })
  await page.locator('#careers-name').fill('Test User')
  await page.locator('#careers-email').fill('test@example.com')
  await page.locator('#careers-phone').fill('(84) 99999-9999')
  await page.locator('#careers-message').fill('Test message')
  await page.setInputFiles('#careers-resume', {
    name: 'resume.pdf',
    mimeType: 'application/pdf',
    buffer: Buffer.from('fake pdf content'),
  })
  await page.locator('[data-testid="submit-careers"]').click()
  await expect(page.locator('text=Não foi possível enviar')).toBeVisible({ timeout: 10000 })
  await expect(page.locator('#careers-name')).toHaveValue('Test User')
  await expect(page.locator('#careers-email')).toHaveValue('test@example.com')
})

test('@T11 CareersForm does not expose webhook details in error', async ({ page }) => {
  await page.route('**/webhook/moisesNunesAnalise', (route) => {
    route.fulfill({ status: 500, body: '{"error":"internal n8n details"}' })
  })
  await page.goto('/trabalhe-conosco', { waitUntil: 'domcontentloaded' })
  await page.locator('#careers-name').fill('Test User')
  await page.locator('#careers-email').fill('test@example.com')
  await page.locator('#careers-phone').fill('(84) 99999-9999')
  await page.locator('#careers-message').fill('Test message')
  await page.setInputFiles('#careers-resume', {
    name: 'resume.pdf',
    mimeType: 'application/pdf',
    buffer: Buffer.from('fake pdf content'),
  })
  await page.locator('[data-testid="submit-careers"]').click()
  await expect(page.locator('text=Não foi possível enviar')).toBeVisible({ timeout: 10000 })
  const bodyText = await page.locator('body').textContent()
  expect(bodyText).not.toContain('n8n')
  expect(bodyText).not.toContain('webhook')
  expect(bodyText).not.toContain('internal')
})
