/*
 Runtime: 76 ms, faster than 99.62% of JavaScript online submissions for Reverse Integer.
 Memory Usage: 38.5 MB, less than 51.61% of JavaScript online submissions for Reverse Integer.
*/

/**
 * @param {number} x
 * @return {number}
 */

const MAX_UPPER_BOUND = 2147483647;
const MAX_LOWER_BOUND = -2147483648;
const reverse = x => {
    const val = parseInt(`${x < 0 ? '-' : ''}${
        x
        .toString()
        .substring(x < 0 ? 1 : 0)
        .split('')
        .reverse()
        .join('')}`);
    return (val > MAX_UPPER_BOUND || val < MAX_LOWER_BOUND) ? 0 : val;
};

module.exports = { reverse };

/*
    * Decided for as compact as a solution as possible to try and get the quickest runtime.
    * Ugly formatting to try and make the code slightly more readable.
*/
