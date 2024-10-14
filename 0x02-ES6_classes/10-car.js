export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Getter for brand
  get brand() {
    return this.brand;
  }

  // Getter for motor
  get motor() {
    return this.motor;
  }

  // Getter for color
  get color() {
    return this.color;
  }

  // Method to clone the car
  cloneCar() {
    const CloneCar = this.constructor[Symbol.species] || this.constructor;
    return new CloneCar(this.brand, this.motor, this.color);
  }

  // Overriding Symbol.species to return the correct class when cloning
  static get [Symbol.species]() {
    return this;
  }
}
