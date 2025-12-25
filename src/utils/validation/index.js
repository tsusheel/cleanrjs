import { freezeObject } from '~/src/helpers/freeze-object';
import { inputType as IT } from '~/src/utils/input-type';

const validations = freezeObject({
  [IT.EMAIL]: /^ [A - Za - z0 -9._ % +-] + @[A - Za - z0 - 9. -] +\.[A - Za - z]{ 2, }$ /,
  [IT.MOBILE]: /^\d{10}$/,
  [IT.PASSWORD]: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_\-^])[A-Za-z\d@$!%*?&#_\-^]{8,}$/,
  [IT.USERNAME]: /^[A-Za-z0-9._-]{3,20}(?<![_.])$/,
  [IT.URL]:
    /^(https?:\/\/)?((localhost(:\d+)?|[a-zA-Z0-9.-]+\.[A-Za-z]{2,}))([\/\w._~:/?#[\]@!$&'()*+,;=-]*)?$/,
  [IT.POSTALCODE]: /^\d{6}$/,
  [IT.DATE]: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
  [IT.NUMBER]: /^\d+$/,
  [IT.ALPHABET]: /^[A-Za-z]+$/,
  [IT.ALPHANUMERIC]: /^[A-Za-z0-9]+$/,
});

export default validations;
