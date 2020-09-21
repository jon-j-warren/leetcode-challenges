/*
 Runtime: 92 ms, faster than 69.56% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 Memory Usage: 39.2 MB, less than 52.69% of JavaScript online submissions for Remove Duplicates from Sorted Array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
    let i=0;
    while (++i < nums.length) {
        let j=i-1;
        while (nums[++j] === nums[i-1]);
        nums.splice(i, j - i);
    }
    return nums.length;
};

module.exports = { removeDuplicates };

/*
    * Had a few reworks on this, was able to get from ~400ms to ~100ms.
    * I think my biggest bottleneck here might be the array splice, but I can't come up with a better way without creating a copy of the array / converting to a set.
*/
