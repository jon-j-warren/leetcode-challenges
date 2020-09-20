/*
 Runtime: 64 ms, faster than 97.07% of JavaScript online submissions for Validate IP Address.
 Memory Usage: 36.8 MB, less than 53.17% of JavaScript online submissions for Validate IP Address.
*/

/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = IP => {
    let ipv4 = IP.split('.');
    let ipv6 = IP.split(':');
    if (ipv4.length === 4) {
        return (ipv4.some(sect => 
            parseInt(sect) < 0 ||
            parseInt(sect) > 255 ||
            !/^(0|[1-9][0-9]*)$/.test(sect)
        )) ? 'Neither' : 'IPv4';
    } else if (ipv6.length === 8) {
        return (ipv6.some(sect => 
            sect.length < 1 ||
            sect.length > 4 ||
            !/^[0-9A-Fa-f]{1,4}$/.test(sect)
        )) ? 'Neither' : 'IPv6';
    }
    return 'Neither';
};

module.exports = { validIPAddress };

/*
    * This was fairly easy thanks to regular expressions.
    * I don't think I could optimize this meaningfully anymore.
*/
