/*
 Runtime: 6388 ms, faster than 5.03% of JavaScript online submissions for Substring with Concatenation of All Words.
 Memory Usage: 43.1 MB, less than 92.46% of JavaScript online submissions for Substring with Concatenation of All Words.
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
    if (words.some(w => s.indexOf(w) === -1)) return [];
    let result = [];
    let wordLength = words[0].length;
    let i = 0;
    while (i < s.length) {
        if (words.includes(s.substring(i, wordLength+i))) {
            const wordsCopy = [...words];
            let j = i;
            while (wordsCopy.length > 0 && wordsCopy.indexOf(s.substring(j, wordLength+j)) !== -1) {
                wordsCopy.splice(wordsCopy.indexOf(s.substring(j, wordLength+j)), 1);
                j += wordLength;
            }
            if (wordsCopy.length === 0) {
                result.push(i);
            }
        }
        i++;
    }
    return result;
};

module.exports = { findSubstring };

/*
    * Had to crack out the debugger for this one as there was a lot going on.
    * Very unoptimized -- this is actually gross. I'm honestly surprised it didn't time-out.
    * I took a peak at the runtime distribution for this problem - I may actually have the least efficient solution out of anyone who has ever attempted this problem. That's gotta be worth something, right?! I'll have to come back to this one later.
*/
