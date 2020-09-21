/*
 Runtime: 68 ms, faster than 95.89% of JavaScript online submissions for Remove Element.
 Memory Usage: 36.8 MB, less than 69.15% of JavaScript online submissions for Remove Element.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === val) nums.splice(i--, 1);
    }
    return nums.length;
};

module.exports = { removeElement };

/*
    * I was able to recall the same method I used for challenge 26 (trivial - iterate over array and splice out vals).
*/
