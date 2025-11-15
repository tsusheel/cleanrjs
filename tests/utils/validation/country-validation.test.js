import country from '~/src/utils/countries';

describe('Dynamic country validation mock imports', () => {
  for (const [code, obj] of Object.entries(country)) {
    test(`Can dynamically import validation mock for ${obj.value}`, async () => {
      const module = await import(`~/src/utils/validation/country/${code}.js`);
      const dataModule = await import(`~/tests/__mocks__/validation/country/${code}.js`);
      expect(module).toBeDefined();
      expect(dataModule).toBeDefined();

      // Ensure the module exports the expected mock objects
      const { validMobiles, invalidMobiles, validPostalCodes, invalidPostalCodes } = dataModule;

      expect(validMobiles).toBeDefined();
      expect(invalidMobiles).toBeDefined();
      expect(validPostalCodes).toBeDefined();
      expect(invalidPostalCodes).toBeDefined();

      // Check structure of one mock (optional but helpful)
      expect(validMobiles).toEqual(
        expect.objectContaining({
          key: expect.any(String),
          expectedResult: expect.any(Boolean),
          data: expect.any(Array),
        })
      );
    });
  }
});
