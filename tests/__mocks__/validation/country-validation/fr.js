import createValidationDataObject from '~/tests/helpers/create-validation-data-object';

const validMobiles = {
  expectedResult: true,
  data: ['9876543210'],
};

const invalidMobiles = {
  expectedResult: false,
  data: ['9865'],
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
