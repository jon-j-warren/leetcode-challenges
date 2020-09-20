const { checkPossibility } = require('./solution');

describe("Non-decreasing Array", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            [4,2,3]
        ];
        const output = true;
        expect(checkPossibility(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            [4,2,1]
        ];
        const output = false;
        expect(checkPossibility(...input)).toEqual(output);
    });
});
            