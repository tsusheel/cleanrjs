import country from '~/src/utils/countries';
import countryValidationMap from '~/src/utils/validation/country-validation-map';

// This checks if all the keys in the country objects map to the validation object
for (const [code] of Object.entries(country)) {
  test(`Country key "${code}" exists in validation map`, () => {
    expect(Object.keys(countryValidationMap)).toContain(code);
  });
}
