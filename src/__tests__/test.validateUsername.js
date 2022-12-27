import Validator from '../js/Validator';

test('validation of entered symbols', () => {
  expect(Validator.validateUsername('qw-er123t_ykld')).toEqual(
    'Имя соответсвует требованиям',
  );
});

test('validation of entered symbols', () => {
  expect(Validator.validateUsername('kdfs4свьм')).toEqual(
    'Имя может содержатть только латинские буквы,цифры, дефис и нижнее подчеркивание',
  );
});

test('validation of the number of digits', () => {
  expect(Validator.validateUsername('kdfs4444dsd')).toEqual(
    'Имя может содержать не более 3х цифр подряд',
  );
});

test('validation of the first symbol entered', () => {
  expect(Validator.validateUsername('1kdfs4dsd')).toEqual(
    'Имя не может начинаться с цифры, нижнего подчеркивания или дефиса',
  );
});

test('validation of the first symbol entered', () => {
  expect(Validator.validateUsername('-kdfs4dsd')).toEqual(
    'Имя не может начинаться с цифры, нижнего подчеркивания или дефиса',
  );
});

test('validation of the first symbol entered', () => {
  expect(Validator.validateUsername('_kdfs4dsd')).toEqual(
    'Имя не может начинаться с цифры, нижнего подчеркивания или дефиса',
  );
});

test('validation of the last entered symbol', () => {
  expect(Validator.validateUsername('kdfs4dsd1')).toEqual(
    'Имя не может заканчиваться на цифру, нижнее подчеркивание или дефис',
  );
});

test('validation of the last entered symbol', () => {
  expect(Validator.validateUsername('kdfs4dsd-')).toEqual(
    'Имя не может заканчиваться на цифру, нижнее подчеркивание или дефис',
  );
});

test('validation of the last entered symbol', () => {
  expect(Validator.validateUsername('kdfs4dsd_')).toEqual(
    'Имя не может заканчиваться на цифру, нижнее подчеркивание или дефис',
  );
});
