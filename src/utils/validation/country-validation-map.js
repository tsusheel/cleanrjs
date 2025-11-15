import auValidations from '~/src/utils/validation/country-validation/au.js';
import caValidations from '~/src/utils/validation/country-validation/ca.js';
import deValidations from '~/src/utils/validation/country-validation/de.js';
import frValidations from '~/src/utils/validation/country-validation/fr.js';
import gbValidations from '~/src/utils/validation/country-validation/gb.js';
import inValidations from '~/src/utils/validation/country-validation/in.js';
import ruValidations from '~/src/utils/validation/country-validation/ru.js';
import usValidations from '~/src/utils/validation/country-validation/us.js';

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
