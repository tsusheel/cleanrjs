import { CleanrSchema, validationObjectSchema } from '~/tests/helpers/structure.js';
import Cleanr from '~/src/index.js';
import defaultValidation from '~/src/utils/validation/index.js';
import countryValidationMap from '~/src/utils/validation/country-validation-map';

test('Library structure matches schema', () => {
  expect(() => CleanrSchema.parse(Cleanr)).not.toThrow();
});

for (const [keyCountry, valueCountryRegex] of Object.entries(countryValidationMap)) {
  const validationObject = { ...defaultValidation, ...valueCountryRegex };
  test(`Validate object structure overrided with country matches schema (${keyCountry})`, () => {
    expect(() => validationObjectSchema.parse(validationObject)).not.toThrow();
  });
}
