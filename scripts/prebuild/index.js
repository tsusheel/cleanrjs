import countryValidationMap from '~/src/utils/validation/country-validation-map.js';
import { country as CT } from '~/src/utils/country.js';

const missing = Object.keys(CT).filter((key) => !(CT[key].key in countryValidationMap));

if (missing.length > 0) {
  console.error(`❌ Missing mappings for countries validations: ${missing.join(', ')}`);
  process.exit(1);
} else {
  console.log('✅ All countries validations are properly mapped.');
}
