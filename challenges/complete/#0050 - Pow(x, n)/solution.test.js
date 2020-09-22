const { myPow } = require('./solution');

describe("Pow(x, n)", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            2.00000, 10
        ];
        const output = 1024.00000;
        expect(myPow(...input).toFixed(5)).toEqual(output.toFixed(5));
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            2.10000, 3
        ];
        const output = 9.26100;
        expect(myPow(...input).toFixed(5)).toEqual(output.toFixed(5));
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            2.00000, -2
        ];
        const output = 0.25000;
        expect(myPow(...input).toFixed(5)).toEqual(output.toFixed(5));
    });
});
            