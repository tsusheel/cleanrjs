import { createEnum } from '~/src/helpers/create-enum.js';
import { freezeObject, deepFreezeObject } from '~/src/helpers/freeze-object.js';
import { camelToKebab, kebabToCamel } from '~/src/helpers/string-case-change.js';

describe('Helper: createEnum', () => {
  test('Creates an enum from an object definition', () => {
    const enumObj = createEnum({
      FIRST_KEY: 'firstValue',
      SECOND_KEY: 'secondValue',
    });

    expect(enumObj.FIRST_KEY).toBeDefined();
    expect(enumObj.FIRST_KEY.key).toBe('first_key');
    expect(enumObj.FIRST_KEY.value).toBe('firstValue');
    expect(enumObj.FIRST_KEY.toString()).toBe('first_key');
    expect(enumObj.FIRST_KEY.valueOf()).toBe('first_key');
    expect(Object.isFrozen(enumObj)).toBe(true);
    expect(Object.isFrozen(enumObj.FIRST_KEY)).toBe(true);
  });

  test('Creates an enum from an array definition', () => {
    const enumObj = createEnum(['FIRST_KEY', 'SECOND_KEY']);

    expect(enumObj.FIRST_KEY).toBeDefined();
    expect(enumObj.FIRST_KEY.key).toBe('first_key');
    expect(enumObj.FIRST_KEY.value).toBe('FIRST_KEY');
    expect(enumObj.FIRST_KEY.toString()).toBe('first_key');
    expect(enumObj.FIRST_KEY.valueOf()).toBe('first_key');
    expect(Object.isFrozen(enumObj)).toBe(true);
    expect(Object.isFrozen(enumObj.FIRST_KEY)).toBe(true);
  });

  test('Throws a TypeError for invalid definition types', () => {
    expect(() => createEnum(null)).toThrow(TypeError);
    expect(() => createEnum(undefined)).toThrow(TypeError);
    expect(() => createEnum(123)).toThrow(TypeError);
    expect(() => createEnum('string')).toThrow(TypeError);
  });
});

describe('Helper: freezeObject & deepFreezeObject', () => {
  test('freezeObject freezes the object', () => {
    const obj = { a: 1 };
    const frozen = freezeObject(obj);
    expect(frozen).toBe(obj);
    expect(Object.isFrozen(frozen)).toBe(true);
  });

  test('deepFreezeObject returns early for non-objects', () => {
    expect(deepFreezeObject(null)).toBeNull();
    expect(deepFreezeObject(undefined)).toBeUndefined();
    expect(deepFreezeObject(123)).toBe(123);
    expect(deepFreezeObject('test')).toBe('test');
    expect(deepFreezeObject(true)).toBe(true);
  });

  test('deepFreezeObject deeply freezes nested objects', () => {
    const obj = {
      a: {
        b: {
          c: 1,
        },
      },
    };
    const frozen = deepFreezeObject(obj);
    expect(Object.isFrozen(frozen)).toBe(true);
    expect(Object.isFrozen(frozen.a)).toBe(true);
    expect(Object.isFrozen(frozen.a.b)).toBe(true);
  });
});

describe('Helper: string-case-change', () => {
  test('camelToKebab converts camelCase to kebab-case', () => {
    expect(camelToKebab('camelCase')).toBe('camel-case');
    expect(camelToKebab('anotherOne')).toBe('another-one');
    expect(camelToKebab('test')).toBe('test');
  });

  test('kebabToCamel converts kebab-case to camelCase', () => {
    expect(kebabToCamel('kebab-case')).toBe('kebabCase');
    expect(kebabToCamel('another-one')).toBe('anotherOne');
    expect(kebabToCamel('test')).toBe('test');
  });
});
