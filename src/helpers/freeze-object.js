export function freezeObject(obj) {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === 'object' && value !== null) {
      Object.freeze(value);
    }
  });

  return Object.freeze(obj);
}

export function deepFreezeObject(obj) {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === 'object' && value !== null) {
      Object.freeze(value);
    }
  });

  return Object.freeze(obj);
}
