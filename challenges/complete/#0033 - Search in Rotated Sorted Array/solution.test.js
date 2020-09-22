const { search } = require('./solution');

describe("Search in Rotated Sorted Array", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [4,5,6,7,0,1,2],
            0
        ];
        const output = 4;
        expect(search(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            [4,5,6,7,0,1,2],
            3
        ];
        const output = -1;
        expect(search(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            [1],
            0
        ];
        const output = -1;
        expect(search(...input)).toEqual(output);
    });
});
