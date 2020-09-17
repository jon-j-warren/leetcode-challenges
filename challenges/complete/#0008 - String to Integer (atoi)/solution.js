/*
 Runtime: 88 ms, faster than 93.46% of JavaScript online submissions for String to Integer (atoi).
 Memory Usage: 38.7 MB, less than 56.92% of JavaScript online submissions for String to Integer (atoi).
*/

/**
 * @param {string} str
 * @return {number}
 */
const MAX_UPPER_BOUND = 2147483647;
const MAX_LOWER_BOUND = -2147483648;

const myAtoi = str => {
    str = str.trimStart();
    if ((str.length > 1 && Number.isInteger(parseInt(str.substring(0,2)))) || !isNaN(str[0])) {
        let index = (str[0] === '+' || str[0] === '-') ? 1 : 0;
        while (!isNaN(str[index])) {
            if (index++ === str.length - 1) break;
        }
        const result = parseInt(str.substring(0, index+1));
        if (result > MAX_UPPER_BOUND) return MAX_UPPER_BOUND;
        if (result < MAX_LOWER_BOUND) return MAX_LOWER_BOUND;
        return result;
    }
    return 0;
};

module.exports = { myAtoi };

/*
    * I cherry-picked this one out of order since the acceptance rate for this problem was very low (15.4%) so I
      figured this might be a good challenge, but it was surprisingly trivial.
    * Possibly saved a small amount of time by hardcoding the bounds as constants.
*/
