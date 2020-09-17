const { findMedianSortedArrays } = require('./solution');

describe("Median of Two Sorted Arrays", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [1,3],
            [2]
        ];
        const output = 2.0;
        expect(findMedianSortedArrays(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            [1,2],
            [3,4]
        ];
        const output = 2.5;
        expect(findMedianSortedArrays(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            [0,0],
            [0,0]
        ];
        const output = 0.0;
        expect(findMedianSortedArrays(...input)).toEqual(output);
    });

    // Example 4
    test("it should pass Example 4", () => {
        const input = [
            [],
            [1]
        ];
        const output = 1.0;
        expect(findMedianSortedArrays(...input)).toEqual(output);
    });

    // Example 5
    test("it should pass Example 5", () => {
        const input = [
            [2],
            []
        ];
        const output = 2.0;
        expect(findMedianSortedArrays(...input)).toEqual(output);
    });
});
