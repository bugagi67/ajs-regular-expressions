export default class Validator {
  static validateUsername(name) {
    if (!/^[A-za-z0-9-_]+$/.test(name)) {
      return 'Имя может содержатть только латинские буквы,цифры, дефис и нижнее подчеркивание';
    } if (/[0-9]{4,}/.test(name)) {
      return 'Имя может содержать не более 3х цифр подряд';
    } if (/^[\d_-]/.test(name)) {
      return 'Имя не может начинаться с цифры, нижнего подчеркивания или дефиса';
    } if (/[\d_-]$/.test(name)) {
      return 'Имя не может заканчиваться на цифру, нижнее подчеркивание или дефис';
    }
    return 'Имя соответсвует требованиям';
  }
}
