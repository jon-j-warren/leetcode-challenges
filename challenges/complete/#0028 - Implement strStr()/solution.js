/*
 Runtime: 56 ms, faster than 99.97% of JavaScript online submissions for Implement strStr().
 Memory Usage: 36.8 MB, less than 79.72% of JavaScript online submissions for Implement strStr().
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => haystack.indexOf(needle);

module.exports = { strStr };

/*
    * This is comically easy -- the question is literally asking us for what the indexOf method already does.
    * We could just iterate through the string manually and check for the substring, but why re-invent the wheel?
*/
