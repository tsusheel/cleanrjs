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
    'SW1A 1AA',
    'EC1A 1BB',
    'W1A 0AX',
    'M1 1AE',
    'B33 8TH',
    'CR2 6XH',
    'DN55 1PT',
    'L1 8JQ',
    'G1 1XW',
    'EH1 1YZ',
    'BT1 1AA',
    'CF10 1AA',
    'AB10 1XG',
    'IV3 5NN',
    'PO16 7GZ',
    'GU14 0LX',
    'YO1 7HP',
    'NE1 4LP',
    'RH10 1AA',
    'BA1 1AA',
  ],
};

const invalidPostalCodes = {
  expectedResult: false,
  data: [
    'SW1',
    'E1',
    'M11A',
    'B338THX',
    'SW1A 1A@',
    'EC1A !BB',
    'W1A 0A#',
    'CR2-6XH',
    'S 1AA',
    'EEEE 1BB',
    '1234 5AA',
    'AA1A1 A1',
    // ❌ Invalid inward format (must be digit + 2 letters)
    'SW1A AAA',
    'EC1A 11A',
    'W1A A11',
    'SWAA AAA',
    'AA A 1AA',
    '',
    ' ',
    null,
    undefined,
    'SW111A 1AA',
    'EC111 1BB',
    'ABCDE',
    '123 ABC',
    'A1A1A1',
    '1A1 111',
  ],
};

const mobile = createValidationDataObject('mobile', validMobiles, invalidMobiles);
const postalCode = createValidationDataObject('postalCode', validPostalCodes, invalidPostalCodes);

export default { mobile, postalCode };
