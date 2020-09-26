/*
 Runtime: 96 ms, faster than 96.61% of JavaScript online submissions for Subrectangle Queries.
 Memory Usage: 44.6 MB, less than 5.25% of JavaScript online submissions for Subrectangle Queries.
*/

/**
 * @param {number[][]} rectangle
 */
class SubrectangleQueries {
    constructor(rectangle) {
        this.rect = rectangle;
    }
    
    updateSubrectangle = (row1, col1, row2, col2, newValue) => {
        for (let i=row1; i<=row2; i++) {
            for (let j=col1; j<=col2; j++) {
                this.rect[i][j] = newValue;
            }
        }
    };
    getValue = (row, col) => this.rect[row][col];
};

module.exports = { SubrectangleQueries };

/*
    * This question had needlessly complex phrasing, but the solution was trivial once I understood what it was asking.
    * Not sure how much more this can be optimized.
*/
