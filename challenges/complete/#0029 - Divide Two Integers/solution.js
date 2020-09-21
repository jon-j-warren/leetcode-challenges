/*
 Runtime: 3196 ms, faster than 23.95% of JavaScript online submissions for Divide Two Integers.
 Memory Usage: 38.7 MB, less than 21.25% of JavaScript online submissions for Divide Two Integers.
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const MAX_UPPER_LIMIT = 2147483647;
const MAX_LOWER_LIMIT = -2147483648;
const divide = (dividend, divisor) => {
    let answer = 0;
    let isNegative = (divisor < 0 ^ dividend < 0);
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    if (divisor === 1) return adjustAnswer(dividend, isNegative);
    while (divisor <= dividend) {
        answer++;
        dividend -= divisor;
    }
    return adjustAnswer(answer, isNegative);
};

const adjustAnswer = (result, isNegative) => {
    let answer = isNegative ? -result : result;
    if (answer > MAX_UPPER_LIMIT) {
        return MAX_UPPER_LIMIT;
    } else if (answer < MAX_LOWER_LIMIT) {
        return MAX_LOWER_LIMIT;
    }
    return answer;
};

module.exports = { divide };

/*
    * Horribly inefficient solution, but the requirements specifically state that we can't use division, multiplication, nor modulo.
    * Could probably be quicker by splitting the number into each digit and try and divide them individually, but that seems like more work than I'm prepared to do on this challenge right now, will come back to this later.
*/
