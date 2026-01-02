/*
    - if definition is an object, create an enum object with the object's keys as the enum values
    - if definition is an array, create an enum object with the array's values as the enum values
    - throw an error if definition is neither an object nor an array
*/
export function createEnum(definition) {
  const enumObj = Object.create(null);

  if (typeof definition === 'object' && definition !== null && !Array.isArray(definition)) {
    for (const [key, value] of Object.entries(definition)) {
      createEnumObj(enumObj, key, value);
    }
  } else if (Array.isArray(definition)) {
    for (let i = 0; i < definition.length; i++) {
      createEnumObj(enumObj, definition[i], definition[i]);
    }
  } else {
    throw new TypeError('Invalid definition type');
  }

  return Object.freeze(enumObj);
}

// Helper function

function createEnumObj(enumObj, key, value) {
  enumObj[key] = Object.freeze({
    key: key.toLowerCase(),
    value,
    toString() {
      return this.key;
    },
    valueOf() {
      return this.key;
    },
  });
}
