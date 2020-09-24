/*
    Runtime: 60 ms, faster than 99.49% of JavaScript online submissions for Length of Last Word.
    Memory Usage: 38.5 MB, less than 5.00% of JavaScript online submissions for Length of Last Word.
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => (s.split('').reverse().join('').trimStart() + ' ').indexOf(' ');

module.exports = { lengthOfLastWord };

/*
    * Easy question deserves an easy solution (was able to reduce to a one-liner).
    * Originally had the solution below, but could not get below a 72ms runtime. Decided to rework it and found a much more efficient solution.
*/

/*
const lengthOfLastWord = s => {
    let words = s.split(' ').filter(w => w);
    return words.length > 0 ? words[words.length-1].length : 0;
};
*/
