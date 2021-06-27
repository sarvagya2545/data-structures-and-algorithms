// 10 --> 12 --> 22

// LL basic structure
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 12,
//             next: {
//                 value: 22,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(val) {
        const newNode = new Node(val);

        this.tail.next = newNode;
        this.tail = this.tail.next;
        this.length++;
        return this;
    }

    prepend(val) {
        const newNode = new Node(val);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(val, index) {

        /**
         * Note: Implementation with this.append is possible in case of overflow but I decided to throw an error
         */
        if(index > this.length) {
            console.log(`Length: ${this.length}, index: ${index}`)
            throw new Error('[LinkedList: insert] Specified index has overflown the current size of the linked list');
        }
        
        if(index < 0) {
            throw new Error('[LinkedList: insert] Specified index cannot be less than zero');
        }

        if(index === 0) return this.prepend(val);

        // traverse to index - 1 (just before the target index) to find the future predecessor of our new node
        let predecessor = this.traverseToIndex(index - 1);

        const newNode = new Node(val);
        const successor = predecessor.next;
        newNode.next = successor;
        predecessor.next = newNode;

        this.length++;
    }

    remove(index) {
        if(index > this.length) {
            console.log(`Length: ${this.length}, index: ${index}`)
            throw new Error('[LinkedList: insert] Specified index has overflown the current size of the linked list');
        }
        
        if(index < 0) {
            throw new Error('[LinkedList: insert] Specified index cannot be less than zero');
        }

        let predecessor = this.traverseToIndex(index - 1);
        let target = predecessor.next;
        let successor = target.next;

        predecessor.next = successor;
    }

    reverse() {
        // reverse a linked list.
        // 1 -> 2 -> 3 -> ....
        // curr succ
        // null <- 1 <- 2  <-  3    4 -> 5 -> 6 -> null
        //                         temp succ 
        //                    pre  curr    
        // curr.next = pre;
        // temp = succ;
        // succ = succ.next;
        // pre = curr;
        // curr = temp;
        // 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> null

        // null <- 1 <- 2 <- 3 <- 4 <- 5(pre)  null(curr, succ)

        // 3 pointer approach
        let predecessor = null;
        let current = this.head;
        let successor = current.next;

        this.tail = this.head;

        while(current != null) {

            // changing the ptr
            current.next = predecessor;

            // shifting the 3 pointers
            predecessor = current;
            current = successor;
            if(successor != null) successor = successor.next;
        }

        this.head = predecessor;
    }

    traverseToIndex(index) {
        // it -> iterator
        let it = this.head;
        let cnt = 0;

        // traverse the LL until (index) is reached
        while(cnt < index && it != null) {
            it = it.next;
            cnt++;
        }

        return it;
    }

    printList() {
        let it = this.head;
        let str = ``;

        while(it.next != null) {
            str += `${it.value} --> `;
            it = it.next;
        }

        str += `${it.value} --> null`;

        console.log(str);
    }
}

const myLinkedList = new LinkedList(10); // 10 --> null

// returning 'this' in the append and prepend methods allow for chainable methods
// myLinkedList.append(12).append(22).append(32).prepend(12).append(12);

myLinkedList
    .append(1) // 10 --> 1 --> null
    .append(2) // 10 --> 1 --> 2 --> null
    .append(3) // 10 --> 1 --> 2 --> 3 --> null
    .append(4) // 10 --> 1 --> 2 --> 3 --> 4 --> null

// Throws error
// myLinkedList.insert(7, 6); 
myLinkedList.insert(7, 5); // 10 --> 1 --> 2 --> 3 --> 4 --> 7 --> null

// remove at INDEX and not remove the element
myLinkedList.remove(3); // 10 --> 1 --> 2 --> 4 --> 7 --> null

myLinkedList.reverse();
// BAD WAY OF PRINTING
// console.log(JSON.stringify(myLinkedList, undefined, 2));

let it = myLinkedList.head;
while(it != null) {
    console.log(it.value);
    it = it.next;
}

// GOOD WAY FOR PRINTING
myLinkedList.printList();