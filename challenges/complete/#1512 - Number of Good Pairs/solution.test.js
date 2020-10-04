const { numIdenticalPairs } = require('./solution');

describe("Number of Good Pairs", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [1,2,3,1,1,3]
        ];
        const output = 4;
        expect(numIdenticalPairs(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            [1,1,1,1]
        ];
        const output = 6;
        expect(numIdenticalPairs(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            [1,2,3]
        ];
        const output = 0;
        expect(numIdenticalPairs(...input)).toEqual(output);
    });
});
            