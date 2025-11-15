const strategies = {
  // ✅ Valid Examples
  // +7 912 345 67 89	    International format
  // +7 (495) 123-45-67	  With parentheses and dashes
  // 8 (800) 555-35-35	  Toll-free format (common inside Russia)
  // 89031234567	        Local mobile style
  // +7-903-123-45-67	    With dashes
  mobile: /^(?:\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/,

  // ✅ Valid Examples
  // 101000	  Moscow
  // 190000	  Saint Petersburg
  // 603000	  Nizhny Novgorod
  // 620000	  Yekaterinburg
  postalCode: /^\d{6}$/,
};

export default strategies;
