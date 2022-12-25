export default class Validator {
  validateUsername(name) {
    this.name = name;

    if (!/^[A-za-z0-9-_]+$/.test(name)) {
      throw new Error('Имя может содержатть только латинские буквы,цифры, дефис и нижнее подчеркивание');
    } else if (/[0-9]{4,}/.test(name)) {
      throw new Error('Имя может содержать не более 3х цифр подряд');
    } else if (/^[\d_-]/.test(name)) {
      throw new Error('Имя не может начинаться с цифры, нижнего подчеркивания или дефиса');
    } else if (/[\d_-]$/.test(name)) {
      throw new Error('Имя не может заканчиваться на цифру, нижнее подчеркивание или дефис');
    }
    return 'Имя соответсвует требованиям';
  }
}
