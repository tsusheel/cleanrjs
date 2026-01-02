import { freezeObject } from '~/src/helpers/freeze-object';
import { inputType as IT } from '~/src/utils/input-type';

const normalizerObj = freezeObject({
  [IT.MOBILE]: /[()\-\s]/g,
  [IT.URL]: normalizeUrl,
  [IT.POSTALCODE]: /\s+/g,
});

export default function normalizeInput(key, value) {
  if (value == null) return value;
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
  if (typeof input !== 'string') return null;

  let url;

  try {
    url = new URL(input.trim());
  } catch {
    return null; // invalid URL
  }

  // 1️⃣ Protocol & hostname are case-insensitive
  url.protocol = url.protocol.toLowerCase();
  url.hostname = url.hostname.toLowerCase();

  // 2️⃣ Remove default ports
  if (
    (url.protocol === 'http:' && url.port === '80') ||
    (url.protocol === 'https:' && url.port === '443')
  ) {
    url.port = '';
  }

  // 3️⃣ Normalize pathname
  url.pathname = decodeURI(url.pathname)
    .replace(/\/{2,}/g, '/') // collapse multiple slashes
    .replace(/\/$/, ''); // remove trailing slash

  // 4️⃣ Sort query parameters
  const params = [...url.searchParams.entries()].sort(([a], [b]) => a.localeCompare(b));

  url.search = new URLSearchParams(params).toString() ? `?${new URLSearchParams(params)}` : '';

  // 5️⃣ Remove fragment/hash
  url.hash = '';

  return url.toString();
}
