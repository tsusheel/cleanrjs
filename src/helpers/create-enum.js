/*
    - if definition is an object, create an enum object with the object's keys as the enum values
    - if definition is an array, create an enum object with the array's values as the enum values
    - throw an error if definition is neither an object nor an array
*/
export function createEnum(definition) {
  const enumObj = {};

  if (typeof definition == Object) {
    for (const [key, value] of Object.entries(definition)) {
      enumObj[key] = Object.freeze({
        key,
        value,
        toString() {
          return this.key;
        },
        valueOf() {
          return this.key;
        },
      });
    }
  } else if (typeof definition == Array) {
    for (let i = 0; i < definition.length; i++) {
      enumObj[definition[i]] = Object.freeze({
        key: definition[i],
        value: definition[i],
        toString() {
          return this.key;
        },
        valueOf() {
          return this.key;
        },
      });
    }
  } else {
    throw new TypeError('Invalid definition type');
  }

  return Object.freeze(enumObj);
}
