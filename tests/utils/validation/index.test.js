import Cleanr from '~/src/index.js';
import { validEmails, invalidEmails } from '~/tests/__mocks__/data/emails';
import { validMobiles, invalidMobiles } from '~/tests/__mocks__/data/mobiles';
import { validPasswords, invalidPasswords } from '~/tests/__mocks__/data/passwords';
import { validUsernames, invalidUsernames } from '~/tests/__mocks__/data/usernames';
import { validUrls, invalidUrls } from '~/tests/__mocks__/data/urls';
import { validPostalCodes, invalidPostalCodes } from '~/tests/__mocks__/data/postalCodes';
import { validDates, invalidDates } from '~/tests/__mocks__/data/dates';
import { validNumbers, invalidNumbers } from '~/tests/__mocks__/data/numbers';
import { validAlphabets, invalidAlphabets } from '~/tests/__mocks__/data/alphabets';
import { validAlphanumerics, invalidAlphanumerics } from '~/tests/__mocks__/data/alphanumerics';

const testData = [
  validEmails,
  invalidEmails,
  validMobiles,
  invalidMobiles,
  validPasswords,
  invalidPasswords,
  validUsernames,
  invalidUsernames,
  validUrls,
  invalidUrls,
  validPostalCodes,
  invalidPostalCodes,
  validDates,
  invalidDates,
  validNumbers,
  invalidNumbers,
  validAlphabets,
  invalidAlphabets,
  validAlphanumerics,
  invalidAlphanumerics,
];

const validate = Cleanr.validate;

testData.forEach((item) => {
  item.data.forEach((x) => {
    test(`Should validate ${item.key} as ${item.expectedResult ? 'correct' : 'incorrect'} for ${x}`, () => {
      expect(validate[item.key](x)).toBe(item.expectedResult);
    });
  });
});
