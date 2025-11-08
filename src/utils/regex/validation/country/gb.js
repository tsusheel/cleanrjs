const regex = {
  // ✅ Valid Examples
  // +44 7123 456 789
  // 07123 456 789
  // 07123456789
  // (07123) 456789
  phone: /^(?:\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,

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

export default regex;
