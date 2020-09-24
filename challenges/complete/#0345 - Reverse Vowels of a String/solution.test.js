const { reverseVowels } = require('./solution');

describe("Reverse Vowels of a String", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            'hello'
        ];
        const output = 'holle';
        expect(reverseVowels(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            'leetcode'
        ];
        const output = 'leotcede';
        expect(reverseVowels(...input)).toEqual(output);
    });
});
            