class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        this.shiftItems(index);
        this.length--;
    }

    shiftItems(index) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
    }
}

const newArray = new MyArray();
newArray.push('You');
newArray.push('are');
newArray.push('not');
newArray.push('worth');
newArray.push('more');
newArray.push('than');
newArray.push('a');
newArray.push('queen');
newArray.push('');
newArray.pop();
newArray.delete(2)
console.log(newArray);