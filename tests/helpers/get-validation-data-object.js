import country from '~/src/utils/countries';
import countryValidationMap from '~/tests/__mocks__/validation/country-validation-map';
import validationKeys from '~/tests/__mocks__/validation';

export function getCompleteValidationDataObject(cnty = country.in.key) {
  const validations = { ...validationKeys, ...countryValidationMap[cnty] };

  return validations;
}

export function getCountryOnlyValidationDataObject(cnty = country.in.key) {
  const validations = { ...countryValidationMap[cnty] };

  return validations;
}

export function getDefaultValidationDataObject() {
  const validations = { ...validationKeys };

  return validations;
}
