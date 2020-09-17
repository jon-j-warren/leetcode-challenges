const { firstMissingPositive } = require('./solution');

describe("First Missing Positive", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [1,2,0];
        const output = 3;
        expect(firstMissingPositive(input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [3,4,-1,1];
        const output = 2;
        expect(firstMissingPositive(input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [7,8,9,11,12];
        const output = 1;
        expect(firstMissingPositive(input)).toEqual(output);
    });
});
