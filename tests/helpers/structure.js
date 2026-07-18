import { z } from 'zod';
import pkg from '~/package.json';
import { inputType as IT } from '~/src/utils/enums/input-type.js';

const validationObject = {
  [IT.EMAIL]: z.union([z.instanceof(RegExp), z.function()]),
  [IT.MOBILE]: z.union([z.instanceof(RegExp), z.function()]),
  [IT.PASSWORD]: z.union([z.instanceof(RegExp), z.function()]),
  [IT.USERNAME]: z.union([z.instanceof(RegExp), z.function()]),
  [IT.URL]: z.union([z.instanceof(RegExp), z.function()]),
  [IT.POSTALCODE]: z.union([z.instanceof(RegExp), z.function()]),
  [IT.DATE]: z.union([z.instanceof(RegExp), z.function()]),
  [IT.NUMBER]: z.union([z.instanceof(RegExp), z.function()]),
  [IT.ALPHABET]: z.union([z.instanceof(RegExp), z.function()]),
  [IT.ALPHANUMERIC]: z.union([z.instanceof(RegExp), z.function()]),
};

const validateFunctionsMap = {};

for (const [key, value] of Object.entries(validationObject)) {
  validateFunctionsMap[key] = z.function();
}

const versionSchema = z.object({
  [pkg.name]: z.string(),
  description: z.string(),
  license: z.string(),
});

const validateSchema = z.object(validateFunctionsMap);

// Export schemas
export const validationObjectSchema = z.object(validationObject);

export const CleanrSchema = z.object({
  validate: validateSchema,
  version: versionSchema,
  reinit: z.function(),
  create: z.function(),
});
