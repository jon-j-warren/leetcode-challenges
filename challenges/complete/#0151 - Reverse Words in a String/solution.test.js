const { reverseWords } = require('./solution');

describe("Reverse Words in a String", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            'the sky is blue'
        ];
        const output = 'blue is sky the';
        expect(reverseWords(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            '  hello world!  '
        ];
        const output = 'world! hello';
        expect(reverseWords(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            'a good   example'
        ];
        const output = 'example good a';
        expect(reverseWords(...input)).toEqual(output);
    });
});
            