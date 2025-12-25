import { createEnum } from '~/src/helpers/create-enum';

const country = createEnum({
  IN: 'India',
  US: 'United States',
  CA: 'Canada',
  GB: 'United Kingdom',
  AU: 'Australia',
  DE: 'Germany',
  FR: 'France',
  RU: 'Russia',
});

export default country;
