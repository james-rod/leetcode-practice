/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subset = []
    let length = nums.length
    
    function backtracking(curIndex, curSet){
        subset.push([...curSet])

        for(let i = curIndex; i < length; i++){
            curSet.push(nums[i])
            backtracking(i + 1, curSet)
            curSet.pop()
        }
    }
    backtracking(0, [])

    return subset
};
