export default class HolbertonClass {
  constructor(size, location) {
    // Type validation for size and location
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    // Assigning to underscore attributes
    this.size = size;
    this.location = location;
  }

  // Getter for size
  get size() {
    return this.size;
  }

  // Getter for location
  get location() {
    return this.location;
  }

  // Implementing valueOf to cast the object to a number (returns size)
  valueOf() {
    return this.size;
  }

  // Implementing toString to cast the object to a string (returns location)
  toString() {
    return this.location;
  }
}
