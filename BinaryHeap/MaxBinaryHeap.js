class MaxBinaryHeap {
    constructor(){
        this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        let currentElement = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentElement = this.values[parentIdx];
            if(currentElement <= parentElement) break;
            this.values[parentIdx] = currentElement;
            this.values[idx] = parentElement;
            idx = parentIdx;
        }
    }
    remove(){
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
        let element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftElement,rightElement;
            let swap = null;

            if(leftChildIdx < length) {
                leftElement = this.values[leftChildIdx];
                if(element < leftElement){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightElement = this.values[leftChildIdx];
                if((swap === null && element < rightElement) || (swap !== null && leftElement <  rightElement)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(38);
console.log(heap);
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
console.log(heap);
