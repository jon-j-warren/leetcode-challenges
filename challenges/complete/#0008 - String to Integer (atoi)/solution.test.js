const { myAtoi } = require('./solution');

describe("String to Integer (atoi)", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = "42";
        const output = 42;
        expect(myAtoi(input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = "   -42";
        const output = -42;
        expect(myAtoi(input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = "4193 with words";
        const output = 4193;
        expect(myAtoi(input)).toEqual(output);
    });

    // Example 4
    test("it should pass Example 4", () => {
        const input = "words and 987";
        const output = 0;
        expect(myAtoi(input)).toEqual(output);
    });

    // Example 5
    test("it should pass Example 5", () => {
        const input = "-91283472332";
        const output = -2147483648;
        expect(myAtoi(input)).toEqual(output);
    });
});
