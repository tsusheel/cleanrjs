import { freezeObject } from '~/src/helpers/freeze-object';
import { inputType as IT } from '~/src/utils/input-type';

const normalizeExpr = freezeObject({
  [IT.EMAIL]: /[^\w.]/g,
  [IT.URL]: /[^\w.]/g,
  [IT.POSTALCODE]: /[^\d]/g,
  [IT.DATE]: /[^\d]/g,
  [IT.NUMBER]: /[^\d]/g,
  [IT.ALPHABET]: /[^\w]/g,
  [IT.ALPHANUMERIC]: /[^\w]/g,
});

export default function normalizeInput(value, key) {
  if (value == null) return value;
  if (!shouldNormalizeInput(key)) return value;
  return value.replace(normalizeExpr[key], '');
}

// Helper functions

function shouldNormalizeInput(key) {
  return normalizeExpr.hasOwnProperty(key);
}
