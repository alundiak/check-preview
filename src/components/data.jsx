import _ from 'lodash';

export const checkProfileAdjustData = [
    {
        bankLogoH: 10,
        bankLogoV: 140,
        companyLogoH: 10,
        companyLogoV: 20,
        micrLineH: 15,
        micrLineV: 195,
        signatureH: 340,
        signatureV: 153
    },
    {
        bankLogoH: 15,
        bankLogoV: 145,
        companyLogoH: 11,
        companyLogoV: 22,
        micrLineH: 15,
        micrLineV: 195,
        signatureH: 340,
        signatureV: 153
    },
    {
        bankLogoH: 10,
        bankLogoV: 140,
        companyLogoH: 20,
        companyLogoV: 30,
        micrLineH: 25,
        micrLineV: 200,
        signatureH: 340,
        signatureV: 153
    },
    {
        bankLogoH: 10,
        bankLogoV: 140,
        companyLogoH: 10,
        companyLogoV: 20,
        micrLineH: 15,
        micrLineV: 195,
        signatureH: 350,
        signatureV: 153
    }
];

export const gridHeaderData = [];

export const gridRowsData = _.times(4, (i) => {
    const adjustData = checkProfileAdjustData[i];
    const rowIndex = i + 1;
    return {
        checkProfileName: `Check Profile #${rowIndex}`,
        accountNumber: `Account Number #${rowIndex}`,
        bankName: `Bank Name #${rowIndex}`,
        companyDivision: `Company/Division #${rowIndex}`,
        adjustData
    };
});
