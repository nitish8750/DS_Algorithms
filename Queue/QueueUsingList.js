class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class QueueUsingList {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = null;
    }
    enqueue(value){
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return undefined;
        
        let currentNode = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return currentNode.value;
    }
}

let list = new QueueUsingList();