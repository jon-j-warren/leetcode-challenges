/*
 Runtime: 68 ms, faster than 97.42% of JavaScript online submissions for First Missing Positive.
 Memory Usage: 37.1 MB, less than 47.51% of JavaScript online submissions for First Missing Positive.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = nums => {
    const numSet = new Set(nums);
    let i=0;
    while (numSet.has(++i));
    return i;
};

module.exports = { firstMissingPositive };

/*
    * One of the constraints was that the time complexity had to be O(n).
    * Casting array to set takes O(n), then iterating over the set is O(n) and the set lookup is O(1), which should
      result in a total time complexity of O(n)
    * Completed this one out of order as I heard that my current company uses this question in the interview process
      so I just wanted to see what the deal was.
*/
