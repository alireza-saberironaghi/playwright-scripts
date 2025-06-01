import { test, expect } from '@playwright/test';

const Data = {
    environments: [
        'https://pathwise.sites.qa.thirdstream.ca/loans/en/app/flow/welcome',
        'https://pathwise.sites.dev.thirdstream.ca/loans/en/app/flow/welcome',
        'https://pathwise.sites.test.thirdstream.ca/loans/en/app/flow/welcome'
    ],
    users: [
        {
            name: 'Pearl',
            firstName: 'Pearl',
            lastName: 'Testswansie',
            dob: { year: '1959', month: 'Jan', day: '11' },
            sinNumber: generateRandomSIN(),
            address: '50 Weybright Crt Scarborough, ON, M1S 5A8',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Helen',
            firstName: 'Helen',
            lastName: 'Thomas',
            dob: { year: '1987', month: 'Apr', day: '24' },
            sinNumber: generateRandomSIN(),
            address: '102-4338 Main St Whistler, BC, V8E 1B4',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Sherri',
            firstName: 'Sherri',
            lastName: 'TestName',
            dob: { year: '1985', month: 'Jun', day: '15' },
            sinNumber: generateRandomSIN(),
            address: '123 Test St, Toronto, ON, M5V 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Morgan',
            firstName: 'Morgan',
            lastName: 'TestUser',
            dob: { year: '1990', month: 'Sep', day: '22' },
            sinNumber: generateRandomSIN(),
            address: '456 Sample Ave, Ottawa, ON, K1A 0A6',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Francisco',
            firstName: 'Francisco',
            lastName: 'TestDemo',
            dob: { year: '1988', month: 'Dec', day: '03' },
            sinNumber: generateRandomSIN(),
            address: '789 Demo Rd, Vancouver, BC, V6B 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Rhoda',
            firstName: 'Rhoda',
            lastName: 'TestSample',
            dob: { year: '1992', month: 'May', day: '18' },
            sinNumber: generateRandomSIN(),
            address: '321 Example St, Calgary, AB, T2P 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Maximo',
            firstName: 'Maximo',
            lastName: 'TestMax',
            dob: { year: '1986', month: 'Aug', day: '12' },
            sinNumber: generateRandomSIN(),
            address: '654 Max St, Edmonton, AB, T5J 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Kasey',
            firstName: 'Kasey',
            lastName: 'TestCase',
            dob: { year: '1991', month: 'Feb', day: '28' },
            sinNumber: generateRandomSIN(),
            address: '987 Case Ave, Winnipeg, MB, R3B 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Sid',
            firstName: 'Sid',
            lastName: 'TestSid',
            dob: { year: '1989', month: 'Nov', day: '07' },
            sinNumber: generateRandomSIN(),
            address: '147 Sid Rd, Halifax, NS, B3H 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Ambrose',
            firstName: 'Ambrose',
            lastName: 'TestAmb',
            dob: { year: '1987', month: 'Jan', day: '14' },
            sinNumber: generateRandomSIN(),
            address: '258 Amb St, Quebec City, QC, G1R 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Scot',
            firstName: 'Scot',
            lastName: 'TestScot',
            dob: { year: '1984', month: 'Jul', day: '09' },
            sinNumber: generateRandomSIN(),
            address: '369 Scot Ave, Saskatoon, SK, S7K 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Mona',
            firstName: 'Mona',
            lastName: 'TestMona',
            dob: { year: '1993', month: 'Oct', day: '31' },
            sinNumber: generateRandomSIN(),
            address: '741 Mona Rd, Victoria, BC, V8V 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Anne',
            firstName: 'Anne',
            lastName: 'TestAnne',
            dob: { year: '1990', month: 'Mar', day: '25' },
            sinNumber: generateRandomSIN(),
            address: '852 Anne St, St. Johns, NL, A1C 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Gino',
            firstName: 'Gino',
            lastName: 'TestGino',
            dob: { year: '1986', month: 'Jun', day: '16' },
            sinNumber: generateRandomSIN(),
            address: '963 Gino Ave, Charlottetown, PE, C1A 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
        },
        {
            name: 'Stan',
            firstName: 'Stan',
            lastName: 'TestStan',
            dob: { year: '1988', month: 'Apr', day: '20' },
            sinNumber: generateRandomSIN(),
            address: '159 Stan Rd, Yellowknife, NT, X1A 1A1',
            cell: '6478543392',
            email: 'alex.saberi@thirdstream.ca',
            employmentStatus: 'Student',
            password: 'Thirdstream1@',
            branch: 'Oshawa Branch'
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
    otpCode: '000000'
};

// ===========================
//         SETTINGS
// ===========================

// 🌐 Select environment
const environment = Data.environments[0]; // This will be dynamically replaced

// 👤 Select user
const selectedUser = Data.users.find(user => user.name === 'Pearl'); // This will be dynamically replaced

// ⚙️ Select options
const selectedLoanAmount = Data.loanDetails.amounts[0]; // ['25000', '30000', '40000']
const selectedLoanPurpose = Data.loanDetails.purposes[3]; // ['Car Purchase/Expense', 'Education', 'Renovations', 'Debt Consolidation', 'Other']
const selectedHomeBranch = Data.loanDetails.homeBranches[0]; // ['Oshawa Branch', 'Bowmanville Branch']
const selectedHousingStatus = Data.housingStatuses[1]; // ['Rent', 'Own', 'Lives with Parents', 'Other']
const selectedMailingAddress = Data.mailingAddresses[0]; // ['Yes', 'No']
const selectedLivedHereMoreThan24Months = Data.livedHereMoreThan24Months[0]; // ['Yes', 'No']

test('Pathwise_RLO', async ({ page }) => {
    test.setTimeout(200000); // Set timeout to 200 seconds

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
    await page.getByLabel('How much do you want to').fill(selectedLoanAmount);
    await page.locator('span').filter({ hasText: 'What is the purpose of this' }).locator('span').first().click();
    await page.getByLabel(selectedLoanPurpose).click();
    await page.locator('span').filter({ hasText: 'Please select your home' }).locator('span').first().click();
    await page.getByLabel(selectedHomeBranch).click();
    await page.getByRole('button', { name: 'Next' }).click();

    // Name Page
    await page.getByLabel('Legal First name').fill(user.firstName);
    await page.getByLabel('Legal Last Name').fill(user.lastName);
    
    // Date of birth handling
    await page.locator('input[name="dob"]').click();

    // Navigate to correct year
    if(user.dob.year >= '1990' && user.dob.year <= '1999'){
        await page.getByRole('button', { name: '' }).click();
    }
    if(user.dob.year >= '1970' && user.dob.year <= '1979'){
        await page.getByRole('button', { name: '' }).click();
    }
    if(user.dob.year >= '1960' && user.dob.year <= '1969'){
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
    }
    if(user.dob.year >= '1950' && user.dob.year <= '1959'){
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
    }
    if(user.dob.year >= '1940' && user.dob.year <= '1949'){
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
    }
    if(user.dob.year >= '1930' && user.dob.year <= '1939'){
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('button', { name: '' }).click();
    }

    await page.getByText(user.dob.year, { exact: true }).first().click();
    await page.getByText(user.dob.month, { exact: true }).first().click();
    await page.getByText(user.dob.day, { exact: true }).first().click();
    await page.getByRole('button', { name: 'Next' }).click();

    // More Details Page
    await page.getByLabel('Email').fill(user.email);
    await page.getByLabel('Mobile Phone #').type(user.cell);
    await page.getByLabel('Social Insurance Number').fill(user.sinNumber);
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
    await page.locator('span').filter({ hasText: 'What is your housing status?' }).locator('span').first().click();
    await page.getByLabel(selectedHousingStatus, { exact: true }).click();
    await page.locator('span').filter({ hasText: 'Is this also your mailing' }).locator('span').first().click();
    await page.getByLabel(selectedMailingAddress).first().click();
    await page.locator('span').filter({ hasText: 'Have you lived here for more' }).locator('span').first().click();
    await page.getByRole('option', { name: selectedLivedHereMoreThan24Months }).click();
    await page.getByRole('button', { name: 'Next' }).click();

    // Employment Status Page
    await page.locator('div').filter({ hasText: new RegExp(`^${user.employmentStatus}$`) }).first().click();

    // Employment Details Page
    await page.getByRole('textbox', { name: 'Current monthly gross income' }).fill(selectedLoanAmount);
    await page.getByLabel('Income Sources').fill('Thirdstream');
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
    // await page.getByRole('button', { name: 'SUBMIT1' }).click();

    await page.waitForTimeout(20 * 60 * 1000);

});

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
            sin = Math.floor(100000000 + Math.random() * 800000000);
        } while (Math.floor(sin / 100000000) === 9);
        return sin;
    }

    let sin;
    do {
        sin = generateBaseSIN();
    } while (!luhnChecksum(sin));
    return sin.toString();
}
