class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class QueueLL {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if(this.length) return this.first.value;
        else return null;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if(!this.last) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = this.last.next;
        }

        this.length++;
    }

    dequeue() {
        if(!this.first) return null;
        if(this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.length--;
    }

    toString() {
        let str = `[ `;
        let it = this.first;
        while(it != null) {
            str += `${it.value}, `
            it = it.next;
        }

        str += `]`;

        return str;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const newQ = new QueueLL();

newQ.enqueue('John');
newQ.enqueue('Jane');
newQ.enqueue('Sarvagya');
newQ.enqueue('Aniket');
newQ.enqueue('Aman');

console.log(newQ.toString());

newQ.dequeue();

console.log(newQ.peek());

newQ.dequeue();
newQ.dequeue();

console.log(newQ.toString());