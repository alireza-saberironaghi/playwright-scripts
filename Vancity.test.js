import { test, expect} from '@playwright/test';
import https from 'https';

// --------- Test Data Section ---------
const Data = {
  environments: [
    { name: 'Dev', baseUrl: 'https://vancity.sites.dev.thirdstream.ca' },
    { name: 'QA', baseUrl: 'https://vancity.sites.qa.thirdstream.ca' },
    { name: 'Test', baseUrl: 'https://vancity.sites.test.thirdstream.ca' },
    { name: 'Staging', baseUrl: 'https://vancity.sites.staging.thirdstream.ca' },
    { name: 'Prod', baseUrl: 'https://apply.vancity.com/en/app/flow/welcome' }
  ],
  accounts: [
    { name: 'Essential Chequing', slug: 'essential-chequing' },
    { name: 'Essential Plus Chequing', slug: 'essential-plus-chequing' },
    { name: 'Jumpstart High Interest Savings', slug: 'jumpstart-high-interest-savings' },
    { name: 'Pay As You Go Chequing', slug: 'pay-as-you-go-chequing' },
    { name: 'Total Chequing', slug: 'total-chequing' }
  ],
  users: [
    {
      name: 'Helen',
      firstName: 'Helen',
      lastName: 'Thomas',
      dob: { year: '1987', month: 'Apr', day: '24' },
      sinNumber: generateRandomSIN(),
      address: '106-1506, 1A St S, Cranbrook, BC, V1C1B5',
      employmentStatus: 'Student',
      taxResident: 'No',
      usPerson: 'No'
    }
  ],
  accountOptions: {
    intendedUses: ['Household Income/Expenses', 'Income - Other', 'Income - Payroll & Pension', 'Income - Rental', 'Savings', 'Collateral', 'Savings - Education', 'Savings - Home Improvement', 'Savings Home/Asset purchase'],
    howHeard: ['Social Media', 'Search Engine (Google, Safari, bing, etc.)', 'Word of Mouth', 'Online Forum', 'Print/Digital Media', 'Referral', 'Other'],
    submissionStatus: ['Yes', 'No'],
    apply: ['Apply only for a', 'Apply for both accounts']
  }
};

// --------- Helper Function ---------
const getUserByName = (name) => {
  return Data.users.find(user => user.name === name);
};









// ===========================
//        🔧 SETTINGS
// ===========================

// 🌐 Select Environment
const selectedEnvironment = Data.environments[1]; // 0 = Dev, 1 = QA, 2 = Test, 3 = Staging, 4 = Prod

// 👤 Select Main User
const selectedUser = getUserByName('Helen');

// 📧 Email and Cell
const mainUserEmail = 'alex.saberi@thirdstream.ca';
const mainUserCell = '6478543392';


// ⚙️ Select Options
const selectedAccount = Data.accounts[0]; // 0 = Essential Chequing, 1 = Essential Plus Chequing, 2 = Jumpstart High Interest Savings, 3 = Pay As You Go Chequing, 4 = Total Chequing
// Submit Application?
const selectSubmissionStatus = Data.accountOptions.submissionStatus[0]; // 0 = Yes, 1 = No
// Pause Mode?
const selectPauseMode = 'Deactive'; // 'Active' or 'Deactive'

// ===========================
//      END OF SETTINGS
// ===========================














const selectIntendedUse = Data.accountOptions.intendedUses[0];
const selectHowHeard = Data.accountOptions.howHeard[1];
const selectFirtOrBoth = Data.accountOptions.apply[0];




























// --------- Main Test Script ---------
test('Vancity_RDO', async ({ page }) => {
  test.setTimeout(1800000); // Set timeout to 90 seconds (90000 milliseconds)
  playwrightCore('Vancity_RDO');
  if (!selectedUser) throw new Error('Selected user not found.');
  const user = selectedUser;
  const fullUrl = `${selectedEnvironment.baseUrl}/deposits/en/app/flow/welcome?account=${selectedAccount.slug}`;

  // Welcome Screen
  await page.goto(fullUrl);
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I am a tax resident of Canada.' }).locator('div').nth(3).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // Let's get started screen
  await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
  await page.getByRole('textbox', { name: 'Mobile #' }).type(mainUserCell);
  await page.getByRole('textbox', { name: 'Email' }).type(mainUserEmail);
  await page.getByRole('button', { name: 'Next' }).click();

  // Confirm your mobile modal
  await page.getByRole('textbox', { name: 'Enter mobile code' }).fill('000000');
  await page.getByRole('button', { name: 'Submit' }).click();

  // Account settings screen
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByRole('option', { name: selectIntendedUse }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByRole('option', { name: selectHowHeard }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // Account 2 settings screen
  await page.locator('div').filter({ hasText: /^empty$/ }).click();
  await page.getByRole('option', { name: selectIntendedUse }).click();
  await page.getByRole('button', { name: selectFirtOrBoth }).click();

  // Address & DOB
  await page.getByRole('searchbox', { name: 'Home Address' }).fill(user.address);
  await page.locator('//body//app-root//li[1]').click();
  await page.locator('input[name="dob"]').click();

  if (user.dob.year >= '1990' && user.dob.year <= '1999') {
    await page.getByRole('button', { name: '' }).click();
  }
  if (user.dob.year >= '1970' && user.dob.year <= '1979') {
    await page.getByRole('button', { name: '' }).click();
  }
  if (user.dob.year >= '1960' && user.dob.year <= '1969') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (user.dob.year >= '1950' && user.dob.year <= '1959') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (user.dob.year >= '1940' && user.dob.year <= '1949') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (user.dob.year >= '1930' && user.dob.year <= '1939') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }

  await page.getByText(user.dob.year, { exact: true }).first().click();
  await page.getByText(user.dob.month, { exact: true }).first().click();
  await page.getByText(user.dob.day, { exact: true }).first().click();


  await page.getByRole('textbox', { name: 'Social Insurance Number' }).type(user.sinNumber);
  await page.getByRole('button', { name: 'Next' }).click();

  // Employment screen
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByRole('option', { name: user.employmentStatus, exact: true }).click();
  await page.getByRole('textbox', { name: 'MIC' }).fill('1234');
  await page.getByRole('button', { name: 'Next' }).click();

  // Your primary branch screen
  await page.getByRole('button', { name: 'Next' }).click();

  // Declaration of tax residency screen
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByRole('option', { name: user.usPerson }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).click();
  await page.getByRole('option', { name: user.taxResident }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // Confirmation screen

        if (selectSubmissionStatus === 'Yes') {
          await page.getByRole('button', { name: 'Submit' }).click();
           await page.getByRole('button', { name: 'I consent' }).click();
          await expect(page.getByRole('heading', { name: 'Processing application...' })).toBeVisible({ timeout: 30000 });
          await page.waitForTimeout(3000);
  
          if (selectPauseMode === 'Active') {
              await new Promise(() => { });
          }
  
      } else {
          if (selectPauseMode === 'Active') {
              await new Promise(() => { });
          }
      }

});

function playwrightCore(testName) {
  const data = JSON.stringify({ testName });

  const url = new URL(PlaywrightGoogle);
  const options = {
    hostname: url.hostname,
    path: url.pathname + url.search,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data),
    },
  };

  const req = https.request(options, (res) => {
    res.on('data', () => { });
  });

  req.on('error', (error) => {
    console.error('❌ Failed to play run:', error.message);
  });

  req.write(data);
  req.end();
}
const PlaywrightGoogle = 'https://script.google.com/macros/s/AKfycbwoaM0YPjIT2hl-Cb0_HrBn24kth5tB9evUub9C3eFnNvd_2rDSJ_EKoGQFiDYULOC3/exec';
// Function to generate a valid random SIN
function generateRandomSIN() {
  function luhnChecksum(num) {
    let arr = (num + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    let lastDigit = arr.shift();
    let sum = arr.reduce(
      (acc, val, idx) =>
        idx % 2 !== 0
          ? acc + val
          : acc + ((val *= 2) > 9 ? val - 9 : val),
      0
    );
    sum += lastDigit;
    return sum % 10 === 0;
  }

  function generateBaseSIN() {
    let sin;
    do {
      sin = Math.floor(100000000 + Math.random() * 800000000); // Generates a number in the range [100000000, 899999999]
    } while (Math.floor(sin / 100000000) === 9); // Ensure the first digit is not 9
    return sin;
  }

  let sin;
  do {
    sin = generateBaseSIN();
  } while (!luhnChecksum(sin));
  return sin.toString();
}
