/*
 Runtime: 184 ms, faster than 20.83% of JavaScript online submissions for Two Sum.
 Memory Usage: 36.2 MB, less than 99.27% of JavaScript online submissions for Two Sum.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    for (let i=0; i < nums.length; i++) {
        const difference = target - nums[i];
        const foundIndex = nums.indexOf(difference);
        if (foundIndex !== -1 && foundIndex !== i && nums.includes(difference)) {
            return [i, foundIndex];
        }
    }
};

module.exports = { twoSum };

/*
    * Avoided using a forEach loop since I wanted to return the function value from within the loop.
    * Was hoping to covert nums to a set to make use of an O(1) lookup time, but given the constraints, it looks like
      elements can be repeated, which would compromise the solution if the same value appeared more than once.
    * Memory usage was great for this solution but the speed result was rather disappointing. Will have to come back to
      this to attempt a faster solution.
*/
