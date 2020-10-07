const { defangIPaddr } = require('./solution');

describe("Defanging an IP Address", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            '1.1.1.1'
        ];
        const output = '1[.]1[.]1[.]1';
        expect(defangIPaddr(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [
            '255.100.50.0'
        ];
        const output = '255[.]100[.]50[.]0';
        expect(defangIPaddr(...input)).toEqual(output);
    });
});
            