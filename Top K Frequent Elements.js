/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
*/
var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    
    // Count frequency using Map
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

  /*
  x is an element of the queue (here it’s [num, freq]), and x[1] is the frequency.
  So the queue will prioritize elements based on freq — the smaller the frequency, the higher the "priority" to be dequeued first.
  x[1] = “how many times this number appeared in nums”
  */ 
    const heap = new MinPriorityQueue((x) => x[1]);

    // Add entries to heap
    for (const [num, freq] of freqMap.entries()) {
        heap.enqueue([num, freq]);
        if (heap.size() > k) {
            heap.dequeue();
        }
    }

    const result = [];
    while(heap.size() > 0) {
        const [num, cnt] = heap.dequeue();
        result.push(num);
    }

    return result;

};
