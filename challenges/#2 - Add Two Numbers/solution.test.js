const { addTwoNumbers, ListNode } = require('./solution');

describe("Add Two Numbers", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            new ListNode(2, new ListNode(4, new ListNode(3))),
            new ListNode(5, new ListNode(6, new ListNode(4)))
        ];
        const output = new ListNode(7, new ListNode(0, new ListNode(8)));
        expect(addTwoNumbers(...input)).toEqual(output);
    });
});
