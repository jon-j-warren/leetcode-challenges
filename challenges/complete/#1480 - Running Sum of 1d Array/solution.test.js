const { runningSum } = require('./solution');

describe("Running Sum of 1d Array", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [1,2,3,4];
        const output = [1,3,6,10];
        expect(runningSum(input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [1,1,1,1,1];
        const output = [1,2,3,4,5];
        expect(runningSum(input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [3,1,2,10,1];
        const output = [3,4,6,16,17];
        expect(runningSum(input)).toEqual(output);
    });
});
