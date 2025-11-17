import createValidationDataObject from '~/tests/helpers/create-validation-data-object';

const validMobiles = {
  expectedResult: true,
  data: [
    '0412345678',
    '0423456789',
    '0430123456',
    '0449876543',
    '0450123456',
    '0466234567',
    '0478123456',
    '0481123456',
    '0499123456',
    '+61 412 345 678',
    '+61 423 456 789',
    '+61-430-123-456',
    '+61 (450) 123 456',
    '0412 345 678',
    '0450-123-456',
    '(04)12 345 678',
  ],
};

const invalidMobiles = {
  expectedResult: false,
  data: [
    // ❌ Too short
    '041234567',
    '04123',
    '04',
    '4',
    '+61 4123',
    '+61412',

    // ❌ Too long
    '041234567890',
    '+61 412 345 678 999',
    '041234567890123',

    // ❌ Wrong prefix (NOT mobile)
    '0212345678', // landline
    '0312345678', // landline
    '0712345678', // no mobile prefixes other than 04
    '0012345678',
    '1300123456', // service number
    '1800123456', // service number

    // ❌ Invalid formatting or grouping
    '(041)2345678',
    '(04)123456789', // too long
    '04)12 345 678',
    '(04 12 345 678', // unbalanced parentheses
    '04--12--345--678',
    '04 12   345  678',

    // ❌ Non-digit characters in number body
    '0412ABC678',
    '+61 41A3 456 789',
    '04!2 345 678',
    '04_12_345_678',

    // ❌ Bad +61 usage
    '+61 04 1234 5678', // +61 should replace 0
    '+61 (04) 12 345 678',
    '+610412345678', // missing space or hyphen is fine, BUT 0 must be dropped
    '61 412 345 678', // missing '+'

    // ❌ Leading zeros missing after normalization
    '412345678', // missing leading 0

    // ❌ Empty or nullish
    '',
    ' ',
    null,
    undefined,
  ],
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
