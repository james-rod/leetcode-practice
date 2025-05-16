/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    let result = nums[0]

    while(left <= right){
        if(nums[left] <= nums[right]){
            result = Math.min(nums[left], result)
            break
        }



        let middle = left + Math.floor((right - left) / 2)
        result = Math.min(result, nums[middle])
        if(nums[middle] >= nums[left]){
            left = middle + 1
        } else{
            right = middle - 1
        }
    }

    return result
};
