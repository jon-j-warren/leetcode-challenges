const { letterCombinations } = require('./solution');

describe("Letter Combinations of a Phone Number", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            "23"
        ];
        const output = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
        expect(letterCombinations(...input).sort((a,b) => a-b)).toEqual(output.sort((a,b) => a-b));
    });
});
