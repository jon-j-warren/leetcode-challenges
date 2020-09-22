/*
 Runtime: 60 ms, faster than 99.87% of JavaScript online submissions for Search in Rotated Sorted Array.
 Memory Usage: 37.5 MB, less than 9.81% of JavaScript online submissions for Search in Rotated Sorted Array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    if (nums.length === 1) return nums[0] === target ? 0 : -1;
    let i = 0;
    while (nums[i] <= nums[++i]);
    const nums2 = nums.splice(i);
    const newNums = [...nums2, ...nums];
    const answer = binarySearch(newNums, target, 0, newNums.length - 1);
    if (answer === -1) return -1;
    return answer < nums2.length ? answer + nums.length : answer - nums2.length;
}

const binarySearch = (nums, target, start, end) => {
    if (target < nums[start] || target > nums[end]) return -1;
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) return middle;
    if (target < nums[middle]) return binarySearch(nums, target, start, middle-1);
    return binarySearch(nums, target, middle+1, end);
}

module.exports = { search };

/*
    * I know we can optimize this by taking advantage of splitting the array up into two arrays at the pivot, but it didn't specifically state that using indexOf was not allowed. I figured that was against the spirit of the question, so I opted for the solution that I assume they were wanting (binary search). I included the indexOf solution below (you can probably guess the entire body of the function already).
    * I was finally able to get the binary search method optimized enough that it ran faster than my indexOf solution (took quite a few runs though).
    * It has admittedly been awhile since university (which would have been the last time I implemented a binary search algorithm), so I had to borrow some notes from here: https://www.geeksforgeeks.org/binary-search-in-javascript
    * Couldn't quite make it to the coveted "faster than 100% of Javascript online submissions", but I figured this is likely as close as I'll get.
*/

/*
const search = (nums, target) => nums.indexOf(target);
*/
