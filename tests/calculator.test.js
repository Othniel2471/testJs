const Calculator = require('../js/calculator.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two numbers correctly', () => {
    calculator.setValues(5, 2);
    expect(calculator.add()).toBe(7);
  });

  it('should subtract two numbers correctly', () => {
    calculator.setValues(5, 2);
    expect(calculator.subtract()).toBe(3);
  });

  it('should divide two numbers correctly', () => {
    calculator.setValues(10, 2);
    expect(calculator.divide()).toBe(5);
  });

  it('should throw an error when dividing by zero', () => {
    calculator.setValues(10, 0);
    expect(() => calculator.divide()).toThrowError('Division by zero is not allowed.');
  });

  it('should multiply two numbers correctly', () => {
    calculator.setValues(5, 2);
    expect(calculator.multiply()).toBe(10);
  });
});
