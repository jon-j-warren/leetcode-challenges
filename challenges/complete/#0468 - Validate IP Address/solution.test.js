const { validIPAddress } = require('./solution');

describe("Validate IP Address", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            "172.16.254.1"
        ];
        const output = 'IPv4';
        expect(validIPAddress(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            "2001:0db8:85a3:0:0:8A2E:0370:7334"
        ];
        const output = 'IPv6';
        expect(validIPAddress(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [
            "256.256.256.256"
        ];
        const output = 'Neither';
        expect(validIPAddress(...input)).toEqual(output);
    });

    // Example 4
    test("it should pass Example 4", () => {
        const input = [
            "2001:0db8:85a3:0:0:8A2E:0370:7334:"
        ];
        const output = 'Neither';
        expect(validIPAddress(...input)).toEqual(output);
    });

    // Example 5
    test("it should pass Example 5", () => {
        const input = [
            "1e1.4.5.6"
        ];
        const output = 'Neither';
        expect(validIPAddress(...input)).toEqual(output);
    });
});
            