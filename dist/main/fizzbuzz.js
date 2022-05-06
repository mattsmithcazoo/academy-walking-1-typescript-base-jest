"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzbuzzvalue = exports.fizzbuzz = void 0;
function fizzbuzz() {
    const output = [];
    for (let i = 1; i <= 100; i++) {
        output.push(fizzbuzzvalue(i));
    }
    return output;
}
exports.fizzbuzz = fizzbuzz;
function fizzbuzzvalue(value) {
    if (value % 3 === 0 && value % 5 === 0) {
        return 'FIZZBUZZ';
    }
    if (value % 3 === 0) {
        return 'FIZZ';
    }
    if (value % 5 === 0) {
        return 'BUZZ';
    }
    return value;
}
exports.fizzbuzzvalue = fizzbuzzvalue;
//# sourceMappingURL=fizzbuzz.js.map