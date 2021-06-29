class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = new Map();
    }

    // time complexity: O(1)
    addVertex(node) {
        // add node to the graph
        this.adjacentList.set(node, []);
        this.numberOfNodes++;
    }

    // time complexity: O(1)
    addEdge(node1, node2) {
        // connect the nodes node1 and node2
        this.adjacentList.get(node1).push(node2)
        this.adjacentList.get(node2).push(node1)
    }

    // time complexity: O(n) n -> size of adjacent list
    showConnections() {
        // show all the connections for every node in the graph
        Array.from(this.adjacentList.keys()).forEach(key => {
            console.log(`${key} -> ${this.adjacentList.get(key)}`);
        })
    }

    // time complexity: O(e(node1) + e(node2)) // e(x) => no. of edges of x
    removeEdge(node1, node2) {
        if(this.adjacentList.has(node1)) {
            const filteredArray = this.adjacentList.get(node1).filter(node => node != node2);
            this.adjacentList.set(node1, filteredArray);
        }

        if(this.adjacentList.has(node2)) {
            const filteredArray = this.adjacentList.get(node2).filter(node => node != node1);
            this.adjacentList.set(node2, filteredArray);
        }
    }

    // time complexity: O(no. of edges connected to the particular node)
    removeVertex(node) {
        this.adjacentList.get(node).forEach(connectedNode => {
            this.removeEdge(node, connectedNode);
        })
        this.adjacentList.delete(node);
    }
}

const myGraph = new Graph();

myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);

myGraph.addEdge(2,3);
myGraph.addEdge(1,3);
myGraph.addEdge(1,4);
myGraph.addEdge(2,4);
myGraph.addEdge(4,3);

myGraph.removeEdge(4,3);

myGraph.showConnections();
console.log('-----')
myGraph.removeVertex(4);
myGraph.showConnections();