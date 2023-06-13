class Calculator {
  constructor() {
    this.a = null;
    this.b = null;
  }

  setValues(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  divide() {
    if (this.b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return this.a / this.b;
  }

  multiply() {
    return this.a * this.b;
  }
}

module.exports = Calculator;
