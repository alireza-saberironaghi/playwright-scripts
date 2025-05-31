import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
test.setTimeout(280000);
// welcome
  await page.goto('https://Kawartha.sites.qa.thirdstream.ca/deposits/en/app/flow/welcome');
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
  await page.getByRole('button', { name: 'Next' }).click();

// account selection
await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
await page.getByLabel('Pension Income', { exact: true }).click();
await page.locator('p-radiobutton').filter({ hasText: 'No' }).locator('div').nth(2).click();
await page.getByRole('button', { name: 'Next' }).click();

// add another account
await page.locator('p-radiobutton').filter({ hasText: 'No' }).locator('div').nth(2).click();
await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();

// personal info
await page.getByLabel('First name').fill('Chrit');
await page.getByLabel('Last name').fill('brown');
await page.locator('input[name="dob"]').click();
await page.getByText('1987').click();
await page.getByText('Apr').click();
await page.getByText('16').first().click();
await page.getByLabel('Social Insurance Number').type("447325259");
await page.getByLabel('Home address').fill('554 Sixth St New Westminster, BC V3L3B5');
await page.getByText('554 Sixth St, New Westminster').click();
await page.getByLabel('Cell #').type('6478543392');
await page.getByLabel('Email').fill('alex.saberi@thirdstream.ca');
await page.getByRole('button', { name: 'Next' }).click();

// mobile confirmation
await page.getByLabel('Enter mobile code').fill('000000');
await page.getByRole('button', { name: 'Submit' }).click();

// your primary branch
await page.getByRole('button', { name: 'Next' }).click();

// employment
await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
await page.getByLabel('Student').click();
//Verbal passcode
  await page.getByLabel('Verbal Passcode').fill("1234");
await page.getByLabel('Online Banking Password').fill('Thirdstream1234@');
await page.getByLabel('Re-enter your password').fill('Thirdstream1234@');
await page.getByRole('button', { name: 'Next' }).click();

// consent
await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
await page.getByLabel('Manage household expenses and bills', { exact: true }).click();
await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
await page.getByLabel('No', { exact: true }).click();
await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
await page.getByRole('option', { name: 'No' }).click();
await page.locator('div').filter({ hasText: /^empty$/ }).click();
await page.getByRole('option', { name: 'No', exact: true }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();

//confirmation
// await page.getByRole('button', { name: 'Submit' }).click();

  await page.waitForTimeout(600000); // 10 minutes in milliseconds


});

