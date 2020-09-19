/*
 Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Remove Nth Node From  End of List.
 Memory Usage: 37.3 MB, less than 73.97% of JavaScript online submissions for Remove Nth Node From End of List.
*/


//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    const individualNodes = [];
    let i=0;
    let currentNode = head;
    
    while (currentNode) {
        individualNodes.push(currentNode);
        currentNode = currentNode.next;
        i++;
    }
    if (n === individualNodes.length) return head.next;
    individualNodes[i-1-n].next = n === 1 ? null : individualNodes[i-n+1];
    
    return head;
};

module.exports = { removeNthFromEnd, ListNode };

/*
    * Decided to keep track of individual nodes so I wouldn't have to iterate through the list twice. Since non-primitives are stored by reference in javascript, I was able to update an item from the original list this way.
    * Had to add a check for a specific edge case when you're removing the first element, as my logic didn't seem to support that.
    * This is the first time a submission of mine has ever been faster than 100% of submissions!!
*/
