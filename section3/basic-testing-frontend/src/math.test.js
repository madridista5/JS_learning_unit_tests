import { ECDH } from "crypto";
import { add } from "./math";

it('should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2];

    // Act
    const res = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);
    expect(res).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
    const inputs = ['invalid', 1];

    const res = add(inputs);

    expect(res).toBeNaN();
});

it('should yeild a correct sum in an array of numeric string values is provided', () => {
    const numbers = ['1', '2', '3'];
    const res = add(numbers);
    const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0);
    expect(res).toBe(expectedResult);
});

it('should yield 0 when an empty array is provided', () => {
    const numbers = [];
    const res = add(numbers);
    expect(res).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
        add();
    }
    expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;
    const resultFn = () => add(num1, num2);
    expect(resultFn).toThrow(/is not iterable/);
});