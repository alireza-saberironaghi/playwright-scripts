import { test, Cookie } from '@playwright/test';
import https from 'https';
import fs from 'fs';

const Data = {
    environments: [
        'https://parama.sites.dev.thirdstream.ca/inbranch/deposits/en/app/flow/welcome',
        'https://parama.sites.qa.thirdstream.ca/inbranch/deposits/en/app/flow/welcome',
        'https://parama.sites.test.thirdstream.ca/inbranch/deposits/en/app/flow/welcome',
        'https://parama.sites.staging.thirdstream.ca/inbranch/deposits/en/app/flow/welcome',
        'https://parama.sites.staging.thirdstream.ca/inbranch/deposits/en/app/flow/welcome'
    ],
    users: [
        {
            firstName: 'Helen',
            lastName: 'Thomas',
            dob: { year: '1987', month: 'Apr', day: '24' },
            address: '3, Shore Ave, Whitby, ON, L1R2S5',
            sinNumber: generateRandomSIN(),
            identification: 'Government Photo ID',
            employmentStatus: 'Employed',
            industry: 'Architecture and Engineering',
            occupation: 'Engineer',
            branch: 'Kingsway Branch (Royal York)',
            memberCard: 'Yes',
            onlineBanking: 'Yes',
            businessRelationship: 'All of the Above',
            usPerson: 'No',
            politicallyExposed: 'No',
            taxResident: 'No'
        },
        {
            firstName: 'Sue',
            lastName: 'Zurkoski',
            dob: { year: '1987', month: 'Mar', day: '14' },
            address: '3, Shore Ave, Whitby, ON, L1R2S5',
            sinNumber: generateRandomSIN(),
            identification: 'Government Photo ID',
            employmentStatus: 'Employed',
            industry: 'Architecture and Engineering',
            occupation: 'Engineer',
            branch: 'Kingsway Branch (Royal York)',
            memberCard: 'Yes',
            onlineBanking: 'Yes',
            businessRelationship: 'All of the Above',
            usPerson: 'No',
            politicallyExposed: 'No',
            taxResident: 'No'
        },
        {
            firstName: 'Tom',
            lastName: 'Holland',
            dob: { year: '2009', month: 'Jan', day: '21' },
            address: '3, Shore Ave, Whitby, ON, L1R2S5',
            sinNumber: generateRandomSIN(),
            identification: 'Government Photo ID',
            employmentStatus: 'Employed',
            industry: 'Architecture and Engineering',
            occupation: 'Engineer',
            branch: 'Kingsway Branch (Royal York)',
            memberCard: 'Yes',
            onlineBanking: 'Yes',
            businessRelationship: 'All of the Above',
            usPerson: 'No',
            politicallyExposed: 'No',
            taxResident: 'No'
        }
    ],
    thirdPartyBusinesses: {
        thirdstream: {
            businessName: 'Thirdstream',
            natureOfBusiness: 'Finance',
            placeOfIssue: 'Alberta',
            incorporationNumber: '3987343983',
            relationship: 'Accountant',
            address: '102-4338 Main St Whistler, BC, V8E 1B4'
        },
        amazon: {
            businessName: 'Amazon',
            natureOfBusiness: 'Technology',
            placeOfIssue: 'Ontario',
            incorporationNumber: '435345',
            relationship: 'Accountant',
            address: '102-4338 Main St Whistler, BC, V8E 1B4'
        }
    },
    thirdPartyIndividuals: {
        johnDoe: {
            firstName: 'John',
            lastName: 'Doe',
            dob: { year: '1987', month: 'Mar', day: '14' },
            relationship: 'Accountant',
            address: '102-4338 Main St Whistler, BC, V8E 1B4',
            employmentStatus: 'Employed',
            industry: 'Business and Financial',
            occupation: 'Accountant'
        },
        janeSmith: {
            firstName: 'Jane',
            lastName: 'Smith',
            dob: { year: '1987', month: 'Mar', day: '14' },
            relationship: 'Accountant',
            address: '102-4338 Main St Whistler, BC, V8E 1B4',
            employmentStatus: 'Self-Employed',
            industry: 'Business and Financial',
            occupation: 'Accountant'
        }
    },
    letsGetStartedPage: {
        thirdPartyOptions: ['Yes, on behalf of an individual', 'No'],
        residentOfOntarioOptions: ['Yes', 'No'],
        powerOfAttorneyOptions: ['Yes', 'No'],
        applyOverdraft: ['Yes', 'No'],
        accountOpeningReasonOptions: ['Option 1', 'Option 2', 'Option 3']
    },
    applicationHubPage: {
        seniorOptions: ['Any one can sign', 'Any two can sign', 'All have to sign'],
        safetyDepositBoxOptions: ['Yes', 'No'],
        jointSurvivorshipOptions: ['With survivorship', 'Without survivorship'],
        paperStatementsOptions: ['Yes', 'No']
    },
    accountSelectionPage: {
        intendedUseOptions: [
            'Business operations',
            'Estate distributions',
            'Investment transactions',
            'Loan or credit repayments',
            'Other',
            'Personal day-to-day banking',
        ],
        chequesOptions: ['Yes', 'No'],
        accountNameoptions: ['GIC 24 Months', 'RRSP 12 Months', 'RRSP 24 Months', 'Term Deposit 1', 'Term Deposit 2', 'TFSA 12Months', 'TFSA 24 Months'],
        automatedDepositWithdrawOptions: ['Yes', 'No']
    }
};

test('Parama_RDI', async ({ page }) => {
    // Function to get user by first name
    const getUserByFirstName = (firstName) => {
        return Data.users.find(user => user.firstName === firstName);
    };
    // Function to get power applicant by first name
    const getPowerApplicantByFirstName = (firstName) => {
        return Data.users.find(user => user.firstName === firstName);
    };

    // Function to get third party business details
    const getThirdPartyBusinessDetails = (businessName) => {
        return Data.thirdPartyBusinesses[businessName];
    };
    test.setTimeout(1800000); // Set timeout to 90 seconds (90000 milliseconds)
    playwrightCore('Parama_RDI');

    // Function to get third party individual details
    const getThirdPartyIndividualDetails = (individualName) => {
        return Data.thirdPartyIndividuals[individualName];
    };



















    // ===========================
    //        🔧 SETTINGS
    // ===========================

    // 🌐 Select Environment
    const environment = Data.environments[1]; // 0 = Dev, 1 = QA, 2 = Test, 3 = Staging, 4 = Prod

    // 👤 Adult Applicants:
    const selectedUsers = ['Sue'].map(getUserByFirstName); //, 'Sue'

    // 📧 Email and Cell
    const mainUserEmail = 'alex.saberi@thirdstream.ca';
    const mainUserCell = '6478543392';
    const jointUserEmail = 'alex.saberi1@thirdstream.ca';
    const jointUserCell = '6478543394';



    // ===========================
    //      END OF SETTINGS
    // ===========================








































    // ⚙️ Select options
    // Let's Get Started Page
    const selectThirdpartysOptions = Data.letsGetStartedPage.thirdPartyOptions[1]; // ['Yes, on behalf of an individual', 'No']
    const selectPowerOfAttorneyOptions = Data.letsGetStartedPage.powerOfAttorneyOptions[0]; // ['Yes', 'No']
    const selectResidentOfOntarioOptions = Data.letsGetStartedPage.residentOfOntarioOptions[0]; // ['Yes', 'No']
    const selectApplyoverdraft = Data.letsGetStartedPage.applyOverdraft[0]; // ['Yes', 'No']


    // 👶 Power Applicant:
    const selectedPowerApplicants = ['Tom'].map(getPowerApplicantByFirstName); //'Tom'

    // 🏢 Thirdparty Business
    const selectedBusiness = 'amazon'; // You can change this to 'thirdstream' or 'amazon'

    // 🏢 Thirdparty Individual
    const selectedIndividual = 'johnDoe'; // You can change this to 'johnDoe' or 'janeSmith'



    // Account Selection Page
    const selectIntendedUseOption = Data.accountSelectionPage.intendedUseOptions[0]; // // ['Business opetations', 'Estate distributions', 'Investment transactions', 'Loan or credit repayments', 'Other', 'Personal day-to-day banking']
    const selectAutomatedDepositWithdrawOption = Data.accountSelectionPage.automatedDepositWithdrawOptions[1]; // ['Yes', 'No']
    const selectAccountNameOptions = Data.accountSelectionPage.accountNameoptions[4]; // ['GIC 24 Months', 'RRSP 12 Months', 'RRSP 24 Months', 'Term Deposit 1', 'Term Deposit 2', 'TFSA 12Months', 'TFSA 24 Months']
    // Application Hub Page
    const selectSeniorOption = Data.applicationHubPage.seniorOptions[0]; // ['Any one can sign', 'Any two can sign', 'All have to sign']
    const selectSafetyDepositBoxOption = Data.applicationHubPage.safetyDepositBoxOptions[0]; // ['Yes', 'No']
    const selectJointSurvivorshipOption = Data.applicationHubPage.jointSurvivorshipOptions[0]; // ['With survivorship', 'Without survivorship']
    const selectPaperStatementsOption = Data.applicationHubPage.paperStatementsOptions[0]; // ['Yes', 'No']

    const selectAccountOpeningReasonOptions = Data.letsGetStartedPage.accountOpeningReasonOptions[0]; // ['Option 1', 'Option 2', 'Option 3']

    if (selectedUsers.includes(undefined)) {
        throw new Error('One or more users not found');
    }
    if (selectedPowerApplicants.includes(undefined)) {
        throw new Error('One or more power applicants not found');
    }
    const thirdPartyBusinessDetails = getThirdPartyBusinessDetails(selectedBusiness);
    const thirdPartyIndividualDetails = getThirdPartyIndividualDetails(selectedIndividual);




    // Load cookies from file
    const cookies = JSON.parse(fs.readFileSync('cookies.json', 'utf8'));
    await page.context().addCookies(cookies);

    // Navigate to the website
    await page.goto(environment);

    // Let's Get Started Page
    await page.locator("//h1[@class='m-0 line-height-2']").waitFor(); // waiting for header
    // new
    await page.locator("p-radiobutton:nth-child(1) div:nth-child(1) div:nth-child(2)").click();
    // in person
    await page.locator("(//p-radiobutton[@id='application-method-radio'])[1]").click();

    // on behalf of third party?
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByRole('option', { name: selectThirdpartysOptions }).click();

    // residens of ontario?
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.locator(`//li[@aria-label='${selectResidentOfOntarioOptions}']`).first().click();

    // next button
    await page.locator("//button[@title='Next button']").click();


    /////////////////////////////////////// Application Hub
    await page.locator("//h1[normalize-space()='Application Hub']").waitFor(); // application hub

    // Adding Adult Applicant

    for (const user of selectedUsers) {
        if (!user) continue; // Skip if user is undefined

        // application hub
        await page.locator('div').filter({ hasText: /^Add Adult ApplicantAdd$/ }).getByRole('button').click();
        // member search
        await page.getByRole('textbox', { name: 'Full name or SIN' }).type('123');
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByRole('button', { name: 'Add' }).click();

        // Application Details Page

        // ----- identification

        // method
        await page.locator('#pr_id_15_label').click();
        await page.getByRole('option', { name: `${user.identification}` }).click(); // opptions: Government Photo ID, Dual Method
        await page.locator('span').filter({ hasText: 'emptyType' }).locator('div').first().click();
        await page.getByRole('option', { name: 'Canadian Passport' }).click();
        await page.getByRole('textbox', { name: 'Number', exact: true }).fill('ZH1234');
        await page.locator('input[name="expiry-date"]').click();
        await page.getByText('2029', { exact: true }).click();
        await page.getByText('Apr').click();
        await page.getByText('4').first().click();

        // ---- personal information
        await page.getByLabel('First name').fill(user.firstName);
        await page.getByLabel('Last Name').fill(user.lastName);

        await page.locator('input[name="dob-adult-standard-applicant"]').click();

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
        await page.getByLabel('Email').first().fill(mainUserEmail);
        await page.getByLabel('Social Insurance Number').type(user.sinNumber);
        await page.getByRole('textbox', { name: 'Cell number' }).type(mainUserCell);

        // ---- address details
        // physical address
        await page.getByLabel('Physical Address').fill(user.address);
        await page.locator("(//li[@role='option'])[1]").click();

        // ---- employment

        // employment status
        await page.locator('span').filter({ hasText: 'emptyEmployment Status' }).locator('div').first().click();
        await page.getByRole('option', { name: user.employmentStatus, exact: true }).click();
        // industry
        await page.locator('span').filter({ hasText: 'emptyIndustry' }).locator('div').first().click();
        await page.getByRole('option', { name: user.industry }).click();
        // occupation
        await page.locator('span').filter({ hasText: 'emptyOccupation' }).locator('div').first().click();
        await page.getByRole('option', { name: user.occupation, exact: true }).nth(0).click();
        // employer name
        await page.getByRole('searchbox', { name: 'Employer Name' }).fill('thirdstream');
        await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();

        // if (user.employmentStatus === 'Employed' || user.employmentStatus === 'Self-Employed') {
        //     // Fill in the 'Industry' field
        //     await page.locator('span').filter({ hasText: 'emptyIndustry' }).locator('div').first().click(); // industry
        //     await page.waitForTimeout(50);
        //     await page.getByText(user.industry, { exact: true }).click();

        //     // Fill in the 'Occupation' field
        //     await page.locator('span').filter({ hasText: 'emptyOccupation' }).locator('div').first().click(); // Occupation
        //     await page.waitForTimeout(100);
        //     await page.getByText(user.occupation, { exact: true }).click();

        //     // Fill in the 'Employer Name' field
        //     await page.getByLabel('Employer Name').click(); // Employer name
        //     await page.getByLabel('Employer Name').fill('Thirdstream');
        //     await page.waitForTimeout(100);
        //     await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click(); // thirdstream

        //     // button
        //     await page.getByRole('button', { name: 'Submit' }).click();
        // }


        // ---- miscellaneous
        // branch
        await page.locator('span').filter({ hasText: 'emptyBranch' }).locator('div').first().click();
        await page.getByRole('option', { name: `${user.branch}`, exact: true }).click();
        // member card
        await page.locator('span').filter({ hasText: 'emptyMember Card' }).locator('div').first().click();
        await page.getByRole('option', { name: `${user.memberCard}`, exact: true }).click();
        // online banking
        await page.locator('span').filter({ hasText: 'emptyOnline Banking' }).locator('div').first().click();
        await page.getByRole('option', { name: `${user.onlineBanking}`, exact: true }).nth(1).click();

        // ---- things we need to ask

        // are you a US person?
        await page.waitForTimeout(40);
        await page.locator('span').filter({ hasText: 'emptyAre you a US person?' }).locator('div').first().click();
        await page.waitForTimeout(100);
        await page.getByRole('option', { name: `${user.usPerson}`, exact: true }).click();

        // politically exposed?
        await page.locator('span').filter({ hasText: 'emptyAre you, a family member' }).locator('div').first().click();
        await page.waitForTimeout(100);
        await page.getByRole('option', { name: `${user.politicallyExposed}`, exact: true }).nth(0).click();

        // a tax resident of a country other than Canada?
        await page.waitForTimeout(40);
        await page.locator('span').filter({ hasText: 'emptyAre you a tax resident' }).locator('div').first().click();
        await page.getByRole('option', { name: `${user.taxResident}`, exact: true }).nth(0).click();


        // Next button
        await page.locator("button[title='Next button']").click();

        // Confirm your mobile number
        await page.getByLabel('Enter Code').fill('000000');
        await page.locator("//span[normalize-space()='Submit']").click();

    }

    // // Adding Power of Attorney Applicant
    // if (selectPowerOfAttorneyOptions === 'Yes') {
    //     for (const power of selectedPowerApplicants) {
    //         if (!power) continue; // Skip if power applicant is undefined
    //         await page.locator('div').filter({ hasText: /^Add Power of AttorneyAdd$/ }).getByRole('button').click();  // Add Power Applicant

    //         // member search
    //         await page.getByRole('textbox', { name: 'Full name or SIN' }).type('123');
    //         await page.getByRole('button', { name: 'Search' }).click();
    //         await page.getByRole('button', { name: 'Add' }).click();


    //         // Application Details Page

    //         // ----- identification

    //         // method
    //         await page.locator('#pr_id_67_label').click();
    //         await page.getByRole('option', { name: `${power.identification}` }).click(); // opptions: Government Photo ID (manual), Government Photo ID (scanner), Dual Method, Virtual Method

    //         // ---- personal information
    //         await page.getByLabel('First name').fill(power.firstName);
    //         await page.getByLabel('Last Name').fill(power.lastName);

    //         await page.locator('input[name="dob-adult-standard-applicant"]').click();

    //         if (power.dob.year >= '2000' && power.dob.year <= '2009') {
    //             await page.getByRole('button', { name: '' }).click();
    //             await page.getByRole('button', { name: '' }).click();
    //         }
    //         if (power.dob.year >= '1990' && power.dob.year <= '1999') {
    //             await page.getByRole('button', { name: '' }).click();
    //         }
    //         if (power.dob.year >= '1970' && power.dob.year <= '1979') {
    //             await page.getByRole('button', { name: '' }).click();
    //         }
    //         if (power.dob.year >= '1960' && power.dob.year <= '1969') {
    //             await page.getByRole('button', { name: '' }).click();
    //             await page.getByRole('button', { name: '' }).click();
    //         }
    //         if (power.dob.year >= '1950' && power.dob.year <= '1959') {
    //             await page.getByRole('button', { name: '' }).click();
    //             await page.getByRole('button', { name: '' }).click();
    //             await page.getByRole('button', { name: '' }).click();
    //         }
    //         if (power.dob.year >= '1940' && power.dob.year <= '1949') {
    //             await page.getByRole('button', { name: '' }).click();
    //             await page.getByRole('button', { name: '' }).click();
    //             await page.getByRole('button', { name: '' }).click();
    //             await page.getByRole('button', { name: '' }).click();
    //         }
    //         if (power.dob.year >= '1930' && power.dob.year <= '1939') {
    //             await page.getByRole('button', { name: '' }).click();
    //             await page.getByRole('button', { name: '' }).click();
    //             await page.getByRole('button', { name: '' }).click();
    //             await page.getByRole('button', { name: '' }).click();
    //             await page.getByRole('button', { name: '' }).click();
    //         }

    //         await page.getByText(power.dob.year, { exact: true }).first().click();
    //         await page.getByText(power.dob.month, { exact: true }).first().click();
    //         await page.getByText(power.dob.day, { exact: true }).first().click();
    //         await page.getByLabel('Email').first().fill(power.email);
    //         await page.getByRole('textbox', { name: 'Cell #' }).type(power.cell);


    //         // ---- address details
    //         // physical address
    //         await page.getByLabel('Physical Address').fill(power.address);
    //         await page.locator("(//li[@role='option'])[1]").click();

    //         // lived at this address for more than 2 years?
    //         await page.locator('span').filter({ hasText: 'emptyHave you lived at this' }).locator('div').first().click();
    //         await page.getByRole('option', { name: 'Yes' }).click();

    //         // ---- employment

    //         // employment status
    //         await page.locator('span').filter({ hasText: 'emptyEmployment Status' }).locator('div').first().click();
    //         await page.getByRole('option', { name: power.employmentStatus, exact: true }).click();
    //         // industry
    //         await page.locator('span').filter({ hasText: 'emptyIndustry' }).locator('div').first().click();
    //         await page.getByRole('option', { name: power.industry }).click();
    //         // occupation
    //         await page.locator('span').filter({ hasText: 'emptyOccupation' }).locator('div').first().click();
    //         await page.getByRole('option', { name: power.occupation, exact: true }).nth(0).click();
    //         // employer name
    //         await page.getByRole('searchbox', { name: 'Employer Name' }).fill('thirdstream');
    //         await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();
    //         await page.getByRole('button', { name: 'Submit' }).click();
    //         // anual income
    //         await page.locator('span').filter({ hasText: 'emptyAnnual Income' }).locator('div').first().click();
    //         await page.getByRole('option', { name: '$55,867 - $' }).click();
    //         // work more than 2 years?
    //         await page.locator('span').filter({ hasText: 'emptyHave you been working' }).locator('div').first().click();
    //         await page.getByRole('option', { name: 'Yes' }).click();

    //         // if (user.employmentStatus === 'Employed' || user.employmentStatus === 'Self-Employed') {
    //         //     // Fill in the 'Industry' field
    //         //     await page.locator('span').filter({ hasText: 'emptyIndustry' }).locator('div').first().click(); // industry
    //         //     await page.waitForTimeout(50);
    //         //     await page.getByText(user.industry, { exact: true }).click();

    //         //     // Fill in the 'Occupation' field
    //         //     await page.locator('span').filter({ hasText: 'emptyOccupation' }).locator('div').first().click(); // Occupation
    //         //     await page.waitForTimeout(100);
    //         //     await page.getByText(user.occupation, { exact: true }).click();

    //         //     // Fill in the 'Employer Name' field
    //         //     await page.getByLabel('Employer Name').click(); // Employer name
    //         //     await page.getByLabel('Employer Name').fill('Thirdstream');
    //         //     await page.waitForTimeout(100);
    //         //     await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click(); // thirdstream

    //         //     // button
    //         //     await page.getByRole('button', { name: 'Submit' }).click();
    //         // }

    //         // ---- things we need to ask
    //         // natture of your business?
    //         await page.waitForTimeout(40);
    //         await page.locator('span').filter({ hasText: 'emptyWhat is the nature of' }).locator('div').first().click();
    //         await page.getByRole('option', { name: `${power.businessRelationship}`, exact: true }).click();

    //         // are you a US person?
    //         await page.waitForTimeout(40);
    //         await page.locator('span').filter({ hasText: 'emptyAre you a US person?' }).locator('div').first().click();
    //         await page.getByRole('option', { name: `${power.usPerson}`, exact: true }).click();

    //         // politically exposed?
    //         await page.locator('span').filter({ hasText: 'emptyAre you, a family member' }).locator('div').first().click();
    //         await page.waitForTimeout(100);
    //         await page.getByRole('option', { name: `${power.politicallyExposed}`, exact: true }).first().click();

    //         // a tax resident of a country other than Canada?
    //         await page.waitForTimeout(40);
    //         await page.locator('span').filter({ hasText: 'emptyAre you a tax resident' }).locator('div').first().click();
    //         await page.getByRole('option', { name: `${power.taxResident}`, exact: true }).nth(0).click();


    //         // Next button
    //         await page.locator("button[title='Next button']").click();

    //     }
    // }

    // // Adding Third Party Business Applicant
    // if (selectThirdpartysOptions === Data.letsGetStartedPage.thirdPartyOptions[0]) {
    //     await page.locator('div').filter({ hasText: /^Add Third Party Details \(Business\)Add$/ }).getByRole('button').click();  // Add third party business Applicant

    //     // Business Information section
    //     await page.getByLabel('Business Name').fill(thirdPartyBusinessDetails.businessName);
    //     await page.getByLabel('Nature of Business').fill(thirdPartyBusinessDetails.natureOfBusiness);
    //     await page.getByLabel('Place of Issue of Business').fill(thirdPartyBusinessDetails.placeOfIssue);
    //     await page.getByLabel('Incorporation Number').fill(thirdPartyBusinessDetails.incorporationNumber);
    //     await page.locator('div').filter({ hasText: /^empty$/ }).click();
    //     await page.getByRole('option', { name: thirdPartyBusinessDetails.relationship, exact: true }).click();

    //     // Address section
    //     await page.getByLabel('Physical Address').click();
    //     await page.getByLabel('Physical Address').fill(thirdPartyBusinessDetails.address);
    //     await page.waitForTimeout(100);
    //     await page.locator("(//li[@role='option'])[1]").click();

    //     await page.waitForTimeout(100);
    //     await page.locator("button[title='Next button']").click();  // Next button
    // }

    // // Adding Third Party Individual Applicant
    // if (selectThirdpartysOptions === Data.letsGetStartedPage.thirdPartyOptions[1]) {
    //     if (!thirdPartyIndividualDetails) {
    //         throw new Error('Selected third party individual not found');
    //     }
    //     await page.locator('div').filter({ hasText: /^Add Third Party Details \(Individual\)Add$/ }).getByRole('button').click();  // Add third party business Applicant

    //     // member search
    //     await page.getByRole('textbox', { name: 'Full name or SIN' }).type('123');
    //     await page.getByRole('button', { name: 'Search' }).click();
    //     await page.getByRole('button', { name: 'Add' }).click();


    //     // Personal Information Section
    //     await page.getByLabel('First name').fill(thirdPartyIndividualDetails.firstName);
    //     await page.getByLabel('Last Name').fill(thirdPartyIndividualDetails.lastName);
    //     await page.locator('input[name="dob-adult-individual-applicant"]').first().click();
    //     if (thirdPartyIndividualDetails.dob.year >= '1990' && thirdPartyIndividualDetails.dob.year <= '1999') {
    //         await page.getByRole('button', { name: '' }).click();
    //     }
    //     if (thirdPartyIndividualDetails.dob.year >= '1970' && thirdPartyIndividualDetails.dob.year <= '1979') {
    //         await page.getByRole('button', { name: '' }).click();
    //     }
    //     if (thirdPartyIndividualDetails.dob.year >= '1960' && thirdPartyIndividualDetails.dob.year <= '1969') {
    //         await page.getByRole('button', { name: '' }).click();
    //         await page.getByRole('button', { name: '' }).click();
    //     }
    //     if (thirdPartyIndividualDetails.dob.year >= '1950' && thirdPartyIndividualDetails.dob.year <= '1959') {
    //         await page.getByRole('button', { name: '' }).click();
    //         await page.getByRole('button', { name: '' }).click();
    //         await page.getByRole('button', { name: '' }).click();
    //     }
    //     if (thirdPartyIndividualDetails.dob.year >= '1940' && thirdPartyIndividualDetails.dob.year <= '1949') {
    //         await page.getByRole('button', { name: '' }).click();
    //         await page.getByRole('button', { name: '' }).click();
    //         await page.getByRole('button', { name: '' }).click();
    //         await page.getByRole('button', { name: '' }).click();
    //     }
    //     if (thirdPartyIndividualDetails.dob.year >= '1930' && thirdPartyIndividualDetails.dob.year <= '1939') {
    //         await page.getByRole('button', { name: '' }).click();
    //         await page.getByRole('button', { name: '' }).click();
    //         await page.getByRole('button', { name: '' }).click();
    //         await page.getByRole('button', { name: '' }).click();
    //         await page.getByRole('button', { name: '' }).click();
    //     }

    //     await page.getByText(thirdPartyIndividualDetails.dob.year, { exact: true }).first().click();
    //     await page.getByText(thirdPartyIndividualDetails.dob.month, { exact: true }).first().click();
    //     await page.getByText(thirdPartyIndividualDetails.dob.day, { exact: true }).first().click();

    //     await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    //     await page.getByText(thirdPartyIndividualDetails.relationship, { exact: true }).click();



    //     // ---- address details
    //     // physical address
    //     await page.getByLabel('Physical Address').click();
    //     await page.getByLabel('Physical Address').fill(thirdPartyIndividualDetails.address);
    //     await page.waitForTimeout(100);
    //     await page.locator("(//li[@role='option'])[1]").click();


    //     // ---- employment

    //     // employment status
    //     await page.locator('span').filter({ hasText: 'emptyEmployment Status' }).locator('div').first().click();
    //     await page.getByRole('option', { name: thirdPartyIndividualDetails.employmentStatus, exact: true }).click();
    //     // industry
    //     await page.locator('span').filter({ hasText: 'emptyIndustry' }).locator('div').first().click();
    //     await page.getByRole('option', { name: thirdPartyIndividualDetails.industry }).click();
    //     // occupation
    //     await page.locator('span').filter({ hasText: 'emptyOccupation' }).locator('div').first().click();
    //     await page.getByRole('option', { name: thirdPartyIndividualDetails.occupation, exact: true }).nth(0).click();
    //     // employer name
    //     await page.getByRole('searchbox', { name: 'Employer Name' }).fill('thirdstream');
    //     await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click();
    //     await page.getByRole('button', { name: 'Submit' }).click();


    //     // if (thirdPartyIndividualDetails.employmentStatus === 'Employed' || thirdPartyIndividualDetails.employmentStatus === 'Self-Employed') {
    //     //     // Fill in the 'Industry' field
    //     //     await page.locator('span').filter({ hasText: 'emptyIndustry' }).locator('div').first().click(); // industry
    //     //     await page.waitForTimeout(50);
    //     //     await page.getByText(thirdPartyIndividualDetails.industry, { exact: true }).click();

    //     //     // Fill in the 'Employer Name' field
    //     //     await page.getByLabel('Employer Name').click(); // Employer name
    //     //     await page.getByLabel('Employer Name').fill('Thirdstream');
    //     //     await page.waitForTimeout(100);
    //     //     await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click(); // thirdstream

    //     //     // button
    //     //     await page.getByRole('button', { name: 'Submit' }).click();
    //     // }

    //     await page.locator("button[title='Next button']").click();  // Next button
    // }







    // Account(s) section 
    await page.getByRole('cell', { name: 'Add Account Add' }).getByRole('button').click();

    // Account selection page
    // bug
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('cell', { name: 'Add Account Add' }).getByRole('button').click();

    // account name
    // await page.waitForTimeout(4000);
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByRole('option', { name: 'Everyday Chequing' }).click();
    //intended use

    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
    await page.getByRole('option', { name: `${selectIntendedUseOption}`, exact: true }).click();


    // next
    await page.waitForTimeout(100);
    await page.getByRole('button', { name: 'Next' }).click();





    //////////////////////// Application Hub

    // Applicant Consents check boxes
    await page.waitForTimeout(200);
    await page.locator('app-checkbox-input').filter({ hasText: 'Consent to perform fraud,' }).locator('div').nth(3).click();
    await page.waitForTimeout(100);
    await page.locator('app-checkbox-input').filter({ hasText: 'Consent to the collection,' }).locator('div').nth(3).click();
    await page.waitForTimeout(100);
    await page.locator('app-checkbox-input').filter({ hasText: 'Consent to be contacted by' }).locator('div').nth(3).click();
    await page.waitForTimeout(100);
    await page.locator('app-checkbox-input').filter({ hasText: 'Agreement to purchase a $40' }).locator('div').nth(3).click();
    await page.waitForTimeout(100);
    await page.locator('app-checkbox-input').filter({ hasText: 'Consent to the use of' }).locator('div').nth(3).click();
    // Account Details

    // if (selectPowerOfAttorneyOptions === 'No') {

    //     // safety deposit box
    //     await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
    //     // await page.locator('div').filter({ hasText: /^empty$/ }).nth(0).click();
    //     await page.locator(`//li[@aria-label='${selectSafetyDepositBoxOption}']`).nth(0).click(); // options: Yes, No

    //     // paper statements
    //     await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click();
    //     // await page.locator('div').filter({ hasText: /^empty$/ }).click();
    //     await page.getByRole('option', { name: `${selectPaperStatementsOption}` }).nth(1).click();


    // } else {

    //     // senior options
    //     await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    //     await page.locator(`//li[@aria-label='${selectSeniorOption}']`).click(); // options: Any one can sign, Any two can sign, All have to sign


    //     // joint survivorship
    //     await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click();
    //     await page.locator(`//li[@aria-label='${selectJointSurvivorshipOption}']`).click(); // options: With survivorship, Without survivorship

    //     // safety deposit box
    //     await page.locator('div').filter({ hasText: /^empty$/ }).nth(0).click();
    //     await page.locator(`//li[@aria-label='${selectSafetyDepositBoxOption}']`).nth(0).click(); // options: Yes, No

    //     // paper statements
    //     await page.locator('div').filter({ hasText: /^empty$/ }).click();
    //     await page.getByRole('option', { name: `${selectPaperStatementsOption}` }).click();
    // }





    // next button
    await page.getByRole('button', { name: 'Next' }).click();
    // submit button
    await page.getByRole('button', { name: 'Submit' }).waitFor();
    // submit button
    // await page.getByRole('button', { name: 'Submit' }).click();
    await new Promise(() => { });
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
