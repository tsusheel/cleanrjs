import countryValidationMap from '~/src/utils/validation/country-map.js';
import country from '~/src/utils/countries.js';

const missing = Object.keys(country).filter((key) => !(key in countryValidationMap));

if (missing.length > 0) {
  console.error(`❌ Missing mappings for countries regex: ${missing.join(', ')}`);
  process.exit(1);
} else {
  console.log('✅ All countries regex are properly mapped.');
}
