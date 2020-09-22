/*
 Runtime: 68 ms, faster than 95.82% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 Memory Usage: 38.1 MB, less than 32.32% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
    if (nums.length === 0) return [-1, -1];
    const foundIndex = binarySearch(nums, target, 0, nums.length - 1);
    if (foundIndex === -1) return [-1, -1];
    let startIndex = foundIndex;
    let endIndex = foundIndex;
    while (startIndex >= 0 && nums[--startIndex] === target);
    while (endIndex < nums.length && nums[++endIndex] === target);
    return [startIndex+1, endIndex-1];
};

const binarySearch = (nums, target, start, end) => {
    if (target < nums[start] || target > nums[end]) return -1;
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) return middle;
    if (target < nums[middle]) return binarySearch(nums, target, start, middle-1);
    return binarySearch(nums, target, middle+1, end);
}

module.exports = { searchRange };

/*
    * Was able to reuse the binary search I implemented in challenge 33.
    * Easiest solution is, of course, to use indexOf, but this time, the challenge specifically stated that it wanted
      the solution in O(log n) time complexty (indexOf would be O(n)).
*/
