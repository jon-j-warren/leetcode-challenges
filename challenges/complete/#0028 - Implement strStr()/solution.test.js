const { strStr } = require('./solution');

describe("Implement strStr()", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            'hello',
            'll'
        ];
        const output = 2;
        expect(strStr(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            'aaaaa',
            'bba'
        ];
        const output = -1;
        expect(strStr(...input)).toEqual(output);
    });
});
            