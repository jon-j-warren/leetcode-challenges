/*
 Runtime: 120 ms, faster than 95.06% of JavaScript online submissions for Add Two Numbers.
 Memory Usage: 42.1 MB, less than 81.08% of JavaScript online submissions for Add Two Numbers.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let carry = 0;
    let numString = '';
    while (l1?.next || l2?.next || carry || l1?.val || l2?.val) {
        const val = (l1?.val || 0) + (l2?.val || 0) + carry;
        numString += (val % 10).toString();
        carry = Math.floor(val / 10);
        l1 = l1?.next;
        l2 = l2?.next;
    }
    
    const startingNode = new ListNode();
    let currentNode = startingNode;
    for (let i=0; i<numString.length; i++) {
        currentNode.val = parseInt(numString[i]);
        if (i < numString.length - 1) {
            const nextNode = new ListNode();
            currentNode.next = nextNode;
            currentNode = nextNode;
        }
    }

    return startingNode;
};

/*
    * My first few solutions involved iterating through the values and adding the value * 10^depth, but I quickly
      found out that wouldn't work with large arrays, since JS will convert large integer values to scientific notation
      which results in data loss.
    * Made use of some optional chaining since I realized that the arrays could have different sizes.
    * Earlier attempts had me trying to sum the list values sequentially, but eventually I found it was easier to just
      sum them together and track the varry value.
*/
