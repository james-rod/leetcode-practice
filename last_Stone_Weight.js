/**
 * @param {number[]} stones
 * @return {number}

 Input : stones = [2,7,4,1,8,1]
 */
var lastStoneWeight = function(stones) {
    let maxHeap = new MaxPriorityQueue()

    for(let stone of stones){
        maxHeap.enqueue(stone) // We push all the elements in the Heap
    }

    while(maxHeap.size() > 1){
      // we remove and returns the element with highest priority
        let stone1 = maxHeap.dequeue() // Ex: 8
        let stone2 = maxHeap.dequeue() // Ex: 7

        if(stone1 !== stone2){
            maxHeap.enqueue(stone1 - stone2) // We create a new weight after smashing
        }

    }

    return maxHeap.size() === 1 ? maxHeap.dequeue() : 0 // return if the heap has 1 element, if so returns the element, otherwise return 0
    
};
