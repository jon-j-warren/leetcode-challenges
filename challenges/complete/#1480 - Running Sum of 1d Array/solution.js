/*
 Runtime: 76 ms, faster than 78.09% of JavaScript online submissions for Running Sum of 1d Array.
 Memory Usage: 37.3 MB, less than 26.64% of JavaScript online submissions for Running Sum of 1d Array.
*/

const runningSum = nums => {
    return nums.reduce((arr, currentVal) => {
        arr.push((arr[arr.length-1] || 0) + currentVal);
        return arr;
    }, []);
};

module.exports = { runningSum }

/*
    * This problem had the highest percentage of completion for non-premium questions, so I knew it'd be trivial.
    * Not sure how much more efficient this can get since the solution is already pretty compact.
*/
