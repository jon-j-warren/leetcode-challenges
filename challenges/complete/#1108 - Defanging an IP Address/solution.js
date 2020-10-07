/*
 Runtime: 68 ms, faster than 91.46% of JavaScript online submissions for Defanging an IP Address.
 Memory Usage: 38.7 MB, less than 5.09% of JavaScript online submissions for Defanging an IP Address.
*/

/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = address => address.replace(/\./g, '[.]');

module.exports = { defangIPaddr };

/*
    * A one-liner to do the trick, very simple.
*/
