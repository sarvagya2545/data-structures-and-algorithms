class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) 
                    return currentBucket[i][1];
            }
        }

        return undefined
    }

    keys() {
        const keys = [];
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                this.data[i].forEach(dataItem => {
                    keys.push(dataItem[0]);
                })
            }
        }

        return keys;
    }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 1000);
myHashTable.set('apples', 1000);
myHashTable.set('oranges', 1000);
myHashTable.set('bananas', 1000);
myHashTable.set('mangoes', 1000);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());