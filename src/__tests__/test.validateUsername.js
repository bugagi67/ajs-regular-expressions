import Validator from '../js/Validator';

test('validation of entered symbols', () => {
  expect(new Validator().validateUsername('qw-er123t_ykld')).toEqual('Имя соответсвует требованиям');
});

test('validation of entered symbols', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('kdfs4свьм');
  }).toThrow(new Error('Имя может содержатть только латинские буквы,цифры, дефис и нижнее подчеркивание'));
});

test('validation of the number of digits', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('kdfs4444dsd');
  }).toThrow(new Error('Имя может содержать не более 3х цифр подряд'));
});

test('validation of the first symbol entered', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('1kdfs4dsd');
  }).toThrow(new Error('Имя не может начинаться с цифры, нижнего подчеркивания или дефиса'));
});

test('validation of the first symbol entered', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('-kdfs4dsd');
  }).toThrow(new Error('Имя не может начинаться с цифры, нижнего подчеркивания или дефиса'));
});

test('validation of the first symbol entered', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('_kdfs4dsd');
  }).toThrow(new Error('Имя не может начинаться с цифры, нижнего подчеркивания или дефиса'));
});

test('validation of the last entered symbol', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('kdfs4dsd1');
  }).toThrow(new Error('Имя не может заканчиваться на цифру, нижнее подчеркивание или дефис'));
});

test('validation of the last entered symbol', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('kdfs4dsd-');
  }).toThrow(new Error('Имя не может заканчиваться на цифру, нижнее подчеркивание или дефис'));
});

test('validation of the last entered symbol', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('kdfs4dsd_');
  }).toThrow(new Error('Имя не может заканчиваться на цифру, нижнее подчеркивание или дефис'));
});
