/*
 Runtime: 84 ms, faster than 98.58% of JavaScript online submissions for Reverse Vowels of a String.
 Memory Usage: 42.5 MB, less than 67.10% of JavaScript online submissions for Reverse Vowels of a String.
*/

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = s => {
    const vowels = new Set(['a','A','e','E','i','I','o','O','u','U']);
    const strArr = s.split('');
    const orderedVowels = strArr.filter(c => vowels.has(c));
    for (let i=0; i<strArr.length; i++) {
        if (vowels.has(strArr[i])) strArr[i] = orderedVowels.pop();
    }
    return strArr.join('');
};

module.exports = { reverseVowels };

/*
    * I believe this is O(n), so I can't think of a way off the top of my head to optimize this.
    * Originally had vowels as an array and used vowels.includes to check if character was a vowel, it looks like
      changing to a set decreased the runtime to better than 95%, so I'm happy with that.
*/
