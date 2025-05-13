/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length
    let result = new Array(n)
    let prefix = new Array(n)
    let postfix = new Array(n)

    prefix[0] = 1
    postfix[n - 1] = 1
    for(let i = 1; i < n; i++){
        prefix[i] = nums[i - 1] * prefix[i - 1]
    }

    for(let i = n - 2; i >= 0; i--){
        postfix[i] = nums[i + 1] * postfix[i + 1]
    }

    for(let i = 0; i < n; i++){
        result[i] = prefix[i] * postfix[i]
    }
    return result

};
