/*
 Runtime: 64 ms, faster than 98.37% of JavaScript online submissions for Search Insert Position.
 Memory Usage: 36.8 MB, less than 62.20% of JavaScript online submissions for Search Insert Position.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => binarySearch(nums, target, 0, nums.length - 1);

const binarySearch = (nums, target, start, end) => {
    if (target < nums[start]) return start;
    if (target > nums[end]) return end+1;
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) return middle;
    if (target < nums[middle]) return binarySearch(nums, target, start, middle-1);
    return binarySearch(nums, target, middle+1, end);
}

module.exports = { searchInsert };

/*
    * Reused binary search function from challenges 33 & 34 to speed this up.
    * Using indexOf would have been much easier, but time complexity would have been O(n) instead of the O(log n) that it is using binary search.
*/
