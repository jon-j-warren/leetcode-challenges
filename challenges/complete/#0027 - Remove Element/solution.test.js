const { removeElement } = require('./solution');

describe("Remove Duplicates from Sorted Array", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [3,2,2,3],
            3
        ];
        const output = 2;
        expect(removeElement(...input)).toEqual(output);
        expect(input[0]).toEqual([2,2]);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            [0,1,2,2,3,0,4,2],
            2
        ];
        const output = 5;
        expect(removeElement(...input)).toEqual(output);
        expect(input[0]).toEqual([0,1,3,0,4]);
    });
});
