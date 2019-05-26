class Node {
    constructor(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return  undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.pre;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead.next = null;
        }
        this.length--;
        return currentHead;
    }
    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNOde;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let currentNode, count ;
        if(index <= this.length / 2){
            count = 0;
            currentNode = this.head;
            while(count !== index){
                currentNode = currentNode.next;
                count++;
            }
        } else {
            count = this.length - 1;
            currentNode = this.tail;
            while(count !== index){
                currentNode = currentNode.prev;
                count--;
            }
        }
        return currentNode;
    }
    set(index, value){
        let selectedNode = this.get(index);
        if(selectedNode !== null){
            selectedNode.value = value;
            return true;
        } 
        return false;
    }
    insert(index, value){
        if(index < 0 || index >= this.length) return null;
        if(index === 0) return !!this.unshift(value);
        if(index === this.length - 1) return !!this.push(value);
        let newNode = new Node(value);
        let previousNode = this.get(index - 1);
        let nextNode = previousNode.next;
        previousNode.next = newNode;
        newNode.prev = previousNode;
        nextNode.prev = newNode;
        newNode.next = nextNode;
        this.length++;
        return this;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();
        let currentNode = this.get(index);
        let beforeNode = currentNode.prev;;
        let afterNode = currentNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        newNode.prev = null;
        newNode.next = null;
        this.length--;
        return this;
    }
}

let list = new DoublyLinkedList('')