const { maxArea } = require('./solution');

describe("Container With Most Water", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [1,8,6,2,5,4,8,3,7]
        ];
        const output = 49;
        expect(maxArea(...input)).toEqual(output);
    });
});
            