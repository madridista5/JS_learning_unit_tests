import {validateStringNotEmpty} from './validation';

describe('validateStringNotEmpty', () => {
    it('should throw an error if an empty string is provided.', () => {
        const resFun = () => validateStringNotEmpty('');
        expect(resFun).toThrow('Invalid input - must not be empty.');
    });
    
    it('should throw an error if no value is passed into the function', () => {
        const resFun = () => validateStringNotEmpty();
        expect(resFun).toThrow();
    });
    
    it('should throw an error if a passed value into the function is not a string', () => {
        const resFun = () => validateStringNotEmpty([]);
        const resFun2 = () => validateStringNotEmpty({});
        const resFun3 = () => validateStringNotEmpty(7);
        const resFun4 = () => validateStringNotEmpty(Symbol());
        const resFun5 = () => validateStringNotEmpty(true);
        const resFun6 = () => validateStringNotEmpty(NaN);
        const resFun7 = () => validateStringNotEmpty(null);
        const resFun8 = () => validateStringNotEmpty(undefined);
    
        expect(resFun).toThrow();
        expect(resFun2).toThrow();
        expect(resFun3).toThrow();
        expect(resFun4).toThrow();
        expect(resFun5).toThrow();
        expect(resFun6).toThrow();
        expect(resFun7).toThrow();
        expect(resFun8).toThrow();
    });
});