import countryValidationMap from '~/src/utils/validation/country-validation-map.js';
import country from '~/src/utils/countries.js';

const missing = Object.keys(country).filter((key) => !(key in countryValidationMap));

if (missing.length > 0) {
  console.error(`❌ Missing mappings for countries validations: ${missing.join(', ')}`);
  process.exit(1);
} else {
  console.log('✅ All countries validations are properly mapped.');
}
