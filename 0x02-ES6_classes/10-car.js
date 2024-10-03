export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Method to clone the car
  cloneCar() {
    const CloneCar = this.constructor[Symbol.species] || this.constructor;
    return new CloneCar(this._brand, this._motor, this._color);
  }

  // Overriding Symbol.species to return the correct class when cloning
  static get [Symbol.species]() {
    return this;
  }
}
