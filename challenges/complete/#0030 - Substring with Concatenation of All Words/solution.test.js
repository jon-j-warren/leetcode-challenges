const { findSubstring } = require('./solution');

describe("Substring with Concatenation of All Words", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            "barfoothefoobarman",
            ["foo","bar"]
        ];
        const output = [0,9];
        expect(findSubstring(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            "wordgoodgoodgoodbestword",
            ["word","good","best","word"]
        ];
        const output = [];
        expect(findSubstring(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            "barfoofoobarthefoobarman",
            ["bar","foo","the"]
        ];
        const output = [6,9,12];
        expect(findSubstring(...input)).toEqual(output);
    });
});
            