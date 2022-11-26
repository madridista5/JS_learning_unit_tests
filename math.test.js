const {sum} = require('./math');

it('should yield expected sum of two numbers', () => {
    const num1 = 1;
    const num2 = 2;
    const res = num1 + num2;
    expect(res).toBe(num1 + num2);
});