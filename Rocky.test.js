import { test, expect} from '@playwright/test';
import https from 'https';




const Data = {
    environments: [
        'https://rocky.sites.dev.thirdstream.ca/deposits/en/app/flow/welcome',
        'https://rocky.sites.qa.thirdstream.ca/deposits/en/app/flow/welcome',
        'https://rocky.sites.test.thirdstream.ca/deposits/en/app/flow/welcome',
        'https://rocky.sites.staging.thirdstream.ca/deposits/en/app/flow/welcome',
        'https://join.rockycreditunion.com/deposits/en/app/flow/welcome',
    ],
    users: [
        {
            name: 'Helen',
            firstName: 'Helen',
            lastName: 'Thomas',
            dob: { year: '1987', month: 'Apr', day: '24' },
            sinNumber: generateRandomSIN(),
            address: '102-4338 Main St Whistler, BC, V8E 1B4',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Sherri',
            firstName: 'Sherri',
            lastName: 'TestAdkins',
            dob: { year: '1994', month: 'Jul', day: '14' },
            sinNumber: generateRandomSIN(),
            address: '6380 Sophia St Vancouver BC V5W2W6',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Morgan',
            firstName: 'Morgan',
            lastName: 'TestWilkinson',
            dob: { year: '1989', month: 'Dec', day: '12' },
            sinNumber: generateRandomSIN(),
            address: '6330 Sophia St Vancouver BC V5W2W6',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Francisco',
            firstName: 'Francisco',
            lastName: 'TestCastillo',
            dob: { year: '1986', month: 'Jul', day: '26' },
            sinNumber: generateRandomSIN(),
            address: '1731 BLOWER RD SECHELT BC V0N3A1',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Rhoda',
            firstName: 'Rhoda',
            lastName: 'TestMoon',
            dob: { year: '1986', month: 'Jul', day: '14' },
            sinNumber: generateRandomSIN(),
            address: '6357 Quebec St Vancouver BC V5W2P8',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Maximo',
            firstName: 'Maximo',
            lastName: 'TestBailey',
            dob: { year: '1982', month: 'Nov', day: '24' },
            sinNumber: generateRandomSIN(),
            address: '6357 Quebec St Vancouver BC V5W2P8',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Kasey',
            firstName: 'Kasey',
            lastName: 'TestMarks',
            dob: { year: '1983', month: 'Oct', day: '9' },
            sinNumber: generateRandomSIN(),
            address: '5675 Columbia St Vancouver BC V5Y3H5',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Sid',
            firstName: 'Sid',
            lastName: 'TestSellers',
            dob: { year: '1993', month: 'Aug', day: '2' },
            sinNumber: generateRandomSIN(),
            address: '5675 Elizabeth St Vancouver BC V5Y3K1',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Ambrose',
            firstName: 'Ambrose',
            lastName: 'TestMoran',
            dob: { year: '1992', month: 'Sep', day: '13' },
            sinNumber: generateRandomSIN(),
            address: '1724 BLOWER RD SECHELT BC V0N3A1',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Scot',
            firstName: 'Scot',
            lastName: 'TestSanchez',
            dob: { year: '1987', month: 'Jun', day: '11' },
            sinNumber: generateRandomSIN(),
            address: '2101 29 Crescent Vernon BC V1T1Y6',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Mona',
            firstName: 'Mona',
            lastName: 'TestWheeler',
            dob: { year: '1989', month: 'Jan', day: '6' },
            sinNumber: generateRandomSIN(),
            address: '1724 BLOWER RD SECHELT BC V0N3A1',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Anne',
            firstName: 'Anne',
            lastName: 'TestKoch',
            dob: { year: '1983', month: 'Nov', day: '15' },
            sinNumber: generateRandomSIN(),
            address: '122 Kierstead Dr Miramichi NB E1V6R7',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Gino',
            firstName: 'Gino',
            lastName: 'TestHorne',
            dob: { year: '1983', month: 'May', day: '23' },
            sinNumber: generateRandomSIN(),
            address: '49 Brock St W Tillsonburg ON N4G2A4',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Stan',
            firstName: 'Stan',
            lastName: 'TestConley',
            dob: { year: '1995', month: 'Apr', day: '13' },
            sinNumber: generateRandomSIN(),
            address: '2556 ROTHWELL ST REGINA SK S4N2C8',
            employmentStatus: 'Employed',  // options: Employed, Self-Employed, Unemployed, Retired, Student
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        }
    ],
    accountOptions: {
        accountTypes: ['Chequing', 'Savings'],
        savingsPackages: ['Premiere', 'Next Step', 'Package Plus', 'High Interest Savings', 'Power Savings'],
        intendedUses: ['Daily', 'GST', 'Daily Banking', 'Education', 'Equipment', 'Home Mortgage', 'Investment', 'Other', 'Renovations', 'Retirement', 'Taxes', 'Travel/Vacation'],
        openAnotherAccount: ['Yes', 'No'],
        submissionStatus: ['Yes', 'No'],
        Labesahel: ['Yes', 'No'],
        addJointApplicant: ['Yes', 'No'],
    }
};

// Function to get user by name
const getUserByName = (name) => {
    return Data.users.find(user => user.name === name);
};








// ===========================
//        🔧 SETTINGS
// ===========================

// 🌐 Select Environment
const environment = Data.environments[1]; // 0 = Dev, 1 = QA, 2 = Test, 3 = Staging, 4 = Prod

// 👤 Select Main User
const selectedUser = getUserByName('Helen'); // ['Helen', 'Sherri', 'Morgan', 'Francisco', 'Rhoda', 'Maximo', 'Kasey', 'Sid', 'Ambrose', 'Scot', 'Mona', 'Anne', 'Gino', 'Stan']

// 👥 Add Joint User?
const selectAddJointApplicant = Data.accountOptions.addJointApplicant[1]; // 0 = Yes, 1 = No
// Select Joint User
const selectedJointUser = getUserByName('Helen'); // ['Helen', 'Sherri', 'Morgan', 'Francisco', 'Rhoda', 'Maximo', 'Kasey', 'Sid', 'Ambrose', 'Scot', 'Mona', 'Anne', 'Gino', 'Stan']

// 📧 Email and Cell
const mainUserEmail = 'alex.saberi@thirdstream.ca';
const mainUserCell = '6478543392';
const jointUserEmail = 'alex.saberi1@thirdstream.ca';
const jointUserCell = '6478543394';


// ⚙️ Select Options
// Open Another Account?
const selectOpenAnotherAccount = Data.accountOptions.openAnotherAccount[0]; // 0 = Yes, 1 = No
// Submit Application?
const selectSubmissionStatus = Data.accountOptions.submissionStatus[0]; // 0 = Yes, 1 = No
// Pause Mode?
const selectLabesahel = Data.accountOptions.Labesahel[0]; // 0 = Yes, 1 = No


// ===========================
//      END OF SETTINGS
// ===========================



















const selectAccountType = Data.accountOptions.accountTypes[0]; // ['Chequing', 'Savings']
const selectSavingsPackage = Data.accountOptions.savingsPackages[1]; // ['Premiere', 'Next Step']
const selectIntendedUse = Data.accountOptions.intendedUses[0]; // ['Daily', 'GST', 'Education', 'Equipment', 'Home Mortgage', 'Investment', 'Other', 'Renovations', 'Retirement', 'Taxes', 'Travel/Vacation']









test('Rocky_RDO', async ({ page }) => {
    test.setTimeout(1800000); // Set timeout to 90 seconds (90000 milliseconds)
    playwrightCore('Rocky_RDO');
    if (!selectedUser) {
        throw new Error('User not found');
    }
    // Check if selectedJointUser is defined
    if (!selectedJointUser) {
        throw new Error('Selected joint user is not found');
    }
    const user = selectedUser;

    // ---------- welcome page
    await page.goto(environment);
    await page.getByRole('button', { name: 'Get Started' }).click();

    await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
    await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
    await page.locator('app-checkbox-input').filter({ hasText: 'Send me news, events and' }).locator('div').nth(3).click();

    await page.getByRole('button', { name: 'Next' }).click();

    // ---------- account selection page
    await page.locator('p-radiobutton').filter({ hasText: selectAccountType }).locator('div').nth(2).click(); // select account type

    await page.locator('#pr_id_1_label').click();
    await page.getByLabel(selectSavingsPackage, { exact: true }).click(); // select savings package

    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // select intended use
    await page.getByLabel(selectIntendedUse, { exact: true }).click();

    await page.locator('p-radiobutton').filter({ hasText: selectOpenAnotherAccount }).locator('div').nth(2).click(); // open another account
    await page.getByRole('button', { name: 'Next' }).click();


    // ---------- open another account
    if (selectOpenAnotherAccount == 'Yes') {
        //intended use
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
        await page.getByLabel(selectIntendedUse, { exact: true }).click();

        await page.getByRole('button', { name: 'Next' }).click();
    }




    // ---------- personal information page

    // personal information section
    await page.getByLabel('First name').fill(user.firstName);
    await page.getByLabel('Last name').fill(user.lastName);

    await page.locator('input[name="dob"]').click();

    if (user.dob.year > '1990' && user.dob.year < '1999') {
        await page.getByRole('button', { name: '' }).click();
    }
    if (user.dob.year > '1970' && user.dob.year < '1979') {
        await page.getByRole('button', { name: '' }).click();
    }
    if (user.dob.year > '1960' && user.dob.year < '1969') {
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
    }
    if (user.dob.year > '1950' && user.dob.year < '1959') {
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
    }
    if (user.dob.year > '1940' && user.dob.year < '1949') {
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
    }
    if (user.dob.year > '1930' && user.dob.year < '1939') {
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

    // Contact details section

    // home address
    await page.getByLabel('Home Address').type(user.address);
    await page.locator('//body//app-root//li[1]').click();

    // mailing address
    await page.getByLabel('Mailing Address (optional)').fill(user.address);
    await page.locator('//body//app-root//li[1]').click();

    // cell
    await page.getByLabel('Cell #').type(mainUserCell);

    // email
    await page.getByLabel('Email').type(mainUserEmail);

    await page.getByRole('button', { name: 'Next' }).click();


    await page.getByLabel('Enter Code').fill('000000');
    await page.getByRole('button', { name: 'Submit' }).click();

    // ---------- employment-info page

    // employment section
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // select employment status
    await page.getByLabel(user.employmentStatus, { exact: true }).click();

    // industry
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Business and Financial', { exact: true }).click();

    // occupation
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
    await page.getByLabel('Bookkeepers', { exact: true }).click();

    // employer name
    await page.getByLabel('Employer Name').fill('thirdstream');
    await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();

    // password setup section
    await page.getByLabel('Online Banking Password').fill(user.password);
    await page.getByLabel('Re-enter your password').fill(user.password);

    await page.getByRole('button', { name: 'Next' }).click();

    // ---------- compliance page
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // politically exposed person
    await page.waitForTimeout(40);
    await page.getByLabel(user.politicallyExposed, { exact: true }).click();

    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // tax resident
    await page.waitForTimeout(40);
    await page.getByRole('option', { name: user.taxResident, exact: true }).click();

    await page.locator('div').filter({ hasText: /^empty$/ }).click(); // US person
    await page.waitForTimeout(40);
    await page.getByRole('option', { name: user.usPerson, exact: true }).click();

    await page.getByRole('button', { name: 'Next' }).click();

    // would you like to add a joint applicant?
    await page.locator('p-radiobutton').filter({ hasText: selectAddJointApplicant }).locator('div').nth(2).click(); // select no

    await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();




    // Joint Applicant Information
    if (selectAddJointApplicant === 'Yes') {

        // ---------- personal information page

        // personal information section
        await page.getByLabel('First name').fill(selectedJointUser.firstName);
        await page.getByLabel('Last name').fill(selectedJointUser.lastName);

        await page.locator('input[name="joint-dob"]').click();

        if (selectedJointUser.dob.year >= '1990' && selectedJointUser.dob.year <= '1999') {
            await page.getByRole('button', { name: '' }).click();
        }
        if (selectedJointUser.dob.year >= '1970' && selectedJointUser.dob.year <= '1979') {
            await page.getByRole('button', { name: '' }).click();
        }
        if (selectedJointUser.dob.year >= '1960' && selectedJointUser.dob.year <= '1969') {
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
        }
        if (selectedJointUser.dob.year >= '1950' && selectedJointUser.dob.year <= '1959') {
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
            await page.getByRole('button', { name: '' }).click();
        }
        if (selectedJointUser.dob.year >= '1940' && selectedJointUser.dob.year <= '1949') {
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
        }

        await page.getByText(selectedJointUser.dob.year, { exact: true }).first().click();
        await page.getByText(selectedJointUser.dob.month, { exact: true }).first().click();
        await page.getByText(selectedJointUser.dob.day, { exact: true }).first().click();







        await page.getByLabel('Social Insurance Number').type(selectedJointUser.sinNumber);

        // Contact details section

        // home address
        await page.getByLabel('Home Address').type(selectedJointUser.address);
        await page.locator('//body//app-root//li[1]').click();

        // mailing address
        await page.getByLabel('Mailing Address (optional)').fill(selectedJointUser.address);
        await page.locator('//body//app-root//li[1]').click();

        // cell
        await page.getByLabel('Cell #').type(jointUserCell);

        // email
        await page.getByRole('textbox', { name: 'Email' }).type(jointUserEmail);

        await page.getByRole('button', { name: 'Next' }).click();


        await page.getByLabel('Enter Code').fill('000000');
        await page.getByRole('button', { name: 'Submit' }).click();

        // ---------- employment-info page

        // employment section
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // select employment status
        await page.getByLabel(selectedJointUser.employmentStatus, { exact: true }).click();

        // industry
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
        await page.getByLabel('Business and Financial', { exact: true }).click();

        // occupation
        await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
        await page.getByLabel('Bookkeepers', { exact: true }).click();

        // employer name
        await page.getByLabel('Employer Name').fill('thirdstream');
        await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();

        // password setup section
        await page.getByLabel('Online Banking Password').fill(selectedJointUser.password);
        await page.getByLabel('Re-enter your password').fill(selectedJointUser.password);

        await page.getByRole('button', { name: 'Next' }).click();

        // ---------- compliance page
        await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // politically exposed person
        await page.waitForTimeout(40);
        await page.getByLabel(selectedJointUser.politicallyExposed, { exact: true }).click();

        await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // tax resident
        await page.waitForTimeout(40);
        await page.getByRole('option', { name: selectedJointUser.taxResident, exact: true }).click();

        await page.locator('div').filter({ hasText: /^empty$/ }).click(); // US person
        await page.waitForTimeout(40);
        await page.getByRole('option', { name: selectedJointUser.usPerson, exact: true }).click();

        await page.getByRole('button', { name: 'Next' }).click();



    }


    // ---------- confirmation page


      if (selectSubmissionStatus === 'Yes') {
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByRole('heading', { name: 'Processing application...' })).toBeVisible({ timeout: 30000 });
        await page.waitForTimeout(3000);

        if (selectLabesahel === 'Yes') {
            await new Promise(() => { });
        }

    } else {
        if (selectLabesahel === 'Yes') {
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
