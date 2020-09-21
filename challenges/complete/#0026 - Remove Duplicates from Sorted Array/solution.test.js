const { removeDuplicates } = require('./solution');

describe("Remove Duplicates from Sorted Array", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [1,1,2]
        ];
        const output = 2;
        expect(removeDuplicates(...input)).toEqual(output);
        expect(...input).toEqual([1,2]);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            [0,0,1,1,1,2,2,3,3,4]
        ];
        const output = 5;
        expect(removeDuplicates(...input)).toEqual(output);
        expect(...input).toEqual([0,1,2,3,4]);
    });
});
            