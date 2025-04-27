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
