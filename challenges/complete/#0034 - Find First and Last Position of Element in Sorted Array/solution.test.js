const { searchRange } = require('./solution');

describe("Find First and Last Position of Element in Sorted Array", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [5,7,7,8,8,10],
            8
        ];
        const output = [3,4];
        expect(searchRange(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            [5,7,7,8,8,10],
            6
        ];
        const output = [-1,-1];
        expect(searchRange(...input)).toEqual(output);
    });
});
            