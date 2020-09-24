const { lengthOfLastWord } = require('./solution');

describe("Length of Last Word", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            "Hello World"
        ];
        const output = 5;
        expect(lengthOfLastWord(...input)).toEqual(output);
    });
});
            