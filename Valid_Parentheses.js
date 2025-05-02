/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let closeToOpen = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for(let c of s){
        if(closeToOpen[c]){
            if(stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]){
                stack.pop()
            } else{
                return false
            }
        } else{
            stack.push(c)
        }
    } 
     return stack.length == 0
};
