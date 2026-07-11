import { freezeObject } from '~/src/helpers/freeze-object.js';

const validations = {
  // ✅ Valid Examples
  // +44 7123 456 789
  // 07123 456 789
  // 07123456789
  // (07123) 456789
  mobile: /^(?:44|0)7(?:[1-5789]\d{2}|624)\d{6}$/,

  // ✅ Valid Examples
  // SW1A 1AA → Buckingham Palace
  // EC1A 1BB → London
  // W1A 0AX → BBC HQ
  // M1 1AE → Manchester
  // B33 8TH → Birmingham
  // DN55 1PT → Doncaster
  postalCode:
    /^(GIR\s?0AA|(?:(?:[A-Z]{1,2}\d{1,2})|(?:[A-Z]{1,2}\d[A-Z])|(?:[A-Z]\d{1,2}[A-Z]?))\s?\d[A-Z]{2})$/,
};

export default validations;
