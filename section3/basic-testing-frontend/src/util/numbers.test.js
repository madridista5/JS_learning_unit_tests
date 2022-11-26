import {transformToNumber} from './numbers';

it('should yield number value if a numeric string is provided', () => {
    const num = '8';
    const expectedResult = transformToNumber(num);
    expect(expectedResult).toBeTypeOf('number');
});

it('should yield number value if a number of type number is provided', () => {
    const num = 8;
    const expectedResult = transformToNumber(num);
    expect(expectedResult).toBe(Number(num));
});

it('should yield NaN for non-transformable velues', () => {
    const input = 'hello';
    const input2 = {};
    const input3 = ['hej'];
    const input4 = NaN;

    const expectedResult = transformToNumber(input);
    const expectedResult2 = transformToNumber(input2);
    const expectedResult3 = transformToNumber(input3);
    const expectedResult4 = transformToNumber(input4);


    expect(expectedResult).toBeNaN();
    expect(expectedResult2).toBeNaN();
    expect(expectedResult3).toBeNaN();
    expect(expectedResult4).toBeNaN();
});