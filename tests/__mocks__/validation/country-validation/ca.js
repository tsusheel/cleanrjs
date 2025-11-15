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
    'K1A 0B1',
    'H0H 0H0',
    'M5V 3L9',
    'V6B 1A1',
    'T2A 5H9',
    'R3C 4T3',
    'S7K 3T8',
    'B3K 5X5',
    'E2L 4Z6',
    'A1A 1A1',
  ],
};

const invalidPostalCodes = {
  expectedResult: false,
  data: [
    'K1A',
    'M5V 3',
    'A1A 1A',
    'H0H0H00',
    'A1A1A1A',
    'D1A 1A1',
    'F2B 3C3',
    'I3C 4D4',
    'O4D 5E5',
    'Q5E 6F6',
    'U6F 7G7',
    'W7G 8H8',
    'Z8H 9J9',
    'k1a 0b1',
    'm5v 3l9',
    'M5V_3L9',
    'V6B#1A1',
    'A1A 😀A1',
    'M5V 💀L9',
    '111 111',
    'AAA AAA',
    'A11 AAA',
    '11A A11',
    'A1A 111',
    '111 A1A',
    '',
    ' ',
    null,
    undefined,
  ],
};

const mobile = createValidationDataObject('mobile', validMobiles, invalidMobiles);
const postalCode = createValidationDataObject('postalCode', validPostalCodes, invalidPostalCodes);

export default { mobile, postalCode };
