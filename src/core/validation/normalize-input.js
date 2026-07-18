import { freezeObject } from '~/src/helpers/freeze-object';
import { inputType as IT } from '~/src/utils/enums/input-type';

const normalizerObj = freezeObject({
  [IT.MOBILE]: /[()+\-\s./]/g,
  [IT.URL]: normalizeUrl,
  [IT.POSTALCODE]: /\s+/g,
});

export default function normalizeInput(key, value) {
  if (typeof value !== 'string') return value;
  if (!shouldNormalizeInput(key)) return value;
  return normalizer(key, value);
}

// Helper functions

function shouldNormalizeInput(key) {
  return normalizerObj.hasOwnProperty(key);
}

function normalizer(key, value) {
  value = value.normalize('NFKC').trim();
  if (normalizerObj[key] instanceof RegExp) {
    return value.replace(normalizerObj[key], '');
  } else if (typeof normalizerObj[key] === 'function') {
    return normalizerObj[key](value);
  }
}

// Utility functions

function normalizeUrl(input) {
  let url = input.trim();

  // Add protocol if missing
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(url)) {
    url = 'http://' + url;
  }

  return url;
}
