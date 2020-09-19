const { removeNthFromEnd, ListNode } = require('./solution');

describe("Remove Nth Node From End of List", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
            2
        ];
        const output = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))));
        expect(removeNthFromEnd(...input)).toEqual(output);
    });
});
            