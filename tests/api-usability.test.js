import Cleanr from '~/src/index.js';

describe('API Usability & Aliases', () => {
  // Reset cleanr back to default in between tests
  afterEach(() => {
    Cleanr.reinit();
  });

  describe('overrideRegex support in reinit', () => {
    test('supports overrideRegex in reinit and correctly overrides validation', () => {
      Cleanr.reinit({
        overrideRegex: {
          email: /^custom-email-regex$/,
        },
      });
      expect(Cleanr.validate.email('custom-email-regex')).toBe(true);
      expect(Cleanr.validate.email('user@example.com')).toBe(false);
    });
  });

  describe('Isolated instances with Cleanr.create()', () => {
    test('Cleanr.create() returns new isolated validation instance', () => {
      const cleanrUS = Cleanr.create({ country: 'us' });
      const cleanrIN = Cleanr.create({ country: 'in' });

      // US mobile validator
      expect(cleanrUS.validate.mobile('(202) 555-0198')).toBe(true);
      expect(cleanrUS.validate.mobile('+91 98765 43210')).toBe(false);

      // IN mobile validator
      expect(cleanrIN.validate.mobile('+91 98765 43210')).toBe(true);
      expect(cleanrIN.validate.mobile('(202) 555-0198')).toBe(false);
    });

    test('instance reinit does not affect other instances or default instance', () => {
      const cleanr1 = Cleanr.create({ country: 'us' });
      const cleanr2 = Cleanr.create({ country: 'in' });

      cleanr1.reinit({ country: 'in' });

      expect(cleanr1.validate.mobile('+91 98765 43210')).toBe(true);
      expect(cleanr2.validate.mobile('+91 98765 43210')).toBe(true); // unaffected

      // Default instance is unaffected
      Cleanr.reinit({ country: 'us' });
      expect(Cleanr.validate.mobile('+91 98765 43210')).toBe(false);
    });

    test('supports overrideRegex in Cleanr.create()', () => {
      const customCleanr = Cleanr.create({
        overrideRegex: {
          username: /^admin$/,
        },
      });
      expect(customCleanr.validate.username('admin')).toBe(true);
      expect(customCleanr.validate.username('john_doe')).toBe(false);
    });
  });
});
