const { shuffle } = require('./solution');

describe("Shuffle the Array", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [2,5,1,3,4,7],
            3
        ];
        const output = [2,3,5,4,1,7];
        expect(shuffle(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            [1,2,3,4,4,3,2,1],
            4
        ];
        const output = [1,4,2,3,3,2,4,1];
        expect(shuffle(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            [1,1,2,2],
            2
        ];
        const output = [1,2,1,2];
        expect(shuffle(...input)).toEqual(output);
    });
});
            