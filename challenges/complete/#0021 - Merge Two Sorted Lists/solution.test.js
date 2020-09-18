const { mergeTwoLists, ListNode } = require('./solution');

describe("Merge Two Sorted Lists", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [
            new ListNode(1, new ListNode(2, new ListNode(4))),
            new ListNode(1, new ListNode(3, new ListNode(4)))
        ];
        const output = new ListNode(1, new ListNode(1, new ListNode(2,
            new ListNode(3, new ListNode(4, new ListNode(4))))));
        expect(mergeTwoLists(...input)).toEqual(output);
    });
});
            