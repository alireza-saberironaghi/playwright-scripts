import { test, expect} from '@playwright/test';
import https from 'https';


const Data = {
  environments: [
    'https://wealthone.sites.dev.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://wealthone.sites.qa.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://wealthone.sites.test.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://wealthone.sites.staging.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://apply.wealthonebankofcanada.com/deposits/en/app/flow/welcome'
  ],
  users: [
    {
      name: 'Helen',
      firstName: 'Helen',
      lastName: 'Thomase',
      dob: { year: '1987', month: 'Apr', day: '24' },
      sinNumber: generateRandomSIN(),
      address: '102-4338 Main St Whistler, BC, V8E 1B4',
      employmentStatus: 'Self-Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Owen',
      firstName: 'Owen',
      lastName: 'Bisson',
      dob: { year: '1973', month: 'Apr', day: '25' },
      sinNumber: generateRandomSIN(),
      address: '7147 Hallsands Dr Mississauga, ON L5N7S6',
      employmentStatus: 'Self-Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Sandra',
      firstName: 'Sandra',
      lastName: 'King',
      dob: { year: '1971', month: 'Nov', day: '5' },
      sinNumber: generateRandomSIN(),
      address: '4280 Atlee Ave, Burnaby, BC, V5G 3R6, Canada',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Phillip',
      firstName: 'Phillip',
      lastName: 'East',
      dob: { year: '1972', month: 'Jul', day: '4' },
      sinNumber: generateRandomSIN(),
      address: '9507 Sherridon Dr Fort Saskatchewan, AB T8L1W4',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Pearl',
      firstName: 'Pearl',
      lastName: 'Testswansie',
      dob: { year: '1959', month: 'Jan', day: '11' },
      sinNumber: generateRandomSIN(),
      address: '50 Weybright Crt Scarborough, ON, M1S 5A8',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Chrit',
      firstName: 'Chrit',
      lastName: 'Brown',
      dob: { year: '1987', month: 'Apr', day: '16' },
      sinNumber: generateRandomSIN(),
      address: '554 Sixth St New Westminster, BC, V3L 3B5',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Sue',
      firstName: 'Sue',
      lastName: 'Zurkoski',
      dob: { year: '1987', month: 'Mar', day: '14' },
      sinNumber: generateRandomSIN(),
      address: '408, Macewan NW, Calgary, AB, T3K3K3',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Henry',
      firstName: 'Henry',
      lastName: 'Wen',
      dob: { year: '1985', month: 'Mar', day: '8' },
      sinNumber: generateRandomSIN(),
      address: '101, Greenwich lane, Fort McMurray, AB, T9H3Z2',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Jaime',
      firstName: 'Jaime',
      lastName: 'Lakatos',
      dob: { year: '1971', month: 'Jun', day: '3' },
      sinNumber: generateRandomSIN(),
      address: 'Unit 708, 8 Emerson St, Winnipeg, MB, R3J2Z1',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Eddie',
      firstName: 'Eddie',
      lastName: 'Ysixteenaml',
      dob: { year: '1952', month: 'Jan', day: '1' },
      sinNumber: generateRandomSIN(),
      address: '16, Ysixteenaml, Calgary, AB, T3C3L1',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Paul',
      firstName: 'Paul',
      lastName: 'Curie',
      dob: { year: '1987', month: 'Apr', day: '22' },
      sinNumber: generateRandomSIN(),
      address: '32, Eagle Ridge Crescent, Whistler, BC, V0N1B6',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Muhammad',
      firstName: 'Muhammad',
      lastName: 'Ahmad',
      dob: { year: '1984', month: 'Nov', day: '30' },
      sinNumber: generateRandomSIN(),
      address: '11-3403, Auchinachie Rd, Duncan, BC, V9L4A2',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Chong-Nam',
      firstName: 'Chong-Nam',
      lastName: 'Yon',
      dob: { year: '1964', month: 'Nov', day: '30' },
      sinNumber: generateRandomSIN(),
      address: '2330, Evelyn Hts, Victoria, BC, V9B6C7',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Andrew',
      firstName: 'Andrew',
      lastName: 'Berghezan',
      dob: { year: '1960', month: 'Dec', day: '31' },
      sinNumber: generateRandomSIN(),
      address: '650, Terminal Ave S, Nanaimo, BC, V9R5E2',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Martina',
      firstName: 'Martina',
      lastName: 'Hodder',
      dob: { year: '1979', month: 'Aug', day: '22' },
      sinNumber: generateRandomSIN(),
      address: '228 23 ST S Lethbridge, AB T1J3M6',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Mabe',
      firstName: 'Mabe',
      lastName: 'TestMica',
      dob: { year: '1970', month: 'Jan', day: '21' },
      sinNumber: generateRandomSIN(),
      address: '101 Greenwich Lane, Fort McMurray, AB T9H3Z2',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    },
    {
      name: 'Wendy',
      firstName: 'Wendy',
      lastName: 'Kaczmarek',
      dob: { year: '1928', month: 'Oct', day: '11' },
      sinNumber: generateRandomSIN(),
      address: '6107 Stinson Way NW Edmonton, AB T6R0K2',
      employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      password: 'Thirdstream1@',
      politicallyExposed: 'None of the below', // ['I am, or a family member or close associate is a FOREIGN politically exposed person', 'I am, or a family member or close associate is a DOMESTIC politically exposed person', 'I am, or a family member or close associate is, the head of an international organization', 'None of the above']
      taxResident: 'No', // ['No', 'Yes - in one (1) other country', 'Yes, in two (2) other countries', 'Yes - in three (3) other countries']
      usPerson: 'No' // ['No', 'Yes - I have a Social Security Number', 'Yes - I will apply or have applied for a SSN but have not yet received it', 'Yes - I don\'t have a Social Security Number']
    }
  ],
  accountOptions: {
    accountTypes: ['GIC', 'HISA', 'RRSP GIC', 'RRSP Savings', 'TFSA GIC', 'TFSA Savings'],
    interestFrequencies: ['Paid annually', 'Paid at maturity'],
    intendedUses: ['Family & Household Income/Expenses', 'Pension Income', 'Rental Property Income/Expenses', 'Travel/Vacation', 'Education', 'Renovations', 'Car Purchase/Expenses', 'Taxes'],
    intendedUses2: ['Retirement', 'Investment', 'Savings'],
    openAnotherAccount: ['Yes', 'No'],
    submissionStatus: ['Yes', 'No'],
    addJointApplicant: ['Yes', 'No']
  }
};


// Function to get user by name
const getUserByName = (name) => {
  return Data.users.find(user => user.name === name);
};

























// ===========================
//        🔧 SETTINGS
// ===========================

// 🌐 Select environment
const environment = Data.environments[1]; // 0 = Dev, 1 = QA, 2 = Test, 3 = Staging, 4 = Prod

// 👤 Select Main User
const selectedUser = getUserByName('Helen'); // ['Helen', 'Sandra', 'Phillip','Pearl','Chrit','Sue','Henry','Jaime','Eddie','Paul','Muhammad','Chong-Nam','Andrew','Martina','Mabe','Wendy']

// 👥 Add Joint User?
const selectAddJointApplicant = Data.accountOptions.addJointApplicant[0]; // 0 = Yes, 1 = No
// Select Joint User
const selectedJointUser = getUserByName('Sandra'); // ['Helen', 'Sandra', 'Phillip','Pearl','Chrit','Sue','Henry','Jaime','Eddie','Paul','Muhammad','Chong-Nam','Andrew','Martina','Mabe','Wendy']

// 📧 Email and Cell
const mainUserEmail = 'alex.saberi@thirdstream.ca';
const mainUserCell = '6478543392';
const jointUserEmail = 'alex.saberi1@thirdstream.ca';
const jointUserCell = '6478543394';

// ⚙️ Select Options
// Open Another Account?
const selectOpenAnotherAccount = Data.accountOptions.openAnotherAccount[1]; // 0 = Yes, 1 = No
// Submit Application?
const selectSubmissionStatus = Data.accountOptions.submissionStatus[0]; // 0 = Yes, 1 = No
// Pause Mode?
const selectPauseMode = 'Deactive'; // 'Active' or 'Deactive'

// ===========================
//      END OF SETTINGS
// ===========================
















// const numberOfAccounts: number = 2; // max 4
const selectAccountType = Data.accountOptions.accountTypes[0]; // ['GIC', 'HISA', 'RRSP GIC', 'RRSP Savings', 'TFSA GIC', 'TFSA Savings']
const selectAccountType1 = Data.accountOptions.accountTypes[1]; // ['GIC', 'HISA', 'RRSP GIC', 'RRSP Savings', 'TFSA GIC', 'TFSA Savings']
const selectAccountType2 = Data.accountOptions.accountTypes[2]; // ['GIC', 'HISA', 'RRSP GIC', 'RRSP Savings', 'TFSA GIC', 'TFSA Savings']
const selectAccountType3 = Data.accountOptions.accountTypes[3]; // ['GIC', 'HISA', 'RRSP GIC', 'RRSP Savings', 'TFSA GIC', 'TFSA Savings']
const selectAccountType4 = Data.accountOptions.accountTypes[4]; // ['GIC', 'HISA', 'RRSP GIC', 'RRSP Savings', 'TFSA GIC', 'TFSA Savings']
const selectInterestFrequency = Data.accountOptions.interestFrequencies[0]; // ['Paid annually', 'Paid at maturity']
const selectIntendedUse = Data.accountOptions.intendedUses[1]; // ['Family & Household Income/Expenses', 'Pension Income', 'Rental Property Income/Expenses', 'Travel/Vacation', 'Education', 'Renovations', 'Car Purchase/Expenses', 'Taxes']
const selectIntendedUse2 = Data.accountOptions.intendedUses2[0]; // ['Retirement', 'Investment', 'Savings']





























test('WealthOne_RDO', async ({ page }) => {
  test.setTimeout(1800000); // Set timeout to 90 seconds (90000 milliseconds)
  playwrightCore('WealthOne_RDO');
  if (!selectedUser) {
    throw new Error('Selected user is not found');
  }

  // Check if selectedJointUser is defined
  if (!selectedJointUser) {
    throw new Error('Selected joint user is not found');
  }

  // welcome page
  await page.goto(environment);
  await page.getByRole('button', { name: 'Get Started' }).click();

  //checkboxes
  await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'Send me news, events and' }).locator('div').nth(3).click();

  await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // ----------------------- account selection page

  // please select an account
  // await page.locator('#pr_id_1_label').click(); // options: GIC, HISA, RRSP GIC, RRSP Savings, TFSA GIC, TFSA Savings
  // if (selectAccountType == 'GIC') {
  //   await page.getByRole('option', { name: 'GIC', exact: true }).click();
  // } else {
  //   await page.getByLabel(selectAccountType, { exact: true }).click();
  // }


  // Please select a term
  // if (selectAccountType == 'GIC') {
  //   await page.locator('#product-term-year-1').first().click();
  //   await page.getByLabel('2 years', { exact: true }).click();
  // } else if (selectAccountType == 'RRSP GIC' || selectAccountType == 'TFSA GIC') {
  //   await page.locator('#product-term-month-1').first().click();
  //   await page.getByLabel('2 years', { exact: true }).click();
  // }


  // what is the amount that you want to contribute?
  await page.getByLabel('What is the amount that you').fill('8000');

  // intended user
  await page.locator('div').filter({ hasText: /^empty$/ }).click();
  await page.getByRole('option', { name: 'Education' }).click();
  // open another account?
  await page.locator('p-radiobutton').filter({ hasText: selectOpenAnotherAccount }).locator('div').nth(2).click(); // open another account
  await page.getByRole('button', { name: 'Next' }).click();

  if (selectOpenAnotherAccount == 'Yes') {
    await page.locator('#product-term-year-2 > div').click();
    await page.getByRole('option', { name: '1 year' }).click();
    await page.getByRole('textbox', { name: 'What is the amount that you' }).fill('200000');
    await page.locator('#registered-intended-use-dropdown2 > div').click();
    await page.getByRole('option', { name: 'Investment' }).click();
    await page.locator('p-radiobutton').filter({ hasText: 'No' }).locator('div').nth(2).click();
    await page.getByRole('button', { name: 'Next' }).click();

  }

  // ----------------------- personal information page

  await page.getByLabel('First Name').fill(selectedUser.firstName);
  await page.getByLabel('Last Name').fill(selectedUser.lastName);
  await page.locator('input[name="dob"]').click();

  if (selectedUser.dob.year >= '2010' && selectedUser.dob.year <= '2019') {
    await page.getByRole('button', { name: '' }).click();
  }
  if (selectedUser.dob.year >= '1990' && selectedUser.dob.year <= '1999') {
    await page.getByRole('button', { name: '' }).click();
  }

  if (selectedUser.dob.year >= '1980' && selectedUser.dob.year <= '1989') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (selectedUser.dob.year >= '1970' && selectedUser.dob.year <= '1979') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (selectedUser.dob.year >= '1960' && selectedUser.dob.year <= '1969') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (selectedUser.dob.year >= '1950' && selectedUser.dob.year <= '1959') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (selectedUser.dob.year >= '1940' && selectedUser.dob.year <= '1949') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (selectedUser.dob.year >= '1930' && selectedUser.dob.year <= '1939') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }

  await page.getByText(selectedUser.dob.year, { exact: true }).first().click();
  await page.getByText(selectedUser.dob.month, { exact: true }).first().click();
  await page.getByText(selectedUser.dob.day, { exact: true }).first().click();






  await page.getByLabel('Social Insurance Number').type(selectedUser.sinNumber);
  await page.getByLabel('Physical Address').fill(selectedUser.address);
  await page.locator("(//li[@role='option'])[1]").click();
  await page.getByLabel('Mailing Address (optional)').fill(selectedUser.address);
  await page.locator("(//li[@role='option'])[1]").click();
  await page.getByLabel('Email').fill(mainUserEmail);
  await page.getByLabel('Cell Phone Number').type(mainUserCell);

  await page.getByRole('button', { name: 'Next' }).click();

  // confirm mobile modal
  await page.getByLabel('Enter Code').fill('000000');
  await page.getByRole('button', { name: 'Submit' }).click();

  // ----------------------- employment info page

  // Employment status
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
  await page.getByLabel(selectedUser.employmentStatus).first().click();


  if (selectedUser.employmentStatus == 'Employed') {
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Cannabis', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Cannabis - Growers', { exact: true }).click();
    // await page.locator('div').filter({ hasText: /^empty$/ }).click();
    // await page.getByLabel('Gift').click();
    await page.getByLabel('Employer Name').click();
    await page.getByLabel('Employer Name').fill('thirdst');
    await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();

  } else if (selectedUser.employmentStatus == 'Self-Employed') {
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Cannabis', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Cannabis - Growers', { exact: true }).click();
    // await page.locator('div').filter({ hasText: /^empty$/ }).click();
    // await page.getByLabel('Gift').click();

  } else if (selectedUser.employmentStatus == 'Unemployed' || selectedUser.employmentStatus == 'Retired') {
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click();
    await page.getByLabel('Gift').click();
  }




  // password setup
  await page.getByLabel('Online Banking Password').fill(selectedUser.password);
  await page.getByLabel('Re-enter Your Password').fill(selectedUser.password);

  await page.getByRole('button', { name: 'Next' }).click();


  //
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: No, Yes - in one (1) other country, Yes, in two (2) other countries, Yes - in three (3) other countries
  await page.getByLabel("Gift", { exact: true }).click();

  // are you a tax resident of a country other than Canada or the US?
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: No, Yes - in one (1) other country, Yes, in two (2) other countries, Yes - in three (3) other countries
  await page.getByLabel(selectedUser.taxResident, { exact: true }).click();

  // Are you a US person? (a citizen or resident of the US)
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: No, Yes - I have a Social Security Number, Yes - I will apply or have applied for a SSN but have not yet received it, Yes - I don't have a Social Security Number
  await page.getByRole('option', { name: selectedUser.usPerson, exact: true }).click();

  // please select any of the following options that are applicable
  await page.locator('div').filter({ hasText: /^empty$/ }).click(); // options: I am, or a family member or close associate is a FOREIGN politically exposed person, I am, or a family member or close associate is a DOMESTIC politically exposed person, I am, or a family member or close associate is, the head of an international organization, None of the above
  await page.getByLabel("None of the below").click();

  await page.getByRole('button', { name: 'Next' }).click();

  // add joint applicant
  if (selectAccountType == 'GIC' || selectAccountType == 'HISA' || selectAccountType == 'RRSP Savings' || selectAccountType == 'TFSA Savings') {
    await page.locator('p-radiobutton').filter({ hasText: selectAddJointApplicant }).locator('div').nth(2).click(); // options: Yes, No
    await page.getByRole('button', { name: 'Submit' }).click();

    if (selectAddJointApplicant === 'Yes' && selectOpenAnotherAccount === 'No') {
      await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
      await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
      await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();

      // ----------------------- joint personal information page
      await page.getByLabel('First Name').fill(selectedJointUser.firstName);
      await page.getByLabel('Last Name').fill(selectedJointUser.lastName);
      await page.locator('input[name="dob"]').click();

      if (selectedJointUser.dob.year >= '2010' && selectedJointUser.dob.year <= '2019') {
        await page.getByRole('button', { name: '' }).click();
      }
      if (selectedJointUser.dob.year >= '1990' && selectedJointUser.dob.year <= '1999') {
        await page.getByRole('button', { name: '' }).click();
      }

      if (selectedJointUser.dob.year >= '1980' && selectedJointUser.dob.year <= '1989') {
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
      }
      if (selectedJointUser.dob.year >= '1970' && selectedJointUser.dob.year <= '1979') {
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
      }
      if (selectedJointUser.dob.year >= '1960' && selectedJointUser.dob.year <= '1969') {
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
      }
      if (selectedJointUser.dob.year >= '1950' && selectedJointUser.dob.year <= '1959') {
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
      }
      if (selectedJointUser.dob.year >= '1940' && selectedJointUser.dob.year <= '1949') {
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
      }
      if (selectedJointUser.dob.year >= '1930' && selectedJointUser.dob.year <= '1939') {
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
      }

      await page.getByText(selectedJointUser.dob.year, { exact: true }).first().click();
      await page.getByText(selectedJointUser.dob.month, { exact: true }).first().click();
      await page.getByText(selectedJointUser.dob.day, { exact: true }).first().click();



      await page.getByLabel('Social Insurance Number').type(selectedJointUser.sinNumber);
      await page.getByLabel('Physical Address').fill(selectedJointUser.address);
      await page.locator("(//li[@role='option'])[1]").click();;
      await page.getByLabel('Mailing Address (optional)').fill(selectedJointUser.address);
      await page.locator("(//li[@role='option'])[1]").click();
      await page.getByLabel('Email', { exact: true }).fill(jointUserEmail);
      await page.getByLabel('Cell Phone Number').type(jointUserCell);

      await page.getByRole('button', { name: 'Next' }).click();

      // confirm mobile modal

      await page.getByLabel('Enter Code').fill('000000');
      await page.getByRole('button', { name: 'Submit' }).click();

      // ----------------------- joint employment info page

      // Employment status
      await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: Employed, Self-Employed, Unemployed, Retired, Homemaker, Student
      await page.getByLabel(selectedJointUser.employmentStatus, { exact: true }).first().click();

      if (selectedJointUser.employmentStatus == 'Employed') {
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
        await page.getByLabel('Cannabis', { exact: true }).click();
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
        await page.getByLabel('Cannabis - Growers', { exact: true }).click();
        await page.getByLabel('Employer Name').fill('thirdst');
        await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();

      } else if (selectedJointUser.employmentStatus == 'Self-Employed') {
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
        await page.getByLabel('Cannabis', { exact: true }).click();
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
        await page.getByLabel('Cannabis - Growers', { exact: true }).click();
        await page.locator('div').filter({ hasText: /^empty$/ }).click();
        await page.getByLabel('Gift').click();

      } else if (selectedJointUser.employmentStatus == 'Unemployed' || selectedJointUser.employmentStatus == 'Retired') {
        await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click();
        await page.getByLabel('Gift', { exact: true }).first().click();
      }


      // password setup
      await page.getByLabel('Online Banking Password').fill(selectedJointUser.password);
      await page.getByLabel('Re-enter Your Password').fill(selectedJointUser.password);

      await page.getByRole('button', { name: 'Next' }).click();

      // ----------------------- joint compliance info page
      // source of funds
      await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
      await page.getByRole('option', { name: 'Gift' }).click();

      // are you a tax resident of a country other than Canada or the US?
      await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: No, Yes - in one (1) other country, Yes, in two (2) other countries, Yes - in three (3) other countries
      await page.getByLabel(selectedJointUser.taxResident, { exact: true }).click();

      // Are you a US person? (a citizen or resident of the US)
      await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: No, Yes - I have a Social Security Number, Yes - I will apply or have applied for a SSN but have not yet received it, Yes - I don't have a Social Security Number
      await page.getByRole('option', { name: selectedJointUser.usPerson, exact: true }).click();

      // please select any of the following options that are applicable
      await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: I am, or a family member or close associate is a FOREIGN politically exposed person, I am, or a family member or close associate is a DOMESTIC politically exposed person, I am, or a family member or close associate is, the head of an international organization, None of the above
      // await page.getByLabel(, { exact: true }).first().click();
      await page.getByRole('option', { name: selectedJointUser.politicallyExposed }).click();
      await page.getByRole('button', { name: 'Next' }).click();

    }
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

  // ----------------------- confirmation page
  // await page.getByRole('button', { name: 'Submit' }).click();


  // Waiting for the deceioning process
  // await page.waitForTimeout(4000);
  // await page.waitForSelector('text="Sit tight. This should only take a moment."', { state: 'hidden' });

  // // Siging the documents
  // if (selectAccountType == 'GIC' || selectAccountType == 'RRSP Savings' || selectAccountType == 'TFSA Savings') {
  //   await page.frameLocator('#esign-iframe').locator('[data-test-id^="SignButton-"]').click()
  //   await page.frameLocator('#esign-iframe').locator('[data-test-id="ConfirmButton"]').click();
  // }



  // // fund transfer
  // await page.getByRole('button', { name: 'Funds Transfer' }).click();
  // await page.frameLocator('#flinks-widget-iframe').getByRole('button', { name: 'Connect' }).click();
  // await page.frameLocator('#flinks-widget-iframe').getByRole('link', { name: 'Flinks Capital logo Flinks' }).click();
  // await page.frameLocator('#flinks-widget-iframe').getByLabel('Username').fill('Greatday');
  // await page.frameLocator('#flinks-widget-iframe').getByLabel('Password').fill('Everyday');
  // await page.frameLocator('#flinks-widget-iframe').getByRole('button', { name: 'Continue' }).click();

  // // await page.frameLocator('#flinks-widget-iframe').getByRole('button', { name: '' }).click();
  // // end copy
  // const Aanswer = await page.frameLocator('#flinks-widget-iframe').locator('tr.ng-star-inserted:nth-child(1) > td:nth-child(2)').innerText();
  // await page.frameLocator('#flinks-widget-iframe').locator('input#f-input-3').fill(Aanswer);

  // // await page.frameLocator('#flinks-widget-iframe').locator('input#f-input-3').fill(await page.evaluate(() => navigator.clipboard.readText()));

  // await page.frameLocator('#flinks-widget-iframe').getByRole('button', { name: 'Continue' }).click();


  // // await page.frameLocator('#flinks-widget-iframe').locator('a').filter({ hasText: 'Chequing CAD***1000 $50,000.' }).click();
  // await page.frameLocator('#flinks-widget-iframe').locator('a').click();
  // await page.frameLocator('#flinks-widget-iframe').locator('a').click();
  // await page.frameLocator('#flinks-widget-iframe').getByRole('button', { name: 'Continue' }).click();
  // await page.getByRole('textbox', { name: 'Amount to transfer' }).type('500');

  // await page.locator('p-checkbox div').nth(2).click();
  // await page.getByRole('button', { name: 'Submit' }).click();



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





