export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
    if (typeof this._code !== 'string') {
      throw new TypeError('Code must be a string.');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
    if (typeof this._name !== "string") {
      throw new TypeError('Name must be a string.')
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`
  }
}
