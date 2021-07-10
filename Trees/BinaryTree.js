class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value, node = this.root) {
        if(this.root == null) {
            this.root = new BinaryTreeNode(value);
            return
        }
        if(node.value < value) {
            if(node.right) return this.insert(value, node.right);
            node.right = new BinaryTreeNode(value);
        } else {
            if(node.left) return this.insert(value, node.left);
            node.left = new BinaryTreeNode(value);
        }
    }

    lookup(value, node = this.root) {

        if(node.value === value) return node;

        if(node.value > value) {
            if(node.left) return this.lookup(value, node.left);
        } else {
            if(node.right) return this.lookup(value, node.right);
        }

        return null;
    }

    remove(value, node = this.root, parentNode = null) {
        if(!node) return null;
        // if node is not the to be removed 
        if(value > node.value) {
            return this.remove(value, node.right, node);
        } else if(value < node.value) {
            return this.remove(value, node.left, node);
        }
        
        // replace the to be removed node with the node that is just higher than it
        if(!node.left && !node.right) {
            // node is a leaf node
            if(parentNode.left === node) parentNode.left = null;
            if(parentNode.right === node) parentNode.right = null;
        } else if(!node.left || !node.right) {
            // node has 1 child
            let childNode = node.left || node.right;
            if(parentNode.left === node) {
                parentNode.left = childNode;
                return
            }  
            
            if(parentNode.right === node) {
                parentNode.right = childNode;
                return
            }
        } else {
            // node has both the children
            // find the minimum in right subtree
            let [successor, successorParent] = this.findSuccessor(node);
            node.value = successor.value;
            // remove duplicate in the right subtree
            if(successorParent.left === successor) successorParent.left = successor.right;
            if(successorParent.right === successor) successorParent.right = successor.right;
        }
    }

    // find the node containing the next biggest number
    findSuccessor(node) {
        if(!node.right) return [null, node];
        let parent = node;
        let it = node.right;
        while(it.left != null) {
            parent = it;
            it = it.left;
        }

        return [it, parent];
    }

    // Breadth first search
    breadthFirstSearch() {
        let currentNode = this.root;
        let traversedNodes = [];
        let queue = [];
        queue.push(currentNode);

        while(queue.length > 0) {
            currentNode = queue.shift();
            traversedNodes.push(currentNode.value);

            if(currentNode.left) 
                queue.push(currentNode.left)
            if(currentNode.right) 
                queue.push(currentNode.right)
        }

        return traversedNodes;
    }

    // recursive breadth first search
    recBFS(queue = [ this.root ], list = []) {
        if(queue.length === 0) return list;

        let currentNode = queue.shift();
        list.push(currentNode.value);

        if(currentNode.left)
            queue.push(currentNode.left)
        if(currentNode.right)
            queue.push(currentNode.right)

        return this.recBFS(queue, list);
    }

    // Depth first search
    inorder(node = this.root) {
        if(node.left) this.inorder(node.left);
        console.log(node.value);
        if(node.right) this.inorder(node.right);
    }

    preorder(node = this.root) {
        console.log(node.value);
        if(node.left) this.preorder(node.left);
        if(node.right) this.preorder(node.right);
    }

    postorder(node = this.root) {
        if(node.left) this.postorder(node.left);
        if(node.right) this.postorder(node.right);
        console.log(node.value);
    }

    // iterative dfs
    depthFirstSearchIt() {
        let stack = [];
        let result = [];
        let currentNode = this.root;
        stack.push(this.root);

        while(stack.length > 0) {
            currentNode = stack.pop();

            // preorder traversal
            result.push(currentNode.value);
            if(currentNode.right) stack.push(currentNode.right);
            if(currentNode.left) stack.push(currentNode.left);
        }

        return result;
    }
}

const myBST = new BinarySearchTree();

myBST.insert(10);
myBST.insert(11);
myBST.insert(12);
myBST.insert(1);
myBST.insert(4);
myBST.insert(9);
myBST.insert(44);
myBST.insert(46);
myBST.insert(30);

console.log(myBST.lookup(12));
console.log(myBST.lookup(13));
console.log(myBST.lookup(44));

myBST.remove(44);

console.log(myBST.lookup(44));

console.log(JSON.stringify(myBST, undefined, 2));
// console.log(myBST.recBFS());
// console.log(myBST.breadthFirstSearch());
console.log(myBST.inorder());
console.log(myBST.preorder());
console.log(myBST.postorder());
console.log(myBST.depthFirstSearchIt());