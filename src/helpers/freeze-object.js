export function freezeObject(obj) {
  return Object.freeze(obj);
}

export function deepFreezeObject(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  Object.getOwnPropertyNames(obj).forEach((key) => {
    const value = obj[key];

    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      deepFreezeObject(value);
    }
  });

  return Object.freeze(obj);
}
