/*
 Runtime: 196 ms, faster than 95.38% of JavaScript online submissions for Palindrome Number.
 Memory Usage: 47.3 MB, less than 15.60% of JavaScript online submissions for Palindrome Number.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
    return x.toString() === x.toString().split('').reverse().join('');
};

module.exports = { isPalindrome };

/*
    * This may possibly be the easiest challenge I've completed yet.
    * There's likely a lot more ways to solve this problem, but this seems optimal.
    * Tried adding a check at the beginning to immediately return false if x < 0, but didn't see any performance improvement.
*/
