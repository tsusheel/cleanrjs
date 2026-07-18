import { country as CT } from '~/src/utils/enums/country';
import countryValidationMap from '~/tests/__mocks__/validation/country-validation-map';
import validationKeys from '~/tests/__mocks__/validation';

export function getCompleteValidationDataObject(cnty = CT.IN.key) {
  const validations = { ...validationKeys, ...countryValidationMap[cnty] };

  return validations;
}

export function getCountryOnlyValidationDataObject(cnty = CT.IN.key) {
  const validations = { ...countryValidationMap[cnty] };

  return validations;
}

export function getDefaultValidationDataObject() {
  const validations = { ...validationKeys };

  return validations;
}
