/*
 Runtime: 272 ms, faster than 28.54% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 Memory Usage: 42.8 MB, less than 45.07% of JavaScript online submissions for Longest Substring Without Repeating Characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    let start = 0;
    let end = 1;
    let longestSubstring = '';
    while (end < s.length + 1) {
        const currentSubstring = s.substring(start, end++);
        if (containsRepeatingCharacters(currentSubstring)) {
            start++;
        } else if (currentSubstring.length > longestSubstring.length) {
            longestSubstring = currentSubstring;
        }
    }
    return longestSubstring.length;
};

const containsRepeatingCharacters = s => {
    return s.length !== (new Set(s.split(''))).size;
}

/*
    * Efficiency wasn't great, but my lunch break was running out of time
    * A better solution might involve starting at the largest substring and working your way backwards
*/
