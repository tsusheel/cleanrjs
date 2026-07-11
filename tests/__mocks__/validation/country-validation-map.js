import auValidations from '~/tests/__mocks__/validation/country-validation/au.js';
import caValidations from '~/tests/__mocks__/validation/country-validation/ca.js';
import deValidations from '~/tests/__mocks__/validation/country-validation/de.js';
import frValidations from '~/tests/__mocks__/validation/country-validation/fr.js';
import gbValidations from '~/tests/__mocks__/validation/country-validation/gb.js';
import inValidations from '~/tests/__mocks__/validation/country-validation/in.js';
import ruValidations from '~/tests/__mocks__/validation/country-validation/ru.js';
import usValidations from '~/tests/__mocks__/validation/country-validation/us.js';
import { country as CT } from '~/src/utils/country';

const countryValidationMap = {
  [CT.AU]: auValidations,
  [CT.CA]: caValidations,
  [CT.DE]: deValidations,
  [CT.FR]: frValidations,
  [CT.GB]: gbValidations,
  [CT.IN]: inValidations,
  [CT.RU]: ruValidations,
  [CT.US]: usValidations,
};

export default countryValidationMap;
