import { freezeObject } from '~/src/helpers/freeze-object';
import { inputType as IT } from '~/src/utils/input-type';

const validations = {
  [IT.EMAIL]: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  [IT.MOBILE]: /^\d{10}$/,
  [IT.PASSWORD]: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_\-^])[A-Za-z\d@$!%*?&#_\-^]{8,}$/,
  [IT.USERNAME]: /^[A-Za-z0-9._-]{3,20}(?<![_.])$/,
  [IT.URL]: isValidURL,
  [IT.POSTALCODE]: /^\d{6}$/,
  [IT.DATE]: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
  [IT.NUMBER]: /^\d+$/,
  [IT.ALPHABET]: /^[A-Za-z]+$/,
  [IT.ALPHANUMERIC]: /^[A-Za-z0-9]+$/,
};

export default freezeObject(validations);

function isValidURL(input) {
  if (typeof input !== 'string') return false;

  let url;

  try {
    url = new URL(input);
  } catch {
    return false;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return false;
  }

  const hostname = url.hostname;

  if (hostname === 'localhost') return true;

  const domainRegex = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

  if (!domainRegex.test(hostname)) return false;

  const parts = hostname.split('.');
  const tld = parts[parts.length - 1];

  if (tld.length < 2) return false;

  return true;
}
