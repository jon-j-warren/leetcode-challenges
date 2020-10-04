/*
 Runtime: 68 ms, faster than 95.04% of JavaScript online submissions for Number of Good Pairs.
 Memory Usage: 38.3 MB, less than 11.31% of JavaScript online submissions for Number of Good Pairs.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = nums => {
    let pairs = 0;
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[j] === nums[i]) pairs++;
        }
    }
    return pairs;
};

module.exports = { numIdenticalPairs };

/*
    * Been condo hunting so less time to do challenges, taking on the easy ones for now.
    * Time complexity is O(n^2) but given the nature of the problem, I think this may be close to optimal.
*/
