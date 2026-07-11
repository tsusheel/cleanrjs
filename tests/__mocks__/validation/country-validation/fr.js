import createValidationDataObject from '~/tests/helpers/create-validation-data-object';

const validMobiles = {
  expectedResult: true,
  data: ['0612345678', '+33 6 12 34 56 78', '0712345678', '+33 7 12 34 56 78'],
};

const invalidMobiles = {
  expectedResult: false,
  data: [
    '9865',
    '9876543210', // missing 0 or 33 prefix
    '00612345678',
    '',
    ' ',
    null,
    undefined,
  ],
};

const validPostalCodes = {
  expectedResult: true,
  data: [
    '01000',
    '13001',
    '14000',
    '29200',
    '33000',
    '44000',
    '59000',
    '69001',
    '75001',
    '75015',
    '80000',
    '83000',
    '92000',
    '97400',
    '98800',
  ],
};

const invalidPostalCodes = {
  expectedResult: false,
  data: [
    '1',
    '12',
    '123',
    '1234',
    '123456',
    'A1000',
    '1B000',
    '12C34',
    'ABCDE',
    '75-001',
    '75 001',
    '75.001',
    '$75001',
    '#44000',
    '',
    ' ',
    '     ',
    null,
    undefined,
    '2A000',
    '2B123',
  ],
};

const mobile = createValidationDataObject('mobile', validMobiles, invalidMobiles);
const postalCode = createValidationDataObject('postalCode', validPostalCodes, invalidPostalCodes);

export default { mobile, postalCode };
