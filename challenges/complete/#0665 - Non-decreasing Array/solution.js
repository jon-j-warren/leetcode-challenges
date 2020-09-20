/*
 Runtime: 132 ms, faster than 10.73% of JavaScript online submissions for Non-decreasing Array.
 Memory Usage: 39.5 MB, less than 68.08% of JavaScript online submissions for Non-decreasing Array.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = nums => {
    if (isNonDecreasing(nums)) return true;
    for (let i=0; i<nums.length; i++) {
        let holder = nums[i];
        nums[i] = nums[i+1];
        if (isNonDecreasing(nums, i+1)) return true;
        nums[i] = holder;
    }
    return false;
};

const isNonDecreasing = (nums, startingIndex = 1) => {
    for (let i=1; i<nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            return false;
        }
    }
    return true;
};

module.exports = { checkPossibility };

/*
    * Very inefficient solution. Shouldn't need to check the entire array again (which is why I added startingIndex),
      but even this seems superfluous. Will have to come back to this solution.
*/
