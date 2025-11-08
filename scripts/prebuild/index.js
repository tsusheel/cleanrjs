import regexCountryMap from '~/src/utils/regex/validation/regex-country-map.js';
import country from '~/src/utils/countries.js';

const missing = Object.keys(country).filter((key) => !(key in regexCountryMap));

if (missing.length > 0) {
  console.error(`❌ Missing mappings for countries regex: ${missing.join(', ')}`);
  process.exit(1);
} else {
  console.log('✅ All countries regex are properly mapped.');
}
