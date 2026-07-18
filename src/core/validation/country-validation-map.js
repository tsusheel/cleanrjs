import auValidations from '~/src/core/validation/country-validation/au.js';
import caValidations from '~/src/core/validation/country-validation/ca.js';
import deValidations from '~/src/core/validation/country-validation/de.js';
import frValidations from '~/src/core/validation/country-validation/fr.js';
import gbValidations from '~/src/core/validation/country-validation/gb.js';
import inValidations from '~/src/core/validation/country-validation/in.js';
import ruValidations from '~/src/core/validation/country-validation/ru.js';
import usValidations from '~/src/core/validation/country-validation/us.js';
import { freezeObject } from '~/src/helpers/freeze-object.js';
import { country as CT } from '~/src/utils/enums/country.js';

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

export default freezeObject(countryValidationMap);
