# Contains Duplicate Explanation

This is my approach for solving the Contains Duplicate :

- First, we are given an array called nums = [1,2,3,1]. We must find elements within the array to see if there are any duplicates (reapeting) elements. In this example we have two 1's in our nums array, so we should return true. But if we had an array like nums = [1,2,3,4], we have distinct (different) elements so we would return false.
                               
Approach 1 (Brute Soultion):

- We can use a nested for loop which will allow us to iterate through the array nums TWICE. 
- Compare each element until we find the same elements within the array.
- However, this approach is not efficient as the time complexity will be O(n^2) since were iterating through the array TWICE, especially if the number of n (elements) is too big then it will be slow.
                                                                               
Approach 2 (Optimal Soultion):
  
- We can use a hash set which will allow us to iterate through the array nums ONCE.
- We can add our elements inside the hash set, BUT if a certain number already has an element inside the hash set we return true.
- The time complexity will be O(n) linear time since were iterating through the array ONCE. 

## Code Highlights 

## Brute Soultion Time Complexity O(n^2)
```javascript
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}
```

## Optimal Soultion Time Complexity O(n)
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashSet = new Set()
    for(let num of nums){
        if(hashSet.has(num)){
            return true
        }
        hashSet.add(num)
    }
    return false
};
