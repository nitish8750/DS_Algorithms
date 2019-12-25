function binarySearch(arr, number){
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start+end)/2);
    while(arr[middle] !== number && start<=end){
        if(number > arr[middle]) start = middle +1;
        else end = middle - 1;
        middle = Math.floor((start+end)/2);
    }
    return arr[middle] === number ? middle : -1;
}


class Node {
    constructor(){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        } 
        var currentNode = this.root;
        while(true){
            if(value === currentNode.value) return undefined;
            if(value < currentNode.value) {
                if(!currentNode.left){
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left
            } else {
                if(!currentNode.right){
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right
            }
        }
    }
    BFS() {
        var data = [],
        queue = [],
        node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSInOrder(){
        var data = [], node = this.root;
        data.push(node);
        var traverse = function(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(node);
    }
    DFSPreOrder(){
        var data = [];
        var traverse = function(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [], node = this.root;
        var traverse = function(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(node);
    }
}

class Node {
    constructor(){
        this.value = value;
        this.next = next;
    }
}

class SLL {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    get(index){
        if(!index) return null;
        var counter = 0;
        var currentNode = this.head;
        while(counter !== index){
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    insert(index, value){
        var newNode = new Node(value);
        if(index === 0){
            if(!this.head) this.head = newNode;
             else {
                  newNode.next = this.head;
                  this.head = newNode;
                  
                }
                return this;
        } 
        if(index === this.length - 1){
            if(!this.tail) this.tail = newNode;
            else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            return this;
        }
        let newNode = new Node(value);
        let previousNode = this.get(index - 1);
        let nextNode = previousNode.next;
        previousNode.next = newNOde;
        newNode.next = nextNode;
        return this;
    }
    remove(index){
        let previousNode = this.get(index - 1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;

    }
    reverse(){
        var currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        var prev = null;
        var next;
        while(currentNode){
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
    }
}
