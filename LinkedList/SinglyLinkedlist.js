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
    push(value){
        let newNode = new Node(value, null);
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
    unshift(value){
        let newNode = new Node(value);
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
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }
      removeNthFromEnd(A, B){        
        var count =0;
        var head = A;
        while(head){
            count++;
            head = head.next;
        }
        var removeIndex = count - B;
        var currentIndex = 0;
        var  currentNode = A, prev = currentNode;
        if(!currentNode) return null;
        else if (removeIndex <= 1) return A.next;
        else {
            while(currentNode){
                if(currentIndex === removeIndex){
                        prev.next = currentNode.next;
                        return A;
                }
                currentIndex++;
                prev = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
    mergeTwoLists(l1, l2) {
        var list = new ListNode(null);
        var currentNode = list;
        while(l1 && l2){
           if(l1.value > l2.value){
                currentNode.next = new ListNode(l2.value);
                l2 = l2.next;
                currentNode = currentNode.next;
           }
            else if(l1.value < l2.value){
               currentNode.next = new ListNode(l1.value);
               l1 = l1.next;
               currentNode = currentNode.next;
           }
            else if(l1.value == l2.value){
                currentNode.next = new ListNode(l1.value);
                currentNode = currentNode.next;
                currentNode.next = new ListNode(l2.value);
                currentNode = currentNode.next;
                l1 = l1.next;
                l2 = l2.next;
           }
        }
        
        while(l1){
            currentNode.next = new ListNode(l1.value);
            l1 = l1.next;
            currentNode = currentNode.next;
        }
        while(l2){
            currentNode.next = new ListNode(l2.value);
            l2 = l2.next;
            currentNode = currentNode.next;
        }
        return list.next;
    };    
}

var list1 = new SinglyLinkedList();
list1.push(1);
list1.push(2);
list1.push(4);
var list2 = new SinglyLinkedList();
list2.push(1);
list2.push(3);
list2.push(4);
var list = new SinglyLinkedList();


console.log(list.mergeTwoLists(list1.head, list2.head));
