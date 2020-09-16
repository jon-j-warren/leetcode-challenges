const { twoSum } = require('./solution');

describe("Two Sum", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [2,7,11,15],
            9
        ];
        const output = [0,1];
        expect(twoSum(...input).sort()).toEqual(output.sort());
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            [3,2,4],
            6
        ];
        const output = [1,2];
        expect(twoSum(...input).sort()).toEqual(output.sort());
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            [3,3],
            6
        ];
        const output = [0,1];
        expect(twoSum(...input).sort()).toEqual(output.sort());
    });
});
