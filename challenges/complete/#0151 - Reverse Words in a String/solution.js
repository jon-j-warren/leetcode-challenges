/*
 Runtime: 68 ms, faster than 96.49% of JavaScript online submissions for Reverse Words in a String.
 Memory Usage: 37.5 MB, less than 61.91% of JavaScript online submissions for Reverse Words in a String.
*/

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = s => {
    return s.split(' ').filter(w => w).reverse().join(' ');
};

module.exports = { reverseWords };

/*
    * Very clean, very quick -- one of the easiest ones.
    * Not sure if it can get more efficient than this.
*/
