import { country as CT } from '~/src/utils/enums/country';
import countryValidationMap from '~/src/core/validation/country-validation-map';

// This checks if all the keys in the country objects map to the validation object
for (const [code] of Object.entries(CT)) {
  test(`Country key "${code.toLowerCase()}" exists in validation map`, () => {
    expect(Object.keys(countryValidationMap)).toContain(code.toLowerCase());
  });
}
