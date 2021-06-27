class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = new ListNode(val);
        this.tail = this.head;
        this.length = 1;
    }

    append(val) {
        const newNode = new ListNode(val);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(val) {
        const newNode = new ListNode(val);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, val) {
        if(index > this.length) {
            console.log(`Length: ${this.length}, index: ${index}`)
            throw new Error('[LinkedList: insert] Specified index has overflown the current size of the linked list');
        }
        
        if(index < 0) {
            throw new Error('[LinkedList: insert] Specified index cannot be less than zero');
        }


        if(index == 0) return this.prepend(val);

        const newNode = new ListNode(val);
        // get predecessor & successor
        let predecessor = this.traverseToIndex(index - 1);
        let successor = predecessor.next;

        // join newNode to predecessor & successor
        predecessor.next = newNode;
        newNode.prev = predecessor;
        successor.prev = newNode;
        newNode.next = successor;

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

        // get predecessor & successor
        let targetNode = this.traverseToIndex(index);
        let predecessor = targetNode.prev;
        let successor = targetNode.next;

        predecessor.next = successor;
        successor.prev = predecessor;

        targetNode.next = null;
        targetNode.prev = null;

        // delete targetNode;

        this.length--;
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

        if(this.length === 1) return this.head;

        // 3 pointer approach
        let predecessor = null;
        let current = this.head;
        let successor = current.next;

        this.tail = this.head;

        while(current != null) {

            // changing the ptr
            current.next = predecessor;
            if(predecessor != null) predecessor.prev = current;

            // shifting the 3 pointers
            predecessor = current;
            current = successor;
            if(successor != null) successor = successor.next;
        }

        predecessor.prev = null;
        this.head = predecessor;

        return this.head;
    }

    traverseToIndex(index) {
        if(index > this.length / 2) {
            // traverse from the tail ptr
            let it = this.tail;
            let cnt = this.length - 1;
            while(it != null && cnt > index) {
                it = it.prev;
                cnt--;
            }

            return it;
        } else {
            // travese from the head ptr
            let it = this.head;
            let cnt = 0;
            while(it != null && cnt < index) {
                it = it.next;
                cnt++;
            }

            return it;
        }
    }

    toString() {
        let it = this.head;
        let str = `null <-> `;
        while(it != null) {
            str += `${it.val} <-> `;
            it = it.next;
        }

        str += `null`;

        return str;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(0); // null <-> 0 <-> null
myDoublyLinkedList
    .append(3)
    .append(8)
    .append(1)
    .append(12)
    .append(8)
    .prepend(420)
    .insert(0, 7)
    .remove(1)

// before 7, 0, 3, 8, 1, 12, 8
myDoublyLinkedList.reverse(); 

console.log(myDoublyLinkedList.toString());