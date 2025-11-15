import Cleanr from '~/src/index.js';
import mockDataMap from '~/tests/__mocks__/validation/index.js';
import {
  getCountryOnlyValidationDataObject,
  getDefaultValidationDataObject,
} from '~/tests/helpers/get-validation-data-object';
import country from '~/src/utils/countries';

let validateObj = Cleanr.validate;
const defaultValidation = getDefaultValidationDataObject();
testValidations(defaultValidation, validateObj, 'default');

for (const [code, data] of Object.entries(country)) {
  Cleanr.reinit({ country: data.key });
  validateObj = Cleanr.validate;
  const validations = getCountryOnlyValidationDataObject(data.key);
  testValidations(validations, validateObj, data.value);
}

function testValidations(validations, validate, cnty) {
  describe('Dynamic validation mock imports', () => {
    for (const [validationKey] of Object.entries(validations)) {
      describe(`Validation: "${validationKey}"`, () => {
        const validationObj = validations[validationKey];

        test(`Should import validation data for "${validationKey}"`, () => {
          expect(validationObj).toBeDefined();
          expect(validationObj.name).toBe(validationKey);
        });

        describe('valid cases', () => {
          for (const x of validationObj.valid.data) {
            test(`"${x}" should be valid for "${validationKey}" for "${cnty}"`, () => {
              expect(validate[validationObj.name](x)).toBe(validationObj.valid.expectedResult);
            });
          }
        });

        describe('invalid cases', () => {
          for (const x of validationObj.invalid.data) {
            test(`"${x}" should be invalid for "${validationKey}" for "${cnty}"`, () => {
              expect(validate[validationObj.name](x)).toBe(validationObj.invalid.expectedResult);
            });
          }
        });
      });
    }
  });
}
