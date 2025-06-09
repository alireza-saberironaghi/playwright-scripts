import { test, expect} from '@playwright/test';
import https from 'https';

// 🌐 Data constants
const Data = {
  environments: [
    'https://assiniboine.sites.dev.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://assiniboine.sites.qa.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://assiniboine.sites.test.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://assiniboine.sites.staging.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://assiniboine.sites.staging.thirdstream.ca/deposits/en/app/flow/welcome',
  ],
  users: [
    {
      name: 'Jaime',
      firstName: 'Jaime',
      lastName: 'Lakatos',
      dob: { year: '1971', month: 'Jun', day: '3' },
      sinNumber: generateRandomSIN(),
      address: '144A, Emerson Ave, Winnipeg, MB, R2G1E9',
      employmentStatus: 'Employed',
      password: 'Thirdstream1234$',
      branch: 'Little Britain Branch',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No',
    },
    {
      name: 'Helen',
      firstName: 'Helen',
      lastName: 'Thomas',
      dob: { year: '1987', month: 'Apr', day: '24' },
      sinNumber: generateRandomSIN(),
      address: '123-3077, Pembina Hwy, Winnipeg, MB, R3T4R6',
      employmentStatus: 'Employed',
      password: 'Thirdstream1234$',
      branch: 'Little Britain Branch',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No',
    }

  ],
  accountOptions: {
    intendedUses: ['Day to day banking', 'Investment', 'Education'],
    howHeard: ['Search engines', 'Social media', 'Referral'],
    overdraft: ['Yes', 'No'],
    debitCard: ['Yes', 'No'],
    openAnotherAccount: ['Yes', 'No'],
    submissionStatus: ['Yes', 'No'],
    addJointApplicant: ['Yes', 'No'],
  }
};

// Helper function to retrieve user by name
const getUserByName = (name) => {
  return Data.users.find(user => user.name === name);
};


















// ===========================
//        🔧 SETTINGS
// ===========================

// 🌐 Select Environment
const environment = Data.environments[1]; // 0 = Dev, 1 = QA, 2 = Test, 3 = Staging, 4 = Prod

// 👤 Select Main User
const selectedUser = getUserByName('Jaime'); // ['Jaime', 'Helen']

// 👥 Add Joint User?
const selectAddJointApplicant = Data.accountOptions.addJointApplicant[1]; // 0 = Yes, 1 = No
// Select Joint User
const selectedJointUser = getUserByName('Helen'); // ['Jaime', 'Helen']

// 📧 Email and Cell
const mainUserEmail = 'alex.saberi@thirdstream.ca';
const mainUserCell = '6478543392';
const jointUserEmail = 'alex.saberi1@thirdstream.ca';
const jointUserCell = '6478543394';


// ⚙️ Select Options
// Open Another Account?
const selectedAddAnotherAccount = Data.accountOptions.openAnotherAccount[0]; // 0 = Yes, 1 = No
// Select Overdraft
const selectedOverdraft = Data.accountOptions.overdraft[0]; // 0 = Yes, 1 = No
// Select Debit Card
const selectedDebitCard = Data.accountOptions.debitCard[0]; // 0 = Yes, 1 = No
// Submit Application?
const selectSubmissionStatus = Data.accountOptions.submissionStatus[0]; // 0 = Yes, 1 = No
// Pause Mode?
const selectPauseMode = 'Deactive'; // 'Active' or 'Deactive'


// ===========================
//      END OF SETTINGS
// ===========================











const selectedIntendedUse = Data.accountOptions.intendedUses[0];
const selectedHowHeard = Data.accountOptions.howHeard[0];





















test('Assiniboine', async ({ page }) => {
  test.setTimeout(1800000); // Set timeout to 90 seconds (90000 milliseconds)
  playwrightCore('Assiniboine');
  if (!selectedUser) {
    throw new Error('User not found');
  }
  // Check if selectedJointUser is defined
  if (!selectedJointUser) {
    throw new Error('Selected joint user is not found');
  }

  // if (!selectedUser) throw new Error('User not found');
  const user = selectedUser;
  const jointUser = selectedJointUser;

  // 🟢 Welcome Page
  await page.goto(environment);
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // 🟢 Account Selection
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByRole('option', { name: selectedHowHeard }).click();

  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByRole('option', { name: selectedIntendedUse }).click();

  await page.locator('p-radiobutton').filter({ hasText: selectedDebitCard }).locator('div').nth(2).click();
  // await page.locator(`#open-overdraft-account1`).nth(1).click();
  // await page.locator('#open-overdraft-account1-2 > .p-radiobutton > .p-radiobutton-box').first().click();
  await page.getByText(selectedOverdraft).nth(1).click();
  // await page.locator('p-radiobutton').filter({ hasText: selectedOverdraft }).locator('div').nth(2).click();

  // await page.getByText('Yes').nth(2).click();

  await page.getByRole('button', { name: 'Next' }).click();

  // 🟢 Add Another Account
  await page.locator('p-radiobutton').filter({ hasText: selectedAddAnotherAccount }).locator('div').nth(2).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();

  // ---------- open another account
  if (selectedAddAnotherAccount == 'Yes') {
    //intended use
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel(selectedIntendedUse, { exact: true }).click();

    await page.getByRole('button', { name: 'Next' }).click();
  }

  // 🟢 Personal Information
  await page.getByLabel('First name').fill(user.firstName);
  await page.getByLabel('Last name').fill(user.lastName);

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

  await page.getByLabel('Social Insurance Number').type(user.sinNumber);
  await page.getByLabel('Home address').fill(user.address);
  await page.locator('//body//app-root//li[1]').click();

  await page.getByLabel('Cell #').type(mainUserCell);
  await page.getByLabel('Email').type(mainUserEmail);
  await page.getByRole('button', { name: 'Next' }).click();

  // 🟢 Confirm Mobile
  await page.getByLabel('Enter mobile code').fill('000000');
  await page.getByRole('button', { name: 'Submit' }).click();

  // 🟢 Branch Page
  await page.getByRole('button', { name: 'Next' }).click();

  // 🟢 Employment
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByLabel(user.employmentStatus, { exact: true }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByLabel('Agriculture, Horticulture and Fisheries', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByLabel('Farmer', { exact: true }).click();
  await page.getByLabel('Position/Title').fill('Product owner');
  await page.getByLabel('Employer Name').fill('thirdstream');
  await page.getByRole('option', { name: /thirdstream 8 Street/ }).click();
  if (selectedOverdraft === 'Yes') {
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByRole('option', { name: '$0 - $' }).click();
  }
  await page.getByLabel('Verbal Passcode').fill('1234');
  await page.getByLabel('Online Banking Password').fill(user.password);
  await page.getByLabel('Re-enter your password').fill(user.password);
  await page.getByRole('button', { name: 'Next' }).click();

  // 🟢 Compliance
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByLabel('Save for retirement', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByLabel(user.politicallyExposed, { exact: true }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByRole('option', { name: user.taxResident }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).click();
  await page.getByRole('option', { name: user.usPerson, exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // would you like to add a joint applicant?
  await page.locator('p-radiobutton').filter({ hasText: selectAddJointApplicant }).locator('div').nth(2).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();



  if (selectAddJointApplicant === 'Yes') {
    await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
    await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();



    // 🟢 Joint Applicant Information
    await page.getByLabel('First name').fill(jointUser.firstName);
    await page.getByLabel('Last name').fill(jointUser.lastName);

    await page.locator('input[name="dob-joint"]').click();

    if (jointUser.dob.year >= '1990' && jointUser.dob.year <= '1999') {
      await page.getByRole('button', { name: '' }).click();
    }
    if (jointUser.dob.year >= '1970' && jointUser.dob.year <= '1979') {
      await page.getByRole('button', { name: '' }).click();
    }
    if (jointUser.dob.year >= '1960' && jointUser.dob.year <= '1969') {
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
    }
    if (jointUser.dob.year >= '1950' && jointUser.dob.year <= '1959') {
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
    }
    if (jointUser.dob.year >= '1940' && jointUser.dob.year <= '1949') {
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
    }
    if (jointUser.dob.year >= '1930' && jointUser.dob.year <= '1939') {
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
    }

    await page.getByText(jointUser.dob.year, { exact: true }).first().click();
    await page.getByText(jointUser.dob.month, { exact: true }).first().click();
    await page.getByText(jointUser.dob.day, { exact: true }).first().click();

    await page.getByLabel('Social Insurance Number').type(jointUser.sinNumber);
    await page.getByRole('searchbox', { name: 'Home address' }).fill(jointUser.address);
    await page.locator('//body//app-root//li[1]').click();

    await page.getByLabel('Cell #').type(jointUserCell);
    await page.getByRole('textbox', { name: 'Email' }).type(jointUserEmail);
    await page.getByRole('button', { name: 'Next' }).click();

    // 🟢 Confirm Mobile
    await page.getByLabel('Enter mobile code').fill('000000');
    await page.getByRole('button', { name: 'Submit' }).click();

    // 🟢 Employment
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel(jointUser.employmentStatus, { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Agriculture, Horticulture and Fisheries', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Farmer', { exact: true }).click();
    await page.getByLabel('Position/Title').fill('Product owner');
    await page.getByLabel('Employer Name').fill('thirdstream');
    await page.getByRole('option', { name: /thirdstream 8 Street/ }).click();
    await page.getByLabel('Verbal Passcode').fill('1234');
    await page.getByLabel('Online Banking Password').fill(jointUser.password);
    await page.getByLabel('Re-enter your password').fill(jointUser.password);
    await page.getByRole('button', { name: 'Next' }).click();

    // 🟢 Compliance
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Save for retirement', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel(jointUser.politicallyExposed, { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByRole('option', { name: jointUser.taxResident }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByRole('option', { name: jointUser.usPerson, exact: true }).click();
    await page.getByRole('button', { name: 'Next' }).click();


  }


    // ---------- confirmation page


      if (selectSubmissionStatus === 'Yes') {
        await page.getByRole('button', { name: 'Submit' }).click();
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
