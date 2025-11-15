import auValidations from '~/tests/__mocks__/validation/country-validation/au.js';
import caValidations from '~/tests/__mocks__/validation/country-validation/ca.js';
import deValidations from '~/tests/__mocks__/validation/country-validation/de.js';
import frValidations from '~/tests/__mocks__/validation/country-validation/fr.js';
import gbValidations from '~/tests/__mocks__/validation/country-validation/gb.js';
import inValidations from '~/tests/__mocks__/validation/country-validation/in.js';
import ruValidations from '~/tests/__mocks__/validation/country-validation/ru.js';
import usValidations from '~/tests/__mocks__/validation/country-validation/us.js';

const countryValidationMap = {
  au: auValidations,
  ca: caValidations,
  de: deValidations,
  fr: frValidations,
  gb: gbValidations,
  in: inValidations,
  ru: ruValidations,
  us: usValidations,
};

export default countryValidationMap;
