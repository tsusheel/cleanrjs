import auValidations from '~/src/utils/validation/country-validation/au.js';
import caValidations from '~/src/utils/validation/country-validation/ca.js';
import deValidations from '~/src/utils/validation/country-validation/de.js';
import frValidations from '~/src/utils/validation/country-validation/fr.js';
import gbValidations from '~/src/utils/validation/country-validation/gb.js';
import inValidations from '~/src/utils/validation/country-validation/in.js';
import ruValidations from '~/src/utils/validation/country-validation/ru.js';
import usValidations from '~/src/utils/validation/country-validation/us.js';
import { freezeObject } from '~/src/helpers/freeze-object.js';
import { country as CT } from '~/src/utils/country.js';

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
