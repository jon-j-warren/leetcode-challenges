/*
 Runtime: 76 ms, faster than 96.24% of JavaScript online submissions for Shuffle the Array.
 Memory Usage: 40.6 MB, less than 5.88% of JavaScript online submissions for Shuffle the Array.
*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
    const shuffledNums = [];
    for (let i=0; i<n; i++) {
        shuffledNums.push(nums[i], nums[i+n]);
    }
    return shuffledNums;
};

module.exports = { shuffle };

/*
    * Ripping through the easy ones to start off.
    * Time complexity is O(n), I'm satisfied with that.
*/
