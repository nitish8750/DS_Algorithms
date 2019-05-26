class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val, null);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return current;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            counter ++;
            current = current.next;
        }
        return current;
    }
    set(index, value){
        let node = this.get(index);
        if(!node) return false;
        node.value = value;
        return true;
    }
    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length - 1) return !!this.push(value);
        if(index === 0) return !!this.unshift(value);
        let newNode = new Node(value);
        let previousNode = this.get(index - 1);
        let nextNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.shift(value);
        if(index === this.length - 1) return !!this.pop(value);
        let previousNode = this.get(index - 1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }
}

var list = new SingleLinkedList();
list.push('Hello');
list.push('You');
list.push('Me');
list.push('sdf');
list.push('sadf');

console.log(list);