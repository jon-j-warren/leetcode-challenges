const { reverse } = require('./solution');

describe("Reverse Integer", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = 123;
        const output = 321;
        expect(reverse(input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = -123;
        const output = -321;
        expect(reverse(input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = 120;
        const output = 21;
        expect(reverse(input)).toEqual(output);
    });
});
