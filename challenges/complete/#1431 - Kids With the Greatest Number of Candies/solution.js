/*
 Runtime: 72 ms, faster than 89.00% of JavaScript online submissions for Kids With the Greatest Number of Candies.
 Memory Usage: 38.7 MB, less than 7.40% of JavaScript online submissions for Kids With the Greatest Number of Candies.
*/
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    const mostCandies = Math.max(...candies);
    return candies.map(kid => kid + extraCandies >= mostCandies);
};

module.exports = { kidsWithCandies };

/*
    * Needed to get back in a rhythm, starting with an easy one.
    * I believe this is a fairly optimal solution, with O(n) time complexity.
*/
