class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Stack using Linked List
class StackLL {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        // if top does not exist
        if(!this.top) return null;

        // temp is the new this.top
        let temp = this.top.next;
        this.top.next = null;
        this.top = temp;
        // OR we can do this:
        // this.top = this.top.next;

        this.length--;
    }

    peek() {
        if(this.length === 0) return null;
        return this.top.val;
    }

    toString() {
        let str = `[`;
        let it = this.top;
        while(it != null) {
            str += ` ${it.val}, `
            it = it.next;
        }

        str += `]`
        return str;
    }
}

// Stack using arrays
class ArrayStack {
    constructor(size) {
        this.data = new Array(size);
        // top is actually the index of the top & the pointer to the top of the stack
        this.top = -1;
        this.size = size;
    }

    push(val) {
        if(this.top > this.size - 1) {
            throw new Error('Stack Overflow');
        }
        this.top++;
        this.data[this.top] = val;
    }

    pop() {
        if(this.top === -1) {
            throw new Error('Stack underflow');
        }

        this.data[this.top] = undefined;
        this.top--;
    }

    peek() {
        if(this.top === -1) 
            return null;

        return this.data[this.top];
    }

    toString() {
        let str = `[`;
        for(let i = 0; i <= this.top; i++) {
            str += ` ${this.data[i]}`;
            if(i != this.top) str += `,`;
        }

        str += ` ]`;
        return str;
    }
}

// Linked List stack
const myStack = new StackLL();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Youtube');
myStack.push('Facebook');
console.log(myStack.peek())
console.log(myStack.toString())

myStack.pop();

console.log(myStack.peek())
console.log(myStack.toString())


// Stack of size 10
const myStack2 = new ArrayStack(10);

myStack2.push('Google');
myStack2.push('Udemy');
myStack2.push('Youtube');
myStack2.push('Facebook');
console.log(myStack2.peek())
console.log(myStack2.toString())

myStack2.pop();

console.log(myStack2.peek())
console.log(myStack2.toString())