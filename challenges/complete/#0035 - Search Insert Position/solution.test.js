const { searchInsert } = require('./solution');

describe("Search Insert Position", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [1,3,5,6], 5
        ];
        const output = 2;
        expect(searchInsert(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            [1,3,5,6], 2
        ];
        const output = 1;
        expect(searchInsert(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            [1,3,5,6], 7
        ];
        const output = 4;
        expect(searchInsert(...input)).toEqual(output);
    });

    // Example 4
    test("it should pass Example 4", () => {
        const input = [
            [1,3,5,6], 0
        ];
        const output = 0;
        expect(searchInsert(...input)).toEqual(output);
    });
});
            