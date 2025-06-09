import { test, expect} from '@playwright/test';
import https from 'https';

const Data = {
    environments: [
        'https://pathwise.sites.dev.thirdstream.ca/loans/en/app/flow/welcome',
        'https://pathwise.sites.qa.thirdstream.ca/loans/en/app/flow/welcome',
        'https://pathwise.sites.test.thirdstream.ca/loans/en/app/flow/welcome',
        'https://pathwise.sites.staging.thirdstream.ca/loans/en/app/flow/welcome',
        'https://loanspathwise.ca/loans/en/app/flow/welcome'
    ],
    users: [
        {
            name: 'Pearl',
            firstName: 'Pearl',
            lastName: 'Testswansie',
            dob: { year: '1959', month: 'Jan', day: '11' },
            sinNumber: generateRandomSIN(),
            address: '50 Weybright Crt Scarborough, ON, M1S 5A8',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Pouliotte',
            firstName: 'Marlene',
            lastName: 'Pouliotte',
            dob: { year: '1945', month: 'Nov', day: '20' },
            sinNumber: generateRandomSIN(),
            address: '79 The Greenway, Cambridge, ON, N1R 6L9',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Kalinich',
            firstName: 'Dawn',
            lastName: 'Kalinich',
            dob: { year: '1973', month: 'Mar', day: '3' },
            sinNumber: generateRandomSIN(),
            address: '1 Lockview, Huntsville, ON, P1H 1R3',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Lows',
            firstName: 'Packets',
            lastName: 'Lows',
            dob: { year: '1992', month: 'Oct', day: '10' },
            sinNumber: generateRandomSIN(),
            address: '15 Driving Ave, Toronto, ON, M8C 4D5',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Hustle',
            firstName: 'Live',
            lastName: 'Hustle',
            dob: { year: '1993', month: 'Oct', day: '10' },
            sinNumber: generateRandomSIN(),
            address: '85 Drastic Rd, Toronto, ON, M8N 4D6',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Wares',
            firstName: 'Packs',
            lastName: 'Wares',
            dob: { year: '1991', month: 'Oct', day: '10' },
            sinNumber: generateRandomSIN(),
            address: '68 Drops Rd, Toronto, ON, M0E 3G5',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Cool',
            firstName: 'Normand',
            lastName: 'Cool',
            dob: { year: '1970', month: 'Feb', day: '2' },
            sinNumber: generateRandomSIN(),
            address: '6635 McMickling, Niagara Falls, ON, L2J 1X4',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Highs',
            firstName: 'Lights',
            lastName: 'Highs',
            dob: { year: '1990', month: 'Oct', day: '10' },
            sinNumber: generateRandomSIN(),
            address: '542 Hunter Dr, Toronto, ON, M9Z 2F5',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Thomas',
            firstName: 'David',
            lastName: 'Thomas',
            dob: { year: '1974', month: 'Apr', day: '4' },
            sinNumber: generateRandomSIN(),
            address: '1 Stanley St, St Catharines, ON, L2M 1S5',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'McCool',
            firstName: 'Connie',
            lastName: 'McCool',
            dob: { year: '1975', month: 'Feb', day: '2' },
            sinNumber: generateRandomSIN(),
            address: '6635 McMickling, Niagara Falls, ON, L2J 1X4',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Abbas',
            firstName: 'Douglas',
            lastName: 'Abbas',
            dob: { year: '1983', month: 'Sep', day: '7' },
            sinNumber: generateRandomSIN(),
            address: '502 Goldrush St, South Porcupine, ON, P0N 1H0',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Phillip',
            firstName: 'Phillip',
            lastName: 'East',
            dob: { year: '1972', month: 'Jul', day: '4' },
            sinNumber: generateRandomSIN(),
            address: '9507 Sherridon Dr',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Chrit',
            firstName: 'Chrit',
            lastName: 'Brown',
            dob: { year: '1987', month: 'Apr', day: '16' },
            sinNumber: generateRandomSIN(),
            address: '554 Sixth St New Westminster, BC, V3L 3B5',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Helen Thomas (Original)
        {
            name: 'Helen',
            firstName: 'Helen',
            lastName: 'Thomas',
            dob: { year: '1987', month: 'Apr', day: '24' },
            sinNumber: generateRandomSIN(),
            address: '102-4338 Main St Whistler, BC, V8E 1B4',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Sue Zurkoski
        {
            name: 'Sue',
            firstName: 'Sue',
            lastName: 'Zurkoski',
            dob: { year: '1987', month: 'Mar', day: '14' },
            sinNumber: generateRandomSIN(),
            address: '408, Macewan NW, Calgary, AB, T3K3K3',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Henry Wen
        {
            name: 'Henry',
            firstName: 'Henry',
            lastName: 'Wen',
            dob: { year: '1985', month: 'Mar', day: '8' },
            sinNumber: generateRandomSIN(),
            address: '101, Greenwich lane, Fort McMurray, AB, T9H3Z2',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Jaime Lakatos
        {
            name: 'Jaime',
            firstName: 'Jaime',
            lastName: 'Lakatos',
            dob: { year: '1971', month: 'Jun', day: '3' },
            sinNumber: generateRandomSIN(),
            address: 'Unit 708, 8 Emerson St, Winnipeg, MB, R3J2Z1',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Eddie Ysixteenaml
        {
            name: 'Eddie',
            firstName: 'Eddie',
            lastName: 'Ysixteenaml',
            dob: { year: '1952', month: 'Jan', day: '1' },
            sinNumber: generateRandomSIN(),
            address: '16, Ysixteenaml, Calgary, AB, T3C3L1 (Manual Entry)',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Paul Curie
        {
            name: 'Paul',
            firstName: 'Paul',
            lastName: 'Curie',
            dob: { year: '1987', month: 'Apr', day: '22' },
            sinNumber: generateRandomSIN(),
            address: '32, Eagle Ridge Crescent, Whistler, BC, V0N1B6',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Muhammad Ahmad
        {
            name: 'Muhammad',
            firstName: 'Muhammad',
            lastName: 'Ahmad',
            dob: { year: '1984', month: 'Nov', day: '30' },
            sinNumber: generateRandomSIN(),
            address: '11-3403, Auchinachie Rd, Duncan, BC, V9L4A2',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Chong-Nam Yon
        {
            name: 'Chong-Nam',
            firstName: 'Chong-Nam',
            lastName: 'Yon',
            dob: { year: '1964', month: 'Nov', day: '30' },
            sinNumber: generateRandomSIN(),
            address: '2330, Evelyn Hts, Victoria, BC, V9B6C7',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Andrew Berghezan
        {
            name: 'Andrew',
            firstName: 'Andrew',
            lastName: 'Berghezan',
            dob: { year: '1960', month: 'Dec', day: '31' },
            sinNumber: generateRandomSIN(),
            address: '650, Terminal Ave S, Nanaimo, BC, V9R5E2',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Martina Hodder
        {
            name: 'Martina',
            firstName: 'Martina',
            lastName: 'Hodder',
            dob: { year: '1979', month: 'Aug', day: '22' },
            sinNumber: generateRandomSIN(),
            address: '228 23 ST S Lethbridge, AB T1J3M6',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Mabe TestMica
        {
            name: 'Mabe',
            firstName: 'Mabe',
            lastName: 'TestMica',
            dob: { year: '1970', month: 'Jan', day: '21' },
            sinNumber: generateRandomSIN(),
            address: '101 Greenwich Lane, Fort McMurray, AB T9H3Z2',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },

        // Wendy Kaczmarek
        {
            name: 'Wendy',
            firstName: 'Wendy',
            lastName: 'Kaczmarek',
            dob: { year: '1928', month: 'Oct', day: '11' },
            sinNumber: generateRandomSIN(),
            address: '6107 Stinson Way NW Edmonton, AB T6R0K2',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Gino',
            firstName: 'Gino',
            lastName: 'TestHorne',
            dob: { year: '1983', month: 'May', day: '23' },
            sinNumber: generateRandomSIN(),
            address: '49 Brock St W, Tillsonburg, ON, N4G2A4',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Tim',
            firstName: 'Tim',
            lastName: 'TESTLee',
            dob: { year: '1957', month: 'Apr', day: '29' },
            sinNumber: generateRandomSIN(),
            address: '508 Miller Ave, Oshawa, ON, L1J2T1',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Nicole',
            firstName: 'Nicole',
            lastName: 'TESTPerez',
            dob: { year: '1957', month: 'Apr', day: '29' },
            sinNumber: generateRandomSIN(),
            address: '342 Painted Post Dr, Scarborough, ON, M1G2M5',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Marty',
            firstName: 'Marty',
            lastName: 'TESTThompson',
            dob: { year: '1956', month: 'Jul', day: '30' },
            sinNumber: generateRandomSIN(),
            address: '868 Bramble Ct, Mississauga, ON, L5C4S1',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Michael',
            firstName: 'Michael',
            lastName: 'TESTWhite',
            dob: { year: '1958', month: 'Apr', day: '15' },
            sinNumber: generateRandomSIN(),
            address: '70 Borden St, Toronto, ON, M5S2N1',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Mandy',
            firstName: 'Mandy',
            lastName: 'TESTHarris',
            dob: { year: '1936', month: 'Feb', day: '28' },
            sinNumber: generateRandomSIN(),
            address: '1184 McCraney St E, Oakville, ON, L6H4S5',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Ming',
            firstName: 'Ming',
            lastName: 'TESTSanchez',
            dob: { year: '1972', month: 'Sep', day: '19' },
            sinNumber: generateRandomSIN(),
            address: '133 Young St, Kitchener, ON, N2H4Z3',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Kara',
            firstName: 'Kara',
            lastName: 'TESTDavis',
            dob: { year: '1940', month: 'May', day: '29' },
            sinNumber: generateRandomSIN(),
            address: '214 Fourth Ave, Ottawa, ON, K1S2L8',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Alexis',
            firstName: 'Alexis',
            lastName: 'TestShannon',
            dob: { year: '1984', month: 'Apr', day: '11' },
            sinNumber: generateRandomSIN(),
            address: '635 Lynden Road, Orono, ON, L0B1M0',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch',
        },
        {
            name: 'Carlton',
            firstName: 'Carlton',
            lastName: 'TestCoffey',
            dob: { year: '1990', month: 'May', day: '1' },
            sinNumber: generateRandomSIN(),
            address: '4862 Reserve St, Cambray, ON, K0M1E0',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch',
        },
        {
            name: 'Sophie',
            firstName: 'Sophie',
            lastName: 'TestJennings',
            dob: { year: '1985', month: 'Jul', day: '9' },
            sinNumber: generateRandomSIN(),
            address: '3705 Nelson Street, Delvin, ON, P0W1C0',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch',
        },
        {
            name: 'Lara',
            firstName: 'Lara',
            lastName: 'TestHicks',
            dob: { year: '1993', month: 'May', day: '26' },
            sinNumber: generateRandomSIN(),
            address: '291 Speers Road, Oakville, ON, L6H3H5',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch',
        },
        {
            name: 'Gregg',
            firstName: 'Gregg',
            lastName: 'TestRowland',
            dob: { year: '1987', month: 'Feb', day: '27' },
            sinNumber: generateRandomSIN(),
            address: '2124 Adelaide St, Toronto, ON, M5H1P6',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch',
        }
    ],
    loanDetails: {
        amounts: ['25000', '30000', '40000'],
        purposes: ['Car Purchase/Expense', 'Education', 'Renovations', 'Debt Consolidation', 'Other'],
        homeBranches: ['Oshawa Branch', 'Bowmanville Branch']
    },
    housingStatuses: ['Rent', 'Own', 'Lives with Parents', 'Other'],
    mailingAddresses: ['Yes', 'No'],
    livedHereMoreThan24Months: ['Yes', 'No'],
    submissionStatus: ['Yes', 'No'],
    otpCode: '000000'
};

// Function to get user by name
const getUserByName = (name) => {
    return Data.users.find(user => user.name === name);
};










// ===========================
//         SETTINGS
// ===========================

// 🌐 Select Environment
const environment = Data.environments[1]; // 0 = Dev, 1 = QA, 2 = Test, 3 = Staging, 4 = Prod

// 👤 Select Main User
const selectedUser = Data.users.find(user => user.name === 'Pouliotte'); // ['Pearl', 'Pouliotte', 'Important', 'Kalinich', 'Lows', 'Hustle', 'Wares', 'Cool', 'Highs', 'Thomas', 'McCool', 'Abbas', 'Phillip', 'Chrit', 'Helen', 'Sue Zurkoski', 'Henry Wen', 'Jaime Lakatos', 'Eddie Ysixteenaml', 'Paul Curie', 'Muhammad Ahmad', 'Chong-Nam Yon', 'Andrew Berghezan', 'Martina Hodder', 'Mabe TestMica', 'Wendy Kaczmarek'];

// 📧 Email and Cell
const mainUserEmail = 'alex.saberi@thirdstream.ca';
const mainUserCell = '6478543392';

// Submit Application?
const selectSubmissionStatus = Data.submissionStatus[0]; // 0 = Yes, 1 = No
// Pause Mode?
const selectPauseMode = 'Deactive'; // 'Active' or 'Deactive'



// ===========================
//      END OF SETTINGS
// ===========================




















// ⚙️ Select options
const selectedLoanAmount = Data.loanDetails.amounts[0]; // ['25000', '30000', '40000']
const selectedLoanPurpose = Data.loanDetails.purposes[3]; // ['Car Purchase/Expense', 'Education', 'Renovations', 'Debt Consolidation', 'Other']
const selectedHomeBranch = Data.loanDetails.homeBranches[0]; // ['Oshawa Branch', 'Bowmanville Branch']
const selectedHousingStatus = Data.housingStatuses[1]; // ['Rent', 'Own', 'Lives with Parents', 'Other']





















const selectedMailingAddress = Data.mailingAddresses[0]; // ['Yes', 'No']
const selectedLivedHereMoreThan24Months = Data.livedHereMoreThan24Months[0]; // ['Yes', 'No']
















test('Pathwise_RLO', async ({ page }) => {
    test.setTimeout(1800000); // Set timeout to 90 seconds (90000 milliseconds)
    playwrightCore('Pathwise_RLO');
    const user = selectedUser;

    if (!user) {
        throw new Error('User not found');
    }

    await page.goto(environment);

    // Welcome Page
    await page.getByRole('button', { name: 'Get Started' }).click();
    await page.locator('p-checkbox div').nth(2).click();
    await page.getByRole('button', { name: 'Next' }).click();

    // Loan Details Page
    // how much do you want to borrow?
    await page.getByLabel('How much do you want to').fill(selectedLoanAmount);
    // what is the purpose of this loan?
    await page.locator('span').filter({ hasText: 'What is the purpose of this' }).locator('span').first().click();
    await page.getByLabel(selectedLoanPurpose).click();
    // please select your home branch?
    await page.locator('span').filter({ hasText: 'Please select your home' }).locator('span').first().click();
    await page.getByLabel(selectedHomeBranch).click();
    await page.getByRole('button', { name: 'Next' }).click();

    // Name Page
    // first name
    await page.getByLabel('Legal First name').fill(user.firstName);
    // last name
    await page.getByLabel('Legal Last Name').fill(user.lastName);
    // date of birth
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
    await page.getByRole('button', { name: 'Next' }).click();

    // More Details Page
    // Email
    await page.getByLabel('Email').fill(mainUserEmail);
    // mobile
    await page.getByLabel('Mobile Phone #').type(mainUserCell);
    // sin number
    await page.getByLabel('Social Insurance Number').type(user.sinNumber);
    await page.getByLabel('Social Insurance Number').click();
    await page.getByRole('button', { name: 'Next' }).click();

    // OTP Modal
    await page.getByLabel('Enter mobile code').fill("000000");
    await page.getByRole('button', { name: 'Submit' }).click();

    // Physical Address Page
    await page.getByLabel('Search for your address').fill(user.address);
    await page.locator("(//li[@role='option'])[1]").click();
    await page.getByRole('button', { name: 'Next' }).click();

    // Where You Live Page
    // what is your housing status?
    await page.locator('span').filter({ hasText: 'What is your housing status?' }).locator('span').first().click();
    await page.getByLabel(selectedHousingStatus, { exact: true }).click();
    // is this also your mailing address?
    await page.locator('span').filter({ hasText: 'Is this also your mailing' }).locator('span').first().click();
    await page.getByLabel(selectedMailingAddress).first().click();
    // have you lived here for more than 24 months?
    await page.locator('span').filter({ hasText: 'Have you lived here for more' }).locator('span').first().click();
    await page.getByRole('option', { name: selectedLivedHereMoreThan24Months }).click();
    await page.getByRole('button', { name: 'Next' }).click();

    // Employment Status Page
    await page.locator('div').filter({ hasText: new RegExp(`^${user.employmentStatus}$`) }).first().click();

    // Employment Details Page
    // current monthly gross income
    await page.getByRole('textbox', { name: 'Current monthly gross income' }).fill(selectedLoanAmount);
    // income sources
    await page.getByLabel('Income Sources').fill('Thirdstream');
    // have this been your status for 24 months or longer?
    await page.locator('span').filter({ hasText: 'Have this been your status' }).locator('span').first().click();
    await page.getByLabel('Yes', { exact: true }).click();
    await page.getByRole('button', { name: 'Next' }).click();

    // Online Banking Page
    await page.getByLabel('Online Banking Password').fill(user.password);
    await page.getByLabel('Re-enter your password').fill(user.password);
    await page.getByRole('button', { name: 'Next' }).click();

    // Chequing Account Modal
    await page.locator('p-checkbox div').nth(2).click();
    await page.getByRole('button', { name: 'Next' }).click();

    // Confirmation Page
    await page.locator('p-checkbox div').nth(2).click();

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
