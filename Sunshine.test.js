import { test, expect} from '@playwright/test';
import https from 'https';

// ---------- DATA SECTION ----------
const Data = {
  environments: [
    'https://sunshine.sites.dev.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://sunshine.sites.qa.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://sunshine.sites.test.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://sunshine.sites.staging.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://sunshine.sites.prod.thirdstream.ca/deposits/en/app/flow/welcome'
  ],
  users: [
    {
      name: 'Chrit',
      firstName: 'Chrit',
      lastName: 'brown',
      dob: { year: '1987', month: 'Apr', day: '16' },
      sinNumber: generateRandomSIN(),
      address: '554 Sixth St New Westminster, BC V3L3B5',
      employmentStatus: 'Student',
      password: 'Thirdstream1234$',
      purpose: 'Save for retirement',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'Chritjoint',
      firstName: 'Chrit',
      lastName: 'brown',
      dob: { year: '1987', month: 'Apr', day: '16' },
      sinNumber: generateRandomSIN(),
      address: '554 Sixth St New Westminster, BC V3L3B5',
      employmentStatus: 'Student',
      password: 'Thirdstream1234$',
      purpose: 'Save for retirement',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'Chrit1',
      firstName: 'Chrit',
      lastName: 'brown',
      dob: { year: '1987', month: 'Apr', day: '16' },
      sinNumber: generateRandomSIN(),
      address: '554 Sixth St New Westminster, BC V3L3B5',
      employmentStatus: 'Student',
      password: 'Thirdstream1234$',
      purpose: 'Save for retirement',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'DEREK',
      firstName: 'DEREK',
      lastName: 'TESTIDBM',
      dob: { year: '1980', month: 'Apr', day: '4' },
      sinNumber: generateRandomSIN(),
      address: '1374, CLEARBROOK, ABSF, BC, V2T5X3',
      employmentStatus: 'Student',
      password: 'Thirdstream1234$',
      purpose: 'Save for retirement',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'JASPER',
      firstName: 'JASPER',
      lastName: 'TESTIDCW',
      dob: { year: '1978', month: 'Feb', day: '5' },
      sinNumber: generateRandomSIN(),
      address: '933, MESHER PL, VCTR, BC, V8V1L8',
      employmentStatus: 'Student',
      password: 'Thirdstream1234$',
      purpose: 'Save for retirement',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'ANTOINE',
      firstName: 'ANTOINE',
      lastName: 'TESTIDBY',
      dob: { year: '1983', month: 'Feb', day: '3' },
      sinNumber: generateRandomSIN(),
      address: '3093, BRITTANY DR, VCTR, BC, V9B5P8',
      employmentStatus: 'Student',
      password: 'Thirdstream1234$',
      purpose: 'Save for retirement',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'TRISTAN',
      firstName: 'TRISTAN',
      lastName: 'TESTIDDW',
      dob: { year: '1978', month: 'Mar', day: '3' },
      sinNumber: generateRandomSIN(),
      address: '6707, SOUTH POINT AV, BRBY, BC, V3N4V8',
      employmentStatus: 'Student',
      password: 'Thirdstream1234$',
      purpose: 'Save for retirement',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'GRANT',
      firstName: 'GRANT',
      lastName: 'TESTIDAC',
      dob: { year: '1978', month: 'Jan', day: '3' },
      sinNumber: generateRandomSIN(),
      address: '8777, HUDSON, VNCR, BC, V6P6H2',
      employmentStatus: 'Student',
      password: 'Thirdstream1234$',
      purpose: 'Save for retirement',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'ELI',
      firstName: 'ELI',
      lastName: 'TESTIDEM',
      dob: { year: '1978', month: 'Mar', day: '17' },
      sinNumber: generateRandomSIN(),
      address: '3901, WATERTON, ABSF, BC, V3G1J9',
      employmentStatus: 'Student',
      password: 'Thirdstream1234$',
      purpose: 'Save for retirement',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No'
    }
  ],
  accountOptions: {
    accountTypes: ['Chequing', 'Savings', 'Term Deposit'],
    addJointApplicant: ['Yes', 'No'],
    submissionStatus: ['Yes', 'No'],
    chequingPackages: ['Core', 'Mobile Unlimited', 'Premium Unlimited'],
    savingsPackages: ['Elevate High Interest Savings Account', 'Savings Account'],
    termdepositPackages: ['1 Year Non-Redeemable Term Deposit', '2 Year Non-Redeemable Term Deposit', '5 Year Non-Redeemable Term Deposit'],
    chequingIntendedUses: [
      'Family and Household Income/Expenses',
      'Pension Income',
      'Personal Income/Expenses',
      'Rental Property Income/Expenses'
    ],
    savingsIntendedUses: [
      'Car Purchase/Expenses',
      'Education',
      'Investment',
      'Renovations',
      'Retirement',
      'Saving for Major Purchase',
      'Savings for Expenses',
      'Travel/Vacation'
    ],
    termdepositIntendedUses: [
      'Education',
      'Inheritance',
      'Investment',
      'Retirement',
    ],

    needATM: ['Yes', 'No'],
    addAnotherAccount: ['Yes', 'No']
  },
  purposeOptions: [
    'Manage household expenses and bills',
    'Receive employment or pension income',
    'Save for retirement',
    'Obtain investment products',
    'Obtain lending products',
    'All of the above'
  ],
  politicallyExposedOptions: [
    'No',
    'I am, or a family member or close associate is, a politically exposed FOREIGN person',
    'I am, or a family member or close associate is, a politically exposed DOMESTIC person',
    'I am, or a family member of close associate is, the head of an international organization'
  ],
  taxResidentOptions: [
    'No',
    'Yes- in one other country',
    'Yes - in two other countries',
    'Yes - in three other countries'
  ],
  usPersonOptions: [
    'No',
    'Yes - I have a Social Security Number',
    'Yes - I will apply or have applied for a SSN but have not yet received it',
    "Yes - I don't have a Social Security Number"
  ]
};









// ===========================
//        🔧 SETTINGS
// ===========================

// 🌐 Select Environment
const environment = Data.environments[1]; // 0 = Dev, 1 = QA, 2 = Test, 3 = Staging, 4 = Prod

// 👤 Select Main User
const primaryUser = Data.users.find(user => user.name === 'Chrit'); // Chrit, DEREK, JASPER, ANTOINE, TRISTAN, GRANT, ELI

// 👥 Add Joint User?
const selectAddJointApplicant = Data.accountOptions.addJointApplicant[0]; // 0 = Yes, 1 = No
// Select Joint User
const jointUser = Data.users.find(user => user.name === 'DEREK');  // Chrit, DEREK, JASPER, ANTOINE, TRISTAN, GRANT, ELI

// 📧 Email and Cell
const mainUserEmail = 'alex.saberi@thirdstream.ca';
const mainUserCell = '6478543392';
const jointUserEmail = 'alex.saberi1@thirdstream.ca';
const jointUserCell = '6478543394';


// ⚙️ Select Options
// Open Another Account?
const selectAddAnotherAccount = Data.accountOptions.addAnotherAccount[0]; // 0 = Yes, 1 = No
// Submit Application?
const selectSubmissionStatus = Data.accountOptions.submissionStatus[0]; // 0 = Yes, 1 = No
// Pause Mode?
const selectPauseMode = 'Deactive'; // 'Active' or 'Deactive'


// ===========================
//      END OF SETTINGS
// ===========================






















// ===========================
//     PRIMARY ACCOUNT SETUP
// ===========================
// --- Account Type ---
const selectAccountType = Data.accountOptions.accountTypes[0]; // Chequing, Savings, Term Deposit

// --- Package Selection ---
const selectChequingPackage = Data.accountOptions.chequingPackages[0]; // Core, Mobile Unlimited, Premium Unlimited
const selectSavingsPackage = Data.accountOptions.savingsPackages[0]; // Elevate High Interest Savings Account, Savings Account
const selectTermdepositPackage = Data.accountOptions.termdepositPackages[0]; // '1 Year Non-Redeemable Term Deposit', '2 Year Non-Redeemable Term Deposit', '5 Year Non-Redeemable Term Deposit'

// --- Intended Use ---
const selectChequingIntendedUse = Data.accountOptions.chequingIntendedUses[1]; // Family and Household Income/Expenses, Pension Income, Personal Income/Expenses, Rental Property Income/Expenses
const selectSavingsIntendedUse = Data.accountOptions.savingsIntendedUses[1]; // 'Car Purchase/Expenses', 'Education', 'Investment', 'Renovations', 'Retirement', 'Saving for Major Purchase', 'Savings for Expenses', 'Travel/Vacation'
const selectTermdepositIntendedUse = Data.accountOptions.termdepositIntendedUses[1]; // 'Education','Inheritance','Investment','Retirement'


// --- Other Options ---
const selectNeedATM = Data.accountOptions.needATM[1]; // Yes, No

// ===========================
//     SECOND ACCOUNT SETUP
// ===========================
// --- Second Account Type ---
const selectSecondAccountType = Data.accountOptions.accountTypes[0]; // Chequing, Savings, Term Deposit

// --- Second Package Selection ---
const selectSecondChequingPackage = Data.accountOptions.chequingPackages[0]; // Core, Mobile Unlimited, Premium Unlimited
const selectSecondSavingsPackage = Data.accountOptions.savingsPackages[0]; // Elevate High Interest Savings Account, Savings Account
const selectSecondTermdepositPackage = Data.accountOptions.termdepositPackages[0]; // '1 Year Non-Redeemable Term Deposit', '2 Year Non-Redeemable Term Deposit', '5 Year Non-Redeemable Term Deposit'
// --- Second Intended Use ---
const selectSecondChequingIntendedUse = Data.accountOptions.chequingIntendedUses[1]; // Family and Household Income/Expenses, Pension Income, Personal Income/Expenses, Rental Property Income/Expenses
const selectSecondSavingsIntendedUse = Data.accountOptions.savingsIntendedUses[1]; // 'Car Purchase/Expenses', 'Education', 'Investment', 'Renovations', 'Retirement', 'Saving for Major Purchase', 'Savings for Expenses', 'Travel/Vacation'
const selectSecondTermdepositIntendedUse = Data.accountOptions.termdepositIntendedUses[1]; // 'Education','Inheritance','Investment','Retirement'

// ===========================
// Purpose and Disclosures
// ===========================
const selectPurpose = Data.purposeOptions[2]; // Manage household expenses and bills, Receive employment or pension income, Save for retirement, Obtain investment products, Obtain lending products, All of the above
const selectPoliticallyExposed = Data.politicallyExposedOptions[0]; // No, ..., etc.
const selectTaxResident = Data.taxResidentOptions[0]; // No, Yes- in one other country, Yes - in two other countries, Yes - in three other countries
const selectUSPerson = Data.usPersonOptions[0]; // No, Yes - I have a SSN, etc.








// ---------- TEST SCRIPT ----------

// All original field-level and option comments are preserved below ↓↓↓

test('Sunshine_RDO', async ({ page }) => {
  test.setTimeout(1800000); // Set timeout to 90 seconds (90000 milliseconds)
  playwrightCore('Sunshine_RDO');
  if (!primaryUser || !jointUser) {
    throw new Error('Primary or joint user not found in Data.users');
  }

  // Welcome screen
  await page.goto(environment);
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // Account selection
  //Account type
  await page.getByText('Chequing', { exact: true }).click(); //options: Chequing, Savings, Term Deposit
  await page.getByRole('option', { name: selectAccountType }).click();





  // If chequing
  if (selectAccountType == 'Chequing') {
    //Account
    await page.locator('#pr_id_2_label').click(); //options: Core, Mobile Unlimited, Premium Unlimited
    await page.getByRole('option', { name: selectChequingPackage }).click();

    //Intended use
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); //options: Family and Household Income/Expenses, Pension Income, Personal Income/Expenses, Rental Property Income/Expenses
    await page.getByLabel(selectChequingIntendedUse, { exact: true }).click();
  }

  // If savings
  if (selectAccountType == 'Savings') {
    //Account
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); //options: Core, Mobile Unlimited, Premium Unlimited
    await page.getByRole('option', { name: selectSavingsPackage }).click();

    //Intended use
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();//options: Family and Household Income/Expenses, Pension Income, Personal Income/Expenses, Rental Property Income/Expenses
    await page.getByLabel(selectSavingsIntendedUse, { exact: true }).click();
  }

  // If termdeposit
  if (selectAccountType == 'Term Deposit') {
    //Account
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();//options: '1 Year Non-Redeemable Term Deposit', '2 Year Non-Redeemable Term Deposit', '5 Year Non-Redeemable Term Deposit'
    await page.getByRole('option', { name: selectTermdepositPackage }).click();

    // What is the amount that you want to contribute?
    await page.getByLabel('What is the amount that you').fill('1000');

    //Intended use
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click();
    await page.getByLabel(selectTermdepositIntendedUse, { exact: true }).click();
  }




  if (selectAccountType == 'Chequing' || selectAccountType == 'Savings') {
    //Need ATM?
    await page.locator('p-radiobutton').filter({ hasText: selectNeedATM }).locator('div').nth(2).click(); //options: Yes, No
  }

  await page.getByRole('button', { name: 'Next' }).click();


  // Add another account?
  await page.locator('p-radiobutton').filter({ hasText: selectAddAnotherAccount }).locator('div').nth(2).click(); //options: Yes, No
  await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();


  // account selection 2
  // account selection 2 type
  // If chequing
  if (selectAccountType == 'Chequing' && selectAddAnotherAccount == 'Yes') {
    await page.getByText('Chequing', { exact: true }).click(); //options: Chequing, Savings, Term Deposit
    await page.getByRole('option', { name: selectSecondAccountType }).click();

    //Account
    await page.locator('#pr_id_7_label').click(); //options: Core, Mobile Unlimited, Premium Unlimited
    await page.getByRole('option', { name: selectSecondChequingPackage }).click();

    //Intended use
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel(selectSecondChequingIntendedUse, { exact: true }).click();

    await page.getByRole('button', { name: 'Next' }).click();
  }

  // if savings
  if (selectAccountType == 'Savings' && selectAddAnotherAccount == 'Yes') {
    await page.getByText('Chequing', { exact: true }).click(); //options: Chequing, Savings, Term Deposit
    await page.getByRole('option', { name: selectSecondAccountType }).click();

    //Account
    await page.locator('#pr_id_7_label').click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();//options: Core, Mobile Unlimited, Premium Unlimited
    await page.getByRole('option', { name: selectSecondSavingsPackage }).click();

    //Intended use
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click();//options: Family and Household Income/Expenses, Pension Income, Personal Income/Expenses, Rental Property Income/Expenses
    await page.getByLabel(selectSecondSavingsIntendedUse, { exact: true }).click();

    await page.getByRole('button', { name: 'Next' }).click();
  }

  //If term deposit
  if (selectAccountType == 'Term Deposit' && selectAddAnotherAccount == 'Yes') {
    await page.getByText('Chequing', { exact: true }).click(); //options: Chequing, Savings, Term Deposit
    await page.getByRole('option', { name: selectSecondAccountType }).click();
    //Account
    await page.locator('#pr_id_7_label').click(); //options: Core, Mobile Unlimited, Premium Unlimited
    await page.getByRole('option', { name: selectSecondTermdepositPackage }).click();

    //Intended use
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); //options: Family and Household Income/Expenses, Pension Income, Personal Income/Expenses, Rental Property Income/Expenses
    await page.getByLabel(selectSecondTermdepositIntendedUse, { exact: true }).click();

    await page.getByRole('button', { name: 'Next' }).click();
  }

  // await page.getByRole('button', { name: 'Next' }).first().click();






  // Personal Information
  await page.getByLabel('First name').fill(primaryUser.firstName);
  await page.getByLabel('Last name').fill(primaryUser.lastName);
  await page.locator('input[name="dob"]').click();

  if (primaryUser.dob.year >= '1970' && primaryUser.dob.year <= '1979') {
    await page.getByRole('button', { name: '' }).click();
  }
  if (primaryUser.dob.year >= '1960' && primaryUser.dob.year <= '1969') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (primaryUser.dob.year >= '1950' && primaryUser.dob.year <= '1959') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (primaryUser.dob.year >= '1940' && primaryUser.dob.year <= '1949') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (primaryUser.dob.year >= '1930' && primaryUser.dob.year <= '1939') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }



  await page.getByText(primaryUser.dob.year, { exact: true }).first().click();
  await page.getByText(primaryUser.dob.month, { exact: true }).first().click();
  await page.getByText(primaryUser.dob.day, { exact: true }).first().click();
  await page.getByLabel('Social Insurance Number').type(primaryUser.sinNumber);

  // Contact details
  await page.getByLabel('Home address').fill(primaryUser.address);
  await page.locator('//body//app-root//li[1]').click()
  await page.getByLabel('Cell #').type(mainUserCell);
  await page.getByLabel('Email').fill(mainUserEmail);
  await page.getByRole('button', { name: 'Next' }).click();

  // Confirm mobile

  // await page.waitForTimeout(20000);
  // const otp = await getLatestOtpFromReceiveSMS();

  //  console.log(otp)
  await page.getByLabel('Enter mobile code').fill("000000");


  // await page.getByLabel('Enter mobile code').fill('000000');
  await page.getByRole('button', { name: 'Submit' }).click();

  // Primary branch
  await page.getByRole('button', { name: 'Next' }).click();

  // Employment
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); //options: Full-time, On-call, Temporary, Contract, Seasonal, Salary, Self-Employed, Part-Time, Retired, Unemployed, Student
  await page.getByLabel(primaryUser.employmentStatus).click();

  if (primaryUser.employmentStatus == "Full-time" || primaryUser.employmentStatus == "On-call" || primaryUser.employmentStatus == "Temporary" || primaryUser.employmentStatus == "Contract" || primaryUser.employmentStatus == "Seasonal" || primaryUser.employmentStatus == "Salary" || primaryUser.employmentStatus == "Self-Employed" || primaryUser.employmentStatus == "Part-Time") {
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Agriculture, Horticulture and Fisheries', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
    await page.getByLabel('Farmer', { exact: true }).click();
    await page.getByLabel('Position/Title', { exact: true }).fill('Owner');
    await page.getByLabel('Employer Name', { exact: true }).fill('thirdstream');
    await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();
  }
  if (primaryUser.employmentStatus == "Retired") {
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
    await page.getByLabel('Agriculture, Horticulture and Fisheries', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click();
    await page.getByLabel('Farmer', { exact: true }).click();
    await page.getByLabel('Previous Position/Title').fill('owner');
    await page.getByLabel('Previous Employer Name').fill('thirdstream');
    await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();
  }

  //Verbal passcode
  await page.getByLabel('Verbal Passcode').fill("1234");

  // Password Setup
  await page.getByLabel('Online Banking Password').fill(primaryUser.password);
  await page.getByLabel('Re-enter your password').fill(primaryUser.password);
  await page.getByRole('button', { name: 'Next' }).click();

  //Consent and Disclosures
  // Purpose and Intended Nature of Business Relationship
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); //options: Manage household expenses and bills, Receive employment or pension income, Save for retirement, Obtain investment products, Obtain lending products, All of the above
  await page.getByLabel(selectPurpose, { exact: true }).click();

  // are you politically exposed or the head of an international organization?
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: No, I am, or a family member or close associate is, a politically exposed FOREIGN person, etc.
  await page.getByLabel(selectPoliticallyExposed, { exact: true }).click();

  // are you a tax resident of a country other than Canada or the US?
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); //options: No, Yes- in one other country, Yes - in two other countries, etc.
  await page.getByRole('option', { name: selectTaxResident }).click();

  // are you a US person? (a citizen or resident of the US)
  await page.locator('div').filter({ hasText: /^empty$/ }).click(); //options: No, Yes - I have a Social Security Number, etc.
  await page.getByRole('option', { name: selectUSPerson, exact: true }).click();

  await page.getByRole('button', { name: 'Next' }).click();


  await page.locator('p-radiobutton').filter({ hasText: selectAddJointApplicant }).locator('div').nth(2).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();


  // Joint Applicant Information
  if (selectAddJointApplicant === 'Yes') {

    // Joint applicant declerations
    await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
    await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();

    // Joint applicant personal information
    await page.getByLabel('First name').fill(jointUser.firstName);
    await page.getByLabel('Last name').fill(jointUser.lastName);
    await page.locator('input[name="dob"]').click();

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
    await page.getByText(jointUser.dob.day, { exact: true }).click();
    await page.getByLabel('Social Insurance Number').type(jointUser.sinNumber);

    //Joint applicant contact Details
    await page.getByLabel('Home address').fill(jointUser.address);
    await page.locator('//body//app-root//li[1]').click()
    await page.getByLabel('Cell #', { exact: true }).type(jointUserCell);
    await page.getByLabel('Email', { exact: true }).fill(jointUserEmail);

    await page.getByRole('button', { name: 'Next' }).click();

    //Joint applicant mobile modal
    await page.getByLabel('Enter mobile code').fill('000000');
    await page.getByRole('button', { name: 'Submit' }).click();



    //  // Joint applicant employment
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); //options: Full-time, On-call, Temporary, Contract, Seasonal, Salary, Self-Employed, Part-Time, Retired, Unemployed, Student
    await page.getByLabel(jointUser.employmentStatus, { exact: true }).click();


    if (jointUser.employmentStatus == "Full-time" || jointUser.employmentStatus == "On-call" || jointUser.employmentStatus == "Temporary" || jointUser.employmentStatus == "Contract" || jointUser.employmentStatus == "Seasonal" || jointUser.employmentStatus == "Salary" || jointUser.employmentStatus == "Self-Employed" || jointUser.employmentStatus == "Part-Time") {
      await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
      await page.getByLabel('Agriculture, Horticulture and Fisheries', { exact: true }).click();
      await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
      await page.getByLabel('Farmer', { exact: true }).click();
      await page.getByLabel('Position/Title', { exact: true }).fill('Owner');
      await page.getByLabel('Employer Name', { exact: true }).fill('thirdstream');
      await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();
    }
    if (jointUser.employmentStatus == "Retired") {
      await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
      await page.getByLabel('Agriculture, Horticulture and Fisheries', { exact: true }).click();
      await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click();
      await page.getByLabel('Farmer', { exact: true }).click();
      await page.getByLabel('Previous Position/Title').fill('owner');
      await page.getByLabel('Previous Employer Name').fill('thirdstream');
      await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();
    }




    //Verbal passcode
    await page.getByLabel('Verbal Passcode').fill("1234");

    // Joint applicant password setup
    await page.getByLabel('Online Banking Password').fill(jointUser.password);
    await page.getByLabel('Re-enter your password').fill(jointUser.password);

    await page.getByRole('button', { name: 'Next' }).click();

    //Joint applicant consent and Disclosures
    // Joint applicant purpose and Intended Nature of Business Relationship
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); //options: Manage household expenses and bills, Receive employment or pension income, Save for retirement, etc.
    await page.getByLabel(jointUser.purpose, { exact: true }).click();

    // Joint applicant are you politically exposed or the head of an international organization?
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: No, I am, or a family member or close associate is, etc.
    await page.getByLabel(jointUser.politicallyExposed, { exact: true }).click();

    // Joint applicant are you a tax resident of a country other than Canada or the US?
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); //options: No, Yes- in one other country, etc.
    await page.getByRole('option', { name: jointUser.taxResident }).click();

    // Joint applicant are you a US person? (a citizen or resident of the US)
    await page.locator('div').filter({ hasText: /^empty$/ }).click(); //options: No, Yes - I have a SSN, etc.
    await page.getByRole('option', { name: jointUser.usPerson, exact: true }).click();

    await page.getByRole('button', { name: 'Next' }).click();
  }
  
    // ---------- confirmation page


          if (selectSubmissionStatus === 'Yes') {
            await page.getByRole('button', { name: 'Submit' }).click();
            await expect(page.getByRole('heading', { name: 'Getting things ready...' })).toBeVisible({ timeout: 30000 });
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



