const { lengthOfLongestSubstring } = require('./solution');

describe("Longest Substring Without Repeating Characters", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = "abcabcbb";
        const output = 3;
        expect(lengthOfLongestSubstring(input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = "bbbbb";
        const output = 1;
        expect(lengthOfLongestSubstring(input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = "pwwkew";
        const output = 3;
        expect(lengthOfLongestSubstring(input)).toEqual(output);
    });

    // Example 4
    test("it should pass Example 4", () => {
        const input = "";
        const output = 0;
        expect(lengthOfLongestSubstring(input)).toEqual(output);
    });
});
