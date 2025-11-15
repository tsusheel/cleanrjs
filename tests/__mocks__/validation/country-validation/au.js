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
    '2000',
    '2150',
    '2600',
    '3000',
    '4000',
    '5000',
    '6000',
    '7000',
    '0800',
    '2899',
    '6798',
    '3350',
    '3352',
    '3354',
  ],
};

const invalidPostalCodes = {
  expectedResult: false,
  data: [
    '1',
    '12',
    '123',
    '12345',
    'A123',
    '12B4',
    'ABCD',
    '12-3',
    '1 23',
    '#200',
    '',
    '   ',
    null,
    undefined,
    '00A1',
    '0 12',
    '0.12',
    '15000',
  ],
};

const mobile = createValidationDataObject('mobile', validMobiles, invalidMobiles);
const postalCode = createValidationDataObject('postalCode', validPostalCodes, invalidPostalCodes);

export default { mobile, postalCode };
