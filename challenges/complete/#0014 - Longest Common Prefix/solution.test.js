const { longestCommonPrefix } = require('./solution');

describe("Longest Common Prefix", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            ["flower","flow","flight"]
        ];
        const output = 'fl';
        expect(longestCommonPrefix(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            ["dog","racecar","car"]
        ];
        const output = '';
        expect(longestCommonPrefix(...input)).toEqual(output);
    });
});
            