/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let heap = new MinPriorityQueue()
    for(let num of nums){
        heap.enqueue(num)

        if(heap.size() > k){
            heap.dequeue()
        }
    }

    return heap.front()
};
