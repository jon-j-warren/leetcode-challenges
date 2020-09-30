const { kidsWithCandies } = require('./solution');

describe("Kids With the Greatest Number of Candies", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [2,3,5,1,3],
            3
        ];
        const output = [true,true,true,false,true];
        expect(kidsWithCandies(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            [4,2,1,1,2],
            1
        ];
        const output = [true,false,false,false,false];
        expect(kidsWithCandies(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            [12,1,12],
            10
        ];
        const output = [true,false,true];
        expect(kidsWithCandies(...input)).toEqual(output);
    });
});
            