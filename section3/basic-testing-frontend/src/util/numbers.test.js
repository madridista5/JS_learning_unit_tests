import {transformToNumber, cleanNumbers} from './numbers';

describe('transformToNumber()', () => {
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
});

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const inputArr = ['1', '2', '3'];

        const resultFn = cleanNumbers(inputArr);

        expect(resultFn[0]).toBeTypeOf('number');
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const inputArr = ['2', ''];
        const resultFn = () => cleanNumbers(inputArr);
        expect(resultFn).toThrowError();
    })
});