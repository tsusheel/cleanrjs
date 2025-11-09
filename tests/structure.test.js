import { CleanrSchema, regexObjectSchema } from '~/tests/helpers/structure.js';
import Cleanr from '~/src/index.js';
import defaultRegex from '~/src/utils/regex/validation/index.js';
import regexCountryMap from '~/src/utils/regex/validation/regex-country-map';

test('Library structure matches schema', () => {
  expect(() => CleanrSchema.parse(Cleanr)).not.toThrow();
});

for (const [keyCountry, valueCountryRegex] of Object.entries(regexCountryMap)) {
  const regexObject = { ...defaultRegex, ...valueCountryRegex };
  test(`Validate object structure overrided with country matches schema (${keyCountry})`, () => {
    expect(() => regexObjectSchema.parse(regexObject)).not.toThrow();
  });
}
