const { SubrectangleQueries } = require('./solution');

describe("Subrectangle Queries", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const rect = new SubrectangleQueries([[1,2,1],[4,3,4],[3,2,1],[1,1,1]]);
        expect(rect.getValue(0,2)).toEqual(1);
        rect.updateSubrectangle(0,0,3,2,5);
        expect(rect.getValue(0,2)).toEqual(5);
        rect.updateSubrectangle(3,0,3,2,10);
        expect(rect.getValue(3,1)).toEqual(10);
        expect(rect.getValue(0,2)).toEqual(5);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const rect = new SubrectangleQueries([[1,1,1],[2,2,2],[3,3,3]]);
        expect(rect.getValue(0,0)).toEqual(1);
        rect.updateSubrectangle(0,0,2,2,100);
        expect(rect.getValue(0,0)).toEqual(100);
        expect(rect.getValue(2,2)).toEqual(100);
        rect.updateSubrectangle(1,1,2,2,20);
        expect(rect.getValue(2,2)).toEqual(20);
    });
});
