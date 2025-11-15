import Cleanr from '~/src/index.js';
import validations from '~/src/utils/validation';
import mockDataMap from '~/tests/__mocks__/validation/index.js';

const validate = Cleanr.validate;

describe('Dynamic validation mock imports', () => {
  for (const [validationKey] of Object.entries(validations)) {
    describe(`Validation: "${validationKey}"`, () => {
      const validationObj = mockDataMap[validationKey];

      test(`Should import validation data for "${validationKey}"`, () => {
        expect(validationObj).toBeDefined();
        expect(validationObj.name).toBe(validationKey);
      });

      describe('valid cases', () => {
        for (const x of validationObj.valid.data) {
          test(`"${x}" should be valid for "${validationKey}"`, () => {
            expect(validate[validationObj.name](x)).toBe(validationObj.valid.expectedResult);
          });
        }
      });

      describe('invalid cases', () => {
        for (const x of validationObj.invalid.data) {
          test(`"${x}" should be invalid for "${validationKey}"`, () => {
            expect(validate[validationObj.name](x)).toBe(validationObj.invalid.expectedResult);
          });
        }
      });
    });
  }
});
