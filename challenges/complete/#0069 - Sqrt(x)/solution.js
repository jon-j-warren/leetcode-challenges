/*
 Runtime: 128 ms, faster than 19.34% of JavaScript online submissions for Sqrt(x).
 Memory Usage: 40.2 MB, less than 5.06% of JavaScript online submissions for Sqrt(x).
*/

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
    if (x === 0 || x === 1) return x;
    for (let i=2; i<=x; i++) {
        if (i*i === x) return i;
        if (i*i > x) return i-1;
    }
};

module.exports = { mySqrt };

/*
    * I'm a little hungover today so I'll blame that on my less-than-creative solution.
    * Will have to come back to this question as the runtime is unacceptable.
*/
