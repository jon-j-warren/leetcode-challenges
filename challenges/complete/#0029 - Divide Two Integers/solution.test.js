const { divide } = require('./solution');

describe("Divide Two Integers", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            10, 3
        ];
        const output = 3;
        expect(divide(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            7, -3
        ];
        const output = -2;
        expect(divide(...input)).toEqual(output);
    });
});
            