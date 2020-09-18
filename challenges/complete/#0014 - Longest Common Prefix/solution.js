/*
 Runtime: 80 ms, faster than 76.33% of JavaScript online submissions for Longest Common Prefix.
 Memory Usage: 38.2 MB, less than 30.73% of JavaScript online submissions for Longest Common Prefix.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    const firstWord = strs.shift();
    if (!firstWord) return '';
    let i;
    for (i=0; i<firstWord.length; i++) {
        if (strs.some(str => !str.startsWith(firstWord.substring(0, i+1)))) break;
    }
    return firstWord.substring(0,i);
};

module.exports = { longestCommonPrefix };

/*
    * Javascript's array methods makes this super easy.
    * Shifted out the first word so that it wouldn't be checked when iterating over the other words to check for the prefix.
    * Originally used the 'every' method instead of 'some', but opted to use some since it might break out of the loop earlier than every since every would have to check every item in the array, while some would stop iterating after meeting the predicate.
*/
