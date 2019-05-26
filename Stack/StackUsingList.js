class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class StackUsingList {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = null;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let currentNode = this.first;
            this.first = newNode;
            this.first.next = currentNode;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        let currentNode = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        } 
        this.first = currentNode.next;
        currentNode.next = null;
        this.size--;
        return currentNode.value;
    }
}

let list = new StackUsingList();