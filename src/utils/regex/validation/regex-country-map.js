import auRegex from '~/src/utils/regex/validation/country/au.js';
import caRegex from '~/src/utils/regex/validation/country/ca.js';
import deRegex from '~/src/utils/regex/validation/country/de.js';
import frRegex from '~/src/utils/regex/validation/country/fr.js';
import gbRegex from '~/src/utils/regex/validation/country/gb.js';
import inRegex from '~/src/utils/regex/validation/country/in.js';
import ruRegex from '~/src/utils/regex/validation/country/ru.js';
import usRegex from '~/src/utils/regex/validation/country/us.js';

const regexCountryMap = {
  au: auRegex,
  ca: caRegex,
  de: deRegex,
  fr: frRegex,
  gb: gbRegex,
  in: inRegex,
  ru: ruRegex,
  us: usRegex,
};

export default regexCountryMap;
