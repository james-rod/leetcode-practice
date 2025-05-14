/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0
    let right = x
    let result = 0


    while(left <= right){
        let middle = Math.floor(left + (right - 1)/ 2) 
        if(middle * middle > x){
            right = middle - 1
        } else if(middle * middle < x){
            left = middle + 1
            result = middle
        } else{
            return middle
        }
    }
    return result
};
