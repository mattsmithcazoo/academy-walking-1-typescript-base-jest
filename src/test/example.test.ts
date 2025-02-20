import { Example } from "../main/example";

describe('example test', () => {
    it("should give sum of a + b when adding a and b", () => {
        let example: Example = new Example();
        expect(example.add(1, 2)).toBe(3);
    })

    it("should give sum of a - b when subtracting b from a", () => {
        let example: Example = new Example();
        expect(example.subtract(2, 1)).toBe(1);
    })

    it("should give product of a * b", () => {
        let example: Example = new Example();
        expect(example.product(5, 2)).toBe(10);
    })
})
