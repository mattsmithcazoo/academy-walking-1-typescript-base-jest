import { fizzbuzz, fizzbuzzvalue } from "../main/fizzbuzz";

describe('Fizzbuzz', function () {
    it('should generate array of length 100', () => {
        expect(fizzbuzz().length).toEqual(100);
    })

    it('should return FIZZ if divisible by 3', () => {
        expect(fizzbuzzvalue(3)).toEqual('FIZZ');
    })

    it('should return BUZZ if divisible by 5', () => {
        expect(fizzbuzzvalue(5)).toEqual('BUZZ');
    })

    it('should return FIZZBUZZ if divisible by 3 & 5', () => {
        expect(fizzbuzzvalue(15)).toEqual('FIZZBUZZ');
    })

    it('should return the value if not divisible by 3 or 5', () => {
        expect(fizzbuzzvalue(1)).toEqual(1);
    })
});
