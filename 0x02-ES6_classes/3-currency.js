export default class Currency {
  constructor(code, name) {
    // Type validation for each attribute
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    // Assigning to underscore attributes
    this.code = code;
    this.name = name;
  }

  // Getter and setter for code
  get code() {
    return this.code;
  }

  set code(value) {
    this.code = value;
    if (typeof this.code !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }
}
