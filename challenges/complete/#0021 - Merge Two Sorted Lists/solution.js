/*
 Runtime: 80 ms, faster than 94.36% of JavaScript online submissions for Merge Two Sorted Lists.
 Memory Usage: 38.6 MB, less than 63.20% of JavaScript online submissions for Merge Two Sorted Lists.
*/


//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    const returnList = new ListNode();
    let currentList = returnList;
    const vals = [];
    while (l1 || l2) {
        if (l1) {
            vals.push(l1.val);
            l1 = l1.next;
        }
        if (l2) {
            vals.push(l2.val);
            l2 = l2.next;
        }
    };
    if (vals.length === 0) return null;
    vals.sort((a,b) => a - b);
    for (let i=0; i<vals.length; i++) {
        currentList.val = vals[i];
        if (i < vals.length - 1) {
            currentList.next = new ListNode();
            currentList = currentList.next;
        }
    }
    return returnList;
};

module.exports = { mergeTwoLists, ListNode };

/*
    * Very poorly optimized -- was getting late and I just wanted to get it finished.
    * The instructions weren't super clear on this one (if nulls are passed in - how are they supposed to be handled?), took some trial and error to see what they actually wanted.
*/
