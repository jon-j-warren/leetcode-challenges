/*
 Runtime: 68 ms, faster than 92.73% of JavaScript online submissions for Letter Combinations of a Phone Number.
 Memory Usage: 37.1 MB, less than 5.92% of JavaScript online submissions for Letter Combinations of a Phone Number.
*/

const mappings = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z']
}

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
    if (digits === '') return [];
    let permutations = [...mappings[digits[0]]];
    digits.split('').slice(1).forEach(digit => {
        let permutationsCopy = permutations.slice(0);
        permutations = [];
        permutationsCopy.forEach(permutation => {
            mappings[digit].forEach(letter => permutations.push(permutation + letter));
        });
    });
    return permutations;
};

module.exports = { letterCombinations };

/*
    * Was very surprised that the solution ran so quickly, as permutations can be pretty expensive.
    * Would have had a much cleaner solution if I was using Python with the itertools library, I don't believe
      javascript has an equivalent though (at least not natively).
*/
