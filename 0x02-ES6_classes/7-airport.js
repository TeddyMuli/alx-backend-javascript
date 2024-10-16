export default class Airport {
  constructor(name, code) {
    // Type validation for name and code
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    // Assigning to underscore attributes
    this.name = name;
    this.code = code;
  }

  // Getter for name
  get name() {
    return this.name;
  }

  // Getter for code
  get code() {
    return this.code;
  }

  // Override the default toString method to return the airport code
  toString() {
    return this.code;
  }
}
