/*
 Runtime: 96 ms, faster than 97.94% of JavaScript online submissions for Merge k Sorted Lists.
 Memory Usage: 41.9 MB, less than 67.00% of JavaScript online submissions for Merge k Sorted Lists.
*/

//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {
    const nums = [];
    lists.forEach(list => {
        while (list) {
            nums.push(list.val);
            list = list.next;
        }
    });
    return arrayToNodeList(nums.sort((a,b) => a - b));
};

const arrayToNodeList = arr => {
    if (arr.length === 0) return null;
    const headNode = new ListNode();
    let currentNode = headNode;
    for (let i=0; i<arr.length; i++) {
        currentNode.val = arr[i];
        if (i < arr.length - 1) {
            currentNode.next = new ListNode();
            currentNode = currentNode.next;
        }
    }
    return headNode;
}

module.exports = { mergeKLists, ListNode };

/*
    * I didn't like my solution since it had me sorting a dataset that was already pre-sorted. I came up with the solution below and for some reason, it resulted on average runtimes of ~500ms. I guess my original solution was more efficient, so I'll be sticking with that.
*/

// Secondary solution (~500ms runtime)
/*
const mergeKLists = lists => {
    const headNode = new ListNode();
    let currentNode = headNode;
    if (!lists.some(list => list)) return null;
    while (lists.some(list => list)) {
        let minValue;
        let chosenList;
        for (let i=0; i<lists.length; i++) {
            if (lists[i] && !(minValue <= lists[i].val)) {
                minValue = lists[i].val;
                chosenList = i;
            }
        }
        currentNode.val = minValue;
        lists[chosenList] = lists[chosenList].next;
        if (lists.some(list => list)) {
            currentNode.next = new ListNode();
            currentNode = currentNode.next;
        }
    }
    return headNode;
}
*/