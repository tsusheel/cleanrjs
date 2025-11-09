import auValidations from '~/src/utils/validation/country/au.js';
import caValidations from '~/src/utils/validation/country/ca.js';
import deValidations from '~/src/utils/validation/country/de.js';
import frValidations from '~/src/utils/validation/country/fr.js';
import gbValidations from '~/src/utils/validation/country/gb.js';
import inValidations from '~/src/utils/validation/country/in.js';
import ruValidations from '~/src/utils/validation/country/ru.js';
import usValidations from '~/src/utils/validation/country/us.js';

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
