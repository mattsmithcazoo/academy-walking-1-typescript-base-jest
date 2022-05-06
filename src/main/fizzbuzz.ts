type FizzBuzz = number | string;

function fizzbuzz(): FizzBuzz[] {
    const output: FizzBuzz[] = [];

    for (let i = 1; i <= 100; i++) {
        output.push(fizzbuzzvalue(i));
    }

    return output;
}

function fizzbuzzvalue(value: number): FizzBuzz {

    if (value % 3 === 0 && value % 5 === 0) {
        return 'FIZZBUZZ'
    }

    if (value % 3 === 0) {
        return 'FIZZ'
    }

    if (value % 5 === 0) {
        return 'BUZZ'
    }

    return value;
}

export { fizzbuzz, fizzbuzzvalue };

