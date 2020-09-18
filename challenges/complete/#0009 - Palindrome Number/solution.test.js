const { isPalindrome } = require('./solution');

describe("Palindrome Number", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            121
        ];
        const output = true;
        expect(isPalindrome(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            -121
        ];
        const output = false;
        expect(isPalindrome(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            10
        ];
        const output = false;
        expect(isPalindrome(...input)).toEqual(output);
    });
});
            