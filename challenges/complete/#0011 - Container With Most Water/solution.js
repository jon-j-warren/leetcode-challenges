/*
 Runtime: 696 ms, faster than 22.45% of JavaScript online submissions for Container With Most Water.
 Memory Usage: 37.9 MB, less than 52.84% of JavaScript online submissions for Container With Most Water.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    let max = 0;
    for (let i=0; i<height.length-1; i++) {
        for (let j=i+1; j<height.length; j++) {
            max = Math.max(max, Math.min(height[i], height[j]) * (j-i));
        }
    }
    return max;
};

module.exports = { maxArea };

/*
    * Saturday morning and a little hungover, figured I'd start with an easy one.
    * Not sure if it's the hangover or the time complexity of O(n^2), but this solution makes me want to throw up.
    * I'll have to come back to this to optimize it -- faster than 22.45% of solutions is nowhere near good enough.
*/
