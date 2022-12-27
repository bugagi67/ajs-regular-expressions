import Validator from '../js/Validator';

test('validation when validating the correct name', () => {
  const received = Validator.validateUsername('qw-er123t_ykld');
  expect(received).toEqual(
    'Имя соответсвует требованиям',
  );
});

test('validation when checking an incorrect name (Cyrillic)', () => {
  const received = Validator.validateUsername('kdfs4свьм');
  expect(received).toEqual(
    'Имя может содержатть только латинские буквы,цифры, дефис и нижнее подчеркивание',
  );
});

test('validation when entering more than the allowed number of digits', () => {
  const received = Validator.validateUsername('kdfs4444dsd');
  expect(received).toEqual(
    'Имя может содержать не более 3х цифр подряд',
  );
});

test('checking when entering the first digit symbol', () => {
  const received = Validator.validateUsername('1kdfs4dsd');
  expect(received).toEqual(
    'Имя не может начинаться с цифры, нижнего подчеркивания или дефиса',
  );
});

test('checking when entering the first dash symbol', () => {
  const received = Validator.validateUsername('-kdfs4dsd');
  expect(received).toEqual(
    'Имя не может начинаться с цифры, нижнего подчеркивания или дефиса',
  );
});

test('checking when entering the first symbol is an underscore', () => {
  const received = Validator.validateUsername('_kdfs4dsd');
  expect(received).toEqual(
    'Имя не может начинаться с цифры, нижнего подчеркивания или дефиса',
  );
});

test('checking when entering the last digit symbol', () => {
  const received = Validator.validateUsername('kdfs4dsd1');
  expect(received).toEqual(
    'Имя не может заканчиваться на цифру, нижнее подчеркивание или дефис',
  );
});

test('checking when entering the last dash symbol', () => {
  const received = Validator.validateUsername('kdfs4dsd-');
  expect(received).toEqual(
    'Имя не может заканчиваться на цифру, нижнее подчеркивание или дефис',
  );
});

test('the check when entering the last symbol is an underscore', () => {
  const received = Validator.validateUsername('kdfs4dsd_');
  expect(received).toEqual(
    'Имя не может заканчиваться на цифру, нижнее подчеркивание или дефис',
  );
});
