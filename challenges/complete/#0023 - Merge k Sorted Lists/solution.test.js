const { mergeKLists, ListNode } = require('./solution');

describe("Merge k Sorted Lists", () => {
    // Example 1
    test("it should pass Example 1", () => {
        const input = [[
            new ListNode(1, new ListNode(4, new ListNode(5))),
            new ListNode(1, new ListNode(3, new ListNode(4))),
            new ListNode(2, new ListNode(6))
        ]];
        const output = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))))));
        expect(mergeKLists(...input)).toEqual(output);
    });

    // Example 2
    test("it should pass Example 2", () => {
        const input = [[
            
        ]];
        const output = null;
        expect(mergeKLists(...input)).toEqual(output);
    });

    // Example 3
    test("it should pass Example 3", () => {
        const input = [[
            null
        ]];
        const output = null;
        expect(mergeKLists(...input)).toEqual(output);
    });
});
            