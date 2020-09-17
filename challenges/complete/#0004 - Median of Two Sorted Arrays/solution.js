/*
 Runtime: 124 ms, faster than 91.19% of JavaScript online submissions for Median of Two Sorted Arrays.
 Memory Usage: 41.7 MB, less than 79.22% of JavaScript online submissions for Median of Two Sorted Arrays.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const mergedArray = mergeArrays(nums1, nums2);
    const middleIndex = (mergedArray.length - 1) / 2;
    return (mergedArray[Math.ceil(middleIndex)] + mergedArray[Math.floor(middleIndex)]) / 2;
};

const mergeArrays = (arr1, arr2) => {
    // Cleanest solution (yet not very efficient):
    // return [...arr1, ...arr2].sort((a,b) => a - b);

    const mergedArray = [];
    let arr1_val = arr1.shift();
    let arr2_val = arr2.shift();
    while (arr1_val !== undefined || arr2_val !== undefined) {
        if (arr1_val === undefined || arr2_val <= arr1_val) {
            mergedArray.push(arr2_val);
            arr2_val = arr2.shift();
        } else {
            mergedArray.push(arr1_val);
            arr1_val = arr1.shift();
        }
    }

    return mergedArray;
}

module.exports = { findMedianSortedArrays };

/*
    * Initially was just going to merge the two arrays and re-sort, but figured this was unoptimal since they were
      already sorted.
    * Originally had a much bulkier solution until I realized that performing shift on an empty array returns undefined.
    * It's honestly too bad that 0 is treated as a falsey value, otherwise it could look a little cleaner without
      explicitly checking for undefined.
*/
