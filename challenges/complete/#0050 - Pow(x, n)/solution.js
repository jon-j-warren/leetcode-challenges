/*
 Runtime: 72 ms, faster than 93.99% of JavaScript online submissions for Pow(x, n).
 Memory Usage: 37.2 MB, less than 40.84% of JavaScript online submissions for Pow(x, n).
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
    if (x === 1 || n === 0) return 1;
    if (x === -1) return n % 2 === 0 ? 1 : -1;
    let result = 1;
    for (let i=0; i<Math.abs(n); i++) {
        result = n < 0 ? result / x : result * x;
        if (result === 0) return 0;
    } 
    return result;
};

module.exports = { myPow };

/*
    * Was timing out for when n was a crazy large negative number, so implemented a check for 0 in the for loop (answers tending towards zero will eventually get rounded to 0).
    * Probably goes without saying, but my assumption was that using Math.pow would be cheating.
*/
