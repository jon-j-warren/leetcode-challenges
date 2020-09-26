const { mySqrt } = require('./solution');

describe("Sqrt(x)", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            4
        ];
        const output = 2;
        expect(mySqrt(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            8
        ];
        const output = 2;
        expect(mySqrt(...input)).toEqual(output);
    });
});
            