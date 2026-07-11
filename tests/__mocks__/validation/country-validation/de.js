import createValidationDataObject from '~/tests/helpers/create-validation-data-object';

const validMobiles = {
  expectedResult: true,
  data: ['01701234567', '+49 170 1234567', '015123456789', '+49 (151) 23456789'],
};

const invalidMobiles = {
  expectedResult: false,
  data: [
    '9865',
    '9876543210', // missing 0 or 49 prefix
    '001701234567', // invalid prefix
    '',
    ' ',
    null,
    undefined,
  ],
};

const validPostalCodes = {
  expectedResult: true,
  data: ['10115', '20095', '50667', '80331', '60311', '70173', '01067', '90403', '55116', '40213'],
};

const invalidPostalCodes = {
  expectedResult: false,
  data: [
    '1',
    '12',
    '123',
    '1234',
    '123456',
    'ABCDE',
    'A1234',
    '12B45',
    '9999Z',
    '12-345',
    '12 345',
    '12.345',
    '40*00',
    '#5000',
    'ab123',
    '12cd3',
    '100000',
    '1A345',
    '123B4',
    '',
    ' ',
    null,
    undefined,
  ],
};

const mobile = createValidationDataObject('mobile', validMobiles, invalidMobiles);
const postalCode = createValidationDataObject('postalCode', validPostalCodes, invalidPostalCodes);

export default { mobile, postalCode };
