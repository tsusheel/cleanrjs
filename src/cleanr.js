(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.Cleanr = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const Cleanr = {
    mask(value, pattern) {
      let i = 0;
      return pattern.replace(/#/g, _ => value[i++] || '');
    },

    validate(value, regex) {
      return regex.test(value);
    },

    validators: {
      email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      phone: value => /^\d{10}$/.test(value),
    },
  };

  return Cleanr;
}));
