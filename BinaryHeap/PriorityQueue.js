class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        let currentNode = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentNode = this.values[parentIdx];
            if(currentNode.priority >= parentNode.priority) break;
            this.values[parentIdx] = currentNode;
            this.values[idx] = parentNode;
            idx = parentIdx;
        }
    }
    dequeue(){
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.bubbleDown();
        }
        
        return max;
    }
    bubbleDown(){
        let idx = 0;
        let length = this.values.length;
        let node = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftNode,rightNode;
            let swap = null;

            if(leftChildIdx < length) {
                leftNode = this.values[leftChildIdx];
                if(node.priority > leftNode.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightNode = this.values[leftChildIdx];
                if((swap === null && node.priority > rightNode.priority) || (swap !== null && leftNode.priority > rightNode.priority)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = node;
            idx = swap;
        }
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
console.log(ER);
